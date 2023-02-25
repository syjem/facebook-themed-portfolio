
$(function() {
    $("#search").on("focus", function() {
        setTimeout(function() {
            $("#search-history-box").show();
        }, 200);
    });
    $("#search").on("blur", function() {
        setTimeout(function() {
            $("#search-history-box").hide();
        }, 100);
    });
});

