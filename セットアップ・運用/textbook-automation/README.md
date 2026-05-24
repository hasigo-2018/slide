# Visual Architect 教科書自動生成システム

## セットアップ

### 1. ファイル配置

以下のファイルを `slide/` フォルダ直下に配置してください：

```
slide/
├── CLAUDE.md              ← このファイル群をここに
├── generate.sh
├── inject.js
├── svg-check.js
├── prompts/
│   ├── slide_prompt_primary.md
│   ├── slide_prompt_secondary.md
│   ├── slide_generation_rules.md
│   └── purpose_and_context.md
├── master_slide/
│   └── themes_new/
│       ├── 014-1_theory.html
│       ├── 014-2_practice.html
│       └── ...
└── 教科書の構成指示書/
    ├── block 1/
    │   ├── blueprint_001_theory.md
    │   └── ...
    └── block 8/
```

### 2. 実行権限の付与

```bash
chmod +x generate.sh
```

### 3. Node.js の確認

```bash
node --version  # v18以上推奨
```

---

## 使い方

### 基本（1テーマずつ）

```bash
# テーマ014を処理
./generate.sh 014
```

### 連続処理（範囲指定）

```bash
# テーマ014〜016を連続処理
./generate.sh 014 016
```

### 処理の流れ

1. スクリプトが構成指示書を表示
2. **Claude Code が方向性を確認** → あなたが承認
3. Claude Code が理論編HTMLを生成
4. あなたが生成内容を確認し、`/tmp/generated_XXX_theory.html` に保存
5. Enter を押すと自動で：
   - 雛形HTMLに挿入
   - SVGチェック実行
6. 確認後、Enter で実践編へ
7. 同じフローで実践編を処理
8. 完了 → 次のテーマへ

---

## 個別ツールの使い方

### inject.js（手動で挿入する場合）

```bash
node inject.js <生成HTMLファイル> <雛形HTMLファイル>

# 例
node inject.js /tmp/generated_014_theory.html ./master_slide/themes_new/014-1_theory.html
```

- 自動バックアップ（`.bak` ファイル）を作成
- スライド部分とクイズScript部分を自動分離して挿入
- `active` クラスの自動付与

### svg-check.js（SVGチェックのみ実行）

```bash
node svg-check.js <HTMLファイル>

# 例
node svg-check.js ./master_slide/themes_new/014-1_theory.html
```

チェック項目：
- ❌ 左向き矢印（←）の検出と自動修正（→ に変換）
- ⚠️ 左向き polygon（三角形）の検出
- ❌ viewBox の設定漏れ
- ⚠️ 短すぎる line 要素（不要な線の候補）
- ⚠️ 中央揃えテキストの位置ズレ
- ⚠️ svg-centered クラスの付与漏れ

---

## Claude Code での運用方法

### 推奨ワークフロー

```
slide/ フォルダで Claude Code を起動：

$ cd /path/to/slide
$ claude

Claude Code 内で：
> 014の理論編を作って

（Claude Code が blueprint_014_theory.md を読み込み、確認事項を提示）

> OK、進めて

（生成されたHTMLが表示される）

> 理論編OK。実践編に進んで

（実践編の処理へ）

> 実践編OK
```

### よく使うコマンド

| コマンド | 動作 |
|---------|------|
| `XXXの理論編を作って` | 構成指示書を読み込み、確認後に生成 |
| `XXXの実践編を作って` | 理論編を参照しつつ実践編を生成 |
| `スライドNを修正して` | 特定のスライドのみ修正 |
| `理論編OK` | 理論編完了 → 実践編へ |
| `実践編OK` | テーマ完了 |
| `SVGチェックして` | SVGの品質チェック実行 |

---

## トラブルシューティング

### 構成指示書が見つからない
- `教科書の構成指示書/block N/` 内のファイル名を確認
- `blueprint_XXX_theory.md` の形式になっているか確認

### 挿入がうまくいかない
- 雛形HTML内に以下のマーカーがあるか確認：
  - `<!-- AIが生成するスライドをここに貼り付け -->`
  - `// AIが生成するクイズデータをここに貼り付け`
- `.bak` ファイルから復元可能

### SVGチェックの誤検出
- polygon の左向き警告は誤検出の場合あり（意図的な左向き矢印）
- 位置ズレは意図的な左右配置の場合もあるので、警告のみ
