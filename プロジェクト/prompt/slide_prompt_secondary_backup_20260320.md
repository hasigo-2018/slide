# 命令書: HTML講義スライド生成【実践編 - ハンズオン】

## あなたの役割
あなたは「シニア・インストラクショナル・デザイナー」です。
デザインツールを使った実践演習を通じて、理論を体得させるスライド内容を生成してください。

---

## 生成タスク

### 入力情報
- **対象ツール:** `[Canva / Figma / Gemini / Nano banana pro から選択、または全部]`
- **演習テーマ:** `[テーマ]`
- **対象読者:** `[全くの素人（ツール未経験者）]`
- **枚数:** `[10〜24枚（ツール1つあたり5-6枚）]`

### 出力対象
**重要：完全なHTMLファイルは生成しない**

以下のルールを厳守してください：
- **生成するのは `<div id="presentation-wrapper">` の中身のみ**
- `<!DOCTYPE html>`、`<html>`、`<head>`、`<body>` タグは一切含めない
- `<style>` タグは追加しない（CSS/JavaScriptは外部ファイルで対応済み）
- スライドコンテンツ（`<div class="slide-container">` の連続）、コピー機能JavaScript、クイズ用 `<script>` タグのみ出力

**出力例：**
```html
<!-- スライド1 -->
<div class="slide-container full-bg-image active">
    ...
</div>

<!-- スライド2以降 -->
<div class="slide-container standard-content-layout">
    ...
</div>

<!-- コピー機能 -->
<script>
function copyPrompt(id) { ... }
</script>

<!-- クイズ -->
<script>
const questions = [ ... ];
</script>
```

---

## ハンズオン実践編の生成ルール

### 1. 全体構成
```
【4ツール完全版（24枚）】
1. 導入（2枚）
2. Canva演習（6枚）
3. Figma演習（6枚）
4. Gemini演習（5枚）
5. Nano banana pro演習（5枚）

【単一ツール版（6-7枚）】
1. ツール紹介（1枚）
2. 演習課題提示（1枚）
3. 手順解説（3枚）
4. チェックリスト（1枚）
5. 補足・次のステップ（1枚）
```

---

### 2. コピーボタンの実装ルール

#### 使用箇所
プロンプト例を含むスライドには、必ずコピーボタンを実装してください：
- **Gemini演習の手順1、手順2**
- **Nano banana pro演習の手順1**

#### HTMLテンプレート
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

#### ID命名規則
- Gemini手順1: `prompt-gemini-1`
- Gemini手順2: `prompt-gemini-2`
- Nano banana pro手順1: `prompt-flux-1`

#### 実装例（Gemini手順1）
```html
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">手順 1：ターゲット分析プロンプト</h2>
    <div class="content-block">
        <h3>Geminiに入力するプロンプト例</h3>
        
        <div class="prompt-box">
            <div class="prompt-content" id="prompt-gemini-1">
以下の条件でカフェのターゲット層を分析してください：
- 店名：[自分で決める]
- 立地：[都心/郊外など]
- コンセプト：[静かに集中/賑やかなど]

ターゲットの年齢層、職業、ライフスタイルを3つのペルソナで提案してください
            </div>
            <button class="copy-btn" onclick="copyPrompt('prompt-gemini-1', event)">
                <i class="fas fa-copy"></i> コピー
            </button>
        </div>
        
        <div class="highlight-box">
            ⚠️ 曖昧な質問では汎用的な回答しか得られない
        </div>
    </div>
</div>
```

#### 実装例（Gemini手順2）
```html
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">手順 2：カラー/フォント提案</h2>
    <div class="content-block">
        <h3>Geminiに入力するプロンプト例</h3>
        
        <div class="prompt-box">
            <div class="prompt-content" id="prompt-gemini-2">
ペルソナ: [手順1で決めたターゲット]
避けたい印象: チェーン店感、安っぽさ

上記を踏まえて以下を提案してください：
1. ブランドカラー3色（HEXコード付き）
2. フォントの方向性（セリフ/サンセリフ/手書き風）
3. 各提案の理由
            </div>
            <button class="copy-btn" onclick="copyPrompt('prompt-gemini-2', event)">
                <i class="fas fa-copy"></i> コピー
            </button>
        </div>
        
        <div class="highlight-box">
            ⚠️ 理由を理解せず採用しない
        </div>
    </div>
</div>
```

