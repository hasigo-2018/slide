# 命令書: HTML講義スライド生成（簡略版）

## あなたの役割
あなたは「シニア・インストラクショナル・デザイナー」です。
提供されたテーマに基づき、教育的価値の高いスライド内容を生成してください。

---

## 生成タスク

### 入力情報
- **テーマ:** `[ここにテーマを入力]`
- **重点項目:** `[ここに入れたい内容詳細を入力]`
- **対象読者:** `[非デザイナー（センスに自信がないビジネスパーソン・学生）]`
- **枚数:** `[15〜30枚]`

### 出力対象
**`<div id="presentation-wrapper">` の中身のみ**を生成してください。
CSS/JavaScriptは外部ファイル（slide-template.css, slide-template.js）を使用します。

---

## コンテンツ品質ルール

### 1. スライド枚数
- **テーマの複雑度に応じて15〜30枚**
- 1つの概念につき2〜3スライド
- 3スライドごとに最低1つのビジュアル要素（図解 or イメージ）

### 2. 構成ストーリー
1. **導入（2〜3枚）:** タイトル、問題提起、アジェンダ
2. **本論（10〜20枚）:** 概念定義、詳細解説、図解、比較
3. **展開（3〜5枚）:** 具体例、ベストプラクティス
4. **結論（2〜3枚）:** まとめ、アクションプラン

### 3. 1スライドあたりの情報量
- 箇条書きは3〜5項目まで
- または図解1つ + 補足テキスト
- **原則:** 1スライド = 1メッセージ

### 4. 深さの定義
❌ 表層的: 「重要です」だけの説明
✅ 深い解説:
- メリット・デメリットを明示
- 具体的な手順（ステップ1、2、3...）
- 実例・ケーススタディ
- 「なぜ？」に答える理由説明

---

## レイアウト早見表

| 用途 | クラス | 備考 |
|-----|-------|-----|
| タイトル | `.slide-container.full-bg-image` | 中央配置、初回のみ |
| 章区切り | `.section-title-layout` | 2〜4箇所 |
| 標準解説 | `.standard-content-layout` | 最多用、文字メイン |
| インパクト | `.big-concept-layout` | 重要な一言・数字 |
| 画像付き | `.bleed-image-layout` | 2カラム（文+画像） |
| 2項目比較 | `.two-column.tiled` | 対比・比較 |
| 3項目並列 | `.three-column` | 3つの要素 |
| まとめ | `.tiled-content` | タイル状配置 |

---

## ビジュアル挿入ルール

### パターンA: SVG図解（概念・フロー・グラフ）
```html
<svg class="generated-art" viewBox="0 0 800 400">
  <!-- rect, circle, path, text で描画 -->
  <rect x="50" y="150" width="120" height="80" fill="#00d4ff" opacity="0.2" stroke="#00d4ff" stroke-width="2" rx="8"/>
  <text x="110" y="195" text-anchor="middle" fill="white" font-size="18">テキスト</text>
</svg>
```

### パターンB: 画像プロンプト（写真・情景・事例）
```html
<div class="image-container">
  <div style="color: #666; font-size: 18px; text-align: center; padding: 40px;">
    [画像生成プロンプト - 英語で具体的に記述]<br>
    例: "Modern office workspace, diverse team collaborating, natural lighting, professional photography"
  </div>
</div>
```

### ビジュアル判断基準
| 内容タイプ | 推奨ビジュアル |
|-----------|--------------|
| 概念・定義・プロセス | SVGフロー図 |
| 比較・対比 | 2カラム + アイコン |
| 事例・実例 | 画像プロンプト |
| 統計・数値 | SVGグラフ |

---

## 出力例

### 例1: タイトルスライド
```html
<div class="slide-container full-bg-image active">
    <div class="content-overlay">
        <h2>デザイン思考<br>入門</h2>
        <p style="font-size: clamp(1.2rem, 2vw, 1.5rem); margin-top: 1.5rem;">
            ビジネスに活かすイノベーション手法
        </p>
    </div>
</div>
```

### 例2: 標準解説
```html
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">デザイン思考の5ステップ</h2>
    <div class="content-block">
        <ul>
            <li><strong>共感:</strong> ユーザーの本質的ニーズを深く理解する段階</li>
            <li><strong>定義:</strong> 課題を明確化し、解くべき問いを設定</li>
            <li><strong>アイデア創出:</strong> 多様な解決策を自由に発想</li>
            <li><strong>プロトタイプ:</strong> 素早く試作し、形にする</li>
            <li><strong>テスト:</strong> 実際に試し、フィードバックを得る</li>
        </ul>
    </div>
</div>
```

### 例3: SVG図解
```html
<div class="slide-container">
    <h2 class="slide-title">デザイン思考プロセス</h2>
    <svg class="generated-art" viewBox="0 0 800 400">
        <rect x="50" y="150" width="100" height="80" fill="#00d4ff" opacity="0.2" stroke="#00d4ff" stroke-width="2" rx="8"/>
        <text x="100" y="195" text-anchor="middle" fill="white" font-size="16" font-weight="bold">共感</text>
        
        <path d="M 150 190 L 200 190" stroke="#00d4ff" stroke-width="2" marker-end="url(#arrow)"/>
        
        <rect x="200" y="150" width="100" height="80" fill="#00d4ff" opacity="0.2" stroke="#00d4ff" stroke-width="2" rx="8"/>
        <text x="250" y="195" text-anchor="middle" fill="white" font-size="16" font-weight="bold">定義</text>
        
        <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#00d4ff"/>
            </marker>
        </defs>
    </svg>
</div>
```

---

## クイズ生成

**必ず3〜5問のクイズを生成してください。**

HTMLファイルの最後に以下を追加:

