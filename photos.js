document.addEventListener("DOMContentLoaded", function () {

  // ===== CARROSSEL =====
  const track = document.querySelector('.carousel-track');

  if (track) {
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;
    const AUTO_SLIDE_TIME = 5000;
    let autoSlideInterval;

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

    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);

    window.addEventListener('resize', updateCarousel);

    startAutoSlide();
  }

 // ===== MODAL =====
const modal = document.getElementById("mediaModal");
const modalImage = document.getElementById("modalImage");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".media-item").forEach(item => {
  item.addEventListener("click", function () {

    modal.classList.add("active");

    // Resetar tudo
    modalImage.style.display = "none";
    modalVideo.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.removeAttribute("src");
    modalVideo.load();

    if (this.tagName === "VIDEO") {
      modalVideo.src = this.src;
      modalVideo.style.display = "block";
      modalVideo.load();
      modalVideo.play().catch(() => {});
    } else {
      modalImage.src = this.src;
      modalImage.style.display = "block";
    }

  });
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
  modalVideo.pause();
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("active");
    modalVideo.pause();
  }
});

});