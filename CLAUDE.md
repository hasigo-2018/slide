# 教科書自動生成プロジェクト — CLAUDE.md

## プロジェクト概要
このプロジェクトは「AI時代のビジュアルアーキテクト育成教科書」のHTMLスライドを自動生成するシステムです。
構成指示書（blueprint）を入力として、理論編・実践編のHTMLスライドを生成し、雛形HTMLに自動挿入します。

---

## ★作業開始前の必須ルール

**いかなる作業（生成・修正・レイアウト変更など）を始める前に、必ず以下を実行すること：**

```bash
git add -A && git commit -m "【バックアップ】作業開始前"
```

- これを省略した場合、ファイルを元に戻せなくなるリスクがある
- ユーザーが「元に戻して」と言えるのは、コミットがある場合のみ
- **コミットが完了するまで生成・編集作業を開始してはならない**
- 教材生成・レビュー・改善を行う前に、`教材品質判断基準.md` を読む。ユーザーの判断傾向と品質基準を構成・コピー・視覚化・実例選定へ反映する

---

## 基本ワークフロー

ユーザーが `./generate.sh XXX` を実行すると、以下の流れで処理します：

### Step 1: 理論編の生成
1. `教科書の構成指示書/block N/blueprint_XXX_theory.md` を読み込む
2. 構成指示書の内容を分析し、**方向性・前提条件・不明点をユーザーに確認する**（★スキップ厳禁）
3. ユーザーが承認したら、理論編HTMLを生成
4. `scripts/insert_html.js` で `master_slide/themes_new/XXX-1_theory.html` に自動挿入
4.5. 挿入完了後、`generated_XXX_theory.html` を削除する（例: `rm generated_${THEME_NUM}_theory.html`）
4.6. `scripts/format_html.js` でインデントと改行を整える
5. `scripts/check_svg.js` でSVGチェックを実行し、結果を報告
5.5. 生成直後のHTMLと構成指示書を `reviews/_backup/XXX_YYYYMMDD_HHMMSS/` に保存する
5.6. `reviews/REVIEW_TEMPLATE.md` に従い、9観点（編集AI・教育者AI・受講生AI・専門家AI・視覚QA・アクセシビリティAI・評価設計AI・根拠・出典・権利AI・実装チェックAI・統括AI）でレビューする
5.7. レビュー結果を `reviews/XXX_theory_review.md` に保存し、改善案を High / Middle / Low の優先順位付きでユーザーへ提示する
5.8. AIレビューの改善案は自動で全反映しない。**ユーザーが承認した項目だけ**をHTMLへ反映する
6. ユーザーが「理論編OK」と言うまで待機（修正指示があれば対応）

### Step 2: 実践編の生成
7. 「実践編に進みますか？」と確認
8. `教科書の構成指示書/block N/blueprint_XXX_practice.md` を読み込む
9. **理論編の内容を必ず参照**し、一貫性を保つ
10. 方向性・前提条件・不明点をユーザーに確認する（★スキップ厳禁）
11. ユーザーが承認したら、実践編HTMLを生成
12. `scripts/insert_html.js` で `master_slide/themes_new/XXX-2_practice.html` に自動挿入
12.5. 挿入完了後、`generated_XXX_practice.html` を削除する（例: `rm generated_${THEME_NUM}_practice.html`）
12.6. `scripts/format_html.js` でインデントと改行を整える
13. SVGチェック実行・結果報告
13.5. 9観点レビュー実行 → `reviews/XXX_practice_review.md` に保存 → 改善案をユーザーへ提示
14. ユーザーが「実践編OK」と言ったら完了
15. 各Blockの最終テーマで実践編が承認された後、`reviews/BLOCK_REVIEW_TEMPLATE.md` に従いカリキュラム設計AIがBlock全体を横断レビューし、`reviews/block_N_review.md` に保存する

---

## 教材品質レビュー・改善サイクル

1テーマの品質改善は、次の1サイクルとして扱う。

1. **生成**: 構成指示書と生成前承認に基づいてHTMLを作る
2. **レビュー**: 9観点で内容・学習効果・初学者の理解・専門的正確性・実画面・アクセシビリティ・評価設計・根拠と権利・実装を確認する
3. **統括**: 重複する指摘をまとめ、High / Middle / Low へ整理する
4. **ユーザー判断**: 改善案・代替案・推奨案と理由を示し、採用判断を待つ
5. **改善**: 承認された項目だけを関連ファイルへ一貫して反映する
6. **再検証**: 構造検査とレビュー記録の更新を行い、未対応項目を明示する

### 9観点レビューの内容

