const burger = document.querySelector(".burger");
const burgeri = document.querySelector(".burgeri");
const nav = document.querySelector("nav");
const navLien = document.querySelectorAll("nav ul li a")


// Fonction pour gérer le redimensionnement de la fenêtre
function handleWindowResize() {
  if (window.innerWidth >= 820) {
    nav.style.display = "block";
  } else {
    if (burgeri.classList.contains("fa-xmark")) {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  }
}

window.addEventListener("resize", handleWindowResize);

burger.addEventListener("click", function(event) {
  event.preventDefault();
  burgeri.classList.toggle("fa-bars");
  burgeri.classList.toggle("fa-xmark");
  handleWindowResize();
});


navLien.forEach(lien => {
  lien.addEventListener('click', () => {
    if (window.innerWidth < 1025) { // je verifie si le burger est visible
      nav.style.display = 'none';
      burgeri.classList.toggle("fa-bars");
      burgeri.classList.toggle("fa-xmark");
    }
  });
});