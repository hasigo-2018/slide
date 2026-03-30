# 命令書: HTML講義スライド生成【実践編 - ハンズオン】

## あなたの役割
あなたは「シニア・インストラクショナル・デザイナー」です。
デザインツールを使った実践演習を通じて、理論を体得させるスライド内容を生成してください。

---

## 生成タスク

### 入力情報
- **対象ツール:** `[Canva / Figma / Gemini / Nano banana pro から選択、または全部]`
- **演習テーマ:** `[名刺 / バナー / LP / プレゼン資料 など]`
- **対象読者:** `[全くの素人（ツール未経験者）]`
- **枚数:** `[10〜24枚（ツール1つあたり5-6枚）]`

### 出力対象
**`<div id="presentation-wrapper">` の中身のみ**を生成してください。
CSS/JavaScriptは外部ファイル（slide-template.css, slide-template.js）を使用します。

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

### 2. 各演習の標準構成（6枚1セット）

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

### 3. 各ツールの演習内容テンプレート

---

## 【Canva演習】名刺デザイン改善

### スライド構成（6枚）
1. ツール紹介：Canva
2. 課題：「悪い名刺」を「良い名刺」に改善
3. 手順1：テンプレート選択とテキスト入力
4. 手順2：整列と近接の適用
5. 手順3：フォントとカラーで反復/コントラスト
6. チェックリスト

### 詳細内容

#### 課題の詳細
```
【目標】
4つのデザイン原則を使って、読みやすく信頼感のある名刺を作る

【制約条件】
- サイズ：91mm × 55mm（日本標準）
- 必須情報：名前、役職、会社名、電話、メール
- 制作時間：15分
- 使用する原則：整列、近接、反復、コントラスト

【Before（悪い例）の特徴】
- 要素がバラバラに配置（整列なし）
- 連絡先が散らばっている（近接なし）
- フォントが3種類以上（反復なし）
- すべて同じサイズ（コントラストなし）
```

#### 手順1：テンプレート選択とテキスト入力
```
【操作】
1. Canva起動 → 「名刺」で検索
2. シンプルなテンプレートを選択（装飾が少ないもの）
3. 既存のテキストをクリックして自分の情報に置き換え

【デザイン原則】
まずは情報を入力し、次のステップで整えます

【よくある間違い】
❌ 最初から装飾が多いテンプレートを選ぶ
✅ シンプルなものを選び、自分で原則を適用する
```

#### 手順2：整列と近接の適用
```
【操作】
1. すべてのテキストを選択 → 左揃え（または右揃え）に統一
2. 連絡先情報（電話・メール）をグループ化して近づける
3. ガイドライン（表示 → ルーラーとガイド）を活用

【デザイン原則】
- 整列：すべての要素を同じ軸に揃える
- 近接：関連する情報を物理的に近づける

【よくある間違い】
❌ 中央揃えと左揃えを混在させる
✅ どちらか一方に統一する
```

#### 手順3：フォントとカラーで反復/コントラスト
```
【操作】
1. フォントを2種類に絞る（見出し用・本文用）
2. 名前だけサイズを大きく（24pt以上）
3. ブランドカラーを1色選び、アクセントとして使う

【デザイン原則】
- 反復：同じフォント・色を繰り返す
- コントラスト：名前を大きくして差をつける

【よくある間違い】
❌ 3種類以上のフォントを使う
✅ 見出し・本文の2種類で十分
```

---

## 【Figma演習】ランディングページのワイヤーフレーム

### スライド構成（6枚）
1. ツール紹介：Figma
2. 課題：商品紹介LPの骨組み作成
3. 手順1：フレーム作成と視線誘導（F/Z型）
4. 手順2：セクション分割と近接の法則
5. 手順3：ボタン配置とコントラスト
6. チェックリスト

### 詳細内容

#### 課題の詳細
```
【目標】
視線誘導を意識したワイヤーフレームを作成

【制約条件】
- サイズ：1920×1080px（デスクトップ版）
- 必須セクション：ヒーロー、特徴3つ、CTA
- 制作時間：20分
- 視線誘導パターン：Z型レイアウト

【作成するもの】
グレーボックスとテキストラベルのみの設計図
（色やフォントは後で決める）
```

#### 手順1：フレーム作成と視線誘導
```
【操作】
1. Figma起動 → Frame tool (F) → Desktop (1920×1080)
2. Rectangle tool (R) でヒーローエリアを作成
3. Z型の動線に沿って要素を配置
   - 左上：ロゴ
   - 右上：ナビゲーション
   - 左中：キャッチコピー
   - 右下：CTAボタン

【デザイン原則】
視線は左上から右下に流れる（Z型パターン）

【よくある間違い】
❌ すべてを中央に配置
✅ 視線の流れに沿って配置
```

#### 手順2：セクション分割と近接
```
【操作】
1. 「特徴」セクションを3カラムに分割
2. 各カラム内で「アイコン・見出し・説明文」をグループ化
3. カラム間の余白を統一（例：80px）

【デザイン原則】
- 近接：関連する要素（アイコン+テキスト）を近づける
- 反復：3つのカラムを同じ構造で繰り返す

【よくある間違い】
❌ 余白がバラバラ
✅ 同じ余白を繰り返す
```

#### 手順3：ボタン配置とコントラスト
```
【操作】
1. CTAボタンを作成（Rectangle + Text）
2. サイズ：最低 200×50px（他より大きく）
3. 配置：右下（Z型の終点）

【デザイン原則】
コントラスト：ボタンは他の要素より大きく目立たせる

【よくある間違い】
❌ ボタンが小さすぎる・目立たない
✅ 明確に大きく、アクションを促す
```

