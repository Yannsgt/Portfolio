const burger = document.querySelector('.burger');
const burgeri = document.querySelector('.burger i');
const navBar = document.querySelector('.navListe');


burger.addEventListener('click', function(){
    burgeri.classList.toggle('fa-bars');
    burgeri.classList.toggle('fa-xmark');
    if(burgeri.classList.contains("fa-xmark")){
        navBar.style.display = 'block';
    }else{
        navBar.style.display = 'none';
    }
})