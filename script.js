document.addEventListener('DOMContentLoaded', () => {

    // --- PRELOADER ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('loaded');
    });

    // --- VANTA.JS 3D "SPACE VIBE" BACKGROUND ---
    VANTA.GLOBE({
        el: "#hero",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x9f55ff,      // Accent color: Cosmic Violet
        backgroundColor: 0xa192f, // BG Color
        size: 1.20
    });

    // --- CUSTOM CURSOR (FIXED) ---
    const cursor = document.querySelector('.cursor');
    const magneticElements = document.querySelectorAll('.magnetic');

    // **FIX:** Use clientX/clientY for viewport positioning
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", `top: ${e.clientY}px; left: ${e.clientX}px;`);
    });

    magneticElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // --- NAVBAR SCROLL EFFECT ---
    // const navbar = document.querySelector('.navbar');
    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 50) {
    //         navbar.classList.add('scrolled');
    //     } else {
    //         navbar.classList.remove('scrolled');
    //     }
    // });
    
    // --- MOBILE MENU ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // --- SCROLL REVEAL ANIMATIONS ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});
