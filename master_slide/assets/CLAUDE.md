# スライドテンプレート 生成・編集ルール

Claudeがスライド HTML を生成・編集する際は、このファイルのルールに従ってください。  
参照CSSファイル：`../assets/slide-template.css`（全ファイル共通）

---

## 1. highlight-box

**用途：見落とすと作業が止まるレベルの警告・注意、および💡ヒント**

✅ 使う場面：
- 見落とすと作業が止まる・やり直しになるレベルの警告・注意（⚠️）
- 次のステップへのヒント（💡）
- UX・設計上の重要な落とし穴や注意点

❌ 使わない場面：
- 手順の一行指示 → `<p>` を使う
- まとめ・次回予告 → `<div class="next-box">` を使う
- 小見出し・リードイン文 → `<h3>` または `<p>` を使う
- 演習の課題説明（📋 課題：〜）・制限時間（⏱️）・共有指示（🗣️ 📣）→ `<p>` を使う
- 目標・ゴール文（🎯 ゴール：〜）→ `<p>` を使う
- キー・バリュー形式のデータ → `.slide-table` を使う
- 前提条件の説明・文脈説明・補足情報 → `<p>` を使う

---

## 2. slide-table（`.slide-table`）

**用途：設定仕様・対照表・比較データ**

✅ 使う場面：
- キー・バリュー形式の設定仕様（設定項目 ／ 値）
- 場面とアクションの対照（場面 ／ アクション）
- 3行以上の構造化された対比データ

❌ 使わない場面：
- 手順・ステップ → `<ol>` を使う
- 箇条書き・チェックリスト → `<ul>` を使う
- 1〜2行のみの単純な対比 → `highlight-box` や `<p>` で十分

```html
<table class="slide-table">
    <thead>
        <tr><th>設定項目</th><th>値</th></tr>
    </thead>
    <tbody>
        <tr><td>トリガー</td><td>On Click</td></tr>
    </tbody>
</table>
```

> クラスなし `<table>`（既存ファイル）との違い：  
> クラスなし → font-size のみ継承（既存データ表示）  
> `.slide-table` → デザインを意図的に当てる（設定仕様・対照表）

---

## 3. tiled-content / tile-grid（タイルレイアウト）

**用途：ul/li リストのタイル化**

| クラス | レイアウト | 用途 |
|---|---|---|
| `tiled-content` | flex 1行横並び | 3〜4項目を一行に並べるとき |
| `tile-grid` | 2列グリッド | 4〜6項目を2×2〜3×2で並べるとき |
| `tile-grid` + `style="grid-template-columns: repeat(3, 1fr);"` | 3列グリッド | 5〜6項目を3列で並べるとき |

```html
<div class="tiled-content">
    <div class="tile">
        <div class="icon">🎯</div>
        <h3>タイトル</h3>
        <p>説明文</p>
    </div>
</div>
```

**禁止：** ☐ 形式のチェックリストはタイル化しない（`<ul>` のまま維持する）

### content-block の使用ルール

| 状況 | 対応 |
|---|---|
| `.content-block` 直下に `.tile-grid` または `.tiled-content` **だけ**ある | `.content-block` を削除する |
| `.tile-grid` / `.tiled-content` に加えて `<p>` や `.highlight-box` など**他の要素も混在**する | `.content-block` で囲む |

```html
<!-- NG：tile-gridだけなのにcontent-blockで囲んでいる -->
<div class="content-block">
    <div class="tile-grid">...</div>
</div>

<!-- OK：tile-gridのみはそのまま -->
<div class="tile-grid">...</div>

<!-- OK：他の要素と混在する場合はcontent-blockで囲む -->
<div class="content-block">
    <p>説明文</p>
    <div class="tile-grid">...</div>
</div>
```

---

## 4. text-sub（`p.text-sub`）

**用途：まとめ・次回予告スライドの補足テキスト**

✅ 使う場面：
- 「まとめ」「次回予告」スライドに分離された highlight-box の代替
- 次回持ち越し情報・保存指示など

```html
<p class="text-sub">📌 次回の演習で使います。保存しておいてください。</p>
```

---

## 5. スライド構成ルール

### まとめ・次テーマの分離

スライドに「まとめ」と「次回予告/次テーマ」が同居している場合は**必ず別スライドに分離**する。

