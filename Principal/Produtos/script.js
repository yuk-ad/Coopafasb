// Menu toggle para mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu ao clicar no botão
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Fechar menu ao redimensionar a janela
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Atualizar ano no footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const productCarousel = document.getElementById('productCarousel');
const productSlides = document.querySelectorAll('.product-slide');
const carouselIndicators = document.querySelectorAll('.carousel-indicator');
const previousButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
let currentSlideIndex = 0;
let carouselTimer;

function showProductSlide(slideIndex) {
    currentSlideIndex = (slideIndex + productSlides.length) % productSlides.length;

    productSlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlideIndex);
    });

    carouselIndicators.forEach((indicator, index) => {
        const isActive = index === currentSlideIndex;
        indicator.classList.toggle('active', isActive);
        indicator.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
}

function startCarousel() {
    carouselTimer = setInterval(() => {
        showProductSlide(currentSlideIndex + 1);
    }, 5000);
}

function resetCarouselTimer() {
    clearInterval(carouselTimer);
    startCarousel();
}

if (productCarousel && productSlides.length > 0) {
    previousButton.addEventListener('click', () => {
        showProductSlide(currentSlideIndex - 1);
        resetCarouselTimer();
    });

    nextButton.addEventListener('click', () => {
        showProductSlide(currentSlideIndex + 1);
        resetCarouselTimer();
    });

    carouselIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showProductSlide(index);
            resetCarouselTimer();
        });
    });

    productCarousel.addEventListener('mouseenter', () => clearInterval(carouselTimer));
    productCarousel.addEventListener('mouseleave', startCarousel);
    productCarousel.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            showProductSlide(currentSlideIndex - 1);
            resetCarouselTimer();
        }
        if (event.key === 'ArrowRight') {
            showProductSlide(currentSlideIndex + 1);
            resetCarouselTimer();
        }
    });

    startCarousel();
}
