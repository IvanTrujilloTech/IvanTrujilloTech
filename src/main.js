import './style.css'
import { initI18n } from './i18n'

// Main interactivity for the portfolio

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal animations on scroll
const revealItems = () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Items to animate
    const items = document.querySelectorAll('.project-card, .timeline-item, .skill-badge, .section-title');
    
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initI18n();
    revealItems();
    
    // Initialize Lucide icons if global lucide is available
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
