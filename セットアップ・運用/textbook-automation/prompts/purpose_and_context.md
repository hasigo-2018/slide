# Purpose & context

## プログラム概要
AKI is developing a comprehensive design education curriculum called the **"Visual Architect"** program — a structured 6-month training system targeting **design-industry newcomers (men and women around age 30, seeking career change)** who need to evaluate, judge, and direct design work using AI, rather than become hands-on designers. The core philosophy: **AI handles creation; humans handle judgment, decision-making, and direction.**

The program runs parallel courses: **Visual Architect (this curriculum)**, **Programming (HTML/CSS/JS/GSAP/Astro etc.)**, and **Business**. This curriculum is self-contained and does not depend on the other courses.

Students enroll for 6 months. The first 3 months focus on input (learning), the second 3 months on practice via **crowdsourcing platforms** (CrowdWorks, Lancers, Coconala). New cohorts enter every 3 months, so junior students always overlap with seniors. A formal **handoff meeting** from graduating seniors to incoming juniors covers practical wisdom, proposal templates (iteratively improved each cohort), and real-world case insights. This peer-to-peer system handles market entry skills, so the curriculum does not include market entry/business development modules.

## カリキュラム構造
**Full 44 themes / 8 blocks / 240 contact hours (230 teaching + 10 buffer)**

| Block | Name | Themes | Hours | Nature |
|-------|------|--------|-------|--------|
| 1 | デザイン基礎理論 | 5 | 20 | Theory-heavy |
| 2 | WEB制作の上流設計 | 5 | 25 | Theory + exercises |
| 3 | Figmaと構造設計 | 5 | 30 | Hands-on |
| 4 | AI活用基礎 | 6 | 28 | Hands-on |
| 5 | LP/HP制作実践 | 8 | 55 | **Course core** |
| 6 | QAとディレクション技術 | 7 | 37 | **Highest value** |
| 7 | チーム連携とドキュメンテーション | 3 | 15 | Exercise-focused |
| 8 | ポートフォリオ構築とピッチング | 5 | 20 | Production + presentation |

**Storyline:** 考える → 道具を持つ → 作る → 裁く → 渡す → 売る (one-way, never backtracks)

**Priority when time runs short:**
- **A (never cut):** Block 1, 2, 3, 7, 9
- **B (do if possible):** Block 4, 6, 8
- **C (can cut last resort):** Block 5, 10

## ツールエコシステム

| Tool | Primary Role |
|------|-------------|
| Figma | Wireframing, component systems, prototyping, UI spec generation |
| Figma Make / Sites | AI-assisted wireframe/prototype generation |
| Gemini | Strategy, copy generation, AI review, persona/competitive analysis, acting as virtual client/director |
| Gemini Gems | Custom AI assistants (e.g., brand-specific review bot) |
| Nano Banana Pro | AI image generation (Japanese prompts; ultra-detailed prompting for reproducibility) |

**Note:** Canva has been removed from the curriculum.

## 実例サイト
テーマに応じて実例または架空ブランドを使用。

**通し事例（Block 1）：**
- キャリアリンクファクトリーLP（AKI制作・使用許可済み）
  - 1回目: https://www.careerlinkfactory.co.jp/lp/solutions/
  - 2回目: https://www.careerlinkfactory.co.jp/lp/international/

**サイト模写・Figmaトレース向き（SaaS系・構造がわかりやすい）：**
- SmartHR（smarthr.jp）
- Sansan（jp.sansan.com）
- Backlog（backlog.com/ja）

**制作会社の実績サイト（分析・言語化演習向き）：**
- ベイジ（baigie.me）制作: にんべん（ninben.co.jp）、サイボウズ採用サイト、グロービスBtoBサイト
- シフトブレイン（shiftbrain.com）制作: LayerXコーポレート、島根県美郷町「みさとと。」、45R、welleg
- クオートワークス（quoitworks.com）制作: パーソルホールディングス、ヤプリ、FREEDOM X
- グッドパッチ（goodpatch.com）: 自社サイトおよびUI/UXデザイン事例

**制作会社の実績ページ（参照先）：**
- baigie.me/work
- shiftbrain.com
- quoitworks.com/casestudy
- goodpatch.com/work

## Key learnings & principles

- **"Visual Architect" framing is critical:** Content must consistently position learners as evaluators and directors, not creators. Any reference to "designers" doing hands-on work is a misalignment.
- **AI handles creation; humans handle judgment:** This division of labor is the philosophical backbone of the entire curriculum.
- **100-word evidence rule:** From Block 5 onward, every submission requires a 100-character rationale. Block 1 practices build toward this habit through progressive "write in your own words → compare with AI" exercises.
- **Practical exercises should chain outputs:** Each exercise's output becomes the next exercise's input, creating cohesive strategic development.
- **Beginner scaffolding matters:** Free-choice exercises overwhelm beginners; phased or framework-based structures work better.
- **Tool accuracy is non-negotiable:** AKI corrects unofficial feature names and will provide official documentation to ensure accuracy.
- **"Garbage In, Garbage Out" principle** is explicitly taught — file organization before AI generation is foundational.
- **Class size affects pacing:** More students = slower progress. The 10-hour buffer exists for this reason.

## Approach & patterns

- **Standard module structure:** Each topic gets paired theory + practice components delivered as HTML slide presentations
- **Theory slide count:** Typically 18–24 slides; practice typically 10–14 slides
- **Confirmation-first workflow:** AKI approves structure/scope before full generation
- **Iterative refinement:** SVG diagrams and visual layouts frequently need adjustment; AKI provides precise technical feedback
- **Interactive elements are standard:** Copy-to-clipboard prompt buttons, step-by-step checklists, and quiz questions (5 per module) are expected in every module
- **Japanese-language prompts:** Prompts for AI tools (especially Nano Banana Pro) are converted to Japanese for learner accessibility
- **Construction blueprint mode:** When a detailed construction blueprint (構成指示書) is provided as an attachment, it takes absolute priority over auto-generated structures
