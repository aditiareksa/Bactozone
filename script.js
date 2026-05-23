document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. DETEKSI ELEMEN SEJARAH (DARI KIRI KE KANAN) ---
    // Cari kotak/kartu sejarah kamu (misal kelasnya .sejarah-card, .timeline-item, atau sesuaikan)
    // Di sini saya targetkan elemen di halaman sejarah yang ingin digeser dari kiri
    const sejarahElements = document.querySelectorAll('.sejarah-item, .timeline-box, .ilmuwan-card');
    
    sejarahElements.forEach(element => {
        element.classList.add('fade-left-item');
    });

    // --- 2. DETEKSI ELEMEN BIASA (DARI BAWAH KE ATAS) ---
    const regularElements = document.querySelectorAll('.sub-section, .bakteri-template, .hero-container, section h2');
    
    regularElements.forEach(element => {
        element.classList.add('fade-item');
    });

    // --- 3. OBSERVER UNTUK MENJALANKAN ANIMASI ---
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jika elemen adalah bagian sejarah, munculkan dengan efek kiri-kanan
                if (entry.target.classList.contains('fade-left-item')) {
                    entry.target.classList.add('fade-left-visible');
                } else {
                    entry.target.classList.add('fade-visible');
                }
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Daftarkan semua elemen ke observer
    sejarahElements.forEach(el => scrollObserver.observe(el));
    regularElements.forEach(el => scrollObserver.observe(el));


    // --- 4. ANIMASI HOVER NAVIGASI BAR ---
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => link.style.transform = 'translateY(-2px)');
        link.addEventListener('mouseleave', () => link.style.transform = 'translateY(0)');
    });

});
