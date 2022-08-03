const imagenes = document.querySelectorAll(".img-galleria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const hamburguer1 = document.querySelector(".hamburger");
const scrollUp = document.querySelector("#scroll-up");
const ubication = window.scrollX;

window.onscroll = function () {
  let ubicationScroll = window.scrollY;
  if (ubication >= ubicationScroll) {
    this.document.getElementById("scroll-up").style.top = "-100px";
  } else {
    this.document.getElementById("scroll-up").style.top = "680px";
  }
  ubication = ubicationScroll;
};

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    fullScreen(imagen.getAttribute("src"));
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target !== imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
    hamburguer1.getElementsByClassName.opacity = "1";
  }
});

const fullScreen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenesLight.classList.toggle("showImage");
  hamburguer1.getElementsByClassName.opacity = "0";
};
