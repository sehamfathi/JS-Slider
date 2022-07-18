const listImg = [...document.querySelectorAll(".item img")];
const lightBoxItem = document.querySelector(".lightBoxItem");
const lightBoxContainer = document.querySelector(".lightBoxContainer");
const btnNext = document.querySelector("#next");
const btnPrivous = document.querySelector("#privous");
const btnClose = document.querySelector("#close");
let currentImg;
for (let i = 0; i < listImg.length; i++) {
  listImg[i].addEventListener("click", function (e) {
    lightBoxContainer.classList.replace("d-none", "d-flex");
    const imgSrc = e.target.getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;

    currentImg = listImg.indexOf(e.target);
    console.log(currentImg);
  });
}

function nextSlide() {
  currentImg++;
  if (currentImg == listImg.length) {
    currentImg = 0;
  }
  console.log(currentImg);

  let imgSrc = listImg[currentImg].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function prvSlide() {
  currentImg--;
  if (currentImg < 0) {
    currentImg = listImg.length - 1;
  }
  console.log(currentImg);

  let imgSrc = listImg[currentImg].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}
btnNext.addEventListener("click", nextSlide);
btnPrivous.addEventListener("click", prvSlide);

btnClose.addEventListener("click", function () {
  lightBoxContainer.classList.replace("d-flex", "d-none");
});
