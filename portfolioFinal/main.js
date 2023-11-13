const liens =[];

for (let i = 1; i <= 6; i++) {
  const lien = document.querySelector(`nav ul li:nth-child(${i}) span`);
  liens.push(lien);
}

const boutonLiens =[];

for (let i = 1; i <= 6; i++) {
  const lien = document.querySelector(`.bouton ul li:nth-child(${i}) span`);
  boutonLiens.push(lien);
}

const pages =[];

for (let i = 1; i <= 6; i++) {
  const page = document.querySelector(`.page${i}`);
  pages.push(page);
}

function setActivePage(index) {
  pages.forEach((page, pageIndex) => {
    if (pageIndex === index) {
      page.classList.remove("cache");
      page.classList.add("visible");
    } else {
      page.classList.remove("visible");
      page.classList.add("cache");
    }
  });
}

function setActiveNavAndButton(index) {
  document.querySelectorAll('nav ul li span').forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(`nav ul li:nth-child(${index + 1}) span`).classList.add('active');

  document.querySelectorAll('.bouton ul li').forEach((element) => {
    element.classList.remove("activeBg");
  });
  document.querySelector(`.bouton ul li:nth-child(${index + 1})`).classList.add('activeBg');
}

for (let i = 0; i < boutonLiens.length; i++) {
  boutonLiens[i].addEventListener('click', function (event) {
    event.preventDefault();
    setActivePage(i);
    setActiveNavAndButton(i);
    // Réinitialisez le carrousel une fois que la page est visible
    setTimeout(function () {
      initSlickCarousel();
    }, 100);
  });

  liens[i].addEventListener('click', function (event) {
    event.preventDefault();
    setActivePage(i);
    setActiveNavAndButton(i);
    // Réinitialisez le carrousel une fois que la page est visible
    setTimeout(function () {
      initSlickCarousel();
    }, 100);
  });
}

  
const burger = document.querySelector(".burger");
const burgeri = document.querySelector(".burgeri");
const nav = document.querySelector("nav");
const ul = document.querySelector("nav ul");
const navLien = document.querySelectorAll("nav ul li span")




// Fonction pour gérer le redimensionnement de la fenêtre
function handleWindowResize() {
  if (window.innerWidth >= 1025) {
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
