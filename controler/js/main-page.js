$(document).ready(function () {
    $("#workingXPBtn").click(function () {
        $('html,body').animate({
                scrollTop: $("#workingXP").offset().top-50
            },
            'slow');
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $("#skillBtn").click(function () {
        $('html,body').animate({
                scrollTop: $("#skills").offset().top-50
            },
            'slow');
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $("#languagesBtn").click(function () {
        $('html,body').animate({
                scrollTop: $("#languages").offset().top-50
            },
            'slow');
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });


});