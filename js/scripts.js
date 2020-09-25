/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

var button = document.getElementById("theme-toggle");
var icon = document.querySelector(".btn-icon")
let darkMode = localStorage.getItem('darkmode')

const enableDarkMode = () => {
    document.documentElement.classList.toggle('dark-mode')
    document.querySelectorAll('.inverted').forEach((result) => {
        result.classList.toggle('invert')
    })
    localStorage.setItem('darkmode', 'enabled')
    icon.innerHTML = "🌞"
    button.classList.replace('btn-dark', 'btn-light')
    // button.classList.add('btn-light')
}

const disableDarkMode = () => {
    document.documentElement.classList.remove('dark-mode')
    document.querySelectorAll('.inverted').forEach((result) => {
        result.classList.remove('invert')
    })
    localStorage.setItem('darkmode', null)
    icon.innerHTML = "🌜"
    button.classList.replace('btn-light', 'btn-dark')

    // button.classList.remove('btn-light')
    // button.classList.add('btn-dark')
}

if (darkMode === 'enabled') {
    enableDarkMode()
}

button.addEventListener('click', function () {
    darkMode = localStorage.getItem('darkmode')
    if (darkMode !== 'enabled') {
        enableDarkMode()
    } else {
        disableDarkMode()
    }

}, false);
