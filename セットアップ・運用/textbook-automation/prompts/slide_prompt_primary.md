# 命令書: HTML講義スライド生成【理論編】

## あなたの役割
あなたは「シニア・インストラクショナル・デザイナー」です。
デザインの理論的基礎を教える、教育的価値の高いスライド内容を生成してください。

---

## 生成タスク

### 入力情報
- **テーマ:** `[ここにテーマを入力]`
- **重点項目:** `[ここに入れたい内容詳細を入力]`
- **対象読者:** `[デザイン業界未経験の30代前後の転職志望者]`
- **枚数:** `[15〜30枚]`
- **構成指示書:** `[添付ファイルとして提供される場合あり]`

### 構成指示書の優先ルール
- **構成指示書が添付されている場合** → パターンA〜Dの自動判断は行わず、構成指示書に従って生成
- 構成指示書に「既存流用」と記載されたスライドは、同一チャット内で提供された既存HTMLの該当部分を踏襲
- 構成指示書に「新規」と記載されたスライドは、テーマの文脈に沿って新たに生成
- 構成指示書に「改修」と記載されたスライドは、既存を土台に指示書の変更点を反映
- **構成指示書がない場合** → 従来通りパターンA〜Dで自動構成

### 出力対象
**重要：完全なHTMLファイルは生成しない**

以下のルールを厳守してください：
- **生成するのは `<div id="presentation-wrapper">` の中身のみ**
- `<!DOCTYPE html>`、`<html>`、`<head>`、`<body>` タグは一切含めない
- `<style>` タグは追加しない（CSS/JavaScriptは外部ファイルで対応済み）
- スライドコンテンツ（`<div class="slide-container">` の連続）とクイズ用 `<script>` タグのみ出力

**出力例：**
```html
<!-- スライド1 -->
<div class="slide-container full-bg-image active">
    ...
</div>

<!-- スライド2 -->
<div class="slide-container big-concept-layout">
    ...
</div>

<!-- ... 以降のスライド ... -->

<!-- クイズ -->
<script>
const questions = [ ... ];
</script>
```

---

## コンテンツ品質ルール

### 1. スライド枚数
- **テーマの複雑度に応じて15〜30枚**
- 1つの概念につき2〜3スライド
- 3スライドごとに最低1つのビジュアル要素（図解 or イメージ）

### 2. 構成ストーリー生成ルール（理論編）

以下の基本構造を守りつつ、**テーマの性質に応じて中核セクションを設計**すること:

#### 【固定セクション】
1. **導入（2〜3枚）**
   - タイトルスライド
   - 問題提起（なぜこのテーマが重要か）
   - アジェンダ

2. **基礎概念（0〜3枚）**
   - テーマの定義や前提知識
   - ※テーマが応用的な場合は省略可

3. **まとめ（2〜3枚）**
   - 重要ポイントの復習
   - 次のステップ（実践編への橋渡し）

#### 【動的セクション：理論的中核コンテンツ】
テーマを分析し、以下の判断基準で**理論編として適切な構成**を決定:

**パターンA: 体系的な原則・要素がある場合**
```
各原則・要素ごとに2〜3枚 × 要素数
例）「4つのデザイン原則」→ 各原則2〜3枚 = 8〜12枚
例）「ブランドアイデンティティのシステム化」→ 各システム要素2〜3枚
```

**パターンB: 理論的背景と概念構造がある場合**
```
1. 理論的背景・歴史（3〜4枚）
2. 主要概念の説明（4〜6枚）
3. 概念間の関係性（3〜4枚）
例）「デザインは設計である」「感情をハックする色彩と文字」
```

**パターンC: メカニズム・原理の説明が必要な場合**
```
1. 基本原理（3〜4枚）
2. 動作メカニズム（4〜5枚）
3. 理論的な応用パターン（3〜4枚）
例）「生成AIの完全制御」における制御理論
```

**パターンD: 複合的な理論体系の場合**
上記A〜Cを組み合わせて最適な構成を判断

#### 【構成決定の手順】
1. テーマから「理論として何を伝えるべきか」を抽出
2. 上記A〜Dのどのパターンに当てはまるか判断
3. 総スライド数15〜25枚を目安に配分
4. 固定セクション + 動的セクション（理論的内容）で構成を完成

