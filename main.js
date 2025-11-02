// ===== Portfolio Filter =====
$(document).ready(function() {
  // Portfolio filtering
  $(".filter-button-group button").click(function() {
    var value = $(this).attr('data-filter');
    
    if (value == "*") {
      $('.portfolio-item').show('1000');
    } else {
      $(".portfolio-item").not('.' + value).hide('3000');
      $('.portfolio-item').filter('.' + value).show('3000');
    }
    
    $(".filter-button-group button").removeClass('btn-primary').addClass('btn-outline-light');
    $(this).removeClass('btn-outline-light').addClass('btn-primary');
  });
});

// ===== Lightbox =====
$(document).ready(function() {
  $('.lightbox').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });
});

// ===== Owl Carousel for Testimonials =====
$(document).ready(function(){
  $('.testimonial-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      responsive:{
          0:{ items:1 },
          600:{ items:1 },
          1000:{ items:2 }
      }
  });
});

// ===== Stats Counter =====
$(document).ready(function() {
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.text();
    
    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },
    {
      duration: 2000,
      easing:'swing',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });
});


