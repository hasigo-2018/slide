#!/usr/bin/env node

/**
 * check_svg.js
 * 生成されたHTML内のSVGをチェックし、よくある問題を検出・修正する
 * 
 * 使い方:
 *   node scripts/check_svg.js <HTMLファイルパス> [--fix]
 * 
 * チェック項目:
 *   1. 矢印の向き（左→右の流れなのに←になっていないか）
 *   2. 中央揃えのズレ
 *   3. 孤立した不要な線要素
 */

const fs = require('fs');

const targetPath = process.argv[2];
const autoFix = process.argv.includes('--fix');

if (!targetPath) {
    console.error('❌ 使い方: node scripts/check_svg.js <HTMLファイルパス> [--fix]');
    process.exit(1);
}

if (!fs.existsSync(targetPath)) {
    console.error(`❌ ファイルが見つかりません: ${targetPath}`);
    process.exit(1);
}

let html = fs.readFileSync(targetPath, 'utf-8');
const issues = [];
let fixCount = 0;

// --- SVGを抽出 ---
const svgRegex = /<svg[\s\S]*?<\/svg>/gi;
const svgs = html.match(svgRegex) || [];

console.log(`\n🔍 SVGチェック: ${targetPath}`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📊 SVG要素数: ${svgs.length}`);
console.log('');

svgs.forEach((svg, index) => {
    const slideNum = findSlideNumber(html, svg);
    const prefix = `スライド${slideNum || '?'} SVG${index + 1}`;

    // --- チェック1: 矢印の向き ---
    checkArrowDirection(svg, prefix);

    // --- チェック2: 中央揃えのズレ ---
    checkAlignment(svg, prefix);

    // --- チェック3: 孤立した線 ---
    checkOrphanLines(svg, prefix);

    // --- チェック4: viewBox の妥当性 ---
    checkViewBox(svg, prefix);
});

/**
 * SVGが含まれるスライド番号を特定
 */
function findSlideNumber(html, svg) {
    const pos = html.indexOf(svg);
    const before = html.substring(0, pos);
    const slideMatches = before.match(/class="slide-container/g);
    return slideMatches ? slideMatches.length : null;
}

/**
 * チェック1: 矢印の向き
 * - polygon/path で三角形（矢印ヘッド）を検出
 * - 要素の配置から流れ方向を推定し、矢印が逆向きでないか判定
 */
function checkArrowDirection(svg, prefix) {
    // polygon（三角矢印）のチェック
    const polygonRegex = /<polygon[^>]*points="([^"]*)"[^>]*\/?>|<polygon[^>]*points='([^']*)'[^>]*\/?>/gi;
    let match;

    while ((match = polygonRegex.exec(svg)) !== null) {
        const points = (match[1] || match[2]).trim();
        const coords = points.split(/[\s,]+/).map(Number);

        if (coords.length === 6) {
            // 三角形（3頂点 = 6座標）→ 矢印ヘッドの可能性
            const [x1, y1, x2, y2, x3, y3] = coords;
            const centerX = (x1 + x2 + x3) / 3;

            // 左向き矢印の検出（最も左にある頂点が尖っている場合）
            const minX = Math.min(x1, x2, x3);
            const maxX = Math.max(x1, x2, x3);

            // 矢印の尖り方向を判定
            const pointingLeft = (x1 === minX && x2 !== minX && x3 !== minX) ||
                                  (x2 === minX && x1 !== minX && x3 !== minX) ||
                                  (x3 === minX && x1 !== minX && x2 !== minX);

            if (pointingLeft && maxX - minX > 5) {
                issues.push({
                    type: 'arrow',
                    severity: 'warning',
                    location: prefix,
                    message: `左向き矢印を検出（points="${points}"）。流れが左→右の場合、逆向きの可能性があります。`,
                    points: points
                });
            }
        }
    }

    // path の矢印マーカーチェック
    const markerRegex = /marker-end="url\(#([^)]*)\)"/gi;
    while ((match = markerRegex.exec(svg)) !== null) {
        // マーカー参照がある場合は矢印の存在を記録
        const markerId = match[1];
        if (!svg.includes(`id="${markerId}"`)) {
            issues.push({
                type: 'arrow',
                severity: 'error',
                location: prefix,
                message: `矢印マーカー "${markerId}" が定義されていません。矢印が表示されない可能性があります。`
            });
        }
    }
}

/**
 * チェック2: 中央揃えのズレ
 * - text-anchor="middle" のテキストがviewBoxの中央にあるか
 * - rect/circle の配置バランス
 */
function checkAlignment(svg, prefix) {
    // viewBox の幅を取得
    const viewBoxMatch = svg.match(/viewBox="([^"]*)"/);
    if (!viewBoxMatch) return;

    const vb = viewBoxMatch[1].split(/\s+/).map(Number);
    if (vb.length !== 4) return;

    const [vbX, vbY, vbWidth, vbHeight] = vb;
    const centerX = vbX + vbWidth / 2;

    // text-anchor="middle" のテキスト要素チェック
    const textRegex = /<text[^>]*text-anchor="middle"[^>]*x="([^"]*)"[^>]*/gi;
    let match;

    while ((match = textRegex.exec(svg)) !== null) {
        const x = parseFloat(match[1]);
        // タイトル的なテキスト（大きなフォントサイズ）が中央から大きくズレている場合
        const offset = Math.abs(x - centerX);
        if (offset > vbWidth * 0.15) {
            issues.push({
                type: 'alignment',
                severity: 'info',
                location: prefix,
                message: `中央揃えテキスト (x=${x}) がviewBox中央 (${centerX}) から ${Math.round(offset)}px ズレています。`
            });
        }
    }

    // rect 要素のバランスチェック
    const rectRegex = /<rect[^>]*x="([^"]*)"[^>]*width="([^"]*)"[^>]*/gi;
    const rects = [];
    while ((match = rectRegex.exec(svg)) !== null) {
        rects.push({ x: parseFloat(match[1]), width: parseFloat(match[2]) });
    }

    // 横並びの rect がある場合、等間隔かチェック
    if (rects.length >= 3) {
        const sortedRects = rects.sort((a, b) => a.x - b.x);
        const gaps = [];
        for (let i = 1; i < sortedRects.length; i++) {
            gaps.push(sortedRects[i].x - (sortedRects[i - 1].x + sortedRects[i - 1].width));
        }
        const avgGap = gaps.reduce((a, b) => a + b, 0) / gaps.length;
        const maxDeviation = Math.max(...gaps.map(g => Math.abs(g - avgGap)));

        if (maxDeviation > 10 && avgGap > 0) {
            issues.push({
                type: 'alignment',
                severity: 'info',
                location: prefix,
                message: `横並びのrect要素（${rects.length}個）の間隔にバラツキがあります（最大偏差: ${Math.round(maxDeviation)}px）。`
            });
        }
    }
}

/**
 * チェック3: 孤立した線要素
 * - 短すぎる line 要素
 * - 他の要素と接続していない line
 */
function checkOrphanLines(svg, prefix) {
    const lineRegex = /<line[^>]*x1="([^"]*)"[^>]*y1="([^"]*)"[^>]*x2="([^"]*)"[^>]*y2="([^"]*)"[^>]*\/?>/gi;
    let match;

    while ((match = lineRegex.exec(svg)) !== null) {
        const x1 = parseFloat(match[1]);
        const y1 = parseFloat(match[2]);
        const x2 = parseFloat(match[3]);
        const y2 = parseFloat(match[4]);

        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

        // 極端に短い線
        if (length < 3) {
            issues.push({
                type: 'orphan-line',
                severity: 'warning',
                location: prefix,
                message: `非常に短い線を検出（長さ ${length.toFixed(1)}px）。不要な線の可能性があります。`
            });
        }
    }
}

/**
 * チェック4: viewBox の妥当性
 */
function checkViewBox(svg, prefix) {
    const viewBoxMatch = svg.match(/viewBox="([^"]*)"/);
    if (!viewBoxMatch) {
        issues.push({
            type: 'viewbox',
            severity: 'warning',
            location: prefix,
            message: 'viewBox が設定されていません。レスポンシブ表示に問題が出る可能性があります。'
        });
        return;
    }

    const vb = viewBoxMatch[1].split(/\s+/).map(Number);
    if (vb.length !== 4) {
        issues.push({
            type: 'viewbox',
            severity: 'error',
            location: prefix,
            message: `viewBox の値が不正です: "${viewBoxMatch[1]}"`
        });
    }
}

// --- 結果出力 ---
console.log('');
if (issues.length === 0) {
    console.log('✅ SVGチェック完了: 問題は検出されませんでした');
} else {
    console.log(`⚠️ SVGチェック完了: ${issues.length} 件の問題を検出`);
    console.log('');

    const errors = issues.filter(i => i.severity === 'error');
    const warnings = issues.filter(i => i.severity === 'warning');
    const infos = issues.filter(i => i.severity === 'info');

    if (errors.length > 0) {
        console.log(`❌ エラー (${errors.length}件):`);
        errors.forEach(i => console.log(`  ${i.location}: ${i.message}`));
        console.log('');
    }

    if (warnings.length > 0) {
        console.log(`⚠️ 警告 (${warnings.length}件):`);
        warnings.forEach(i => console.log(`  ${i.location}: ${i.message}`));
        console.log('');
    }

    if (infos.length > 0) {
        console.log(`ℹ️ 情報 (${infos.length}件):`);
        infos.forEach(i => console.log(`  ${i.location}: ${i.message}`));
        console.log('');
    }
}

// --- JSON出力（Claude Codeが解析しやすいように） ---
const reportPath = targetPath.replace('.html', '_svg_report.json');
fs.writeFileSync(reportPath, JSON.stringify({ 
    file: targetPath,
    svgCount: svgs.length,
    issues: issues,
    timestamp: new Date().toISOString()
}, null, 2));
console.log(`📄 レポート出力: ${reportPath}`);