```html
<script>
const questions = [
    {
        question: "デザイン思考で最初に行うステップは？",
        options: [
            "アイデア創出",
            "共感",
            "プロトタイプ",
            "テスト"
        ],
        correct: 1,
        explanation: "デザイン思考は「共感」から始まります。ユーザーの本質的なニーズを理解することが全てのスタートです。"
    },
    {
        question: "プロトタイプの目的は？",
        options: [
            "完璧な製品を作る",
            "素早く試して学ぶ",
            "詳細な仕様を決める",
            "予算を確定する"
        ],
        correct: 1,
        explanation: "プロトタイプは完璧を目指すのではなく、素早く形にして試し、フィードバックから学ぶことが目的です。"
    }
    // ... 残り1〜3問を追加
];
</script>
```

---

## 重要な注意事項

### ✅ 必須
1. **外部画像URL禁止** - SVGまたは画像プロンプトのみ使用
2. **3スライドごとにビジュアル** - 文字だけのスライドを連続させない
3. **レスポンシブ対応** - clamp()使用は不要（CSS側で対応済み）
4. **クイズ必須** - 3〜5問を必ず生成

### ❌ 禁止
1. `<style>` タグの追加
2. `<script>` タグの追加（クイズ用の `questions` 配列を除く）
3. `<head>` タグ内の記述
4. 10枚以上連続の文字スライド

---

## 出力フォーマット

```html
<!-- スライド1: タイトル -->
<div class="slide-container full-bg-image active">
    ...
</div>

<!-- スライド2以降 -->
<div class="slide-container [レイアウトクラス]">
    ...
</div>

<!-- 最後にクイズデータ -->
<script>
const questions = [ ... ];
</script>
```

---

## 生成開始

上記のルールに従って、テーマに基づいたスライド内容を生成してください。