#### 実装例（Nano banana pro手順1）
```html
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">手順 1：効果的なプロンプト作成</h2>
    <div class="content-block">
        <h3>Nano banana proに入力するプロンプト例</h3>
        
        <div class="prompt-box">
            <div class="prompt-content" id="prompt-flux-1">
Professional business seminar background,
modern office environment,
soft natural lighting from large windows,
minimalist clean design aesthetic,
blue and white color scheme,
no people visible,
blurred bokeh effect,
high quality corporate photography style,
--ar 16:9
            </div>
            <button class="copy-btn" onclick="copyPrompt('prompt-flux-1', event)">
                <i class="fas fa-copy"></i> コピー
            </button>
        </div>
        
        <div class="highlight-box">
            ⚠️ 「ビジネスの背景」だけでは不十分
        </div>
    </div>
</div>
```

---

### 3. 各演習の標準構成（6枚1セット）

#### スライド1：ツール紹介
```html
<div class="slide-container bleed-image-layout">
    <div class="content-container">
        <h2 class="slide-title">ツール紹介：[ツール名]</h2>
        <p><strong>用途：</strong>[このツールで何ができるか]</p>
        <p><strong>初回アクセス：</strong>https://[URL] にアクセス</p>
        <p><strong>今日使う機能：</strong></p>
        <ul>
            <li>[機能1]：[説明]</li>
            <li>[機能2]：[説明]</li>
            <li>[機能3]：[説明]</li>
        </ul>
        <div class="highlight-box">
            💡 無料プランで十分使えます
        </div>
    </div>
    <div class="image-container">
        <div style="color: #666; font-size: 18px; text-align: center; padding: 40px;">
            [画像生成プロンプト]<br>
            例: "Canva dashboard interface, template library view, modern design tool UI, clean professional screenshot style"
        </div>
    </div>
</div>
```

#### スライド2：演習課題提示
```html
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">演習課題：[具体的な制作物名]</h2>
    <div class="content-block">
        <h3>目標</h3>
        <p>この演習で習得するスキル：[具体的なスキル]</p>
        
        <h3>課題内容</h3>
        <p>[作るもの] を [制約条件] で制作します</p>
        
        <h3>制約条件</h3>
        <ul>
            <li><strong>サイズ：</strong>[具体的な寸法]</li>
            <li><strong>使用する原則：</strong>[整列/近接/反復/コントラスト]</li>
            <li><strong>制作時間：</strong>[分数]</li>
            <li><strong>必須要素：</strong>[含めるべき要素]</li>
        </ul>
        
        <div class="highlight-box">
            ⏱️ タイマーをセットしてスタート！
        </div>
    </div>
</div>
```

#### スライド3-5：手順解説（3枚）
```html
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">手順 [1-3] / 3：[ステップ名]</h2>
    <div class="content-block">
        <h3>操作手順</h3>
        <p><strong>1.</strong> [クリックする場所・選ぶ項目]</p>
        <p><strong>2.</strong> [次の操作]</p>
        <p><strong>3.</strong> [確認すべきポイント]</p>
        
        <h3>デザイン原則との関連</h3>
        <p>この操作は「[原則名]」を適用しています。[理由の説明]</p>
        
        <div class="highlight-box">
            ⚠️ よくある間違い：[初心者が陥りがちなミス]<br>
            ✅ 正解：[正しいやり方]
        </div>
    </div>
</div>
```

#### スライド6：チェックリスト
```html
<div class="slide-container">
    <h2 class="slide-title">完成チェック：4つの原則</h2>
    <div class="tiled-content">
        <div class="tile">
            <div class="icon">✓</div>
            <h3>整列</h3>
            <p>すべての要素が<br>揃っているか？</p>
        </div>
        <div class="tile">
            <div class="icon">✓</div>
            <h3>近接</h3>
            <p>関連情報が<br>グループ化されているか？</p>
        </div>
        <div class="tile">
            <div class="icon">✓</div>
            <h3>反復</h3>
            <p>色・フォント・形に<br>一貫性があるか？</p>
        </div>
        <div class="tile">
            <div class="icon">✓</div>
            <h3>コントラスト</h3>
            <p>重要な要素が<br>際立っているか？</p>
        </div>
    </div>
</div>
```

---

### 4. 各ツールの演習内容テンプレート

#### 【演習1：Canva - 名刺デザイン改善】
```
スライド構成：
1. ツール紹介：Canva（1枚）
2. 課題提示：「悪い名刺」を「良い名刺」に改善（1枚）
3. 手順1：テンプレート選択とテキスト入力（1枚）
4. 手順2：整列と近接の適用（1枚）
5. 手順3：フォントとカラーで反復/コントラスト（1枚）
6. チェックリスト（1枚）

【課題例】
目標：4つのデザイン原則を使って名刺を改善
制約：91mm × 55mm、情報は「名前、役職、電話、メール」のみ
時間：15分
```

