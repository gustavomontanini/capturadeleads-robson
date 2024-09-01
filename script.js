// Pegar o formulário e o modal
const form = document.getElementById('leadForm');
const modal = document.getElementById('thankYouModal');
const closeButton = document.querySelector('.close-button');

// Função para abrir o modal
function openModal() {
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = 'none';
}

// Fechar o modal ao clicar no "x"
closeButton.addEventListener('click', closeModal);

// Fechar o modal ao clicar fora da área do modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Mostrar o modal ao submeter o formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();
    openModal();
    form.reset();
});

// Carousel
let produtoIndex = 0;
let servicoIndex = 0;

function showSlide(index, carouselId) {
    const items = document.querySelectorAll(`#${carouselId}-carousel .carousel-item`);
    if (index >= items.length) index = 0;
    if (index < 0) index = items.length - 1;
    items.forEach((item, i) => {
        item.style.transform = `translateX(${-index * 100}%)`;
    });
    if (carouselId === 'produto') {
        produtoIndex = index;
    } else if (carouselId === 'servico') {
        servicoIndex = index;
    }
}

function nextSlide(carouselId) {
    if (carouselId === 'produto') {
        showSlide(produtoIndex + 1, carouselId);
    } else if (carouselId === 'servico') {
        showSlide(servicoIndex + 1, carouselId);
    }
}

function prevSlide(carouselId) {
    if (carouselId === 'produto') {
        showSlide(produtoIndex - 1, carouselId);
    } else if (carouselId === 'servico') {
        showSlide(servicoIndex - 1, carouselId);
    }
}

// Iniciar com o primeiro slide visível
showSlide(0, 'produto');
showSlide(0, 'servico');
