$(document).ready(function () {

    "use strict";
    PageShare();

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.d-nav').addClass('d-nav-none'),
            $('.share-button,.audio-button').addClass('button-none'),
            $('.fm__line.top--line').addClass('top--line-none');
    } else {
        $('.d-nav').removeClass('d-nav-none'),
            $('.share-button,.audio-button').removeClass('button-none'),
            $('.fm__line.top--line').removeClass('top--line-none');
    }
});

$('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});

$('ul.primary-nav li a').click(function () {
    $('.toggle-menu').removeClass('active');
    $('#menu').toggleClass('open');
});

$(".icon-wrap").on('click', function () {
    var audio = document.getElementById("audio");
    $('body').toggleClass("mute");
    $(this).toggleClass("disabled");
});

$(document).ready(function () {
    str1 = "mailto:";
    str2 = "abu.sammie";
    str3 = "@gmail.com";
    $("#email_a").attr("href", str1 + str2 + str3);

});
var swiper = new Swiper('.team-slider', {
    autoplay: true,
    speed: 3500,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.team-slider__pagination',
        clickable: true,
    }
});
// Make sure sw are supported
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(reg => console.log('Service Worker: Registered (Pages)'))
            .catch(err => console.log(`Service Worker: Error: ${err}`));
    });
}
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
