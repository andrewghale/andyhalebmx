// Initialize and add the map
function initMap() {
  // The location of Bristol
  var bristol = { lat: 51.4545045, lng: -2.5880147 };
  // The map, centered at Bristol
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: bristol,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [{ weight: "2.00" }]
      },

      {
        featureType: "all",
        elementType: "geometry.stroke",
        stylers: [{ color: "#9c9c9c" }]
      },

      {
        featureType: "all",
        elementType: "labels.text",
        stylers: [{ visibility: "on" }]
      },

      {
        featureType: "administrative.province",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }]
      },

      {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ color: "#f2f2f2" }]
      },

      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [{ color: "#ecf6ea" }]
      },

      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [{ color: "#eeeeee" }]
      },

      {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },

      {
        featureType: "road",
        elementType: "all",
        stylers: [{ saturation: -100 }, { lightness: 15 }]
      },

      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{ color: "#c4c4c4" }]
      },

      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#7b7b7b" }]
      },

      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ffffff" }]
      },

      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{ visibility: "simplified" }]
      },

      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      },

      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },

      {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#46bcec" }, { visibility: "on" }]
      },

      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#99c5ff" }]
      },

      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#070707" }]
      },

      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ffffff" }]
      }
    ]
  });
  // The marker
  var marker = new google.maps.Marker({ position: bristol, map: map });
}

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
