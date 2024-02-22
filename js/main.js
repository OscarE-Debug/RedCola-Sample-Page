// *Grab dom elements of navbar responsive

let navbarMobile = document.querySelector(".navigation-mobile");
let buttonOpenNav = document.querySelector(".bi-list");

// *Window event listener window width

window.addEventListener("resize", () => {
  windowWidth = screen.width;
  if (windowWidth > 492) {
    navbarMobile.classList.remove("navigation-mobile");
  } else {
    navbarMobile.classList.add("navigation-mobile");
  }
});

window.addEventListener("load", () => {
  windowWidth = screen.width;
  if (windowWidth > 492) {
    navbarMobile.classList.remove("navigation-mobile");
  } else {
    navbarMobile.classList.add("navigation-mobile");
  }
});

// *Navbar open

buttonOpenNav.addEventListener("click", () => {
  navbarMobile.classList.toggle("active");
});

// *Scrollreveal config

ScrollReveal({
  delay: 300,
  distance: "0px",
  duration: 600,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 0,
  opacity: 0,
  origin: "bottom",
  rotate: {
    x: 0,
    y: 0,
    z: 0,
  },
  scale: 1,
  cleanup: false,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: true,
  useDelay: "always",
  viewFactor: 0.0,
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  afterReset: function (el) {},
  afterReveal: function (el) {},
  beforeReset: function (el) {},
  beforeReveal: function (el) {},
});

ScrollReveal().reveal(".item-reveal");
ScrollReveal({
  delay: 500,
}).reveal(".image-reveal-1");
ScrollReveal({
  delay: 700,
}).reveal(".image-reveal-2");

// *Hero items reveal

ScrollReveal({
  scale: 0.7,
}).reveal(".background-items-hero.item-1");

ScrollReveal({
  delay: 500,
  scale: 0.7,
}).reveal(".background-items-hero.item-2");

ScrollReveal({
  rotate: {
    x: 0,
    y: 0,
    z: 200,
  },
  distance: "500px",
  origin: "left",
  delay: 700,
  scale: 0.5,
}).reveal(".decoration-item-hero");

ScrollReveal({
  delay: 900,
}).reveal(".products-hero");

// *Overlay dom elements

let itemClick = document.querySelectorAll(".image-product");
let overlay = document.querySelector(".overlay-products");
let closeOverlay = document.querySelector(".close-overlay");
let imageOverlay = document.querySelector(".img-overlay");
let descriptions = document.querySelectorAll(".dsc");

itemClick.forEach((element) => {
  element.addEventListener("click", () => {
    overlay.classList.add("active");
    const url = element.dataset.url;
    const classDsc = element.dataset.class;
    const dsc = document.querySelector("." + classDsc);

    imageOverlay.src = url;
    dsc.classList.add("active");
  });
});

closeOverlay.addEventListener("click", () => {
  overlay.classList.add("removing-active");
  setTimeout(function () {
    descriptions.forEach((element) => {
      element.classList.remove("active");
    });
    overlay.classList.remove("active");
    overlay.classList.remove("removing-active");
  }, 300);
});