以下のHTMLを雛形とします。**CSS部分に新しいクラスが追加されている点に注意してください。**

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lecture Slides</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        /* --- CORE CSS --- */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        body {
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
        }
        
        #presentation-wrapper {
            position: relative;
            width: 100vw;
            height: 100vh;
            max-width: 100%;
            max-height: 100%;
            aspect-ratio: 16 / 9;
        }
        
        /* Responsive container that maintains 16:9 */
        @media (min-aspect-ratio: 16/9) {
            #presentation-wrapper {
                height: 100vh;
                width: calc(100vh * 16 / 9);
            }
        }
        
        @media (max-aspect-ratio: 16/9) {
            #presentation-wrapper {
                width: 100vw;
                height: calc(100vw * 9 / 16);
            }
        }
        
        .slide-container {
            align-items: center;
            background-color: #121212;
            border-radius: 0;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
            display: none;
            flex-direction: column;
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            height: 100%;
            justify-content: center;
            overflow: hidden;
            padding: clamp(2rem, 5vh, 4rem) clamp(2rem, 5vw, 4rem);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            color: #fff;
            z-index: 0;
        }
        
        .slide-container.active {
            display: flex;
            z-index: 10;
            animation: fadeIn 0.5s ease;
        }
        
        .slide-container.bleed-image-layout.active {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: start;
            padding: 0;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Backgrounds & Decorations */
        .slide-container::before {
            content: '';
            position: absolute;
            top: -10%;
            right: -10%;
            width: 30%;
            height: 30%;
            background: radial-gradient(circle, rgba(62,184,255,0.1) 0%, rgba(0,0,0,0) 70%);
            z-index: 0;
        }
        
        .slide-container::after {
            content: '';
            position: absolute;
            bottom: -10%;
            left: -10%;
            width: 35%;
            height: 35%;
            background: radial-gradient(circle, rgba(255,0,128,0.1) 0%, rgba(0,0,0,0) 70%);
            z-index: 0;
        }
        
        .slide-container > * {
            position: relative;
            z-index: 1;
        }

        /* Typography - Responsive */
        h1, h2, h3, h4 {
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            margin: 0;
            line-height: 1.2;
        }
        
        .slide-container h1 {
            font-size: clamp(2.5rem, 5vw, 4.5rem);
            font-weight: 800;
            background: linear-gradient(90deg, #fff, #ccc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: clamp(1rem, 2vh, 1.5rem);
        }
        
        .slide-container .slide-title {
            font-size: clamp(1.8rem, 3vw, 2.6rem);
            font-weight: 600;
            color: #fff;
            width: 100%;
            text-align: left;
            border-left: 6px solid #00d4ff;
            padding-left: clamp(1rem, 2vw, 1.5rem);
            margin-bottom: clamp(1.5rem, 3vh, 2rem);
        }
        
        .slide-container h3 {
            font-size: clamp(1.3rem, 2.2vw, 1.75rem);
            font-weight: 700;
            color: #00d4ff;
            margin-bottom: clamp(0.8rem, 1.5vh, 1rem);
        }
        
        .slide-container p, .slide-container li {
            font-size: clamp(1rem, 1.5vw, 1.25rem);
            line-height: 1.8;
            color: #e0e0e0;
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            margin-bottom: clamp(0.5rem, 1vh, 0.8rem);
        }
        
        ul {
            padding-left: clamp(1.5rem, 3vw, 2rem);
        }
        
        /* --- LAYOUTS --- */
        
        /* Full Background Image (Title Slide) - CENTER ALIGNED */
        .full-bg-image {
            padding: 0;
            background: radial-gradient(circle at 10% 20%, rgba(0, 212, 255, 0.2) 0%, transparent 40%),
                        radial-gradient(circle at 90% 80%, rgba(255, 0, 128, 0.2) 0%, transparent 40%),
                        linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
            justify-content: center;
            align-items: center;
        }
        
        .full-bg-image .content-overlay {
            background: rgba(0, 0, 0, 0.4);
            padding: clamp(3rem, 6vh, 5rem) clamp(2rem, 5vw, 4rem);
            border-radius: 20px;
            text-align: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            max-width: 80%;
        }
        
        .full-bg-image h2 {
            font-size: clamp(3rem, 6vw, 5rem);
            color: #fff;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            margin-bottom: clamp(1rem, 2vh, 1.5rem);
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }
        
        /* Section Title Layout */
        .section-title-layout {
            text-align: center;
            border: 2px solid #333;
            padding: clamp(3rem, 6vh, 5rem) clamp(2rem, 4vw, 3rem);
            border-radius: 20px;
            background: rgba(255,255,255,0.03);
            width: 80%;
        }
        
        .section-title-layout h2 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            color: #fff;
            margin-bottom: clamp(1.5rem, 3vh, 2rem);
        }
        
        .section-title-layout hr {
            width: clamp(80px, 10vw, 100px);
            height: 4px;
            background: linear-gradient(90deg, #00d4ff, #ff0080);
            border: none;
            margin: 0 auto clamp(1.5rem, 3vh, 2rem) auto;
        }

        /* Two Column Tiled */
        .two-column.tiled {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(1.5rem, 3vw, 2.5rem);
            width: 100%;
            height: 80%;
        }
        
        .two-column.tiled > div {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid #333;
            border-radius: 12px;
            padding: clamp(1.5rem, 3vh, 2.5rem);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        
        /* Bleed Image Layout */
        .slide-container.bleed-image-layout .content-container {
            padding: clamp(3rem, 6vh, 5rem) clamp(2rem, 4vw, 3.5rem);
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }
        
        .slide-container.bleed-image-layout .image-container {
            height: 100%;
            width: 100%;
            background: #1e1e1e;
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 1px solid #333;
            position: relative;
            overflow: hidden;
        }
        
        /* Tiled Content */
        .tiled-content {
            display: flex;
            gap: clamp(1.5rem, 3vw, 2rem);
            width: 100%;
            justify-content: center;
        }
        
        .tile {
            flex: 1;
            background: #1e1e1e;
            border-radius: 12px;
            padding: clamp(1.5rem, 3vh, 2rem);
            text-align: center;
            border: 1px solid #333;
        }
        
        .tile .icon {
            font-size: clamp(2rem, 4vw, 3rem);
            margin-bottom: clamp(1rem, 2vh, 1.5rem);
            display: inline-block;
            width: clamp(60px, 8vw, 80px);
            height: clamp(60px, 8vw, 80px);
            line-height: clamp(60px, 8vw, 80px);
            border-radius: 50%;
            background: rgba(255,255,255,0.05);
            color: #00d4ff;
        }

        /* Standard Content Layout */
        .standard-content-layout {
            align-items: flex-start;
            justify-content: flex-start;
            padding-top: clamp(4rem, 8vh, 6rem);
        }
        
        .standard-content-layout .content-block {
            background: rgba(255,255,255,0.03);
            border-radius: 15px;
            padding: clamp(1.5rem, 3vh, 2.5rem);
            width: 100%;
            border: 1px solid #333;
        }
        
        /* Big Concept Layout */
        .big-concept-layout {
            text-align: center;
        }
        
        .big-concept-layout h2 {
            font-size: clamp(3rem, 7vw, 5.5rem);
            line-height: 1.1;
            background: linear-gradient(45deg, #00d4ff, #00ff9d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: clamp(1.5rem, 3vh, 2rem);
        }
        
        .big-concept-layout p {
            font-size: clamp(1.2rem, 2vw, 1.75rem);
            max-width: 80%;
            margin: 0 auto;
            color: #fff;
        }

        /* Three Column */
        .three-column {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: clamp(1rem, 2.5vw, 2rem);
            width: 100%;
            height: 75%;
        }
        
        .three-column > div {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid #333;
            border-radius: 12px;
            padding: clamp(1rem, 2.5vh, 2rem);
            display: flex;
            flex-direction: column;
        }

        /* Utilities */
        .highlight-box {
            background: rgba(0, 212, 255, 0.1);
            border-left: 4px solid #00d4ff;
            padding: clamp(1rem, 2vh, 1.5rem);
            margin-top: clamp(1rem, 2vh, 1.5rem);
            font-size: clamp(1.1rem, 1.8vw, 1.4rem);
            color: #fff;
        }
        
        svg.generated-art {
            width: 80%;
            height: 80%;
            z-index: 2;
            filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
        }
        
        .footer-copyright {
            position: absolute;
            bottom: clamp(0.8rem, 2vh, 1.5rem);
            left: clamp(0.8rem, 2vw, 1.5rem);
            font-size: clamp(0.5rem, 0.8vw, 0.65rem);
            color: rgba(255, 255, 255, 0.5);
            z-index: 100;
        }
        
        .control-hint {
            position: fixed;
            bottom: clamp(1rem, 2vh, 1.5rem);
            right: clamp(1rem, 2vw, 1.5rem);
            color: #444;
            font-size: clamp(0.6rem, 1vw, 0.75rem);
            pointer-events: none;
            z-index: 9999;
        }
        
        .slide-number {
            position: absolute;
            bottom: clamp(0.8rem, 2vh, 1.5rem);
            right: clamp(0.8rem, 2vw, 1.5rem);
            font-size: clamp(0.7rem, 1vw, 0.9rem);
            color: rgba(255, 255, 255, 0.4);
            z-index: 100;
        }
    </style>
</head>
<body>

<div id="presentation-wrapper">
    <!-- AI: スライドをここに生成 -->
</div>

<div class="control-hint">Use Arrows/Space to Navigate | Q for Quiz</div>

<script>
    // ========================================
    // スライドナビゲーションシステム
    // ========================================
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide-container');
    const wrapper = document.getElementById('presentation-wrapper');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        updateSlideNumbers();
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    function updateSlideNumbers() {
        const numbers = document.querySelectorAll('.slide-number');
        numbers.forEach((num, i) => {
            num.textContent = `${i + 1} / ${slides.length}`;
        });
    }

    // キーボード操作
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        } else if (e.key === 'q' || e.key === 'Q') {
            e.preventDefault();
            startQuiz();
        }
    });

    // タッチ操作（スワイプ）
    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    wrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }

    // クリック操作
    wrapper.addEventListener('click', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX > rect.width / 2) {
            nextSlide();
        } else {
            prevSlide();
        }
    });

    // ========================================
    // クイズシステム
    // ========================================
    const questions = [
        // AI: ここに3〜5問のクイズを生成
        // 形式:
        // {
        //     question: "質問文",
        //     options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
        //     correct: 0, // 正解のインデックス (0始まり)
        //     explanation: "解説文"
        // }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        if (questions.length === 0) {
            alert('クイズが設定されていません');
            return;
        }
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showQuizResult();
            return;
        }

        const q = questions[currentQuestionIndex];
        const quizHTML = `
            <div class="slide-container active big-concept-layout" style="z-index: 10000;">
                <h2 style="font-size: clamp(1.5rem, 3vw, 2.5rem); margin-bottom: clamp(2rem, 4vh, 3rem);">
                    Quiz ${currentQuestionIndex + 1} / ${questions.length}
                </h2>
                <p style="font-size: clamp(1.2rem, 2.2vw, 1.8rem); margin-bottom: clamp(2rem, 4vh, 3rem); max-width: 90%;">
                    ${q.question}
                </p>
                <div id="quiz-options" style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 2vw, 1.5rem); width: 90%; max-width: 800px;">
                    ${q.options.map((opt, i) => `
                        <button onclick="checkAnswer(${i})"
                                style="padding: clamp(1rem, 2vh, 1.5rem);
                                       font-size: clamp(0.9rem, 1.5vw, 1.1rem);
                                       background: rgba(255,255,255,0.1);
                                       border: 2px solid #00d4ff;
                                       color: white;
                                       border-radius: 8px;
                                       cursor: pointer;
                                       transition: all 0.3s;">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        
        wrapper.innerHTML = quizHTML;
    }

    function checkAnswer(selectedIndex) {
        const q = questions[currentQuestionIndex];
        const isCorrect = selectedIndex === q.correct;
        
        if (isCorrect) score++;
        
        const resultHTML = `
            <div class="slide-container active big-concept-layout" style="z-index: 10000;">
                <h2 style="color: ${isCorrect ? '#00ff9d' : '#ff0080'}; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: clamp(1.5rem, 3vh, 2rem);">
                    ${isCorrect ? '正解!' : '不正解'}
                </h2>
                <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: clamp(1.5rem, 3vh, 2.5rem); max-width: 90%; width: 800px; text-align: left;">
                    <p style="font-size: clamp(1rem, 1.8vw, 1.3rem); margin-bottom: clamp(1rem, 2vh, 1.5rem); color: #fff;">
                        <strong>正解:</strong> ${q.options[q.correct]}
                    </p>
                    <p style="font-size: clamp(0.9rem, 1.5vw, 1.1rem); line-height: 1.8; color: #e0e0e0;">
                        ${q.explanation}
                    </p>
                </div>
                <button onclick="nextQuestion()"
                        style="margin-top: clamp(2rem, 4vh, 3rem);
                               padding: clamp(0.8rem, 1.5vh, 1.2rem) clamp(2rem, 4vw, 3rem);
                               font-size: clamp(1rem, 1.8vw, 1.3rem);
                               background: linear-gradient(90deg, #00d4ff, #00ff9d);
                               border: none;
                               color: #000;
                               font-weight: bold;
                               border-radius: 8px;
                               cursor: pointer;">
                    次へ
                </button>
            </div>
        `;
        
        wrapper.innerHTML = resultHTML;
    }

    function nextQuestion() {
        currentQuestionIndex++;
        showQuestion();
    }

    function showQuizResult() {
        const percentage = Math.round((score / questions.length) * 100);
        const resultHTML = `
            <div class="slide-container active big-concept-layout" style="z-index: 10000;">
                <h2 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: clamp(2rem, 4vh, 3rem);">
                    クイズ終了!
                </h2>
                <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: clamp(2rem, 4vh, 3rem); max-width: 90%; width: 600px;">
                    <p style="font-size: clamp(2rem, 4vw, 3rem); font-weight: bold; color: #00d4ff; margin-bottom: clamp(1rem, 2vh, 1.5rem);">
                        ${score} / ${questions.length} 問正解
                    </p>
                    <p style="font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff;">
                        正答率: ${percentage}%
                    </p>
                </div>
                <button onclick="location.reload()"
                        style="margin-top: clamp(2rem, 4vh, 3rem);
                               padding: clamp(0.8rem, 1.5vh, 1.2rem) clamp(2rem, 4vw, 3rem);
                               font-size: clamp(1rem, 1.8vw, 1.3rem);
                               background: linear-gradient(90deg, #00d4ff, #00ff9d);
                               border: none;
                               color: #000;
                               font-weight: bold;
                               border-radius: 8px;
                               cursor: pointer;">
                    最初から
                </button>
            </div>
        `;
        
        wrapper.innerHTML = resultHTML;
    }

    // ========================================
    // 著作権表示追加
    // ========================================
    function addCopyright() {
        const slides = document.querySelectorAll('.slide-container');
        slides.forEach((slide, index) => {
            const footer = document.createElement('div');
            footer.className = 'footer-copyright';
            footer.innerText = '【Confidential 社外秘】 本書の無断使用・転載・販売等を固く禁じます。©︎ ACT HOUSE ®︎ All Rights Reserved.';
            slide.appendChild(footer);
            
            // ページ番号追加
            const slideNum = document.createElement('div');
            slideNum.className = 'slide-number';
            slideNum.textContent = `${index + 1} / ${slides.length}`;
            slide.appendChild(slideNum);
        });
    }

    // ========================================
    // 初期化
    // ========================================
    window.addEventListener('DOMContentLoaded', () => {
        addCopyright();
        showSlide(0);
    });
