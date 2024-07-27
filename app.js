const container = document.querySelector(".img-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const imgs = [
  "./imgs/download.jfif",
  "./imgs/women.jfif",
  "./imgs/women2.jfif",
  "./imgs/t-shirt.jfif",
];

let currentImgIndex = 0;

container.innerHTML = `<img src="${imgs[0]}"/>`;

nextBtn.addEventListener("click", function () {
  if (currentImgIndex >= imgs.length - 1) {
    currentImgIndex = 0;
    container.innerHTML = `<img src="${imgs[currentImgIndex]}"/>`;
  } else {
    currentImgIndex++;
    container.innerHTML = `<img src="${imgs[currentImgIndex]}"/>`;
  }
});

prevBtn.addEventListener("click", function () {
  currentImgIndex--;
  if (currentImgIndex < 0) {
    currentImgIndex = imgs.length - 1;
    container.innerHTML = `<img src="${imgs[currentImgIndex]}"/>`;
  } else {
    container.innerHTML = `<img src="${imgs[currentImgIndex]}"/>`;
  }
});
