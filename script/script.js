const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// horaires

function openHoraires() {
    document.getElementById('horaires').style.display = "block";
}

function closeHoraires() {
    document.getElementById('horaires').style.display = "none";
}


// anime scroll
// if(window.innerWidth>768) {
    const slidingAnime = document.querySelector('.slideIn')

    window.addEventListener('scroll', () => {
   
    const {scrollTop, clientHeight} =
    document.documentElement;

    const topElemetToTopViewport =
     slidingAnime.getBoundingClientRect().top;


     if(scrollTop > (scrollTop + topElemetToTopViewport).toFixed() -
     clientHeight * 0.80) {
         slidingAnime.classList.add('start')
     }
    })
// }


// loader
const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');

})