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

const eventCarousel = document.getElementById('eventCarousel');
const eventSlides = document.querySelectorAll('.event-slide');
const eventIndicators = document.querySelectorAll('.event-carousel-indicator');
const previousEventButton = document.querySelector('.event-carousel-button-prev');
const nextEventButton = document.querySelector('.event-carousel-button-next');
let currentEventSlideIndex = 0;
let eventCarouselTimer;

function showEventSlide(slideIndex) {
    currentEventSlideIndex = (slideIndex + eventSlides.length) % eventSlides.length;

    eventSlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentEventSlideIndex);
    });

    eventIndicators.forEach((indicator, index) => {
        const isActive = index === currentEventSlideIndex;
        indicator.classList.toggle('active', isActive);
        indicator.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
}

function startEventCarousel() {
    eventCarouselTimer = setInterval(() => {
        showEventSlide(currentEventSlideIndex + 1);
    }, 5000);
}

function resetEventCarouselTimer() {
    clearInterval(eventCarouselTimer);
    startEventCarousel();
}

if (eventCarousel && eventSlides.length > 0) {
    previousEventButton.addEventListener('click', () => {
        showEventSlide(currentEventSlideIndex - 1);
        resetEventCarouselTimer();
    });

    nextEventButton.addEventListener('click', () => {
        showEventSlide(currentEventSlideIndex + 1);
        resetEventCarouselTimer();
    });

    eventIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showEventSlide(index);
            resetEventCarouselTimer();
        });
    });

    eventCarousel.addEventListener('mouseenter', () => clearInterval(eventCarouselTimer));
    eventCarousel.addEventListener('mouseleave', startEventCarousel);
    eventCarousel.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            showEventSlide(currentEventSlideIndex - 1);
            resetEventCarouselTimer();
        }
        if (event.key === 'ArrowRight') {
            showEventSlide(currentEventSlideIndex + 1);
            resetEventCarouselTimer();
        }
    });

    startEventCarousel();
}
