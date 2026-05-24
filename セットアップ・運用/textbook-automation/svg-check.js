#!/usr/bin/env node
// =============================================================================
// svg-check.js - SVGの品質チェッカー
//
// 使い方:
//   node svg-check.js <HTMLファイル>
//   node svg-check.js ./master_slide/themes_new/014-1_theory.html
//
// チェック項目:
//   1. 矢印の向き（左→右フロー内での逆向き矢印を検出）
//   2. 不要な線（孤立したline/path要素）
//   3. 位置ズレ（text-anchor="middle" のテキストの中央ズレ）
//   4. viewBox の設定確認
//   5. SVG内のクラス名確認（svg-centered の有無）
// =============================================================================

const fs = require('fs');
const path = require('path');

// --- 引数チェック ---
const args = process.argv.slice(2);
if (args.length < 1) {
    console.error('使い方: node svg-check.js <HTMLファイル>');
    process.exit(1);
}

const htmlFile = args[0];
if (!fs.existsSync(htmlFile)) {
    console.error(`❌ ファイルが見つかりません: ${htmlFile}`);
    process.exit(1);
}

const content = fs.readFileSync(htmlFile, 'utf-8');

// --- SVG抽出 ---
const svgRegex = /<svg[\s\S]*?<\/svg>/gi;
const svgs = content.match(svgRegex) || [];

if (svgs.length === 0) {
    console.log('ℹ️  SVG要素は見つかりませんでした（チェック不要）');
    process.exit(0);
}

console.log(`\n📊 SVGチェック: ${path.basename(htmlFile)}`);
console.log(`   SVG要素数: ${svgs.length}`);
console.log('');

let totalIssues = 0;
let totalWarnings = 0;
let autoFixCount = 0;
let modifiedContent = content;

svgs.forEach((svg, index) => {
    const slideNum = findSlideNumber(content, svg);
    console.log(`── SVG #${index + 1}（スライド ${slideNum}）──`);
    
    // --- チェック1: 矢印の向き ---
    checkArrowDirection(svg, index, slideNum);
    
    // --- チェック2: viewBox ---
    checkViewBox(svg, index, slideNum);
    
    // --- チェック3: 孤立した線 ---
    checkStrayLines(svg, index, slideNum);
    
    // --- チェック4: テキスト中央揃え ---
    checkTextAlignment(svg, index, slideNum);
    
    // --- チェック5: svg-centered クラス ---
    checkSvgCenteredClass(content, svg, index, slideNum);
    
    console.log('');
});

// --- 自動修正の適用 ---
if (autoFixCount > 0) {
    fs.writeFileSync(htmlFile, modifiedContent);
}

// --- サマリー ---
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
if (totalIssues === 0 && totalWarnings === 0) {
    console.log('✅ 問題は見つかりませんでした');
} else {
    if (totalIssues > 0) console.log(`❌ 問題: ${totalIssues} 件`);
    if (totalWarnings > 0) console.log(`⚠️  警告: ${totalWarnings} 件`);
    if (autoFixCount > 0) console.log(`🔧 自動修正: ${autoFixCount} 件`);
}
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

// =============================================================================
// チェック関数群
// =============================================================================

function findSlideNumber(html, svg) {
    const svgIndex = html.indexOf(svg);
    const beforeSvg = html.substring(0, svgIndex);
    const slideMatches = beforeSvg.match(/class="slide-container/g) || [];
    return slideMatches.length;
}

// --- チェック1: 矢印の向き ---
function checkArrowDirection(svg, svgIndex, slideNum) {
    // polygon/polyline/path で矢印を検出
    const arrowPatterns = [
        // marker-end で矢印を使っている線
        /marker-end/gi,
        // Unicode矢印文字
        /[←→↑↓⇐⇒⇑⇓▶◀▲▼►◄]/g,
        // テキスト内の矢印記号
        />([^<]*[←][^<]*)</g,
    ];
    
    // 左向き矢印の検出（← を含むテキスト）
    const leftArrowTexts = svg.match(/>([^<]*←[^<]*)</g) || [];
    if (leftArrowTexts.length > 0) {
        totalIssues++;
        console.log(`   ❌ 左向き矢印（←）検出: ${leftArrowTexts.length} 箇所`);
        leftArrowTexts.forEach(match => {
            const cleanText = match.replace(/^>|<$/g, '').trim();
            console.log(`      「${cleanText}」`);
        });
        console.log('      → 左→右フローの場合、→ に修正が必要');
        
        // 自動修正：← を → に置換（SVG内のテキストのみ）
        const originalSvg = svg;
        const fixedSvg = svg.replace(/(>[^<]*)←([^<]*<)/g, '$1→$2');
        if (fixedSvg !== originalSvg) {
            modifiedContent = modifiedContent.replace(originalSvg, fixedSvg);
            autoFixCount++;
            console.log('      🔧 自動修正しました（← → →）');
        }
    }
    
    // polygon ベースの矢印チェック（左向きの三角形）
    const polygons = svg.match(/<polygon[^>]*points="([^"]+)"[^>]*>/gi) || [];
    polygons.forEach(polygon => {
        const pointsMatch = polygon.match(/points="([^"]+)"/);
        if (pointsMatch) {
            const points = pointsMatch[1].split(/[\s,]+/).map(Number);
            if (points.length >= 6) {
                // 3点の三角形で、左を向いているかチェック
                const xs = [points[0], points[2], points[4]];
                const minX = Math.min(...xs);
                const maxX = Math.max(...xs);
                const tipX = xs.find(x => x === minX || x === maxX);
                
                // 先端が左側にある場合（左向き矢印の可能性）
                if (tipX === minX && (maxX - minX) > 5) {
                    totalWarnings++;
                    console.log(`   ⚠️  左向きの可能性がある polygon 検出（points="${pointsMatch[1]}"）`);
                    console.log('      → フローの方向と一致しているか確認してください');
                }
            }
        }
    });
}