| 観点 | 確認ポイント |
|------|------------|
| 編集AI | 構成・文章量・重複・読み順・見出しと本文の一致・コピーの自然さ |
| 教育者AI | 学習目標・段階設計・理論と実践の接続・判断・説明できる状態への到達 |
| 受講生AI | 初学者のつまずき・専門用語・説明不足・情報過多 |
| 専門家AI | 用語・数値・因果関係・実務妥当性・倫理・誤用リスク |
| 視覚QA・アクセシビリティAI | 実寸表示・はみ出し・切れ・余白・色コントラスト・alt・キーボード操作 |
| 評価設計AI | クイズが学習目標を測っているか・誤答の質・解説の誤解修正・正解位置の偏り |
| 根拠・出典・権利AI | 数値・研究結果・時点依存情報・画像・引用の一次資料と権利確認 |
| 実装チェックAI | HTML構造・コメント連番・画像パス・クイズキー・禁止記法・SVG |
| 統括AI | High / Middle / Low への優先整理・代替案・推奨案 |

レビューでは「なぜ初学者がつまずくか」「実務でどう誤用されるか」「どの修正が最も学習効果を上げるか」まで説明する。

視覚QA・アクセシビリティAIがブラウザ実寸確認を実施できない場合は「AIブラウザ実寸確認は未実施」と明記し、ユーザーの目視確認と区別する。

カリキュラム設計AIは通常レビューに常設せず、各Blockの最終テーマ実践編承認後にBlock全体を横断確認する。

## 表示確認ステータス管理

AIによるブラウザ確認とユーザーの目視確認は別状態として扱い、`reviews/REVIEW_TEMPLATE.md` の「表示・目視確認ステータス」に記録する。

- `確認OK` / `目視確認OK` / `表示確認OK` は直前の文脈の対象スライドのユーザー目視確認完了として記録する
- `スライドN確認OK` は指定範囲のみ。編全体を確認済みにしない
- コピー案・改善案への単なる `OK` は表示確認として扱わない
- `理論編OK` / `実践編OK` は直前に全スライド表示確認を求めていた場合に目視確認完了も記録する
- 確認後に表示へ影響する変更（HTML・CSS・JS・画像）を行った場合、変更範囲のみ `要再確認` へ戻す
- 有効な `確認OK` 記録があり確認後に表示変更がない場合、同じ対象に目視確認を繰り返し依頼しない

---

## ★最重要ルール：確認フロー

構成指示書を読み込んだ後、**必ず**以下をユーザーに提示して承認を得ること：

1. テーマの要約
2. 重点項目・制約事項の確認
3. スライド枚数の確認
4. 不明点や判断が必要な箇所の質問

**ユーザーの承認なしに生成を開始してはならない。**

---

## 生成ルール

### 共通ルール
- 生成するのは `<div id="presentation-wrapper">` の中身のみ
- `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `<style>` タグは一切含めない
- スライドコンテンツ（`<div class="slide-container">` の連続）とクイズ用 `<script>` タグのみ出力
- 外部CSS/JS（slide-template.css, slide-template.js）使用前提
- 各 `slide-container` の直前には `<!-- スライドN: スライド内容 -->` 形式のコメントを必ず付ける。N は表紙を1として実際の表示順に連番（欠番・重複禁止）
- 表紙スライドの `h1` には編名を必ず入れる。理論編は `<br><span class="title-edition-label">【理論編】</span>`、実践編は `<br><span class="title-edition-label">【実践編】</span>` とする

### 文字サイズルール（厳守）

**インラインスタイルでの文字サイズ指定（`style="font-size: ..."`）は禁止。**
必ずCSSクラスまたは既存のレイアウトクラスで制御すること。

文字サイズの階層：

| 用途 | サイズ | 指定方法 |
|------|--------|---------|
| タイトル h1 | 72px / 112px | 既存CSSで自動適用 |
| セクション h2 | 56px〜96px | 既存CSSで自動適用 |
| 見出し h3 | 40px | 既存CSSで自動適用 |
| 本文 p, li | 32px | 既存CSSで自動適用 |
| 小さめ本文 | 26px | `class="text-sub"` を使用 |
| 補足・注釈 | 21px | `class="text-note"` を使用 |
| highlight-box | 24px | 既存CSSで自動適用 |

**21px未満の文字サイズは一切使用禁止。**
`rem` 単位は使用禁止（このスライドシステムは1920×1080px基準のpx設計）。

使用例：
```html
<!-- 小さめの本文 -->
<p class="text-sub">この操作は応用的な内容です</p>

