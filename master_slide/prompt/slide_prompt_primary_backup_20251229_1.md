# 命令書: HTML講義スライド生成【理論編】

## あなたの役割
あなたは「シニア・インストラクショナル・デザイナー」です。
デザインの理論的基礎を教える、教育的価値の高いスライド内容を生成してください。

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

### 2. 構成ストーリー（理論編）
1. **導入（2〜3枚）:** タイトル、問題提起、アジェンダ
2. **基礎概念（3〜5枚）:** デザインとは何か、なぜ重要か
3. **4つのデザイン原則（8〜12枚）:**
   - 整列（Alignment）：2〜3枚
   - 近接（Proximity）：2〜3枚
   - 反復（Repetition）：2〜3枚
   - コントラスト（Contrast）：2〜3枚
4. **補足理論（3〜5枚）:** ゲシュタルト心理学、視線誘導、認知負荷
5. **まとめ（2〜3枚）:** 4原則の復習、次のステップ

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

## 理論編専用：4つのデザイン原則の解説構成

各原則につき、必ず以下の3枚構成で解説してください：

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

### パターンB: 画像プロンプト（事例・実例）
```html
<div class="image-container">
  <div style="color: #666; font-size: 18px; text-align: center; padding: 40px;">
    [画像生成プロンプト]<br>
    例: "Magazine layout comparison, before and after design principles applied, clean professional photography"
  </div>
</div>
```

### 理論編でのビジュアル判断基準
| 内容タイプ | 推奨ビジュアル |
|-----------|--------------|
| 原則の定義 | 大きな文字のみ（.big-concept-layout） |
| 原則の効果 | SVGフロー図 |
| Before/After | SVG比較図解（2カラム） |
| ゲシュタルト | SVG図形パターン |
| 視線誘導 | SVG矢印フロー |

---

## クイズ生成

**必ず5問の理論確認クイズを生成してください。**

各原則につき1問 + 統合問題1問 = 計5問
```javascript
const questions = [
    {
        question: "整列（Alignment）の主な目的は？",
        options: [
            "見た目を美しくする",
            "視覚的な秩序と関連性を作る",
            "スペースを埋める",
            "カラフルにする"
        ],
        correct: 1,
        explanation: "整列の目的は、要素間に視覚的な秩序を生み出し、情報の関連性を明確にすることです。単なる装飾ではありません。"
    },
    {
        question: "近接（Proximity）の原則で、関連する要素はどうすべきですか？",
        options: [
            "できるだけ離す",
            "ランダムに配置",
            "グループ化して近づける",
            "すべて中央に集める"
        ],
        correct: 2,
        explanation: "関連する要素は物理的に近づけることで、視覚的なグループとして認識され、情報の理解が容易になります。"
    },
    {
        question: "反復（Repetition）が生み出す効果は？",
        options: [
            "一貫性と統一感",
            "変化と驚き",
            "複雑さと深み",
            "ランダムな印象"
        ],
        correct: 0,
        explanation: "反復は、デザイン全体に一貫性と統一感を生み出します。色、フォント、形状などを繰り返すことで、プロフェッショナルな印象を与えます。"
    },
    {
        question: "コントラスト（Contrast）を作る主な方法は？",
        options: [
            "すべて同じサイズにする",
            "サイズ、色、フォントに差をつける",
            "できるだけ似た色を使う",
            "すべて小さく表示する"
        ],
        correct: 1,
        explanation: "コントラストは、サイズ、色、フォント、太さなどに明確な差をつけることで生まれます。これにより重要な情報が際立ちます。"
    },
    {
        question: "名刺デザインで最も優先すべき原則の組み合わせは？",
        options: [
            "整列 + 近接",
            "反復 + コントラスト",
            "すべて同等に重要",
            "コントラストのみ"
        ],
        correct: 2,
        explanation: "4つの原則はすべて相互に関連しており、どれか1つだけでは不十分です。整列で秩序を作り、近接で情報をグループ化し、反復で一貫性を持たせ、コントラストで重要情報を際立たせる必要があります。"
    }
];
```

---

## 出力フォーマット
```html
<!-- スライド1: タイトル -->
<div class="slide-container full-bg-image active">
    <div class="content-overlay">
        <h2>[テーマ]</h2>
        <p style="font-size: clamp(1.2rem, 2vw, 1.5rem); margin-top: 1.5rem;">
            [サブタイトル]
        </p>
    </div>
</div>

<!-- スライド2: 問題提起 -->
<div class="slide-container big-concept-layout">
    <h2>「デザインセンスがない」<br>は、本当か？</h2>
    <p>デザインは感覚ではなく、学べる論理体系です</p>
</div>

<!-- スライド3-14: 4つの原則（各3枚 × 4 = 12枚） -->
<div class="slide-container section-title-layout">
    <h2>整列（Alignment）</h2>
    <hr>
</div>

<!-- ... 原則の解説スライド ... -->

<!-- スライド15-20: 補足理論 -->
<!-- スライド21-23: まとめ -->

<!-- クイズデータ -->
<script>
const questions = [ ... ];
</script>
```

---

## 実装チェックリスト（理論編）

- [ ] スライド枚数が15〜30枚
- [ ] 4つの原則それぞれに3枚のスライド（定義、解説、Before/After）
- [ ] 各原則に「よくある間違い」が含まれている
- [ ] Before/Afterの比較図解がSVGで作成されている
- [ ] 3スライドごとにビジュアル要素がある
- [ ] クイズが5問（各原則1問 + 統合1問）
- [ ] まとめスライドで4原則を復習している

---

## 雛形HTML
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>理論編 - デザイン原則講義</title>
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
    <!-- AI: 理論編スライドをここに生成 -->
</div>

<div class="control-hint">Use Arrows/Space to Navigate | Q for Quiz</div>

<script>
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

    wrapper.addEventListener('click', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX > rect.width / 2) {
            nextSlide();
        } else {
            prevSlide();
        }
    });

    const questions = [
        // AI: 理論確認クイズ5問をここに生成
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

    function addCopyright() {
        const slides = document.querySelectorAll('.slide-container');
        slides.forEach((slide, index) => {
            const footer = document.createElement('div');
            footer.className = 'footer-copyright';
            footer.innerText = '【Confidential 社外秘】 本書の無断使用・転載・販売等を固く禁じます。©︎ ACT HOUSE ®︎ All Rights Reserved.';
            slide.appendChild(footer);
            
            const slideNum = document.createElement('div');
            slideNum.className = 'slide-number';
            slideNum.textContent = `${index + 1} / ${slides.length}`;
            slide.appendChild(slideNum);
        });
    }

    window.addEventListener('DOMContentLoaded', () => {
        addCopyright();
        showSlide(0);
    });
</script>
</body>
</html>
```

---

これで理論編のプロンプトは完成です。次に実践編のプロンプトを提供します。

---