// --- チェック2: viewBox ---
function checkViewBox(svg, svgIndex, slideNum) {
    const viewBoxMatch = svg.match(/viewBox="([^"]+)"/);
    if (!viewBoxMatch) {
        totalIssues++;
        console.log('   ❌ viewBox が設定されていません');
        return;
    }
    
    const viewBox = viewBoxMatch[1].split(/[\s,]+/).map(Number);
    if (viewBox.length !== 4) {
        totalIssues++;
        console.log(`   ❌ viewBox の形式が不正: "${viewBoxMatch[1]}"`);
        return;
    }
    
    const [x, y, w, h] = viewBox;
    if (w <= 0 || h <= 0) {
        totalIssues++;
        console.log(`   ❌ viewBox のサイズが不正: width=${w}, height=${h}`);
    }
}

// --- チェック3: 孤立した線 ---
function checkStrayLines(svg, svgIndex, slideNum) {
    // 非常に短い line 要素を検出
    const lines = svg.match(/<line[^>]+>/gi) || [];
    lines.forEach(line => {
        const x1Match = line.match(/x1="([^"]+)"/);
        const y1Match = line.match(/y1="([^"]+)"/);
        const x2Match = line.match(/x2="([^"]+)"/);
        const y2Match = line.match(/y2="([^"]+)"/);
        
        if (x1Match && y1Match && x2Match && y2Match) {
            const x1 = parseFloat(x1Match[1]);
            const y1 = parseFloat(y1Match[1]);
            const x2 = parseFloat(x2Match[1]);
            const y2 = parseFloat(y2Match[1]);
            
            const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            
            if (length < 3) {
                totalWarnings++;
                console.log(`   ⚠️  非常に短い line 要素（長さ ${length.toFixed(1)}px）- 不要な線の可能性`);
            }
        }
    });
    
    // stroke が設定されているが、他の要素と接続していない path
    const paths = svg.match(/<path[^>]*d="([^"]*)"[^>]*>/gi) || [];
    const shortPaths = paths.filter(p => {
        const d = p.match(/d="([^"]+)"/);
        if (!d) return false;
        // d属性が非常に短い（単純な線分）場合
        const commands = d[1].match(/[MLHVCSQTAZ]/gi) || [];
        return commands.length <= 2 && !p.includes('marker');
    });
    
    if (shortPaths.length > 3) {
        totalWarnings++;
        console.log(`   ⚠️  短い path 要素が ${shortPaths.length} 個あります - 不要な装飾線の可能性`);
    }
}

// --- チェック4: テキスト中央揃え ---
function checkTextAlignment(svg, svgIndex, slideNum) {
    const viewBoxMatch = svg.match(/viewBox="[^"]*\s(\d+)\s/);
    if (!viewBoxMatch) return;
    
    const svgWidth = parseFloat(viewBoxMatch[1]);
    const center = svgWidth / 2;
    
    // text-anchor="middle" のテキスト要素
    const middleTexts = svg.match(/<text[^>]*text-anchor="middle"[^>]*x="([^"]+)"[^>]*>/gi) || [];
    middleTexts.forEach(text => {
        const xMatch = text.match(/x="([^"]+)"/);
        if (xMatch) {
            const x = parseFloat(xMatch[1]);
            const offset = Math.abs(x - center);
            
            // SVG幅の5%以上ズレていたら警告
            if (offset > svgWidth * 0.05 && offset > 10) {
                // ただし、意図的に左右に配置されている可能性もあるので
                // 中央付近（40%〜60%の範囲）にあるのにズレている場合のみ報告
                if (x > svgWidth * 0.3 && x < svgWidth * 0.7) {
                    totalWarnings++;
                    console.log(`   ⚠️  中央揃えテキストの位置ズレ: x=${x}（中央=${center}、差=${offset.toFixed(1)}px）`);
                }
            }
        }
    });
}

// --- チェック5: svg-centered クラス ---
function checkSvgCenteredClass(html, svg, svgIndex, slideNum) {
    // SVGを含む content-block に svg-centered があるか
    const svgPos = html.indexOf(svg);
    const beforeSvg = html.substring(Math.max(0, svgPos - 500), svgPos);
    
    // 直近の content-block を探す
    const contentBlockMatch = beforeSvg.match(/class="content-block([^"]*)"/g);
    if (contentBlockMatch) {
        const lastBlock = contentBlockMatch[contentBlockMatch.length - 1];
        if (!lastBlock.includes('svg-centered')) {
            // SVGがメインコンテンツかどうかを判断
            // content-block 内のテキスト量が少なければSVGがメイン
            const blockStart = beforeSvg.lastIndexOf('class="content-block');
            const blockContent = html.substring(svgPos - (beforeSvg.length - blockStart), svgPos);
            const textContent = blockContent.replace(/<[^>]+>/g, '').trim();
            
            if (textContent.length < 100) {
                totalWarnings++;
                console.log('   ⚠️  content-block に svg-centered クラスがありません');
                console.log('      → SVGがメインの場合は追加が必要です');
            }
        }
    }
}
