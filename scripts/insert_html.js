#!/usr/bin/env node

/**
 * insert_html.js
 * 生成されたHTMLを雛形HTMLの所定の位置に自動挿入する
 * 
 * 使い方:
 *   node scripts/insert_html.js <雛形HTMLパス> <生成HTMLファイル or 標準入力>
 * 
 * 例:
 *   node scripts/insert_html.js master_slide/themes_new/014-1_theory.html generated_output.html
 *   echo "<div>...</div><script>...</script>" | node scripts/insert_html.js master_slide/themes_new/014-1_theory.html
 */

const fs = require('fs');
const path = require('path');

// --- 引数処理 ---
const templatePath = process.argv[2];
const inputPath = process.argv[3]; // optional: ファイルパス。なければ標準入力

if (!templatePath) {
    console.error('❌ 使い方: node scripts/insert_html.js <雛形HTMLパス> [生成HTMLファイル]');
    process.exit(1);
}

if (!fs.existsSync(templatePath)) {
    console.error(`❌ 雛形HTMLが見つかりません: ${templatePath}`);
    process.exit(1);
}

/**
 * 生成されたHTMLをスライド部分とスクリプト部分に分離する
 */
function splitGeneratedHTML(html) {
    // <script> タグを探す（クイズデータ用）
    // slide-template.js の <script> は除外するため、const questions を含むものだけ抽出
    const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
    let quizScript = '';
    let slides = html;

    let match;
    while ((match = scriptRegex.exec(html)) !== null) {
        const scriptContent = match[1].trim();
        // クイズデータを含む script タグを判定
        if (scriptContent.includes('const questions') || 
            scriptContent.includes('questions =') ||
            scriptContent.includes('copyPrompt')) {
            quizScript += scriptContent + '\n';
        }
    }

    // script タグをスライド部分から除去
    slides = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').trim();

    return { slides, quizScript: quizScript.trim() };
}

/**
 * 雛形HTMLに生成コンテンツを挿入する
 */
function insertIntoTemplate(templateHTML, slides, quizScript) {
    let result = templateHTML;

    // 1. スライド部分を挿入
    // "<!-- AIが生成するスライドをここに貼り付け -->" を置換
    const slideMarker = '<!-- AIが生成するスライドをここに貼り付け -->';
    if (result.includes(slideMarker)) {
        result = result.replace(slideMarker, slides + '\n\n');
    } else {
        console.warn('⚠️ スライド挿入マーカーが見つかりません。presentation-wrapper の先頭に挿入します。');
        result = result.replace(
            '<div id="presentation-wrapper">',
            '<div id="presentation-wrapper">\n' + slides + '\n'
        );
    }

    // 2. クイズスクリプトを挿入
    // "// AIが生成するクイズデータをここに貼り付け" を置換
    const quizMarker = '// AIが生成するクイズデータをここに貼り付け';
    if (quizScript && result.includes(quizMarker)) {
        result = result.replace(quizMarker, quizScript);
    } else if (quizScript) {
        console.warn('⚠️ クイズ挿入マーカーが見つかりません。最初の <script> タグ内に挿入します。');
        result = result.replace(
            '<script>\n',
            '<script>\n' + quizScript + '\n'
        );
    }

    return result;
}

// --- メイン処理 ---
async function main() {
    let generatedHTML;

    if (inputPath) {
        // ファイルから読み込み
        if (!fs.existsSync(inputPath)) {
            console.error(`❌ 生成HTMLファイルが見つかりません: ${inputPath}`);
            process.exit(1);
        }
        generatedHTML = fs.readFileSync(inputPath, 'utf-8');
    } else {
        // 標準入力から読み込み
        generatedHTML = '';
        for await (const chunk of process.stdin) {
            generatedHTML += chunk;
        }
    }

    if (!generatedHTML.trim()) {
        console.error('❌ 生成HTMLが空です');
        process.exit(1);
    }

    // テンプレート読み込み
    const templateHTML = fs.readFileSync(templatePath, 'utf-8');

    // バックアップ作成（雛形HTMLと同階層の _backup フォルダにまとめる）
    const backupDir = path.join(path.dirname(templatePath), '_backup');
    fs.mkdirSync(backupDir, { recursive: true });
    const backupPath = path.join(backupDir, path.basename(templatePath) + '.bak');
    fs.writeFileSync(backupPath, templateHTML);
    console.log(`📁 バックアップ作成: ${backupPath}`);

    // 分離
    const { slides, quizScript } = splitGeneratedHTML(generatedHTML);

    console.log(`📊 スライド部分: ${(slides.match(/class="slide-container/g) || []).length} スライド検出`);
    console.log(`📊 クイズスクリプト: ${quizScript ? '検出' : 'なし'}`);

    // 挿入
    const result = insertIntoTemplate(templateHTML, slides, quizScript);

    // 書き込み
    fs.writeFileSync(templatePath, result);
    console.log(`✅ 挿入完了: ${templatePath}`);

    // 検証
    const slideCount = (result.match(/class="slide-container/g) || []).length;
    const hasQuiz = result.includes('const questions');
    console.log(`📋 検証: ${slideCount} スライド, クイズ: ${hasQuiz ? 'あり' : 'なし'}`);
}

main().catch(err => {
    console.error('❌ エラー:', err.message);
    process.exit(1);
});
