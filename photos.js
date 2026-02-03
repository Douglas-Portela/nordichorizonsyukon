// ===== Carrossel =====
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;
let autoSlideInterval;
const AUTO_SLIDE_TIME = 5000; // 5 segundos

function updateCarousel() {
  const width = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, AUTO_SLIDE_TIME);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

/* Botões manuais */
nextButton.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevButton.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

/* Pausa ao passar o mouse (opcional e elegante) */
track.addEventListener('mouseenter', stopAutoSlide);
track.addEventListener('mouseleave', startAutoSlide);

window.addEventListener('resize', updateCarousel);

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.photo-grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightbox.style.display = 'flex';
  });
});

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

/* Inicialização */
const modal = document.getElementById('mediaModal');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.modal-close');

/* ===== Abrir fotos ===== */
document.querydocument.querySelectorAll('.media-item').forEach(item => {
  item.addEventListener('click', () => {
    modal.classList.add('active');

    modalImage.style.display = 'none';
    modalVideo.style.display = 'none';
    modalVideo.pause();

    if (item.tagName === 'VIDEO') {
      modalVideo.src = item.src;
      modalVideo.style.display = 'block';
      modalVideo.play();
    } else {
      modalImage.src = item.src;
      modalImage.style.display = 'block';
    }
  });
});

/* ===== Upload e abrir vídeo ===== */
const videoInput = document.getElementById('videoInput');

if (videoInput) {
  videoInput.addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    const videoURL = URL.createObjectURL(file);

    modal.classList.add('active');

    modalImage.style.display = 'none';

    modalVideo.src = videoURL;
    modalVideo.style.display = 'block';
    modalVideo.play();
  });
}

/* ===== Fechar modal ===== */
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  modalVideo.pause();
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
    modalVideo.pause();
  }
});

document.querySelectorAll('.album-title').forEach(title => {
  title.addEventListener('click', () => {
    const album = title.closest('.album');
    album.classList.toggle('active');
  });
});