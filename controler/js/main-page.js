$(document).ready(function () {
    $("#workingXPBtn").click(function () {
        $('html,body').animate({
                scrollTop: $("#workingXP").offset().top-50
            },
            'slow');
    });

    $("#skillBtn").click(function () {
        $('html,body').animate({
                scrollTop: $("#skills").offset().top-50
            },
            'slow');
    });

    $("#languagesBtn").click(function () {
        $('html,body').animate({
                scrollTop: $("#languages").offset().top-50
            },
            'slow');
    });


});