---

## 【Gemini演習】デザインコンセプト企画

### スライド構成（5枚）
1. ツール紹介：Gemini
2. 課題：架空カフェのブランディング企画
3. 手順1：ターゲット分析プロンプト作成
4. 手順2：カラー/フォント提案の引き出し方
5. チェックリスト

### 詳細内容

#### 課題の詳細
```
【目標】
AIを使った企画立案とデザイン方針決定

【制約条件】
- 設定：架空のカフェをブランディング
- 決めること：ターゲット層、カラー、フォント、トーン
- 制作時間：15分

【成果物】
Geminiとの対話を通じて決定したブランドガイドライン
```

#### 手順1：ターゲット分析プロンプト
```
【操作】
Geminiに以下のプロンプトを入力：

"以下の条件でカフェのターゲット層を分析してください：
- 店名：[自分で決める]
- 立地：[都心/郊外など]
- コンセプト：[静かに集中/賑やか/など]

ターゲットの年齢層、職業、ライフスタイルを3つのペルソナで提案してください"

【デザイン原則】
デザインは「誰のため」を明確にすることから始まる

【よくある間違い】
❌ 曖昧な質問（「良いカフェのデザインは?」）
✅ 具体的な条件を設定した質問
```

#### 手順2：カラー/フォント提案
```
【操作】
Geminiに以下のプロンプトを入力：

"ペルソナ: [手順1で決めたターゲット]
避けたい印象: チェーン店感、安っぽさ

上記を踏まえて、以下を提案してください：
1. ブランドカラー3色（HEXコード付き）
2. フォントの方向性（セリフ/サンセリフ/手書き風）
3. 各提案の理由"

【デザイン原則】
色とフォントは感情と直結する

【よくある間違い】
❌ AIの提案をそのまま採用
✅ 理由を理解し、自分で判断する
```

---

## 【Nano banana pro演習】ビジュアル生成

### スライド構成（5枚）
1. ツール紹介：Nano banana pro
2. 課題：イベントバナー用の背景画像生成
3. 手順1：効果的なプロンプトの書き方
4. 手順2：生成結果の評価とCanvaでの活用
5. チェックリスト

### 詳細内容

#### 課題の詳細
```
【目標】
プロンプトエンジニアリングとAI画像の実務活用

【制約条件】
- テーマ：「ビジネスセミナー」のバナー背景
- サイズ：1200×630px（横長）
- 制作時間：20分

【成果物】
生成した背景 + Canvaで追加したテキスト = 完成バナー
```

#### 手順1：効果的なプロンプト
```
【操作】
Nano banana proに以下のプロンプトを入力：

"Professional business seminar background,
modern office environment,
soft natural lighting from large windows,
minimalist clean design aesthetic,
blue and white color scheme,
no people visible,
blurred bokeh effect,
high quality corporate photography style,
--ar 16:9"

【プロンプトの構造】
1. 主題（何を描くか）
2. 環境・設定
3. ライティング
4. スタイル
5. カラースキーム
6. 除外要素（no people）
7. 品質指定

【よくある間違い】
❌ 「ビジネスの背景」だけ
✅ 具体的な要素を列挙
```

#### 手順2：評価とCanva活用
```
【操作】
1. 生成された画像を4原則で評価
   - 整列：構図が整っているか
   - 近接：要素が適切に配置されているか
   - 反復：パターンがあるか
   - コントラスト：明暗がはっきりしているか

2. 気に入った画像をダウンロード

3. Canvaで新規デザイン（1200×630px）
   - 背景に生成画像をアップロード
   - テキストを追加（タイトル、日時、場所）
   - コントラストを意識（白文字+黒シャドウ など）

【デザイン原則】
AI生成画像も、原則に従って評価・選択する

【よくある間違い】
❌ 最初の1枚で満足
✅ 複数生成して比較・選択
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

## 実装チェックリスト（実践編）

- [ ] 各ツールの演習が5-6枚で構成されている
- [ ] ツール紹介スライドに具体的なURL/アクセス方法がある
- [ ] 演習課題に「時間」「サイズ」「使用する原則」が明記されている
- [ ] 手順スライドに「よくある間違い」が必ず含まれている
- [ ] チェックリストが4つのデザイン原則に対応している
- [ ] 画像生成プロンプトがツールのUI画面を正確に描写している
- [ ] クイズが5問（各ツールの実践判断型）

---

## 出力フォーマット
```html
<!-- スライド1: 導入 -->
<div class="slide-container full-bg-image active">
    <div class="content-overlay">
        <h2>実践演習</h2>
        <p style="font-size: clamp(1.2rem, 2vw, 1.5rem); margin-top: 1.5rem;">
            学んだ原則を実際に使ってみよう
        </p>
    </div>
</div>

<!-- Canva演習（6枚） -->
<div class="slide-container bleed-image-layout">
    <!-- ツール紹介 -->
</div>

<!-- Figma演習（6枚） -->
<!-- Gemini演習（5枚） -->
<!-- Nano banana pro演習（5枚） -->

<!-- クイズデータ -->
<script>
const questions = [ ... ];
</script>
```

---

## 雛形HTML
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>実践編 - ハンズオン演習</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <style>
        /* --- 理論編と同じCSS --- */
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
    <!-- AI: 実践編スライドをここに生成 -->
</div>

<div class="control-hint">Use Arrows/Space to Navigate | Q for Quiz</div>

<script>
    // 理論編と同じJavaScript（ナビゲーション + クイズシステム）
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
        // AI: 実践判断型クイズ5問をここに生成
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

これで実践編のプロンプトは完成です！