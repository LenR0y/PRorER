const menuBtn = document.querySelector(".menuHamburger");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

const list = document.querySelector(".rightNavStuff");
menuBtn.addEventListener("click", () => {
  list.classList.toggle("show");
});
