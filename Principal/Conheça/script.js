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

// Carrossel de imagens
const carouselImages = document.querySelectorAll('.carousel-image');
let currentImageIndex = 0;

if (carouselImages.length > 0) {
    // Função para mudar a imagem do carrossel
    function changeCarouselImage() {
        // Remove a classe 'active' de todas as imagens
        carouselImages.forEach(img => img.classList.remove('active'));
        
        // Avança para a próxima imagem
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        
        // Adiciona a classe 'active' à imagem atual
        carouselImages[currentImageIndex].classList.add('active');
    }
    
    // Muda a imagem a cada 4 segundos
    setInterval(changeCarouselImage, 4000);
}
