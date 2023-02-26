



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
});