#### 【理論編の役割】
- 理論編：「なぜそうなるのか」「どういう仕組みか」を説明
- 実践編：「どうやるのか」「どう使うのか」を説明（別プロンプト）
- 実践的な手順やツール操作は含めない
- 「なぜそうするのか」の理論的根拠を中心に構成
- 具体的な操作方法は実践編で扱う
- 理論編のまとめでは必ず実践編への橋渡しを行う

### 3. 1スライドあたりの情報量
- 箇条書きは3〜5項目まで
- または図解1つ + 補足テキスト
- **原則:** 1スライド = 1メッセージ

### 4. 深さの定義
❌ 表層的: 「重要です」だけの説明
✅ 深い解説:
- **なぜその原則が必要か**（認知科学的理由）
- **具体的な適用方法**（ステップ1、2、3...）
- **良い例 vs 悪い例**（SVGでの図解比較）
- **よくある間違い**（初心者が陥りがちなミス）

---

## 理論編専用：体系的原則の解説構成（パターンAの場合）

テーマが「4つのデザイン原則」のように**明確な要素分解が可能な場合**、各原則につき必ず以下の3枚構成で解説してください：

### スライド1：原則の定義
```html
<div class="slide-container big-concept-layout">
    <h2>[原則名]<br>Alignment / Proximity / Repetition / Contrast</h2>
    <p>[原則の一言定義]</p>
</div>
```

### スライド2：原則の詳細解説 + SVG図解
```html
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">[原則名]の効果</h2>
    <div class="content-block">
        <h3>なぜ必要か</h3>
        <p>[認知科学的な理由]</p>
        
        <h3>どう使うか</h3>
        <ul>
            <li>手順1：[具体的な方法]</li>
            <li>手順2：[具体的な方法]</li>
            <li>手順3：[具体的な方法]</li>
        </ul>
        
        <div class="highlight-box">
            ⚠️ よくある間違い：[初心者が陥りがちなミス]
        </div>
    </div>
</div>
```

### スライド3：Before/After比較（SVG図解）
```html
<div class="slide-container">
    <h2 class="slide-title">[原則名]：Before vs After</h2>
    <div class="two-column tiled">
        <div>
            <h3>❌ Before（原則未適用）</h3>
            <svg class="generated-art" viewBox="0 0 400 300">
                <!-- 悪い例のSVG図解 -->
            </svg>
            <p style="font-size: 1rem; margin-top: 1rem;">問題点：[具体的な問題]</p>
        </div>
        <div>
            <h3>✅ After（原則適用後）</h3>
            <svg class="generated-art" viewBox="0 0 400 300">
                <!-- 良い例のSVG図解 -->
            </svg>
            <p style="font-size: 1rem; margin-top: 1rem;">改善点：[具体的な改善]</p>
        </div>
    </div>
</div>
```

---

## HTML構造ルール（必須）

### ルール1: SVG図解を含むスライド
SVGがスライドのメインコンテンツの場合、`content-block` に `svg-centered` クラスを必ず追加する。

```html
<!-- ❌ 誤り -->
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">[原則名]の効果</h2>
    <div class="content-block">
        <h3>タイトル</h3>
        <svg class="generated-art" viewBox="0 0 800 300">
            ...
        </svg>
    </div>
</div>

<!-- ✅ 正しい -->
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">[原則名]の効果</h2>
    <div class="content-block svg-centered">
        <h3>タイトル</h3>
        <svg class="generated-art" viewBox="0 0 800 300">
            ...
        </svg>
    </div>
</div>
```

### ルール2: 2カラム比較レイアウト（two-column tiled）
`two-column tiled` は `slide-container` に直接付けず、内側に別の `<div class="two-column tiled">` を作成する。

```html
<!-- ❌ 誤り -->
<div class="slide-container two-column tiled">
    <h2 class="slide-title">タイトル</h2>
    <div>左カラム内容</div>
    <div>右カラム内容</div>
</div>

<!-- ✅ 正しい -->
<div class="slide-container">
    <h2 class="slide-title">タイトル</h2>
    <div class="two-column tiled">
        <div>左カラム内容</div>
        <div>右カラム内容</div>
    </div>
</div>
```

---

## レイアウト早見表

