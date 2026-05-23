document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. ANIMASI DARI KIRI KE KANAN (HALAMAN SEJARAH & TENTANG) ---
    // Menargetkan kartu ilmuwan, kartu tentang kami, judul h3, p, dan gambar
    const leftElements = document.querySelectorAll(
        '.scientist-card, .tentang-card, section h1, section h2, section h3, section p, .scientist-info, .tentang-info'
    );
    
    leftElements.forEach(element => {
        // Cek agar elemen di halaman 'jenis' tidak ikut bergeser dari kiri
        if (!element.closest('.sub-section') && !element.closest('.bakteri-template')) {
            element.classList.add('fade-left-item');
        }
    });

    // --- 2. ANIMASI DARI BAWAH KE ATAS (HALAMAN JENIS & UTAMA) ---
    const bottomElements = document.querySelectorAll('.sub-section, .bakteri-template, .hero-container');
    
    bottomElements.forEach(element => {
        element.classList.add('fade-item');
    });

    // --- 3. OBSERVER JALANNYA ANIMASI ---
    const observerOptions = {
        root: null,
        threshold: 0.05, // Elemen terintip 5% langsung memicu animasi
        rootMargin: "0px 0px -20px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-left-item')) {
                    entry.target.classList.add('fade-left-visible');
                } else {
                    entry.target.classList.add('fade-visible');
                }
                scrollObserver.unobserve(entry.target); // Animasi hanya berjalan sekali
            }
        });
    }, observerOptions);

    // Daftarkan semua elemen ke pendeteksi scroll
    leftElements.forEach(el => scrollObserver.observe(el));
    bottomElements.forEach(el => scrollObserver.observe(el));

    // --- 4. ANIMASI HOVER NAVIGASI BAR ---
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => link.style.transform = 'translateY(-2px)');
        link.addEventListener('mouseleave', () => link.style.transform = 'translateY(0)');
    });

});
