#!/usr/bin/env node

const fs = require('fs');

const files = process.argv.slice(2);
if (files.length === 0) {
    console.error('使い方: node scripts/format_html.js <HTMLファイル> [HTMLファイル...]');
    process.exit(1);
}

const containers = [
    'html', 'head', 'body', 'div', 'p', 'a', 'ul', 'ol', 'li', 'table', 'thead',
    'tbody', 'tfoot', 'tr', 'svg', 'defs', 'marker', 'clipPath', 'g', 'script'
];

function normalizePromptContent(content) {
    return content
        .split(/\r?\n/)
        .map((line) => line.trim())
        .join('\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function protectPromptContents(source) {
    const prompts = [];
    const html = source.replace(
        /(<div\b[^>]*class=["'][^"']*\bprompt-content\b[^"']*["'][^>]*>)([\s\S]*?)(<\/div>)/gi,
        (match, openingTag, content, closingTag) => {
            const token = `__PROMPT_CONTENT_${prompts.length}__`;
            prompts.push({ token, content: normalizePromptContent(content) });
            return `${openingTag}${token}${closingTag}`;
        }
    );

    return { html, prompts };
}

function formatHTML(source) {
    const { html, prompts } = protectPromptContents(source);
    const lines = html
        .replace(/>\s*</g, '>\n<')
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);

    let depth = 0;
    const output = [];

    for (const line of lines) {
        const closingAtStart = containers.some((tag) => new RegExp(`^</${tag}\\b`, 'i').test(line));
        if (closingAtStart) depth = Math.max(0, depth - 1);

        output.push(`${'    '.repeat(depth)}${line}`);

        let opens = 0;
        let closes = 0;
        for (const tag of containers) {
            opens += (line.match(new RegExp(`<${tag}\\b`, 'gi')) || []).length;
            closes += (line.match(new RegExp(`</${tag}\\b`, 'gi')) || []).length;
        }
        if (closingAtStart) closes -= 1;
        depth = Math.max(0, depth + opens - closes);
    }

    let formatted = `${output.join('\n')}\n`
        .replace(/<i([^>]*)>\n\s*<\/i>/g, '<i$1></i>')
        .replace(/<br>\n\s*<span class="title-edition-label">/g, '<br><span class="title-edition-label">');

    for (const prompt of prompts) {
        formatted = formatted.replace(prompt.token, prompt.content);
    }

    return formatted;
}

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.error(`HTMLファイルが見つかりません: ${file}`);
        process.exitCode = 1;
        continue;
    }

    const source = fs.readFileSync(file, 'utf8');
    const formatted = formatHTML(source);

    if (source.replace(/\s/g, '') !== formatted.replace(/\s/g, '')) {
        console.error(`空白以外の差分を検出したため整形を中止しました: ${file}`);
        process.exitCode = 1;
        continue;
    }

    fs.writeFileSync(file, formatted);
    console.log(`整形完了: ${file}`);
}
