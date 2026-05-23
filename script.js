document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ANIMASI SCROLL REVEAL (MUNCUL PERLAHAN SAAT DI-SCROLL) ---
    // Menambahkan class 'fade-item' secara otomatis ke elemen-elemen penting
    const elementsToAnimate = document.querySelectorAll('.sub-section, .bakteri-template, .hero-container, section h2');
    
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-item');
    });

    // Mengatur observer untuk mendeteksi scroll
    const observerOptions = {
        root: null,
        threshold: 0.15, // Elemen akan muncul jika 15% bagiannya sudah terlihat di layar
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-visible');
                observer.unobserve(entry.target); // Stop observe jika sudah muncul sekali
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        scrollObserver.observe(element);
    });


    // --- 2. ANIMASI INTERAKTIF NAVIGASI BAR ---
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

});
