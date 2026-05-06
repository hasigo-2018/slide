// ========================================
// Lecture Slides Template - JavaScript
// ========================================

// グローバル変数
let currentSlideIndex = 0;
let slides = [];
let wrapper = null;

// ========================================
// スライドナビゲーション
// ========================================

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
    // 最後のスライドの場合は何もしない
    if (currentSlideIndex >= slides.length - 1) {
        return;
    }
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    // 最初のスライドの場合は何もしない
    if (currentSlideIndex <= 0) {
        return;
    }
    currentSlideIndex--;
    showSlide(currentSlideIndex);
}

function updateSlideNumbers() {
    const numbers = document.querySelectorAll('.slide-number');
    numbers.forEach((num, i) => {
        num.textContent = `${i + 1} / ${slides.length}`;
    });
}

// ========================================
// イベントリスナー
// ========================================

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
    } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        printSlides();
    }
});

// クリック操作
// function setupClickNavigation() {
//     wrapper.addEventListener('click', (e) => {
//         const rect = wrapper.getBoundingClientRect();
//         const clickX = e.clientX - rect.left;
//         if (clickX > rect.width / 2) {
//             nextSlide();
//         } else {
//             prevSlide();
//         }
//     });

//     wrapper.addEventListener('touchstart', (e) => {
//         touchStartX = e.changedTouches[0].screenX;
//     });

//     wrapper.addEventListener('touchend', (e) => {
//         touchEndX = e.changedTouches[0].screenX;
//         handleSwipe();
//     });
// }

// ========================================
// クイズシステム
// ========================================

