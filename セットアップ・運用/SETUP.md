# セットアップ手順書

## 概要
この手順で、Claude Code を使った教科書自動生成環境を構築します。

---

## 前提条件
- ✅ Claude Code インストール済み
- ✅ Node.js インストール済み（insert_html.js, check_svg.js で使用）
- ✅ 構成指示書（blueprint）が全冊分用意済み
- ✅ 雛形HTMLが全冊分配置済み

---

## Step 1: ファイルを配置する

以下の4ファイルを、`slide` フォルダのルート（教科書の構成指示書や master_slide と同じ階層）にコピーしてください。

```
slide/
├── CLAUDE.md              ← ★ここに配置
├── generate.sh            ← ★ここに配置
├── scripts/
│   ├── insert_html.js     ← ★ここに配置
│   └── check_svg.js       ← ★ここに配置
├── master_slide/
│   └── themes_new/
│       ├── 014-1_theory.html
│       ├── 014-2_practice.html
│       └── ...
├── 教科書の構成指示書/
│   ├── block 1/
│   │   ├── blueprint_001_theory.md
│   │   ├── blueprint_001_practice.md
│   │   └── ...
│   ├── block 2/
│   ├── block 3/
│   └── ...
└── assets/
    ├── slide-template.css
    └── slide-template.js
```

---

## Step 2: 実行権限を付与

ターミナルで `slide` フォルダに移動し、以下を実行：

```bash
chmod +x generate.sh
```

---

## Step 3: 動作確認

まず、ファイルチェックだけ走らせてみます：

```bash
./generate.sh 014
```

以下のように表示されれば成功です：

```
📖 テーマ 014（Block 3）の生成を開始します
━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ ファイルチェック完了
  理論編構成指示書: .../blueprint_014_theory.md
  実践編構成指示書: .../blueprint_014_practice.md
  理論編HTML雛形:   .../014-1_theory.html
  実践編HTML雛形:   .../014-2_practice.html
```

その後、Claude Code が起動し、構成指示書を読み込んで確認事項を提示してきます。

---

## Step 4: 日常の使い方

### 基本フロー

```bash
# テーマ014の教科書を生成
./generate.sh 014
```

Claude Code が起動したら：

1. **方向性の確認が表示される** → 内容を確認して承認 or 修正指示
2. **理論編が生成される** → 自動で雛形に挿入 → SVGチェック結果が表示される
3. **内容を確認** → `理論編OK` と入力
4. **実践編に進むか聞かれる** → `はい` と入力
5. **実践編も同じ流れ** → `実践編OK` で完了

### 修正が必要な場合

```
スライド8を修正：矢印を右向きに変えてください
```

```
理論編を最初から
```

### 1日のペース（推奨）

2〜3冊/日（= 4〜6ファイル）。Proプランで無理なく収まる範囲です。

---

## Step 5: スクリプト単体での使い方（必要に応じて）

### insert_html.js（手動でHTMLを挿入したい場合）

```bash
# ファイルから挿入
node scripts/insert_html.js master_slide/themes_new/014-1_theory.html generated.html

# パイプで挿入（Claude Codeが内部で使用）
echo "<div>...</div>" | node scripts/insert_html.js master_slide/themes_new/014-1_theory.html
```

### check_svg.js（SVGだけチェックしたい場合）

```bash
node scripts/check_svg.js master_slide/themes_new/014-1_theory.html
```

出力例：
```
🔍 SVGチェック: master_slide/themes_new/014-1_theory.html
━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 SVG要素数: 5

⚠️ SVGチェック完了: 2 件の問題を検出

⚠️ 警告 (1件):
  スライド8 SVG3: 左向き矢印を検出。流れが左→右の場合、逆向きの可能性があります。

ℹ️ 情報 (1件):
  スライド5 SVG1: 横並びのrect要素の間隔にバラツキがあります（最大偏差: 15px）。
```

---

## トラブルシューティング

### 「ブロック番号が不正」と出る
→ テーマ番号が 001〜044 の範囲内か確認してください

### 「構成指示書が見つかりません」と出る
→ `教科書の構成指示書/block N/` フォルダ内のファイル名を確認。`blueprint_XXX_theory.md` の形式になっているか

### 「雛形HTMLが見つかりません」と出る
→ `master_slide/themes_new/XXX-1_theory.html` が存在するか確認

### Claude Code が途中で止まる
→ Proプランの使用量上限に達した可能性。しばらく時間を置いてから再試行

### 挿入前のHTMLに戻したい
→ `XXX-1_theory.html.bak` というバックアップファイルが自動生成されています。リネームして戻してください

---

## ファイル一覧

| ファイル | 役割 |
|---------|------|
| `CLAUDE.md` | Claude Codeのプロジェクト設定（教科書生成AIとしての振る舞い定義） |
| `generate.sh` | 起動スクリプト（番号指定でClaude Codeを起動） |
| `scripts/insert_html.js` | 生成HTMLを雛形に自動挿入 |
| `scripts/check_svg.js` | SVGの品質チェック（矢印・揃え・不要線） |
