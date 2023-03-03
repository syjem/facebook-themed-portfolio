
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
        $(".new-chat-container").hide();
    });

    $(".mini").on("click", function() {
        var index = $(this).index();
        slideIndex = index + 1;
        $("#slider-box").show();
        showSlides(slideIndex);
        $(".new-chat-container").hide();
        $(".new-message").show();
    });

    $("#x-mark").on("click", function() {
        $("#slider-box").hide();
    });


    // Main link active class
    $(".home").on("click", function() {
        setTimeout(function() {
            $(".home").addClass("active");
            $(".about").removeClass("active");
            $(".portfolio").removeClass("active");
            $(".contact").removeClass("active");
            $(".testimonials").removeClass("active");

            // $(".about-feed").hide();
            // $(".portfolio-feed").hide();
            // $(".testimonials-feed").hide();
            $(".home-feed").show();

            $(".new-chat-container").hide();
            $(".new-message").show();
        }, 300);
    });

    $(".about").on("click", function() {
        setTimeout(function() {
            $(".home").removeClass("active");
            $(".portfolio").removeClass("active");
            $(".contact").removeClass("active");
            $(".testimonials").removeClass("active");
            $(".about").addClass("active");

            $(".home-feed").hide();
            // $(".portfolio-feed").hide();
            // $(".testimonials-feed").hide();
            // $(".about-feed").show();

            $(".new-chat-container").hide();
            $(".new-message").show();
        }, 300);
    });

    $(".portfolio").on("click", function() {
        setTimeout(function() {
            $(".home").removeClass("active");
            $(".about").removeClass("active");
            $(".contact").removeClass("active");
            $(".testimonials").removeClass("active");
            $(".portfolio").addClass("active");

            // $(".home-feed").hide();
            // $(".about-feed").hide();
            // $(".testimonials-feed").hide();
            // $(".portfolio-feed").show();
            
            $(".new-chat-container").hide();
            $(".new-message").show();
        }, 300);
    });

    $(".contact").on("click", function() {
        setTimeout(function () {
            $(".home").removeClass("active");
            $(".about").removeClass("active");
            $(".portfolio").removeClass("active");
            $(".testimonials").removeClass("active");
            $(".contact").addClass("active");

            $(".new-message").hide();
            $(".new-chat-container").show();
        }, 300);
    });

    $(".testimonials").on("click", function() {
        setTimeout( function() {
            $(".home").removeClass("active");
            $(".about").removeClass("active");
            $(".portfolio").removeClass("active");
            $(".contact").removeClass("active");
            $(".testimonials").addClass("active");

            // $(".home-feed").hide();
            // $(".about-feed").hide();
            // $(".portfolio-feed").hide();
            // $(".testimonials-feed").show();

            $(".new-chat-container").hide();
            $(".new-message").show();
        }, 300);
    });


    // New message modal

    $(".new-message").on("click", function() {
        $(this).hide();
        $(".new-chat-container").show();
    });

    $(".fa-xmark").on("click", function() {
        $(".new-chat-container").hide();
        $(".new-message").show();

        if($(".contact").hasClass("active")) {
            $(".contact").removeClass("active");
            $(".home").addClass("active");
            $(".home-feed").show();
        }
    });
});

