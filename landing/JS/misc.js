$(document).ready(function() {

    $(".black-div").fadeOut(300);

    var colors = ['#923BAF', '#007BE1', '#00A497', '#BA2E00'];
    var rand_index = Math.floor(Math.random() * colors.length);

    $("section").css("border-left-color", colors[rand_index]);
    $("main").css("border-left-color", colors[rand_index]);

    $("main ul li a i").css("color", colors[rand_index]);

    setTimeout(function() {
        $(".custom-link-icon").css("color", colors[rand_index]);
    }, 100);
});