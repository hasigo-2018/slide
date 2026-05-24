#!/usr/bin/env node
// =============================================================================
// inject.js - 生成されたHTMLを雛形テンプレートに自動挿入
//
// 使い方:
//   node inject.js <生成HTMLファイル> <雛形HTMLファイル>
//   node inject.js /tmp/generated_014_theory.html ./master_slide/themes_new/014-1_theory.html
//
// 動作:
//   1. 生成HTMLからスライド部分（<div class="slide-container">...）を抽出
//   2. 生成HTMLからクイズScript部分（const questions = [...]）を抽出
//   3. 雛形HTMLの所定位置に挿入
// =============================================================================

const fs = require('fs');
const path = require('path');

// --- 引数チェック ---
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('使い方: node inject.js <生成HTMLファイル> <雛形HTMLファイル>');
    console.error('例: node inject.js /tmp/generated_014_theory.html ./014-1_theory.html');
    process.exit(1);
}

const [generatedFile, templateFile] = args;

// ファイル存在チェック
if (!fs.existsSync(generatedFile)) {
    console.error(`❌ 生成ファイルが見つかりません: ${generatedFile}`);
    process.exit(1);
}
if (!fs.existsSync(templateFile)) {
    console.error(`❌ 雛形ファイルが見つかりません: ${templateFile}`);
    process.exit(1);
}

// --- メイン処理 ---
const generatedContent = fs.readFileSync(generatedFile, 'utf-8');
const templateContent = fs.readFileSync(templateFile, 'utf-8');

// バックアップ作成
const backupFile = templateFile + '.bak';
fs.writeFileSync(backupFile, templateContent);
console.log(`📋 バックアップ作成: ${backupFile}`);

// --- 1. スライド部分の抽出 ---
// <script> タグより前のすべての <div class="slide-container"> を抽出
let slideContent = '';
let quizScript = '';

// <script> タグでコンテンツを分割
const scriptMatch = generatedContent.match(/<script\b[^>]*>([\s\S]*?)<\/script>/i);

if (scriptMatch) {
    // <script> タグの開始位置より前がスライド部分
    const scriptStartIndex = generatedContent.indexOf(scriptMatch[0]);
    slideContent = generatedContent.substring(0, scriptStartIndex).trim();
    quizScript = scriptMatch[1].trim();
} else {
    // <script> タグがない場合、全体をスライドとして扱う
    slideContent = generatedContent.trim();
    console.log('⚠️  クイズ用 <script> タグが見つかりませんでした');
}

// スライドコンテンツの先頭・末尾のHTMLラッパーを除去（もしあれば）
slideContent = slideContent
    .replace(/^<!DOCTYPE[\s\S]*?<body[^>]*>/i, '')
    .replace(/<\/body[\s\S]*$/i, '')
    .replace(/^<div\s+id="presentation-wrapper"[^>]*>/i, '')
    .replace(/<\/div>\s*$/i, function(match) {
        // 最後の </div> が presentation-wrapper の閉じタグかもしれないので慎重に
        return '';
    })
    .trim();

// --- 2. 雛形に挿入 ---
let result = templateContent;

// スライド部分の挿入
const slideMarker = '<!-- AIが生成するスライドをここに貼り付け -->';
if (result.includes(slideMarker)) {
    result = result.replace(slideMarker, slideContent);
    console.log(`✅ スライド挿入完了（${(slideContent.match(/slide-container/g) || []).length} スライド検出）`);
} else {
    console.error('❌ スライド挿入マーカーが見つかりません');
    console.error('   期待: <!-- AIが生成するスライドをここに貼り付け -->');
    process.exit(1);
}

// クイズScript部分の挿入
const quizMarker = '// AIが生成するクイズデータをここに貼り付け';
if (quizScript && result.includes(quizMarker)) {
    result = result.replace(quizMarker, quizScript);
    
    // クイズ数のカウント
    const questionCount = (quizScript.match(/question:/g) || []).length;
    console.log(`✅ クイズ挿入完了（${questionCount} 問検出）`);
} else if (!quizScript) {
    console.log('⚠️  クイズデータが見つからなかったため、挿入をスキップしました');
} else {
    console.error('❌ クイズ挿入マーカーが見つかりません');
    console.error('   期待: // AIが生成するクイズデータをここに貼り付け');
}

// --- 3. 結果を保存 ---
fs.writeFileSync(templateFile, result);
console.log(`✅ 保存完了: ${templateFile}`);

// --- 4. 簡易バリデーション ---
const slideCount = (result.match(/class="slide-container/g) || []).length;
const hasQuiz = result.includes('const questions');
const hasActiveSlide = result.includes('active');

console.log('');
console.log('📊 バリデーション結果:');
console.log(`   スライド数: ${slideCount}`);
console.log(`   クイズ: ${hasQuiz ? '✅ あり' : '⚠️ なし'}`);
console.log(`   activeクラス: ${hasActiveSlide ? '✅ あり' : '⚠️ なし（最初のスライドに active が必要）'}`);

// active クラスの自動付与（なければ最初のスライドに付ける）
if (!hasActiveSlide && slideCount > 0) {
    result = result.replace(
        /class="slide-container([^"]*)"/, 
        'class="slide-container$1 active"'
    );
    fs.writeFileSync(templateFile, result);
    console.log('   → activeクラスを最初のスライドに自動付与しました');
}
