// A $( document ).ready() block.
$(document).ready(function() {
  $(".slider").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    nextArrow: $("#next-arrow"),
    prevArrow: $("#prev-arrow")
  });

  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  document.addEventListener("DOMContentLoaded", function() {
    var lazyBackgrounds = [].slice.call(
      document.querySelectorAll(".slick-container")
    );

    if ("IntersectionObserver" in window) {
      let lazyBackgroundObserver = new IntersectionObserver(function(
        entries,
        observer
      ) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });

      lazyBackgrounds.forEach(function(lazyBackground) {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }
  });

  $(".selector").slick({
    nextArrow: '<i class="fa fa-arrow-right"></i>',
    prevArrow: '<i class="fa fa-arrow-left"></i>'
  });
});
