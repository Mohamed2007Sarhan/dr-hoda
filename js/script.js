const navbarToggler = document.getElementById('navbarToggler');
const navbarNav = document.getElementById('navbarNav');
const navbar = document.querySelector('.navbar');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

const revealElements = document.querySelectorAll('.reveal');
const timelineItems = document.querySelectorAll('.timeline-item');
const counters = document.querySelectorAll('.counter');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);

            if (entry.target.classList.contains('stats-section')) {
                startCounters();
            }
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));
timelineItems.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

function startCounters() {
    counters.forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute('data-target');
        const increment = target / 200;

        const updateCounter = () => {
            const c = +counter.innerText;
            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

if (navbarToggler) {
    navbarToggler.addEventListener('click', () => {
        navbarNav.classList.toggle('active');
    });
}

document.addEventListener('click', (e) => {
    if (navbarNav && navbarToggler) {
        if (!navbarNav.contains(e.target) && !navbarToggler.contains(e.target)) {
            navbarNav.classList.remove('active');
        }
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

function openSiteAndDownload() {
    // Default to English CV
    const url = "cv dr hoda/CV Dr Hoda Elbendari English (en).pdf";
    window.open(url, "_blank");

    // Trigger download of zip
    const link = document.createElement("a");
    link.href = "cv dr hoda.zip";
    link.download = "cv dr hoda.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}