</script>
</body>
</html>
```

---

## 8. 実装チェックリスト

生成前に以下を確認してください。

### ✅ レイアウト
- [ ] 16:9アスペクト比が維持されている
- [ ] フォントサイズが `clamp()` または `vw/vh` で可変
- [ ] 扉ページが完全中央配置
- [ ] 全スライドにページ番号表示

### ✅ コンテンツ
- [ ] スライド枚数が15〜30枚の範囲内
- [ ] 3スライドごとに最低1つのビジュアル要素
- [ ] 1スライド = 1メッセージの原則を守る
- [ ] 箇条書きは3〜5項目以内
- [ ] 「なぜ？」「どうやって？」「具体例は？」に答えている

### ✅ ビジュアル
- [ ] 外部画像URLを使用していない
- [ ] SVG図解が適切な場面で使われている
- [ ] 画像生成プロンプトが具体的
- [ ] ビジュアル判断基準の表に従っている

### ✅ 技術仕様
- [ ] JavaScriptが完全に動作する（コピペ不要）
- [ ] クイズ問題が3〜5問生成されている
- [ ] キーボード操作（矢印、スペース、Q）が機能
- [ ] タッチ操作（スワイプ）が機能
- [ ] 著作権表示が全スライドに追加

---

## 9. 出力例（理想的なスライド構造）

### 例1: タイトルスライド

```html
<div class="slide-container full-bg-image active">
    <div class="content-overlay">
        <h2>プロジェクト<br>マネジメント入門</h2>
        <p style="font-size: clamp(1.2rem, 2vw, 1.5rem); margin-top: 1.5rem;">
            成功するプロジェクトの設計と実行
        </p>
    </div>
