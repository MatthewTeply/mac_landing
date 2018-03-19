$(document).ready(function() {

    var currentDate = new Date();

    if(currentDate.getUTCMinutes() < 10)
        var dateTime = currentDate.getHours() + ":0" + currentDate.getUTCMinutes();
    else
        var dateTime = currentDate.getHours() + ":" + currentDate.getUTCMinutes();

    $(".clock-h1").html(dateTime);
    
    setInterval(function() {
        var currentDate = new Date();
        
        if(currentDate.getUTCMinutes() < 10)
            var dateTime = currentDate.getHours() + ":0" + currentDate.getUTCMinutes();
        else
            var dateTime = currentDate.getHours() + ":" + currentDate.getUTCMinutes();

        $(".clock-h1").html(dateTime);
    }, 1000);

});