
$(function() {
    $("#search").on("focus", function() {
        $("#search-history-box").show();
    });
    $("#search").on("blur", function() {
        $("#search-history-box").hide();
    });
});

