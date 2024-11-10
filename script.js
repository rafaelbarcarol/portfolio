const MyApp = (function () {
  let lastScrollTop = 0;

  function init() {
    setupAccordion();
    setupScrollHandler();
    setupIntersectionObserver();
    openHamburguerMenu();
    closeHamburguerMenu();
    closeMenuOnNavigation();
  }

  function setupAccordion() {
    $(".js-toggle-accordion").on("click", function () {
      $(this).toggleClass("active");
      $(this).siblings(".js-accordion-content").toggleClass("active");
    });
  }

  function setupScrollHandler() {
    $(window).on("scroll", function () {
      let scrollTop = $(this).scrollTop();

      if (scrollTop > lastScrollTop) {
        $(".js-main-header").addClass("going-down");
      } else if (scrollTop === 0) {
        $(".js-main-header").removeClass("going-down");
      } else {
        $(".js-main-header").removeClass("going-down");
      }

      lastScrollTop = scrollTop;
    });
  }

  function setupIntersectionObserver() {
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $(entry.target).addClass("show");
          myObserver.unobserve(entry.target);
        }
      });
    });

    const elements = $(".hidden-left, .hidden-right");
    elements.each(function () {
      myObserver.observe(this);
    });
  }

  function openHamburguerMenu() {
    $(".js-hamburguer-menu").on("click", function () {
      $(".js-mobile-header-menu").removeClass("inactive");
    });
  }

  function closeHamburguerMenu() {
    $(".js-close-hamburguer").on("click", function () {
      $(".js-mobile-header-menu").addClass("inactive");
    });
  }

  function closeMenuOnNavigation() {
    $(".js-mobile-menu-item").on("click", function () {
      $(".js-mobile-header-menu").addClass("inactive");
    });
  }

  return {
    init: init,
  };
})();

$(document).ready(function () {
  MyApp.init();
});