</div>
```

### 例2: 標準解説スライド（文字メイン）

```html
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">プロジェクトの5つのフェーズ</h2>
    <div class="content-block">
        <ul>
            <li><strong>起動:</strong> プロジェクトの目的と範囲を定義し、ステークホルダーを特定する段階</li>
            <li><strong>計画:

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lecture Slides</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        /* --- CORE CSS --- */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        body {
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
        }
        
        #presentation-wrapper {
            position: relative;
            width: 100vw;
            height: 100vh;
            max-width: 100%;
            max-height: 100%;
            aspect-ratio: 16 / 9;
        }
        
        /* Responsive container that maintains 16:9 */
        @media (min-aspect-ratio: 16/9) {
            #presentation-wrapper {
                height: 100vh;
                width: calc(100vh * 16 / 9);
            }
        }
        
        @media (max-aspect-ratio: 16/9) {
            #presentation-wrapper {
                width: 100vw;
                height: calc(100vw * 9 / 16);
            }
        }
        
        .slide-container {
            align-items: center;
            background-color: #121212;
            border-radius: 0;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
            display: none;
            flex-direction: column;
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            height: 100%;
            justify-content: center;
            overflow: hidden;
            padding: clamp(2rem, 5vh, 4rem) clamp(2rem, 5vw, 4rem);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            color: #fff;
            z-index: 0;
        }
        
        .slide-container.active {
            display: flex;
            z-index: 10;
            animation: fadeIn 0.5s ease;
        }
        
        .slide-container.bleed-image-layout.active {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: start;
            padding: 0;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Backgrounds & Decorations */
        .slide-container::before {
            content: '';
            position: absolute;
            top: -10%;
            right: -10%;
            width: 30%;
            height: 30%;
            background: radial-gradient(circle, rgba(62,184,255,0.1) 0%, rgba(0,0,0,0) 70%);
            z-index: 0;
        }
        
        .slide-container::after {
            content: '';
            position: absolute;
            bottom: -10%;
            left: -10%;
            width: 35%;
            height: 35%;
            background: radial-gradient(circle, rgba(255,0,128,0.1) 0%, rgba(0,0,0,0) 70%);
            z-index: 0;
        }
        
        .slide-container > * {
            position: relative;
            z-index: 1;
        }

        /* Typography - Responsive */
        h1, h2, h3, h4 {
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            margin: 0;
            line-height: 1.2;
        }
        
        .slide-container h1 {
            font-size: clamp(2.5rem, 5vw, 4.5rem);
            font-weight: 800;
            background: linear-gradient(90deg, #fff, #ccc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: clamp(1rem, 2vh, 1.5rem);
        }
        
        .slide-container .slide-title {
            font-size: clamp(1.8rem, 3vw, 2.6rem);
            font-weight: 600;
            color: #fff;
            width: 100%;
            text-align: left;
            border-left: 6px solid #00d4ff;
            padding-left: clamp(1rem, 2vw, 1.5rem);
            margin-bottom: clamp(1.5rem, 3vh, 2rem);
        }
        
        .slide-container h3 {
            font-size: clamp(1.3rem, 2.2vw, 1.75rem);
            font-weight: 700;
            color: #00d4ff;
            margin-bottom: clamp(0.8rem, 1.5vh, 1rem);
        }
        
        .slide-container p, .slide-container li {
            font-size: clamp(1rem, 1.5vw, 1.25rem);
            line-height: 1.8;
            color: #e0e0e0;
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            margin-bottom: clamp(0.5rem, 1vh, 0.8rem);
        }
        
        ul {
            padding-left: clamp(1.5rem, 3vw, 2rem);
        }
        
        /* --- LAYOUTS --- */
        
        /* Full Background Image (Title Slide) - CENTER ALIGNED */
        .full-bg-image {
            padding: 0;
            background: radial-gradient(circle at 10% 20%, rgba(0, 212, 255, 0.2) 0%, transparent 40%),
                        radial-gradient(circle at 90% 80%, rgba(255, 0, 128, 0.2) 0%, transparent 40%),
                        linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
            justify-content: center;
            align-items: center;
        }
        
        .full-bg-image .content-overlay {
            background: rgba(0, 0, 0, 0.4);
            padding: clamp(3rem, 6vh, 5rem) clamp(2rem, 5vw, 4rem);
            border-radius: 20px;
            text-align: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            max-width: 80%;
        }
        
        .full-bg-image h2 {
            font-size: clamp(3rem, 6vw, 5rem);
            color: #fff;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            margin-bottom: clamp(1rem, 2vh, 1.5rem);
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }
        
        /* Section Title Layout */
        .section-title-layout {
            text-align: center;
            border: 2px solid #333;
            padding: clamp(3rem, 6vh, 5rem) clamp(2rem, 4vw, 3rem);
            border-radius: 20px;
            background: rgba(255,255,255,0.03);
            width: 80%;
        }
        
        .section-title-layout h2 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            color: #fff;
            margin-bottom: clamp(1.5rem, 3vh, 2rem);
        }
        
        .section-title-layout hr {
            width: clamp(80px, 10vw, 100px);
            height: 4px;
            background: linear-gradient(90deg, #00d4ff, #ff0080);
            border: none;
            margin: 0 auto clamp(1.5rem, 3vh, 2rem) auto;
        }

        /* Two Column Tiled */
        .two-column.tiled {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(1.5rem, 3vw, 2.5rem);
            width: 100%;
            height: 80%;
        }
        
        .two-column.tiled > div {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid #333;
            border-radius: 12px;
            padding: clamp(1.5rem, 3vh, 2.5rem);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        
        /* Bleed Image Layout */
        .slide-container.bleed-image-layout .content-container {
            padding: clamp(3rem, 6vh, 5rem) clamp(2rem, 4vw, 3.5rem);
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }
        
        .slide-container.bleed-image-layout .image-container {
            height: 100%;
            width: 100%;
            background: #1e1e1e;
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 1px solid #333;
            position: relative;
            overflow: hidden;
        }
        
        /* Tiled Content */
        .tiled-content {
            display: flex;
            gap: clamp(1.5rem, 3vw, 2rem);
            width: 100%;
            justify-content: center;
        }
        
        .tile {
            flex: 1;
            background: #1e1e1e;
            border-radius: 12px;
            padding: clamp(1.5rem, 3vh, 2rem);
            text-align: center;
            border: 1px solid #333;
        }
        
        .tile .icon {
            font-size: clamp(2rem, 4vw, 3rem);
            margin-bottom: clamp(1rem, 2vh, 1.5rem);
            display: inline-block;
            width: clamp(60px, 8vw, 80px);
            height: clamp(60px, 8vw, 80px);
            line-height: clamp(60px, 8vw, 80px);
            border-radius: 50%;
            background: rgba(255,255,255,0.05);
            color: #00d4ff;
        }

        /* Standard Content Layout */
        .standard-content-layout {
            align-items: flex-start;
            justify-content: flex-start;
            padding-top: clamp(4rem, 8vh, 6rem);
        }
        
        .standard-content-layout .content-block {
            background: rgba(255,255,255,0.03);
            border-radius: 15px;
            padding: clamp(1.5rem, 3vh, 2.5rem);
            width: 100%;
            border: 1px solid #333;
        }
        
        /* Big Concept Layout */
        .big-concept-layout {
            text-align: center;
        }
        
        .big-concept-layout h2 {
            font-size: clamp(3rem, 7vw, 5.5rem);
            line-height: 1.1;
            background: linear-gradient(45deg, #00d4ff, #00ff9d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: clamp(1.5rem, 3vh, 2rem);
        }
        
        .big-concept-layout p {
            font-size: clamp(1.2rem, 2vw, 1.75rem);
            max-width: 80%;
            margin: 0 auto;
            color: #fff;
        }

        /* Three Column */
        .three-column {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: clamp(1rem, 2.5vw, 2rem);
            width: 100%;
            height: 75%;
        }
        
        .three-column > div {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid #333;
            border-radius: 12px;
            padding: clamp(1rem, 2.5vh, 2rem);
            display: flex;
            flex-direction: column;
        }

        /* Utilities */
        .highlight-box {
            background: rgba(0, 212, 255, 0.1);
            border-left: 4px solid #00d4ff;
            padding: clamp(1rem, 2vh, 1.5rem);
            margin-top: clamp(1rem, 2vh, 1.5rem);
            font-size: clamp(1.1rem, 1.8vw, 1.4rem);
            color: #fff;
        }
        
        svg.generated-art {
            width: 80%;
            height: 80%;
            z-index: 2;
            filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
        }
        
        .footer-copyright {
            position: absolute;
            bottom: clamp(0.8rem, 2vh, 1.5rem);
            left: clamp(0.8rem, 2vw, 1.5rem);
            font-size: clamp(0.5rem, 0.8vw, 0.65rem);
            color: rgba(255, 255, 255, 0.5);
            z-index: 100;
        }
        
        .control-hint {
            position: fixed;
            bottom: clamp(1rem, 2vh, 1.5rem);
            right: clamp(1rem, 2vw, 1.5rem);
            color: #444;
            font-size: clamp(0.6rem, 1vw, 0.75rem);
            pointer-events: none;
            z-index: 9999;
        }
        
        .slide-number {
            position: absolute;
            bottom: clamp(0.8rem, 2vh, 1.5rem);
            right: clamp(0.8rem, 2vw, 1.5rem);
            font-size: clamp(0.7rem, 1vw, 0.9rem);
            color: rgba(255, 255, 255, 0.4);
            z-index: 100;
        }
    </style>
</head>
<body>

<div id="presentation-wrapper">
    <!-- AI: スライドをここに生成 -->
</div>

<div class="control-hint">Use Arrows/Space to Navigate | Q for Quiz</div>

<script>
    // ========================================
    // スライドナビゲーションシステム
    // ========================================
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide-container');
    const wrapper = document.getElementById('presentation-wrapper');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        updateSlideNumbers();
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    function updateSlideNumbers() {
        const numbers = document.querySelectorAll('.slide-number');
        numbers.forEach((num, i) => {
            num.textContent = `${i + 1} / ${slides.length}`;
        });
    }

    // キーボード操作
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        } else if (e.key === 'q' || e.key === 'Q') {
            e.preventDefault();
            startQuiz();
        }
    });

    // タッチ操作（スワイプ）
    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    wrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }

    // クリック操作
    wrapper.addEventListener('click', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX > rect.width / 2) {
            nextSlide();
        } else {
            prevSlide();
        }
    });

    // ========================================
    // クイズシステム
    // ========================================
    const questions = [
        // AI: ここに3〜5問のクイズを生成
        // 形式:
        // {
        //     question: "質問文",
        //     options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
        //     correct: 0, // 正解のインデックス (0始まり)
        //     explanation: "解説文"
        // }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        if (questions.length === 0) {
            alert('クイズが設定されていません');
            return;
        }
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showQuizResult();
            return;
        }

        const q = questions[currentQuestionIndex];
        const quizHTML = `
            <div class="slide-container active big-concept-layout" style="z-index: 10000;">
                <h2 style="font-size: clamp(1.5rem, 3vw, 2.5rem); margin-bottom: clamp(2rem, 4vh, 3rem);">
                    Quiz ${currentQuestionIndex + 1} / ${questions.length}
                </h2>
                <p style="font-size: clamp(1.2rem, 2.2vw, 1.8rem); margin-bottom: clamp(2rem, 4vh, 3rem); max-width: 90%;">
                    ${q.question}
                </p>
                <div id="quiz-options" style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 2vw, 1.5rem); width: 90%; max-width: 800px;">
                    ${q.options.map((opt, i) => `
                        <button onclick="checkAnswer(${i})"
                                style="padding: clamp(1rem, 2vh, 1.5rem);
                                       font-size: clamp(0.9rem, 1.5vw, 1.1rem);
                                       background: rgba(255,255,255,0.1);
                                       border: 2px solid #00d4ff;
                                       color: white;
                                       border-radius: 8px;
                                       cursor: pointer;
                                       transition: all 0.3s;">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        
        wrapper.innerHTML = quizHTML;
    }

    function checkAnswer(selectedIndex) {
        const q = questions[currentQuestionIndex];
        const isCorrect = selectedIndex === q.correct;
        
        if (isCorrect) score++;
        
        const resultHTML = `
            <div class="slide-container active big-concept-layout" style="z-index: 10000;">
                <h2 style="color: ${isCorrect ? '#00ff9d' : '#ff0080'}; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: clamp(1.5rem, 3vh, 2rem);">
                    ${isCorrect ? '正解！' : '不正解'}
                </h2>
                <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: clamp(1.5rem, 3vh, 2.5rem); max-width: 90%; width: 800px; text-align: left;">
                    <p style="font-size: clamp(1rem, 1.8vw, 1.3rem); margin-bottom: clamp(1rem, 2vh, 1.5rem); color: #fff;">
                        <strong>正解:</strong> ${q.options[q.correct]}
                    </p>
                    <p style="font-size: clamp(0.9rem, 1.5vw, 1.1rem); line-height: 1.8; color: #e0e0e0;">
                        ${q.explanation}
                    </p>
                </div>
                <button onclick="nextQuestion()"
                        style="margin-top: clamp(2rem, 4vh, 3rem);
                               padding: clamp(0.8rem, 1.5vh, 1.2rem) clamp(2rem, 4vw, 3rem);
                               font-size: clamp(1rem, 1.8vw, 1.3rem);
                               background: linear-gradient(90deg, #00d4ff, #00ff9d);
                               border: none;
                               color: #000;
                               font-weight: bold;
                               border-radius: 8px;
                               cursor: pointer;">
                    次へ
                </button>
            </div>
        `;
        
        wrapper.innerHTML = resultHTML;
    }

    function nextQuestion() {
        currentQuestionIndex++;
        showQuestion();
    }

    function showQuizResult() {
        const percentage = Math.round((score / questions.length) * 100);
        const resultHTML = `
            <div class="slide-container active big-concept-layout" style="z-index: 10000;">
                <h2 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: clamp(2rem, 4vh, 3rem);">
                    クイズ終了！
                </h2>
                <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: clamp(2rem, 4vh, 3rem); max-width: 90%; width: 600px;">
                    <p style="font-size: clamp(2rem, 4vw, 3rem); font-weight: bold; color: #00d4ff; margin-bottom: clamp(1rem, 2vh, 1.5rem);">
                        ${score} / ${questions.length} 問正解
                    </p>
                    <p style="font-size: clamp(1.5rem, 3vw, 2.2rem); color: #fff;">
                        正答率: ${percentage}%
                    </p>
                </div>
                <button onclick="location.reload()"
                        style="margin-top: clamp(2rem, 4vh, 3rem);
                               padding: clamp(0.8rem, 1.5vh, 1.2rem) clamp(2rem, 4vw, 3rem);
                               font-size: clamp(1rem, 1.8vw, 1.3rem);
                               background: linear-gradient(90deg, #00d4ff, #00ff9d);
                               border: none;
                               color: #000;
                               font-weight: bold;
                               border-radius: 8px;
                               cursor: pointer;">
                    最初から
                </button>
            </div>
        `;
        
        wrapper.innerHTML = resultHTML;
    }

    // ========================================
    // 著作権表示追加
    // ========================================
    function addCopyright() {
        const slides = document.querySelectorAll('.slide-container');
        slides.forEach((slide, index) => {
            const footer = document.createElement('div');
            footer.className = 'footer-copyright';
            footer.innerText = '【Confidential 社外秘】 本書の無断使用・転載・販売等を固く禁じます。©︎ ACT HOUSE ®︎ All Rights Reserved.';
            slide.appendChild(footer);
            
            // ページ番号追加
            const slideNum = document.createElement('div');
            slideNum.className = 'slide-number';
            slideNum.textContent = `${index + 1} / ${slides.length}`;
            slide.appendChild(slideNum);
        });
    }

    // ========================================
    // 初期化
    // ========================================
    window.addEventListener('DOMContentLoaded', () => {
        addCopyright();
        showSlide(0);
    });
