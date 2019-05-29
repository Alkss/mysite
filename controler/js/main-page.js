$(document).ready(function () {
    $("#workingXPBtn").click(function () {
        workingBtn();
    });

    $("#skillBtn").click(function () {
        skillBtn();
    });

    $("#languagesBtn").click(function () {
        languagesBtn();
    });

    $("#educationBtn").click(function () {
        educationBtn();
    });

    $("#scrollTopBtn").click(function () {
        scrollTopBtn();
    });

    $("#projectsBtn").click(function () {
        $("#project-modal").addClass('is-active');
        $("#html").addClass('is-clipped');
    });

    $("#contactBtn").click(function () {
        $("#contact-modal").addClass('is-active');
        $("#html").addClass('is-clipped');
    });

    $("#aboutBtn").click(function () {
        $("#about-modal").addClass('is-active');
        $("#html").addClass('is-clipped');
    });

    $(".modal-background").click(function () {
       $(".modal").removeClass('is-active');
        $("#html").removeClass('is-clipped');
    });
    $(".modal-close").click(function () {
       $(".modal").removeClass('is-active');
       $("#html").removeClass('is-clipped');
    });

});


function workingBtn() {
    $('html,body').animate({
            scrollTop: $("#workingXP").offset().top - 50
        },
        'slow');
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

}

function scrollTopBtn() {
    $('html,body').animate({
            scrollTop: $("#perfil").offset().top - 50
        },
        'slow');
}

function skillBtn() {
    $('html,body').animate({
            scrollTop: $("#skills").offset().top - 50
        },
        'slow');
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

}

function languagesBtn() {
    $('html,body').animate({
            scrollTop: $("#languages").offset().top - 50
        },
        'slow');
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

}

function educationBtn() {
    $('html,body').animate({
            scrollTop: $("#education").offset().top - 50
        },
        'slow');
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
}