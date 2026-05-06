#!/bin/bash

# ============================================================
# 文字サイズ調整スクリプト
# 使い方: ./fix-fontsize.sh 001
#         ./fix-fontsize.sh 001 013   ← 範囲指定（001〜013を連続処理）
# ============================================================

set -e

# --- 引数チェック ---
if [ -z "$1" ]; then
    echo ""
    echo "🔤 文字サイズ調整スクリプト"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "使い方:"
    echo "  ./fix-fontsize.sh 001          ← 1冊分（理論編+実践編）を調整"
    echo "  ./fix-fontsize.sh 001 013      ← 001〜013を連続処理"
    echo ""
    echo "処理内容:"
    echo "  1. HTMLを読み込み、文脈に応じて文字サイズを判断"
    echo "  2. インラインの font-size を削除し .text-sub / .text-note に置換"
    echo "  3. 21px未満の文字サイズを修正"
    echo "  4. 修正箇所をレポート → 確認後に次のファイルへ"
    echo ""
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
THEMES_DIR="${SCRIPT_DIR}/master_slide/themes_new"

START=$((10#$1))
END=${2:+$((10#$2))}
END=${END:-$START}

# --- 対象ファイルのリストを作成 ---
FILE_LIST=""
COUNT=0

for NUM in $(seq $START $END); do
    THEME_NUM=$(printf "%03d" "$NUM")
    THEORY="${THEMES_DIR}/${THEME_NUM}-1_theory.html"
    PRACTICE="${THEMES_DIR}/${THEME_NUM}-2_practice.html"

    if [ -f "$THEORY" ]; then
        FILE_LIST="${FILE_LIST}${THEORY}\n"
        COUNT=$((COUNT + 1))
    else
        echo "⚠️ スキップ（ファイルなし）: ${THEORY}"
    fi

    if [ -f "$PRACTICE" ]; then
        FILE_LIST="${FILE_LIST}${PRACTICE}\n"
        COUNT=$((COUNT + 1))
    else
        echo "⚠️ スキップ（ファイルなし）: ${PRACTICE}"
    fi
done

if [ "$COUNT" -eq 0 ]; then
    echo "❌ 対象ファイルが見つかりませんでした。"
    exit 1
fi

echo ""
echo "🔤 文字サイズ調整: ${COUNT}ファイルを処理します"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# --- Claude Code を起動 ---
claude "
文字サイズ調整タスクを開始します。

## 対象ファイル（${COUNT}ファイル）
$(echo -e "$FILE_LIST")

## 調整ルール

### 禁止事項
- インラインスタイルの \`style=\"font-size: ...\"\` はすべて削除する
- \`rem\` 単位は使用禁止（このスライドシステムは1920×1080px基準のpx設計）
- 21px未満の文字サイズは一切使用禁止

### 文字サイズの階層（CSSクラスで制御）
| 用途 | サイズ | 指定方法 |
|------|--------|---------|
| 本文 p, li | 32px | クラス指定なし（デフォルト） |
| 小さめ本文 | 26px | class=\"text-sub\" |
| 補足・注釈 | 21px | class=\"text-note\" |

### 判断基準
各テキスト要素の文脈を読み、以下のように判断してください：
- **32px（デフォルト）**: メインの説明文、重要な概念の解説、演習の手順説明
- **26px（.text-sub）**: 補足的な説明、追加情報、例示の詳細
- **21px（.text-note）**: 注釈、出典、免責事項、「※」で始まる補足

### 処理手順
1. ファイルを1つ読み込む
2. インラインの font-size をすべて検出
3. 文脈に応じて適切なクラスに置換（または削除してデフォルト32pxにする）
4. 修正箇所の一覧をレポートする（スライド番号、変更前→変更後）
5. 私の確認を待つ → OKなら次のファイルへ

最初のファイルから始めてください。
"
