
$(function() {

    // Search History Modal
    $("#search").on("focus", function() {
        setTimeout(function() {
            $("#search-history-box").show();
        }, 200);
    });
    $(document).on("click", function(event) {
        let modal = $("#search-history-box");
        if(!modal.is(event.target) && modal.has(event.target).length === 0) {
            modal.hide();
        }
    });


    //Filter by search 
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".projects").each(function() {
          var hasMatch = false;
          $(this).find('.project-name, .project-status').each(function() {
            if($(this).text().toLowerCase().indexOf(value) > -1) {
              hasMatch = true;
            }
          });
          $(this).toggle(hasMatch);
        });
      });


    // All images set to un-draggable
    $('img').attr('draggable', 'false');


    // Add a border to post button
    $("#share").css("border", "1px solid #054453")


    // Slider images
    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    $("#prev").on("click", function() {
        showSlides(slideIndex -= 1);
    });
    $("#next").on("click", function() {
        showSlides(slideIndex += 1);
    });
    
    function showSlides(n) {
        var i;
        var slides = $("#images-slider img");
        if (n > slides.length) {
        slideIndex = 1
        }
        if (n < 1) {
        slideIndex = slides.length
        }
        slides.hide();
        slides.eq(slideIndex - 1).show();
    }


    // Open slider when clicked
    $(".photos-text, .see-all").on("click", function() {
        $("#slider-box").show();
    });

    $(".mini").on("click", function() {
        var index = $(this).index();
        slideIndex = index + 1;
        $("#slider-box").show();
        showSlides(slideIndex);
    });

    $("#x-mark").on("click", function() {
        $("#slider-box").hide();
    });


    $(".home").on("click", function() {
        setTimeout(function() {
            $(".home").addClass("active");
            $(".about").removeClass("active");
            $(".portfolio").removeClass("active");
            $(".contact").removeClass("active");
            $(".testimonials").removeClass("active");
        }, 300);
    });

    $(".about").on("click", function() {
        setTimeout(function() {
            $(".home").removeClass("active");
            $(".portfolio").removeClass("active");
            $(".contact").removeClass("active");
            $(".testimonials").removeClass("active");
            $(".about").addClass("active");
        }, 300);
    });

    $(".portfolio").on("click", function() {
        setTimeout(function() {
            $(".home").removeClass("active");
            $(".about").removeClass("active");
            $(".contact").removeClass("active");
            $(".testimonials").removeClass("active");
            $(".portfolio").addClass("active");
        }, 300);
    });

    $(".contact").on("click", function() {
        setTimeout(function () {
            $(".home").removeClass("active");
            $(".about").removeClass("active");
            $(".portfolio").removeClass("active");
            $(".testimonials").removeClass("active");
            $(".contact").addClass("active");
        }, 300);
    });

    $(".testimonials").on("click", function() {
        setTimeout( function() {
            $(".home").removeClass("active");
            $(".about").removeClass("active");
            $(".portfolio").removeClass("active");
            $(".contact").removeClass("active");
            $(".testimonials").addClass("active");
        }, 300);
    });

    $(document).on("click", function() {
        $(".tool-home").hide();
        $(".tool-about").hide();
        $(".tool-portfolio").hide();
        $(".tool-contact").hide();
        $(".tool-testimonials").hide();
    });

    $(".home").on("mouseenter", function() {
        setTimeout(function() {
            $(".tool-home").show();
        }, 200);
        $(".tool-about").hide();
        $(".tool-portfolio").hide();
        $(".tool-contact").hide();
        $(".tool-testimonials").hide();
    });
    $(".home").on("mouseleave", function() {
        $(".tool-home").hide();
        $(".tool-about").hide();
        $(".tool-portfolio").hide();
        $(".tool-contact").hide();
        $(".tool-testimonials").hide();
    });

    $(".about").on("mouseenter", function() {
        setTimeout(function() {
            $(".tool-about").show();
        }, 200);
        $(".tool-home").hide();
        $(".tool-portfolio").hide();
        $(".tool-contact").hide();
        $(".tool-testimonials").hide();
    });
    $(".about").on("mouseleave", function() {
        $(".tool-about").hide();
        $(".tool-home").hide();
        $(".tool-portfolio").hide();
        $(".tool-contact").hide();
        $(".tool-testimonials").hide();
    });

    $(".portfolio").on("mouseenter", function() {
        setTimeout(function() {
            $(".tool-portfolio").show();
        }, 200);
        $(".tool-home").hide();
        $(".tool-about").hide();
        $(".tool-contact").hide();
        $(".tool-testimonials").hide();
    });
    $(".portfolio").on("mouseleave", function() {
        $(".tool-portfolio").hide();
        $(".tool-home").hide();
        $(".tool-about").hide();
        $(".tool-contact").hide();
        $(".tool-testimonials").hide();
    });

    $(".contact").on("mouseenter", function() {
        setTimeout(function() {
            $(".tool-contact").show();
        }, 200);
        $(".tool-home").hide();
        $(".tool-about").hide();
        $(".tool-portfolio").hide();
        $(".tool-testimonials").hide();
    });
    $(".contact").on("mouseleave", function() {
        $(".tool-contact").hide();
        $(".tool-home").hide();
        $(".tool-about").hide();
        $(".tool-portfolio").hide();
        $(".tool-testimonials").hide();
    });

    $(".testimonials").on("mouseenter", function() {
        setTimeout(function() {
            $(".tool-testimonials").show();
        }, 200);
        $(".tool-home").hide();
        $(".tool-about").hide();
        $(".tool-portfolio").hide();
        $(".tool-contact").hide();
    });
    $(".testimonials").on("mouseleave", function() {
        $(".tool-testimonials").hide();
        $(".tool-home").hide();
        $(".tool-about").hide();
        $(".tool-portfolio").hide();
        $(".tool-contact").hide();
    });
     
});