| 元の構成 | 分離後 |
|---|---|
| まとめ＋次テーマ（同一スライド） | スライドA：まとめ（タイル化） ／ スライドB：次回予告（p.text-sub） |
| highlight-box に次回情報が入っている | highlight-box を削除し p.text-sub に変換して次回スライドへ移動 |

### 講師向け言語の修正

生徒も見るスライドに講師向けの表現を混入しない。

| 修正前（講師向け） | 修正後（生徒向け） |
|---|---|
| 講師フィードバックの観点 | 聞く側のポイント ／ 確認ポイント |
| 講師巡回ポイント | 確認ポイント |
| 講師が見る観点 | 発表を聞きながら確認すること |
| 事前に〜（講師の準備指示） | 表現を削除または生徒向けに書き換える |

---

## 6. `<title>` タグの生成ルール

スライド HTML を新規生成・編集する際は、`<title>` を `<h1>` の内容から自動的に生成する。

### 生成ルール

1. `<h1>` のテキストを取得する（タグは除去し、テキストのみ抽出）
2. `<br>` タグは削除する（テキストとして残さない）
3. `<span>` タグは除去し、**内側のテキストはそのまま残す**
4. 結果を `<title>` に設定する

### 例

```html
<!-- h1 の記述 -->
<h1>デザインは「設計」である<span>【理論編】</span></h1>

<!-- 生成される title -->
<title>デザインは「設計」である【理論編】</title>
```

```html
<!-- h1 に <br> が含まれる場合 -->
<h1>デザインは<br>「設計」である<span>【実践編】</span></h1>

<!-- 生成される title（<br> は削除） -->
<title>デザインは「設計」である【実践編】</title>
```

### 注意事項

- `<title>` のデフォルト値（`【理論編】` / `【実践編】` のみ）のままにしない
- `<h1>` が存在しないスライドファイルは対象外

---

## 7. インラインスタイル禁止事項

| NG | 対応 |
|---|---|
| `font-size: 0.9rem` 以下 | 削除（CSS デフォルトに戻す） |
| `line-height` on ul/ol | 削除 |
| `margin-bottom` on li | 削除 |
| table の `font-size` | `.content-block table { font-size: 32px; }` で管理 |
| `<small>` タグ | `<span>` に変換 |

**許容するインラインスタイル：**
- `color: #00d4ff`（意味のある色指定）
- `color: #aaa`（補足テキストの薄色）
- ~~`list-style: none; padding: 0`~~ → `class="no-bullet"` を使う（下記参照）
- `width: 100%` などの構造的レイアウト指定

---

## 8. CSSクラス一覧（主要）

| クラス | 用途 |
|---|---|
| `standard-content-layout` | 標準スライドレイアウト |
| `content-block` | コンテンツ領域 |
| `highlight-box` | tip・注意・重要注意の枠（シアン左ボーダー） |
| `tiled-content` | 1行横並びタイル（flex） |
| `tile-grid` | 2列グリッドタイル |
| `tile` | タイル1個（ダークカード） |
| `tile .icon` | タイル内の絵文字アイコン（48px円形背景） |
| `slide-table` | 設定仕様・対照表（シアンヘッダー） |
| `text-sub` | 補足テキスト（26px・#e0e0e0） |
| `text-note` | 注釈テキスト（21px・#999） |
| `two-column tiled` | 2カラムレイアウト |
| `prompt-box` | Gemini プロンプト表示枠 |
| `full-bg-image` | 表紙スライド |
| `section-title-layout` | セクションタイトルスライド（クイズ前など） |
| `interactive-checklist` | クリックで✓＋下線アニメーションのチェックリスト（012専用実装） |
| `no-bullet` | bullet非表示・インデント維持（①②③や☐先頭のリスト） |
| `next-box` | 次回予告・引き継ぎ情報の枠（グレー左ボーダー） |

### ul.no-bullet の使用ルール

| リストの先頭文字 | ulのクラス |
|---|---|
| プレーンテキスト（prefix なし） | `<ul>`（デフォルト bullet） |
| ①②③ などの丸数字 | `<ul class="no-bullet">` |
| ☐ ▢ などのチェックボックス記号 | `<ul class="no-bullet">` |

```html
<!-- NG：bullet と ① が重なる -->
<ul>
    <li>① まず自分で書く</li>
</ul>

<!-- OK：no-bullet で bullet を消してインデントを維持 -->
<ul class="no-bullet">
    <li>① まず自分で書く</li>
</ul>
```
