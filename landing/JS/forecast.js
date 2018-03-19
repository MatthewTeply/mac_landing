$(document).ready(function() {
    let apiKey_data = 'ede81f168d1540cb3f0692bbc83cbbf9';
    let city_data = '3339540';

    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        data: {id:city_data, appid:apiKey_data, units:'metric', type:'like'},
        success: function(response) {
            var weather = response.weather[0].main;
            var temp = response.main.temp;

            var settings = JSON.parse(localStorage.getItem('landing_settings'));
            console.log(settings['weather-bg']);

            if(settings['weather-bg']) {
                $('.bg').css('background-image', 'url("imgs/weather_bgs/' + weather + '.jpg")');
                $('.image-div').css('background-image', 'url("imgs/weather_bgs/' + weather + '.jpg")');
            }

            $(".weather-temp-weather").html("<b>" + weather + "</b> | <b>" + temp + "</b> &#176;C");
        },
        error: function() {
            console.log("Error while getting weather!");
            $(".weather-div").hide();
        }
    });
});