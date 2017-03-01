/* Header.js Plug-In for On-Scroll Navbar */

$(".header").headroom({
  "offset": 205,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "swingInX",
    "unpinned": "swingOutX"
  }
});

/* Slick.js Plug-In for Slick scroller */
$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    });
});

