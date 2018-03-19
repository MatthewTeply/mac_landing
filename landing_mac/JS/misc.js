$(document).ready(function() {
    var settings = JSON.parse(localStorage.getItem('landing_settings'));

    $(".black-div").fadeOut(300);

    if(settings['random-colors']) {
        var colors = ['#923BAF', '#007BE1', '#00A497', '#BA2E00'];
        var rand_index = Math.floor(Math.random() * colors.length);
    
        $("section").css("border-left-color", colors[rand_index]);
        $("main").css("border-left-color", colors[rand_index]);
    
        $("main ul li a i").css("color", colors[rand_index]);
    
        setTimeout(function() {
            $(".custom-link-icon").css("color", colors[rand_index]);
        }, 100);
    }

    else {
        if(settings['custom-color'] != null) {
            $("#custom-color-toggle").val(settings['custom-color']);

            $("section").css("border-left-color", settings['custom-color']);
            $("main").css("border-left-color", settings['custom-color']);

            $("main ul li a i").css("color", settings['custom-color']);

            setTimeout(function () {
                $(".custom-link-icon").css("color", settings['custom-color']);
            }, 100);
        }
    }
});