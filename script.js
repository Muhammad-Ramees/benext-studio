// === Mobile menu toggle ===
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');


mobileMenu?.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');

    // Prevent background scroll
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});


// Close menu on link click or outside click
document.querySelectorAll('.nav-links a').forEach(link =>
    link.addEventListener('click', () => {
        mobileMenu?.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    })
);
document.addEventListener('click', e => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenu?.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// === Smooth scroll ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');
        if (href === '#') return; // skip empty anchors

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Optional: close mobile menu
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});


// === Navbar scroll effect ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (!navbar) return;
    const scrollY = window.scrollY;
    navbar.style.background = scrollY > 50 ? 'rgba(10, 11, 13, 0.98)' : 'rgba(10, 11, 13, 0.95)';
    navbar.style.borderBottom = scrollY > 50 ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.1)';
});

// === Resize reset ===
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu?.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// === Fade-in animation ===
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// === Counter animation ===
function animateCounter(el, target) {
    const duration = 2000, increment = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            clearInterval(timer);
            current = target;
        }
        el.textContent = target === 100 ? Math.floor(current) + '%' :
            target === 50 ? Math.floor(current) + '+' :
                target === 24 ? '24/7' : 'Dubai';
    }, 16);
}

const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.stat-item h3');
                const targets = [50, 100, 24, 1];
                items.forEach((el, i) => {
                    if (i < 3) setTimeout(() => animateCounter(el, targets[i]), i * 200);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    statsObserver.observe(statsSection);
}

// === Typing effect ===
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i++);
            setTimeout(type, speed);
        }
    }
    type();
}
function createGradientEffect() {
    const hero = document.querySelector('.hero');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;

        hero.style.background = `
                    radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at ${(1 - mouseX) * 100}% ${(1 - mouseY) * 100}%, rgba(118, 75, 162, 0.15) 0%, transparent 50%),
                    var(--dark-bg)
                `;
    });
}

createGradientEffect();
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-text');
    if (!heroTitle) return;
    const originalHTML = heroTitle.innerHTML;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalHTML;
    const fullText = tempDiv.textContent;
    heroTitle.innerHTML = '';
    let i = 0;
    function typeChar() {
        if (i < fullText.length) {
            heroTitle.textContent += fullText[i++];
            setTimeout(typeChar, 50);
        } else {
            heroTitle.innerHTML = originalHTML;
        }
    }
    setTimeout(typeChar, 1000);
});

// === Scroll progress bar ===
function createScrollProgress() {
    const bar = document.createElement('div');
    bar.style.cssText = `
            position: fixed; top: 0; left: 0; height: 3px; width: 0%;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 9999; transition: width 0.1s ease;`;
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
        const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = percent + '%';
    });
}
createScrollProgress();

// === Parallax effect ===
window.addEventListener('scroll', () => {
    const el = document.querySelector('.floating-cards');
    if (el && window.scrollY < window.innerHeight) {
        el.style.transform = `translateY(${window.scrollY * 0.5}px) rotate(${window.scrollY * 0.02}deg)`;
    }
});

// === Hover effect on service cards ===
document.querySelectorAll('.service-item').forEach(card => {
    card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px) scale(1.02)');
    card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
});

// === Ripple effect on buttons ===
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.className = 'ripple';

    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
                .ripple {
                    position: absolute; border-radius: 50%;
                    transform: scale(0); animation: ripple 600ms linear;
                    background-color: rgba(255, 255, 255, 0.3);
                }
                @keyframes ripple {
                    to { transform: scale(4); opacity: 0; }
                }`;
        document.head.appendChild(style);
    }

    button.querySelector('.ripple')?.remove();
    button.appendChild(circle);
}

document.querySelectorAll('.cta-btn, .btn-secondary').forEach(btn =>
    btn.addEventListener('click', e => {
        createRipple(e);

        if (!btn.getAttribute('href')?.startsWith('mailto:') && !btn.getAttribute('href')?.startsWith('tel:')) {
            const originalText = btn.textContent;
            btn.innerHTML = originalText + '<span class="loading-dots"></span>';
            setTimeout(() => btn.textContent = originalText, 2000);
        }
    })
);