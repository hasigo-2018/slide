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
    }
});

// タッチ操作（スワイプ）
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
}

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
    slides = document.querySelectorAll('.slide-container');
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
    wrapper = document.getElementById('presentation-wrapper');
    addCopyright();
    setupClickNavigation();
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