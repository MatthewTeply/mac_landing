$(document).ready(function() {

    var focused = false;
    $("html").on('keydown', function(e) {

        var keyCode = e.keyCode || e.which;

        if(focused == false) {
            if(keyCode == 9) {
                e.preventDefault();
    
                $("main ul li a")[0].focus();
                focused = true;
            }
        }

    });

});