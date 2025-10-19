// JavaScript for animations and interactions

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, footer');

    const observerOptions = {
        root: null, // ビューポートをルートとする
        rootMargin: '0px',
        threshold: 0.1 // 10%表示されたらコールバックを実行
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // 一度表示されたら監視を停止
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // 初期状態を非表示に
        observer.observe(section);
    });
});