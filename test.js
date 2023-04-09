const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slides = document.querySelector(".slides");
let currentIndex = 0;

prevButton.addEventListener("click", () => {
  console.log("Previous button clicked");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 2;
  }
  slides.style.transform = `translateX(-${currentIndex * 100/3}%)`;
});

nextButton.addEventListener("click", () => {
    console.log("Previous button clicked");
    currentIndex++;
  if (currentIndex > 2) {
    currentIndex = 0;
  }
  slides.style.transform = `translateX(-${currentIndex * 100/3}%)`;
});