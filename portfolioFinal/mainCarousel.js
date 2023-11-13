function initSlickCarousel() {
  const carousel = $('.autoplay');
  
  if (carousel.length > 0) { // Vérifiez si l'élément avec la classe 'autoplay' existe
    carousel.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  }
}