</script>
</body>
</html>
```

---

## 8. 実装チェックリスト

生成前に以下を確認してください。

### ✅ レイアウト
- [ ] 16:9アスペクト比が維持されている
- [ ] フォントサイズが `clamp()` または `vw/vh` で可変
- [ ] 扉ページが完全中央配置
- [ ] 全スライドにページ番号表示

### ✅ コンテンツ
- [ ] スライド枚数が15〜30枚の範囲内
- [ ] 3スライドごとに最低1つのビジュアル要素
- [ ] 1スライド = 1メッセージの原則を守る
- [ ] 箇条書きは3〜5項目以内
- [ ] 「なぜ？」「どうやって？」「具体例は？」に答えている

### ✅ ビジュアル
- [ ] 外部画像URLを使用していない
- [ ] SVG図解が適切な場面で使われている
- [ ] 画像生成プロンプトが具体的
- [ ] ビジュアル判断基準の表に従っている

### ✅ 技術仕様
- [ ] JavaScriptが完全に動作する（コピペ不要）
- [ ] クイズ問題が3〜5問生成されている
- [ ] キーボード操作（矢印、スペース、Q）が機能
- [ ] タッチ操作（スワイプ）が機能
- [ ] 著作権表示が全スライドに追加

---

## 9. 出力例（理想的なスライド構造）

```html
<!-- 例1: タイトルスライド -->
<div class="slide-container full-bg-image active">
    <div class="content-overlay">
        <h2>プロジェクト<br>マネジメント入門</h2>
        <p style="font-size: clamp(1.2rem, 2vw, 1.5rem); margin-top: 1.5rem;">
            成功するプロジェクトの設計と実行
        </p>
    </div>