<!-- 補足・注釈 -->
<p class="text-note">※ この機能はGemini 1.5以降で利用可能です</p>
```

### HTML構造ルール
1. SVGがメインコンテンツの場合 → `content-block` に `svg-centered` クラスを追加
2. `two-column tiled` は `slide-container` に直接付けず、内側に `<div class="two-column tiled">` を作成

### レイアウトクラス一覧
| 用途 | クラス |
|-----|-------|
| タイトル | `.slide-container.full-bg-image` |
| 章区切り | `.section-title-layout` |
| 原則定義 | `.big-concept-layout` |
| 詳細解説 | `.standard-content-layout` |
| Before/After | `.two-column.tiled` |
| 補足理論 | `.bleed-image-layout` |
| まとめ | `.tiled-content` |
| タイルグリッド（標準） | `tile-grid tile-grid--2x2`（4項目） |
| タイルグリッド（横並び3） | `tile-grid tile-grid--3cols` |
| タイルグリッド（横並び4） | `tile-grid tile-grid--4cols` |
| タイルグリッド（3×2） | `tile-grid tile-grid--3x2` |
| 次回予告・引き継ぎ | `next-box` |
| 補足・注釈 | `text-note` |
| 箇条書き記号なし | `no-bullet` |

### `.highlight-box` の使用ルール

**使用できる場面（以下の4用途のみ）：**
- ⚠️ **警告**：よくある間違い・やってはいけないこと
- 📌 **注意**：見落としやすいポイント・前提の確認
- 💡 **重要ポイント**：スライドの核心となる1文・原則のまとめ
- ※ **注釈**：補足説明・制限事項・前提条件

**使用禁止の場面：**
- ❌ 小見出しの代わり（→ `h3` を使う）
- ❌ コンテンツブロックの代わり（→ `two-column tiled` や `content-block` を使う）
- ❌ 良い例・悪い例の枠組み（→ `two-column tiled` で対比する）
- ❌ 比喩・アナロジーの表示（→ `p` タグや `text-sub` を使う）

**1スライドあたりの上限：2個まで。**

### まとめスライドのルール

**レイアウト**

まとめスライドには必ず `.tiled-content` + `tile-grid` を使う。

```html
<div class="slide-container tiled-content">
    <h2 class="slide-title">まとめ：〇〇</h2>
    <div class="tile-grid">
        <div class="tile">
            <div class="icon">🎯</div>
            <h3>タイトル</h3>
            <p>説明文</p>
        </div>
        <!-- 繰り返し -->
    </div>
</div>
```

**タイル構成ルール**

- 各タイルは `icon`（絵文字）+ `h3`（見出し）+ `p`（説明文）の構成
- タイル数は3〜4個が基本（内容に応じて判断）
- **同じアイコンの繰り返し禁止**。各タイルの内容に合った絵文字を使う
- `tiles-wrapper` は使用禁止（縦積みになるため）。必ず `tile-grid` を使う
- `tile-grid` には形状クラスを必ず併記する（例：3項目 → `tile-grid tile-grid--3cols`、4項目 → `tile-grid tile-grid--2x2`、6項目 → `tile-grid tile-grid--3x2`）

**`highlight-box` の使用**

- タイル化した後に「今日の核心となる1文」がある場合のみ、`💡 highlight-box` を `tile-grid` の下に1つだけ置いてよい
- `🔑 highlight-box` を3つ以上連続させてはならない。その場合はタイル化に変換する

**スライドの分離ルール**

まとめスライドと次回予告・実践編接続は必ず別スライドに分離する。

| スライド | 内容 | レイアウト |
|---------|------|----------|
| まとめ | 今日の学習内容のみ | `.tiled-content` |
| 次回予告・実践編接続 | 先の見通し・次テーマ紹介 | `.standard-content-layout` |

**次回予告スライドのルール**

- `highlight-box` は使用禁止
- `next-box` または通常の本文を使う
- 補足情報は `p.text-sub` で記載する

### SVG生成ルール
- 矢印の向き：図の流れ方向（左→右、上→下）と一致させること
- 中央揃え：viewBox内で要素を中央配置すること
- 不要な線：意図が明確でない装飾線は含めない
- カラー：`#00d4ff`（アクセント）、`white`（テキスト）、`opacity="0.2"`（背景塗り）を基本とする

---

## 理論編の生成ルール（slide_prompt_primary.md 準拠）

### 役割
シニア・インストラクショナル・デザイナーとして、理論的基礎を教える教育的価値の高いスライドを生成。

### 構成パターン（構成指示書がない場合のみ使用）
- パターンA: 体系的な原則・要素がある場合
- パターンB: 理論的背景と概念構造がある場合
- パターンC: メカニズム・原理の説明が必要な場合
- パターンD: 複合的な理論体系の場合

### 構成指示書がある場合（通常はこちら）
- 構成指示書の内容を最優先
- パターンA〜Dの自動判断は行わない
- 「既存流用」→ 既存HTMLの該当部分を踏襲
- 「新規」→ テーマの文脈に沿って新たに生成
- 「改修」→ 既存を土台に指示書の変更点を反映

### コンテンツ品質
- スライド枚数：15〜30枚（構成指示書の推奨に従う）
- 1スライド = 1メッセージ
- 箇条書きは3〜5項目まで
- 3スライドごとに最低1つのビジュアル要素

