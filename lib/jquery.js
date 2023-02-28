



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
     
});

