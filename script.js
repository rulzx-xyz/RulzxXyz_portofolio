document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                if(entry.target.classList.contains('skill-box')) {
                    const bar = entry.target.querySelector('.progress');
                    if(bar) { bar.style.width = bar.getAttribute('data-width'); }
                }
            }
        });
    }, { threshold: 0.1 });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
