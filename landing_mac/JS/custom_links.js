$(document).ready(function() {
    var settings_json = JSON.parse(localStorage.getItem('landing_settings'));

    //UI
    $(".custom-links-add").mouseover(function() {
        $(".custom-links-add-label").fadeIn(150);
    });

    $(".custom-links-add").mouseleave(function() {
        $(".custom-links-add-label").fadeOut(150);
    });

    $(".custom-links-add").click(function() {
        $(".custom-links-add-label").hide();
        $(this).hide();

        $(".custom-links-form").show();
    });

    $(".custom-links-cancel").click(function() {
        $(this).parent().hide();

        $(".custom-links-add").show();
    });

    $(".custom-links-show").click(function() {
        $(".custom-links-div ul").stop().slideToggle(150);
    });

    if(settings_json['custom-links-display']) {
        isToggled_list = true;

        $(".custom-links-div ul").show();
    }

    //Functionality
    function getLinks() {
        var len = localStorage.length;

        if(len <= 1) {
            $(".custom-links-show").hide();
            $(".custom-links-div ul").hide();
        }

        else {
            $(".custom-links-show").fadeIn(300);
            isToggled_list = false;
        }

        $(".custom-links-div ul").html("");
        for (var i = 1; i < len; i++) {
            var link_json = JSON.parse(localStorage.getItem(localStorage.key(i)));

            $(".custom-links-div ul").append("<li><a href='" + link_json.url + "'><i class='fa fa-link custom-link-icon'></i>" + link_json.label + "</a> - <div>" + link_json.url + "</div><i class='fa fa-trash custom-link-remove' data-key='" + i + "'></i></li>");
        }
    }

    function setLinks(label, url) {
        var linkObj = {
            "label":label,
            "url":url
        };

        localStorage.setItem("link_" + label, JSON.stringify(linkObj));
        getLinks();
    }

    function removeLinks(key) {
        localStorage.removeItem(localStorage.key(key));
    }

    $(".custom-links-form").submit(function(e) {
        e.preventDefault();

        var link_label = $(this).children("input[name='custom-link-label']").val();
        var link_url = $(this).children("input[name='custom-link-url']").val();

        setLinks(link_label, link_url);

        $(this).children("input[name='custom-link-label']").val("");
        $(this).children("input[name='custom-link-url']").val("");

        $(".custom-links-cancel").click();
    });

    $(".custom-links-div ul").on('click', ".custom-link-remove", function() {
        var choice = confirm("Would you really like to delete this link?");

        if(choice) {
            removeLinks($(this).attr('data-key'));
            getLinks();
        }

    });

    getLinks();
});