### 深さの定義
- ❌ 表層的: 「重要です」だけ
- ✅ 深い解説: なぜ必要か（認知科学的理由）+ 具体的な適用方法 + 良い例 vs 悪い例 + よくある間違い

### クイズ
- 必ず5問生成
- 構成指示書にクイズ案がある場合はそれに従う
- 4択形式、正解は明確、解説で理論的根拠を説明

---

## 実践編の生成ルール（slide_prompt_secondary.md 準拠）

### 役割
シニア・インストラクショナル・デザイナーとして、ツール実践を通じて理論を体得させるスライドを生成。

### 最重要ルール
**必ず同一セッション内で生成した理論編の内容を参照し、以下を踏襲すること：**
1. 視点の一貫性：理論編で扱った重点項目・観点を実践に反映
2. 概念の連続性：理論編で強調した原則や概念を演習で体験させる
3. ストーリーの接続：理論編の「なぜ」を実践編の「どうやる」に繋げる

### パターン
- パターン1: ツール操作型（Figma / Gemini / Nano Banana Pro）
- パターン2: 分析・言語化型（Block 1で多用）

### コピーボタン
Gemini / Nano Banana Pro のプロンプト例には必ずコピーボタンを実装：
```html
<div class="prompt-box">
    <div class="prompt-content" id="[一意なID]">
[プロンプトテキスト]
    </div>
    <button class="copy-btn" onclick="copyPrompt('[一意なID]', event)">
        <i class="fas fa-copy"></i> コピー
    </button>
</div>
```

### クイズ
- 必ず5問（実践判断型）
- 構成指示書にクイズ案がある場合はそれに従う

---

## プログラム背景情報

### 対象読者
デザイン業界未経験の30代前後の転職志望者

### コースの哲学
- AI handles creation; humans handle judgment, decision-making, and direction
- 「ビジュアルアーキテクト」= 評価者・ディレクターであり、ハンズオンデザイナーではない

### カリキュラムストーリーライン
考える → 道具を持つ → 作る → 裁く → 渡す → 売る

### ツールエコシステム
| Tool | Role |
|------|------|
| Figma | WF、コンポーネント、プロトタイプ、UI仕様 |
| Gemini | 戦略、コピー、AIレビュー、ペルソナ/競合分析 |
| Nano Banana Pro | AI画像生成（日本語プロンプト） |

### 100文字エビデンスルール
Block 5以降、すべての提出に100文字の根拠文が必要。Block 1からこの習慣を段階的に形成する。

---

## ファイルパスの規則

### 構成指示書
```
教科書の構成指示書/block N/blueprint_XXX_theory.md
教科書の構成指示書/block N/blueprint_XXX_practice.md
```

### 出力先（雛形HTML）
```
master_slide/themes_new/XXX-1_theory.html
master_slide/themes_new/XXX-2_practice.html
```

### ブロックと番号の対応
| Block | テーマ番号 |
|-------|-----------|
| 1 | 001〜005 |
| 2 | 006〜010 |
| 3 | 011〜015 |
| 4 | 016〜021 |
| 5 | 022〜029 |
| 6 | 030〜036 |
| 7 | 037〜039 |
| 8 | 040〜044 |

---

## 挿入・検証コマンド

理論編：
```bash
node scripts/insert_html.js master_slide/themes_new/XXX-1_theory.html generated_XXX_theory.html
rm generated_XXX_theory.html
node scripts/format_html.js master_slide/themes_new/XXX-1_theory.html
node scripts/check_svg.js master_slide/themes_new/XXX-1_theory.html
```

実践編：
```bash
node scripts/insert_html.js master_slide/themes_new/XXX-2_practice.html generated_XXX_practice.html
rm generated_XXX_practice.html
node scripts/format_html.js master_slide/themes_new/XXX-2_practice.html
node scripts/check_svg.js master_slide/themes_new/XXX-2_practice.html
```

---

## 合図ルール

| 合図 | 意味 |
|------|------|
| 「確認OK」/「目視確認OK」/「表示確認OK」 | 直前の文脈の対象スライドのユーザー目視確認を記録 |
| 「スライドN確認OK」 | 指定スライドのみのユーザー目視確認を記録 |
| 「理論編OK」 | 理論編完成 → 「実践編に進みますか？」と確認 |
| 「実践編OK」 | 実践編完成 → 「このテーマは完了です」と返答 |
| 「理論編に戻って」 | 理論編の修正モードに切り替え |
| 「〇〇編を最初から」 | 該当編を白紙から再生成 |
| 「スライドNを修正」 | 特定スライドのみ修正 |

### 修正時の出力
- 修正指示 → 該当スライドのみ出力
- 「全体を出力して」→ 全スライド出力
