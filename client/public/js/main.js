$(document).ready(function () {

    "use strict";
    PageShare();

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.d-nav').addClass('d-nav-none');
    } else {
        $('.d-nav').removeClass('d-nav-none');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.share-button,.audio-button').addClass('button-none');
    } else {
        $('.share-button,.audio-button').removeClass('button-none');
    }
});

$('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});

$(".icon-wrap").on('click', function () {
    var audio = document.getElementById("audio");
    $('body').toggleClass("mute");
    $(this).toggleClass("disabled");
});

$(document).ready(function() {
    str1="mailto:";
    str2="freshafricaradio";
    str3="@gmail.com";
    $("#email_a").attr("href", str1+str2+str3);

});
/*--------------------------------------------------
Function Page Share
---------------------------------------------------*/

function PageShare() {


    $('#page-content').append('<share-button class="share-button"></share-button>');

    setTimeout(function () {
        config = {
            networks: {
                pinterest: {
                    enabled: false
                },
                googlePlus: {
                    enabled: false
                },
                reddit: {
                    enabled: false
                },
                linkedin: {
                    enabled: false
                },
                whatsapp: {
                    enabled: false
                },
                email: {
                    enabled: false
                }
            }
        }

        var share = new ShareButton('.share-button', config);
    }, 1000);

} //End PageShare