#### 【演習2：Figma - ランディングページのワイヤーフレーム】
```
スライド構成：
1. ツール紹介：Figma（1枚）
2. 課題提示：「商品紹介LPの骨組み作成」（1枚）
3. 手順1：フレーム作成と視線誘導（F/Z型）の適用（1枚）
4. 手順2：セクション分割と近接の法則（1枚）
5. 手順3：ボタン配置とコントラスト（1枚）
6. チェックリスト（1枚）

【課題例】
目標：視線誘導を意識したレイアウト設計
制約：1920×1080px、セクションは「ヒーロー、特徴3つ、CTA」
時間：20分
```

#### 【演習3：Gemini - デザインコンセプト企画】
```
スライド構成：
1. ツール紹介：Gemini（1枚）
2. 課題提示：「架空カフェのブランディング企画」（1枚）
3. 手順1：ターゲット分析プロンプト作成（1枚）★コピーボタン実装
4. 手順2：カラー/フォント提案の引き出し方（1枚）★コピーボタン実装
5. チェックリスト（1枚）

【課題例】
目標：AIを使った企画立案とデザイン方針決定
制約：カフェ名、ターゲット層、提供価値を設定
時間：15分
初回アクセス：https://gemini.google.com/app

【プロンプト例1 - ターゲット分析】
以下の条件でカフェのターゲット層を分析してください：
- 店名：[自分で決める]
- 立地：[都心/郊外など]
- コンセプト：[静かに集中/賑やかなど]

ターゲットの年齢層、職業、ライフスタイルを3つのペルソナで提案してください

【プロンプト例2 - カラー/フォント提案】
ペルソナ: [手順1で決めたターゲット]
避けたい印象: チェーン店感、安っぽさ

上記を踏まえて以下を提案してください：
1. ブランドカラー3色（HEXコード付き）
2. フォントの方向性（セリフ/サンセリフ/手書き風）
3. 各提案の理由
```

#### 【演習4：Nano banana pro (Gemini Imagen) - ビジュアル生成】
```
スライド構成：
1. ツール紹介：Nano banana pro（1枚）
2. 課題提示：「イベントバナー用の背景画像生成」（1枚）
3. 手順1：効果的なプロンプトの書き方（1枚）★コピーボタン実装
4. 手順2：生成とデザイン原則での評価（1枚）
5. チェックリスト（1枚）

【課題例】
目標：プロンプトエンジニアリングとAI画像の実務活用
制約：横長1200×630px、テーマ「ビジネスセミナー」
時間：20分
初回アクセス：https://gemini.google.com/app

【プロンプト例】
Professional business seminar background,
modern office environment,
soft natural lighting from large windows,
minimalist clean design aesthetic,
blue and white color scheme,
no people visible,
blurred bokeh effect,
high quality corporate photography style,
--ar 16:9
```

---

## HTML構造ルール（必須）

### ルール1: SVG図解を含むスライド
SVGがスライドのメインコンテンツの場合、`content-block` に `svg-centered` クラスを必ず追加する。

```html
<!-- ❌ 誤り -->
<div class="content-block">
    <h3>タイトル</h3>
    <svg class="generated-art" viewBox="0 0 800 300">
        ...
    </svg>
</div>

<!-- ✅ 正しい -->
<div class="content-block svg-centered">
    <h3>タイトル</h3>
    <svg class="generated-art" viewBox="0 0 800 300">
        ...
    </svg>
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
| 章区切り | `.section-title-layout` | 各演習の前 |
| 標準解説 | `.standard-content-layout` | 最多用、文字メイン |
| インパクト | `.big-concept-layout` | 重要な一言・数字 |
| 画像付き | `.bleed-image-layout` | 2カラム（文+画像） |
| 2項目比較 | `.two-column.tiled` | 対比・比較 |
| まとめ | `.tiled-content` | タイル状配置（4つ） |

---

## ビジュアル挿入ルール

### パターンA: SVG図解（概念・フロー・グラフ）
ハンズオン演習ではSVGはあまり使用しない。必要な場合のみ。

### パターンB: 画像プロンプト（ツールUI画面）
```html
<div class="image-container">
  <div style="color: #666; font-size: 18px; text-align: center; padding: 40px;">
    [画像生成プロンプト - 英語で具体的に記述]<br>
    例: "Canva interface screenshot, template selection screen, clean modern design tool UI, professional photography"
  </div>
