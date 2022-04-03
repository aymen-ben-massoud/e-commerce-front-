const menu = document.getElementById("menu");

menu.addEventListener("click", (eo) => {
  var x = document.getElementById("toggle");
  if (x.className === "toggle") {
    x.className += " responsive";
  } else {
    x.className = "toggle";
  }
});
let allimg = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
img1.addEventListener("click", (eo) => {
  document.getElementById("imgo").src = allimg[0];
});
img2.addEventListener("click", (eo) => {
  document.getElementById("imgo").src = allimg[1];
});
img3.addEventListener("click", (eo) => {
  document.getElementById("imgo").src = allimg[2];
});
img4.addEventListener("click", (eo) => {
  document.getElementById("imgo").src = allimg[3];
});
let svg = document.querySelectorAll(".wiiw");
let countr = document.getElementById("countr");
let i = 0;
svg.forEach((btn) => {
  btn.addEventListener("click", (eo) => {
    const style = eo.currentTarget.classList;
    if (style.contains("plus")) {
      i++;
    } else if (style.contains("minus")) {
      i--;
    }
    if (i < 0) {
      i = 0;
      countr.style.color = "black";
    }
    if (i > 0) {
      countr.style.color = "green";
    }

    countr.textContent = i;
  });
});
