



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


    // Mini images modal
    $(".mini").on("click", function() {

    });



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


    // AJAX slider

    $(".mini").on("click", function() {
        $("#slider-box").show();
    });

    $("#x-mark").on("click", function() {
        $("#slider-box").hide();
    });
    
});

