function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const h1 = document.querySelector("h1");
const letter = document.querySelectorAll(".letter");

setInterval(function () {
  for (let letters of letter) {
    letters.style.color = randomRGB();
  }
}, 500);
