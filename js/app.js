function initializeTechnologySlider() {
  $(".slider-technologies-carousel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    dots: false,
    arrows: true,
    infinite: false,
    prevArrow: ".slider-techonologies-carousel-prev",
    nextArrow: ".slider-technologies-carousel-next",
  });

  $(".slider-technologies-carousel").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      const calc = ((nextSlide + 1) / slick.slideCount) * 100;

      $(".slider-pagination")
        .css("background-size", `${calc}% 100%`)
        .attr("aria-valuenow", calc);
    }
  );
}

function handleAboutColumnHover() {
  $(".js-about-column").on("mouseover", function () {
    $(".js-about-column").addClass("inactive");
    $(this).removeClass("inactive");
  });

  $(".js-about-wrapper").on("mouseout", function () {
    $(".js-about-column").removeClass("inactive");
  });
}

function toggleMobileMenu() {
  const mobileMenuButton = $(".js-toggle-mobile-menu");
  const mobileMenu = $(".js-mobile-menu");
  const mobileMenuLayer = $(".js-mobile-menu-layer");
  const mobileMenuLinks = $(".js-mobile-menu-link");

  mobileMenuButton.on("click", function () {
    toggleMenu();
  });

  mobileMenuLayer.on("click", function () {
    closeMenu();
  });

  mobileMenuLinks.on("click", function () {
    closeMenu();
  });

  function toggleMenu() {
    mobileMenu.toggleClass("active");
    mobileMenuLayer.toggleClass("active");
  }

  function closeMenu() {
    mobileMenu.removeClass("active");
    mobileMenuLayer.removeClass("active");
  }
}

$(document).ready(function () {
  initializeTechnologySlider();
  handleAboutColumnHover();
  toggleMobileMenu();
});
