document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.button-6 img[src="img/icon---iconoir---arrow-left-1.svg"]');
    const nextButton = document.querySelector('.button-6 img[src="img/icon---iconoir---arrow-right-1.svg"]');
    const slider = document.querySelector('.slider');
    let currentIndex = 0;
  
    function updateSlider() {
      const sliderWidth = slider.clientWidth;
      slider.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
    }
  
    prevButton.parentElement.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  
    nextButton.parentElement.addEventListener('click', function() {
      if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        updateSlider();
      }
    });
  });
  