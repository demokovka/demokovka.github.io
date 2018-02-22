  $(function() {

  	// Custom JS
    $(".nav_menu li").click(function() {
    $(".nav_menu li").removeClass("active");
    $(this).addClass("active");
  });
  $(".sidebar_s li").click(function() {
  $(".sidebar_s li").removeClass("active");
  $(this).addClass("active");
});
    $(".owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      nav: true,
      navText: ['<span class="text-center left_1 control_slides_1 "><i class="fa fa-angle-left"></i></span>', '<span class="text-center right_1 control_slides_1"><i class="fa fa-angle-right"></i></span>'],
    });
    $('.main_head').parallax({
      speed: 1,
    });
    $("#form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        $(th).find(".sucsses").addClass("active").hide().fadeIn();
        setTimeout(function() {
          $(th).find(".sucsses").removeClass("active").fadeOut();
          th.trigger("reset");
        }, 3000);
      });
      return false;
    });
$("#my-menu").mmenu({
  extensions: ['theme-black','offect-mnu-slide','pageid-black',"position-right"],
  navbar: {title:'<img src="../img/logo.svg">'},
  offCanvas: {
    float: 'right'
  },
  "pageScroll": true,
});
var api = $('#my-menu').data('mmenu');
api.bind( "open:start", function( ) {
 $('.hamburger').addClass('is-active');
});
api.bind( "close:before", function( ) {
 $('.hamburger').removeClass('is-active');
});
var scroll = new SmoothScroll('a.scroll_s', {
	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)
	// Speed & Easing
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
	},
  });
  $('.fotorama_auto').fotorama();
  $('.popup-link').magnificPopup({
      removalDelay: 300,
      type: 'image',
      callbacks: {
      beforeOpen: function() {
         this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
      }
    },
    });


    $(document).pjax('a', '.pjax-container', {
           fragment: '.pjax-container'
       });

});
$(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
})