// クイズデータは各HTMLファイルで定義
// const questions = [ ... ];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    if (typeof questions === 'undefined' || questions.length === 0) {
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
            <div id="quiz-options" style="display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 2vw, 1.5rem); width: 90%; max-width: 1280px;">
                ${q.options.map((opt, i) => `
                    <button onclick="checkAnswer(${i})"
                            style="padding: clamp(1rem, 2vh, 1.5rem);
                                font-size: clamp(1.25rem, 1.25vw, 1.75rem);
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
            <div style="background: rgba(255,255,255,0.05); border-radius: 15px; padding: clamp(1.5rem, 3vh, 2.5rem); width: 90%; text-align: left;">
                <p style="font-size: clamp(1.5rem, 2vw, 2rem); margin-bottom: clamp(1rem, 2vh, 1.5rem); color: #fff;">
                    <strong>正解:</strong> ${q.options[q.correct]}
                </p>
                <p style="font-size: clamp(1.25rem, 1.25vw, 1.75rem); line-height: 1.8; color: #e0e0e0;">
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
// PDF出力機能（印刷用）
// ========================================

function printSlides() {
    // 印刷用CSSが既に追加されているか確認
    if (!document.getElementById('print-styles')) {
        addPrintStyles();
    }
    
    // ユーザーへの案内を表示
    alert('印刷ダイアログが開きます。\n\n【PDF保存の設定】\n1. 送信先：「PDFに保存」を選択\n2. 詳細設定 → 「背景のグラフィック」にチェック\n3. 用紙：横向き（自動設定済み）');
    
    // 印刷実行
    window.print();
}

function addPrintStyles() {
    const printStyle = document.createElement('style');
    printStyle.id = 'print-styles';
    printStyle.textContent = `
        @media print {
            /* ページ設定 */
            @page {
                size: landscape;
                margin: 0;
            }
            
            /* 全体リセット */
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
            }
            
            html, body {
                width: 100% !important;
                height: auto !important;
                overflow: visible !important;
                background: #000 !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            
            /* プレゼンテーションラッパー */
            #presentation-wrapper {
                position: static !important;
                width: 100% !important;
                height: auto !important;
                max-width: none !important;
                max-height: none !important;
            }
            
            /* 全スライドを表示 */
            .slide-container {
                display: flex !important;
                visibility: visible !important;
                opacity: 1 !important;
                position: relative !important;
                width: 100vw !important;
                height: 100vh !important;
                page-break-after: always !important;
                break-after: page !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                background-color: #121212 !important;
                box-shadow: none !important;
                animation: none !important;
            }
            
            /* bleed-image-layoutの場合はgrid表示を維持 */
            .slide-container.bleed-image-layout {
                display: grid !important;
            }
            
            /* 最後のスライドの改ページを防止 */
            .slide-container:last-child {
                page-break-after: avoid !important;
                break-after: avoid !important;
            }
            
            /* 操作ヒントを非表示 */
            .control-hint {
                display: none !important;
            }
            
            /* コピーボタンを非表示 */
            .copy-btn {
                display: none !important;
            }
            
            /* フッターとページ番号の調整 */
            .footer-copyright-wrapper {
                position: absolute !important;
                bottom: 15px !important;
                left: 15px !important;
                display: flex !important;
                flex-direction: row !important;
                align-items: center !important;
                gap: 0.5em !important;
                max-width: none !important;
                width: auto !important;
            }
            
            .footer-logo {
                height: 1em !important;
                width: auto !important;
                flex-shrink: 0 !important;
            }
            
            .footer-copyright {
                position: static !important;
                white-space: nowrap !important;
                overflow: visible !important;
                font-size: 8px !important;
                flex-shrink: 0 !important;
            }
            
            .slide-number {
                position: absolute !important;
            }
            
            /* 画像の印刷対応 */
            img {
                max-width: 100% !important;
                page-break-inside: avoid !important;
            }
            
            /* リンクのURL表示を抑制 */
            a[href]:after {
                content: none !important;
            }
            
            /* グラデーション背景の維持 */
            .full-bg-image {
                background: radial-gradient(circle at 10% 20%, rgba(0, 212, 255, 0.2) 0%, transparent 40%),
                            radial-gradient(circle at 90% 80%, rgba(255, 0, 128, 0.2) 0%, transparent 40%),
                            linear-gradient(135deg, #121212 0%, #1a1a1a 100%) !important;
            }
            
            .section-title-layout {
                background: linear-gradient(135deg, #1a1a1a 0%, #121212 100%) !important;
            }
            
            /* big-concept-layoutのグラデーションテキスト対応 */
            .big-concept-layout h2 {
                -webkit-background-clip: text !important;
                background-clip: text !important;
                -webkit-text-fill-color: transparent !important;
            }
        }
    `;
    document.head.appendChild(printStyle);
}

// ========================================
// 著作権表示追加
// ========================================

function addCopyright() {
    // 動的にCSSを追加（既存CSSを上書き）
    const style = document.createElement('style');
    style.textContent = `
        .footer-copyright-wrapper {
            position: absolute !important;
            bottom: clamp(0.8rem, 2vh, 1.5rem);
            left: clamp(0.8rem, 2vw, 1.5rem);
            display: flex;
            align-items: center;
            gap: 0.5em;
            z-index: 100;
        }
        .footer-logo {
            height: 1em;
            width: auto;
            opacity: 0.5;
        }
        .footer-copyright-wrapper .footer-copyright {
            position: static;
            font-size: clamp(0.5rem, 0.8vw, 0.65rem);
            color: rgba(255, 255, 255, 0.5);
        }
    `;
    document.head.appendChild(style);

    const allSlides = document.querySelectorAll('.slide-container');
    allSlides.forEach((slide, index) => {
        // ラッパー要素を作成
        const wrapper = document.createElement('div');
        wrapper.className = 'footer-copyright-wrapper';

        // ロゴを追加（外部SVGファイル読み込み）
        const logo = document.createElement('img');
        logo.className = 'footer-logo';
        logo.src = '../assets/images/logo.svg';
        logo.alt = 'ACT HOUSE';
        wrapper.appendChild(logo);

        // コピーライトテキストを追加
        const footer = document.createElement('div');
        footer.className = 'footer-copyright';
        footer.innerText = '【Confidential 社外秘】 本書の無断使用・転載・販売等を固く禁じます。©︎ ACT HOUSE ®︎ All Rights Reserved.';
        wrapper.appendChild(footer);

        slide.appendChild(wrapper);

        // ページ番号追加
        const slideNum = document.createElement('div');
        slideNum.className = 'slide-number';
        slideNum.textContent = `${index + 1} / ${allSlides.length}`;
        slide.appendChild(slideNum);
    });
}

// ========================================
// 初期化
// ========================================

window.addEventListener('DOMContentLoaded', () => {
    wrapper = document.getElementById('presentation-wrapper');
    slides = Array.from(document.querySelectorAll('.slide-container'));
    addCopyright();
    addPrintStyles(); // 印刷用CSSを事前に追加
    showSlide(0);
});

// ================================================
// コピーボタン機能（追加分）
// ================================================

function copyPrompt(elementId, event) {
    // イベントの伝播を停止（重要！）
    event.stopPropagation();

    const element = document.getElementById(elementId);
    if (!element) {
        console.error('Element not found:', elementId);
        return;
    }

    const text = element.textContent.trim();

    // クリップボードにコピー
    navigator.clipboard.writeText(text).then(() => {
        // コピー成功のフィードバック
        const btn = event.target.closest('.copy-btn');
        if (!btn) return;

        const originalHTML = btn.innerHTML;

        btn.innerHTML = '<i class="fas fa-check"></i> コピー完了！';
        btn.classList.add('copied');

        // 2秒後に元に戻す
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('コピーに失敗しました:', err);
        alert('コピーに失敗しました。手動でコピーしてください。');
    });
}