</div>

<!-- 例2: 標準解説スライド（文字メイン） -->
<div class="slide-container standard-content-layout">
    <h2 class="slide-title">プロジェクトの5つのフェーズ</h2>
    <div class="content-block">
        <ul>
            <li><strong>起動:</strong> プロジェクトの目的と範囲を定義し、ステークホルダーを特定する段階</li>
            <li><strong>計画:</strong> 詳細なスケジュール、予算、リソース配分を策定</li>
            <li><strong>実行:</strong> 計画に基づいて実際の作業を進め、成果物を作成</li>
            <li><strong>監視・制御:</strong> 進捗を追跡し、必要に応じて軌道修正を行う</li>
            <li><strong>終結:</strong> 成果物を納品し、プロジェクトを正式に完了させる</li>
        </ul>
    </div>
</div>

<!-- 例3: ビジュアルメインスライド（SVG図解） -->
<div class="slide-container">
    <h2 class="slide-title">プロジェクトライフサイクル</h2>
    <svg class="generated-art" viewBox="0 0 800 400">
        <!-- AI: ここにフロー図のSVGコード -->
        <rect x="50" y="150" width="120" height="80" fill="#00d4ff" opacity="0.2" stroke="#00d4ff" stroke-width="2"/>
        <text x="110" y="195" text-anchor="middle" fill="white" font-size="16">起動</text>
        <!-- ... 他のステップを追加 ... -->
    </svg>
