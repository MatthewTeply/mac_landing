$(document).ready(function() {

    var settings_json = {
        'weather-bg':true,
        'custom-links-display':false,
        'random-colors':true,
        'custom-color':null
    }

    function setDefault() {
        localStorage.setItem('landing_settings', JSON.stringify(settings_json));
    }

    function getSettings() {
        settings_json = JSON.parse(localStorage.getItem('landing_settings'));

        if(!settings_json['random-colors']) {
            $(".custom-color-sub-setting").show();
            $("#custom-color-toggle").val(settings_json['custom-color']);
        }
        else
            $(".custom-color-sub-setting").hide();
    }

    function toggleSetting(setting) {
        var init_val = JSON.parse(localStorage.getItem('landing_settings'));
        settings_json[setting] = !init_val[setting];
        localStorage.setItem("landing_settings", JSON.stringify(settings_json));
    }

    function setSettings(setting, val) {
        settings_json[setting] = val;
        localStorage.setItem("landing_settings", JSON.stringify(settings_json));
    }

    function displayToggle() {
        for (var i = 0; i < Object.keys(settings_json).length; i++) {
            $("#" + Object.keys(settings_json)[i] + "-toggle").attr('checked', settings_json[Object.keys(settings_json)[i]]);
        }

    }

    if(localStorage.getItem('landing_settings') == null)
        setDefault();

    getSettings();
    displayToggle();
        
    $(".settings-icon").click(function() {
        $(".settings-section").stop().slideToggle(150);
    });

    $(".setting-toggle, .setting-custom").click(function() {
        toggleSetting($(this).attr('data-setting'));
        getSettings();
        $(".refresh-bttn").fadeIn(300);
    });

    $("#custom-color-toggle").change(function() {
        setSettings('custom-color', $(this).val());
    });

    $(".refresh-bttn").click(function() {
        window.location = "index.html";
    });

});