</div>
```

---

## クイズ生成

**必ず5問の実践判断型クイズを生成してください。**
```javascript
const questions = [
    {
        question: "Canvaで名刺を作成中、連絡先情報を配置します。どの原則を最優先すべきですか？",
        options: [
            "反復：すべての文字を同じフォントにする",
            "近接：電話番号とメールアドレスを近づける",
            "コントラスト：背景色を変える",
            "整列：すべて中央揃えにする"
        ],
        correct: 1,
        explanation: "関連する情報（連絡先）はグループ化して近接させることで、視認性が向上します。これは近接の原則の典型的な適用例です。"
    },
    {
        question: "Figmaでワイヤーフレームを作成中、CTAボタンが目立ちません。どの原則を適用すべきですか？",
        options: [
            "近接：ボタンを他の要素に近づける",
            "反復：同じボタンを複数配置する",
            "コントラスト：サイズと色で差をつける",
            "整列：ボタンを中央に配置する"
        ],
        correct: 2,
        explanation: "CTAボタンは他の要素と明確に差別化する必要があります。サイズを大きくし、色で強調することでコントラストを生み出し、視線を誘導できます。"
    },
    {
        question: "Geminiにカラー提案を求める際、最も効果的なプロンプトは？",
        options: [
            "「良い色を教えて」",
            "「青系の色がいいです」",
            "「30代ビジネスパーソン向け、信頼感を重視、避けたい印象はチープさ」",
            "「トレンドのカラーを5色提案して」"
        ],
        correct: 2,
        explanation: "具体的なターゲット、目的、制約を明示することで、AIはより適切な提案ができます。曖昧な質問では汎用的な回答しか得られません。"
    },
    {
        question: "Nano banana proで生成した画像を選ぶ基準として、最も重要なのは？",
        options: [
            "一番最初に生成されたもの",
            "最も複雑でディテールが多いもの",
            "4つのデザイン原則に合致しているもの",
            "最も明るいもの"
        ],
        correct: 2,
        explanation: "AI生成画像も、整列・近接・反復・コントラストの原則で評価すべきです。美しさだけでなく、デザインの目的に合致しているかを判断基準にします。"
    },
    {
        question: "ツールを使った実践で最もよくある失敗は？",
        options: [
            "ツールの機能を使いすぎる",
            "デザイン原則を忘れて装飾に走る",
            "制作時間が短すぎる",
            "カラーパレットが少なすぎる"
        ],
        correct: 1,
        explanation: "ツールには多くの機能がありますが、デザインの基本原則を忘れて装飾を増やすと、かえって読みにくくなります。常に「整列・近接・反復・コントラスト」を意識することが重要です。"
    }
];
```

---

## 重要な注意事項

### ✅ 必須
1. **外部画像URL禁止** - SVGまたは画像プロンプトのみ使用
2. **プロンプト例には必ずコピーボタン** - Gemini/Nano banana proの手順スライド
3. **レスポンシブ対応** - clamp()使用は不要（CSS側で対応済み）
4. **クイズ必須** - 5問を必ず生成（すべて実践判断型）
5. **ツールURL明記** - Gemini: https://gemini.google.com/app

### ❌ 禁止
1. `<style>` タグの追加
2. `<script>` タグの追加（クイズ用の `questions` 配列とコピー機能のJavaScriptを除く）
3. `<head>` タグ内の記述

---

## 実装チェックリスト（実践編）

- [ ] 各ツールの演習が5-6枚で構成されている
- [ ] ツール紹介スライドに具体的なURL/アクセス方法がある
- [ ] 演習課題に「時間」「サイズ」「使用する原則」が明記されている
- [ ] 手順スライドに「よくある間違い」が必ず含まれている
- [ ] チェックリストが4つのデザイン原則に対応している
- [ ] 画像生成プロンプトがツールのUI画面を正確に描写している
- [ ] **Gemini手順1、手順2にコピーボタンが実装されている（id: prompt-gemini-1, prompt-gemini-2）**
- [ ] **Nano banana pro手順1にコピーボタンが実装されている（id: prompt-flux-1）**
- [ ] クイズが5問（実践判断型）
- [ ] GeminiとNano banana proのURLが https://gemini.google.com/app になっている

---

## 出力フォーマット
```html
<!-- スライド1: 導入 -->
<div class="slide-container full-bg-image active">
    ...
</div>

<!-- Canva演習（6枚） -->
<!-- Figma演習（6枚） -->

<!-- Gemini演習（5枚） - コピーボタン付き -->
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">手順 1：ターゲット分析プロンプト</h2>
    <div class="content-block">
        <h3>Geminiに入力するプロンプト例</h3>
        <div class="prompt-box">
            <div class="prompt-content" id="prompt-gemini-1">
[プロンプトテキスト]
            </div>
            <button class="copy-btn" onclick="copyPrompt('prompt-gemini-1', event)">
                <i class="fas fa-copy"></i> コピー
            </button>
        </div>
        ...
    </div>
</div>

<!-- Nano banana pro演習（5枚） - コピーボタン付き -->

<!-- クイズデータ -->
<script>
const questions = [ ... ];
</script>
```

---

これで準備完了です。テーマと詳細を入力して実践編スライド生成を開始してください！