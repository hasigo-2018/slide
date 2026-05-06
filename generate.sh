#!/bin/bash

# ============================================================
# 教科書自動生成スクリプト
# 使い方: ./generate.sh 014
# ============================================================

set -e

# --- 引数チェック ---
if [ -z "$1" ]; then
    echo ""
    echo "📖 教科書自動生成スクリプト"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "使い方: ./generate.sh <テーマ番号>"
    echo "例:     ./generate.sh 014"
    echo ""
    echo "処理内容:"
    echo "  1. blueprint_XXX_theory.md を読み込み → 確認 → 理論編HTML生成 → 雛形挿入 → SVGチェック"
    echo "  2. blueprint_XXX_practice.md を読み込み → 確認 → 実践編HTML生成 → 雛形挿入 → SVGチェック"
    echo ""
    exit 1
fi

THEME_NUM=$1

# --- 3桁ゼロ埋め ---
THEME_NUM=$(printf "%03d" "$((10#$1))")

# --- ブロック番号の自動判定 ---
NUM=$((10#$THEME_NUM))
if [ "$NUM" -ge 1 ] && [ "$NUM" -le 5 ]; then
    BLOCK=1
elif [ "$NUM" -ge 6 ] && [ "$NUM" -le 10 ]; then
    BLOCK=2
elif [ "$NUM" -ge 11 ] && [ "$NUM" -le 15 ]; then
    BLOCK=3
elif [ "$NUM" -ge 16 ] && [ "$NUM" -le 21 ]; then
    BLOCK=4
elif [ "$NUM" -ge 22 ] && [ "$NUM" -le 29 ]; then
    BLOCK=5
elif [ "$NUM" -ge 30 ] && [ "$NUM" -le 36 ]; then
    BLOCK=6
elif [ "$NUM" -ge 37 ] && [ "$NUM" -le 39 ]; then
    BLOCK=7
elif [ "$NUM" -ge 40 ] && [ "$NUM" -le 44 ]; then
    BLOCK=8
else
    echo "❌ エラー: テーマ番号 ${THEME_NUM} は範囲外です（001〜044）"
    exit 1
fi

# --- パスの設定 ---
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BLUEPRINT_DIR="${SCRIPT_DIR}/教科書の構成指示書/block ${BLOCK}"
THEORY_BLUEPRINT="${BLUEPRINT_DIR}/blueprint_${THEME_NUM}_theory.md"
PRACTICE_BLUEPRINT="${BLUEPRINT_DIR}/blueprint_${THEME_NUM}_practice.md"
THEORY_HTML="${SCRIPT_DIR}/master_slide/themes_new/${THEME_NUM}-1_theory.html"
PRACTICE_HTML="${SCRIPT_DIR}/master_slide/themes_new/${THEME_NUM}-2_practice.html"

# --- ファイル存在チェック ---
echo ""
echo "📖 テーマ ${THEME_NUM}（Block ${BLOCK}）の生成を開始します"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

MISSING=0

if [ ! -f "$THEORY_BLUEPRINT" ]; then
    echo "❌ 構成指示書が見つかりません: ${THEORY_BLUEPRINT}"
    MISSING=1
fi
if [ ! -f "$PRACTICE_BLUEPRINT" ]; then
    echo "❌ 構成指示書が見つかりません: ${PRACTICE_BLUEPRINT}"
    MISSING=1
fi
if [ ! -f "$THEORY_HTML" ]; then
    echo "❌ 雛形HTMLが見つかりません: ${THEORY_HTML}"
    MISSING=1
fi
if [ ! -f "$PRACTICE_HTML" ]; then
    echo "❌ 雛形HTMLが見つかりません: ${PRACTICE_HTML}"
    MISSING=1
fi

if [ "$MISSING" -eq 1 ]; then
    echo ""
    echo "上記のファイルを確認してください。"
    exit 1
fi

echo "✅ ファイルチェック完了"
echo "  理論編構成指示書: ${THEORY_BLUEPRINT}"
echo "  実践編構成指示書: ${PRACTICE_BLUEPRINT}"
echo "  理論編HTML雛形:   ${THEORY_HTML}"
echo "  実践編HTML雛形:   ${PRACTICE_HTML}"
echo ""

# --- Claude Code を起動 ---
claude "
テーマ${THEME_NUM}（Block ${BLOCK}）の教科書生成を開始します。

## 理論編の構成指示書
ファイル: ${THEORY_BLUEPRINT}
→ まずこのファイルを読み込んで、方向性を確認してください。

## 出力先
理論編: ${THEORY_HTML}
実践編: ${PRACTICE_HTML}

## 手順
1. 理論編の構成指示書を読み込み、方向性・確認事項を提示してください
2. 私の承認後、理論編HTMLを生成してください
3. 生成後、scripts/insert_html.js で雛形に挿入してください
4. scripts/check_svg.js でSVGチェックを実行してください
5. 理論編OK後、実践編も同じ流れで進めてください

まず理論編の構成指示書を読み込んでください。
"
