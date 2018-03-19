$(document).ready(function() {

    var settings_json = {
        'weather-bg':true
    }

    function setDefault() {
        localStorage.setItem('landing_settings', JSON.stringify(settings_json));
    }

    function getSettings() {
        settings_json = JSON.parse(localStorage.getItem('landing_settings'));
    }

    function toggleSetting(setting) {
        var init_val = JSON.parse(localStorage.getItem('landing_settings'));
        settings_json[setting] = !init_val[setting];
        localStorage.setItem("landing_settings", JSON.stringify(settings_json));
    }

    function displayToggle() {
        for (var i = 0; i < Object.keys(settings_json).length; i++) {
            console.log(settings_json[Object.keys(settings_json)[i]])
            $("#" + Object.keys(settings_json)[i] + "-toggle").attr('checked', settings_json[Object.keys(settings_json)[i]]);
        }

    }

    if(localStorage.getItem('landing_settings') == null)
        setDefault();

    getSettings();
    displayToggle();
        
    $(".settings-icon").click(function() {
        $(".settings-section").slideToggle(150);
    });

    $(".setting-toggle").click(function() {
        toggleSetting($(this).attr('data-setting'));
        $(".refresh-bttn").fadeIn(300);
    });

    $(".refresh-bttn").click(function() {
        window.location = "index.html";
    });

});