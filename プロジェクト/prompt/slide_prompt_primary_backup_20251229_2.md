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
| メカニズム | SVGフローチャート |
| 概念構造 | SVG関係図 |

---

## クイズ生成

**必ず5問の理論確認クイズを生成してください。**

テーマの主要概念につき各1問 + 統合問題1問 = 計5問

【例：4つのデザイン原則の場合】
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

【テーマに応じたクイズ作成指針】
- テーマの主要概念を理解度チェックできる問題を作成
- 各問題は4択形式
- 正解は明確で、解説で理論的根拠を説明
- 最後の1問は統合的な理解を問う問題

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
    <h2>[テーマに応じた問題提起]</h2>
    <p>[テーマの本質を突く一言]</p>
</div>

<!-- スライド3〜: テーマに応じた中核コンテンツ -->
<!-- パターンA〜Dに従って構成 -->

<!-- 最終スライド: まとめ -->
<div class="slide-container tiled-content">
    <h2 class="slide-title">[テーマ]のまとめ</h2>
    <div class="tile-grid">
        <!-- テーマの重要ポイントをタイル状に配置 -->
    </div>
</div>

<!-- クイズデータ -->
<script>
const questions = [ ... ];
</script>
```

---

## 実装チェックリスト（理論編）

- [ ] スライド枚数が15〜30枚
- [ ] テーマに応じた適切な構成パターン（A〜D）を選択している
- [ ] 各主要概念に十分な解説スライド（2〜3枚）がある
- [ ] 「よくある間違い」または「注意点」が含まれている
- [ ] Before/Afterまたは比較図解がSVGで作成されている（該当する場合）
- [ ] 3スライドごとにビジュアル要素がある
- [ ] クイズが5問（主要概念各1問 + 統合1問）
- [ ] まとめスライドで重要ポイントを復習している
- [ ] 理論編のまとめで実践編への橋渡しをしている

---

## 雛形HTML
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[テーマ] - 理論編</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
            background: #000;
            color: white;
            overflow: hidden;
        }
        
        #presentation-wrapper {
            width: 100vw;
            height: 100vh;
            position: relative;
            overflow: hidden;
        }
        
        .slide-container {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.8s ease-in-out;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: clamp(2rem, 5vw, 4rem);
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
        }
        
        .slide-container.active {
            opacity: 1;
            z-index: 10;
        }
        
        .slide-container.full-bg-image {
            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        .content-overlay {
            text-align: center;
            z-index: 2;
        }
        
        .content-overlay h2 {
            font-size: clamp(2.5rem, 6vw, 5rem);
            font-weight: 700;
            margin-bottom: clamp(1rem, 2vh, 1.5rem);
            background: linear-gradient(90deg, #00d4ff, #00ff9d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
        }
        
        .big-concept-layout {
            text-align: center;
        }
        
        .big-concept-layout h2 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: clamp(2rem, 4vh, 3rem);
            background: linear-gradient(90deg, #00d4ff, #00ff9d);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .big-concept-layout p {
            font-size: clamp(1.2rem, 2.5vw, 2rem);
            line-height: 1.6;
            color: #e0e0e0;
            max-width: 80%;
            margin: 0 auto;
        }
        
        .section-title-layout {
            text-align: center;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }
        
        .section-title-layout h2 {
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 700;
            color: #00d4ff;
            margin-bottom: clamp(1.5rem, 3vh, 2rem);
        }
        
        .section-title-layout hr {
            width: clamp(200px, 50vw, 400px);
            height: 4px;
            background: linear-gradient(90deg, transparent, #00d4ff, transparent);
            border: none;
            margin: 0 auto;
        }
        
        .standard-content-layout {
            padding: clamp(2rem, 5vw, 4rem);
            text-align: left;
        }
        
        .slide-title {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin-bottom: clamp(2rem, 4vh, 3rem);
            color: #00d4ff;
            text-align: center;
        }
        
        .content-block {
            max-width: 90%;
            margin: 0 auto;
        }
        
        .content-block h3 {
            font-size: clamp(1.5rem, 3vw, 2rem);
            margin-bottom: clamp(1rem, 2vh, 1.5rem);
            color: #00ff9d;
        }
        
        .content-block p {
            font-size: clamp(1rem, 2vw, 1.3rem);
            line-height: 1.8;
            margin-bottom: clamp(1.5rem, 3vh, 2rem);
            color: #e0e0e0;
        }
        
        .content-block ul {
            list-style: none;
            padding-left: 0;
            margin-bottom: clamp(1.5rem, 3vh, 2rem);
        }
        
        .content-block ul li {
            font-size: clamp(1rem, 2vw, 1.3rem);
            line-height: 1.8;
            margin-bottom: clamp(0.8rem, 1.5vh, 1rem);
            padding-left: clamp(1.5rem, 3vw, 2rem);
            position: relative;
            color: #e0e0e0;
        }
        
        .content-block ul li::before {
            content: "▹";
            position: absolute;
            left: 0;
            color: #00d4ff;
            font-weight: bold;
        }
        
        .highlight-box {
            background: rgba(255, 0, 128, 0.1);
            border-left: 4px solid #ff0080;
            padding: clamp(1rem, 2vh, 1.5rem);
            margin: clamp(1.5rem, 3vh, 2rem) 0;
            border-radius: 8px;
            font-size: clamp(0.95rem, 1.8vw, 1.2rem);
            line-height: 1.7;
        }
        
        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: clamp(2rem, 4vw, 3rem);
            width: 100%;
            max-width: 90%;
            margin: 0 auto;
        }
        
        .two-column.tiled > div {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 15px;
            padding: clamp(1.5rem, 3vw, 2rem);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        .two-column h3 {
            font-size: clamp(1.3rem, 2.5vw, 1.8rem);
            margin-bottom: clamp(1rem, 2vh, 1.5rem);
            text-align: center;
        }
        
        .tiled-content {
            padding: clamp(2rem, 4vw, 3rem);
        }
        
        .tile-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: clamp(1.5rem, 3vw, 2rem);
            max-width: 90%;
            margin: 0 auto;
        }
        
        .tile-grid > div {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 15px;
            padding: clamp(1.5rem, 3vw, 2rem);
            text-align: center;
        }
        
        .tile-grid h3 {
            font-size: clamp(1.2rem, 2.2vw, 1.6rem);
            color: #00d4ff;
            margin-bottom: clamp(0.8rem, 1.5vh, 1rem);
        }
        
        .tile-grid p {
            font-size: clamp(0.9rem, 1.6vw, 1.1rem);
            line-height: 1.6;
            color: #e0e0e0;
        }
        
        .bleed-image-layout {
            padding: 0;
            flex-direction: row;
        }
        
        .bleed-image-layout .text-side {
            width: 50%;
            padding: clamp(2rem, 5vw, 4rem);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .bleed-image-layout .image-side {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 212, 255, 0.05);
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
