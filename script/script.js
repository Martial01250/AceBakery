const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// horaires

function openHoraires() {
  document.getElementById("horaires").style.display = "block";
}

function closeHoraires() {
  document.getElementById("horaires").style.display = "none";
}

// anime scroll
// if(window.innerWidth>768) {
const slidingAnime = document.querySelector(".slideIn");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElemetToTopViewport = slidingAnime.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElemetToTopViewport).toFixed() - clientHeight * 0.8
  ) {
    slidingAnime.classList.add("start");
  }
});
// }

// loader
let stopScroll = 0;

const noScroll = () => {
  document.addEventListener("scroll", () => {
    if (stopScroll == 1) {
      return;
    }

    window.scroll(0, 0);
  });
};
const loader = document.querySelector(".loader");

const loadClass = () => {
  loader.classList.add("fondu-out");
  stopScroll = 1;
};

window.addEventListener("load", () => {
  setTimeout(loadClass, 2000);
});

noScroll();

windows.addEventListener("reload", (event) => {
  event.preventDefault();
  windows.scoll(0, 0);
  windows.location.reload;
});