</div>

<!-- 例4: 2カラム比較 -->
<div class="slide-container">
    <h2 class="slide-title">アジャイル vs ウォーターフォール</h2>
    <div class="two-column tiled">
        <div>
            <h3>アジャイル</h3>
            <ul>
                <li>反復的な開発サイクル</li>
                <li>柔軟な要件変更</li>
                <li>頻繁なフィードバック</li>
            </ul>
        </div>
        <div>
            <h3>ウォーターフォール</h3>
            <ul>
                <li>順序立てたフェーズ</li>
                <li>固定された要件</li>
                <li>段階的な承認プロセス</li>
            </ul>
        </div>
    </div>
</div>
```

---

## 10. 最終注意事項

1. **JavaScriptは必ず完全なコードを出力**
   - 「... Copy original JS logic here ...」という記述は削除
   - 上記のテンプレートに含まれる完全なJSコードをそのまま使用

2. **クイズ問題は必ず生成**
   - `questions` 配列に3〜5問を記述
   - 各問題は `question`, `options`, `correct`, `explanation` を含む

3. **著作権表示は自動追加**
   - JavaScript の `addCopyright()` 関数が自動で全スライドに追加

4. **ページ番号も自動表示**
   - 各スライド右下に「n / 総数」形式で表示

5. **レスポンシブ対応を徹底**
   - すべてのサイズ指定を `clamp()`, `vw`, `vh` で記述
   - `px` 単位は原則使用禁止（border などの細かい値のみ可）

---

これで準備完了です。テーマと詳細を入力してスライド生成を開始してください！