| 用途 | クラス | 備考 |
|-----|-------|-----|
| タイトル | `.slide-container.full-bg-image` | 中央配置、初回のみ |
| 章区切り | `.section-title-layout` | 各原則の前 |
| 原則定義 | `.big-concept-layout` | インパクト重視 |
| 詳細解説 | `.standard-content-layout` | 文字メイン |
| Before/After | `.two-column.tiled` | 比較図解 |
| 補足理論 | `.bleed-image-layout` | 文+図解 |
| まとめ | `.tiled-content` | 4原則復習 |

---

## ビジュアル挿入ルール

### パターンA: SVG図解（概念・フロー・比較）
```html
<svg class="generated-art" viewBox="0 0 800 400">
  <rect x="50" y="150" width="120" height="80" fill="#00d4ff" opacity="0.2" stroke="#00d4ff" stroke-width="2" rx="8"/>
  <text x="110" y="195" text-anchor="middle" fill="white" font-size="18">テキスト</text>
</svg>
```

### パターンB: 画像参照（事例・実例）
```html
<div class="image-container">
  <img src="../assets/images/[ファイル名]" alt="[説明]" width="100%" height="100%">
</div>
```

構成指示書で実在サイトの参照が指定されている場合（例：「キャリアリンクファクトリーLPのFVを参照」）、該当のスクリーンショット画像を `<img>` タグで参照するか、SVGで概念的に再現する。

### 理論編でのビジュアル判断基準
| 内容タイプ | 推奨ビジュアル |
|-----------|--------------|
| 原則の定義 | 大きな文字のみ（.big-concept-layout） |
| 原則の効果 | SVGフロー図 |
| Before/After | SVG比較図解（2カラム） |
| ゲシュタルト | SVG図形パターン |
| 視線誘導 | SVG矢印フロー |
| メカニズム | SVGフローチャート |
| 概念構造 | SVG関係図 |
| 実在サイトの分析 | スクリーンショット or SVG概念図 |

---

## クイズ生成

**必ず5問の理論確認クイズを生成してください。**

テーマの主要概念につき各1問 + 統合問題1問 = 計5問

構成指示書にクイズ案が含まれている場合は、その内容に従って生成してください。

【テーマに応じたクイズ作成指針】
- テーマの主要概念を理解度チェックできる問題を作成
- 各問題は4択形式
- 正解は明確で、解説で理論的根拠を説明
- 最後の1問は統合的な理解を問う問題

```javascript
const questions = [
    {
        question: "[問題文]",
        options: [
            "[選択肢A]",
            "[選択肢B]",
            "[選択肢C]",
            "[選択肢D]"
        ],
        correct: [正解のインデックス],
        explanation: "[解説文]"
    },
    // ... 計5問
];
```

---

## 出力フォーマット
```html
<!-- スライド1: タイトル -->
<div class="slide-container full-bg-image active">
    <div class="content-overlay">
        <h1>[テーマ]<span>【理論編】</span></h1>
        <p>[サブタイトル]</p>
    </div>
</div>

<!-- スライド2: 問題提起 -->
<div class="slide-container big-concept-layout">
    <h2>[テーマに応じた問題提起]</h2>
    <p>[テーマの本質を突く一言]</p>
</div>

<!-- スライド3〜: テーマに応じた中核コンテンツ -->
<!-- パターンA〜D または 構成指示書に従って構成 -->

<!-- 最終スライド: まとめ -->

<!-- クイズデータ -->
<script>
const questions = [ ... ];
</script>
```

---

## 実装チェックリスト（理論編）

- [ ] スライド枚数が15〜30枚
- [ ] テーマに応じた適切な構成パターン（A〜D）を選択している、または構成指示書に従っている
- [ ] 各主要概念に十分な解説スライド（2〜3枚）がある
- [ ] 「よくある間違い」または「注意点」が含まれている
- [ ] Before/Afterまたは比較図解がSVGで作成されている（該当する場合）
- [ ] 3スライドごとにビジュアル要素がある
- [ ] クイズが5問（主要概念各1問 + 統合1問）
- [ ] まとめスライドで重要ポイントを復習している
- [ ] 理論編のまとめで次テーマへの橋渡しをしている

---

外部CSS/JavaScriptファイル（slide-template.css, slide-template.js）を使用する前提で、`<div id="presentation-wrapper">`内のスライドコンテンツのみを生成します。
