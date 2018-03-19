$(document).ready(function() {
    $(".search-form").submit(function(e) {
        e.preventDefault();

        window.open("https://www.google.cz/search?q=" + $(this).children("input").val(), "_blank");
    });

});