//variable to validate if contacts fields if empty
var isEmailValid, isNameValid, isMessageValid;

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
        dismissModal();
    });
    $(".modal-close").click(function () {
        dismissModal();
    });

    $("#name").focusout(function () {
        if ($("#name").val() === "") {
            $("#name").addClass('is-danger');
            $(".name-alert").show();
            isNameValid = false;
        } else {
            $("#name").removeClass('is-danger');
            $(".name-alert").hide();
            isNameValid = true;
        }
        if (isNameValid === true && $("#name").val() !== "") {
            $("#name").addClass('is-success');
            $(".name-success").show();
        } else {
            $("#name").removeClass('is-success');
            $(".name-success").hide();
        }
    });

    $("#email").focusout(function () {
        if (!(validateEmail($("#email").val())) || $("#email").val() === "") {
            $("#email").addClass('is-danger');
            $(".email-alert").show();
            isEmailValid = false;
        } else {
            $("#email").removeClass('is-danger');
            $(".email-alert").hide();
            isEmailValid = true;
        }
        if (isEmailValid === true && $("#email").val() !== "") {
            $("#email").addClass('is-success');
            $(".email-success").show();
        } else {
            $("#email").removeClass('is-success');
            $(".email-success").hide();
        }
    });

    $("#message").focusout(function () {
        if ($("#message").val() === "") {
            $("#message").addClass('is-danger');
            $(".message-alert").show();
            isMessageValid = false;
        } else {
            $("#message").removeClass('is-danger');
            $(".message-alert").hide();
            isMessageValid = true;
        }

        if (isMessageValid === true && $("#message").val() !== "") {
            $("#message").addClass('is-success');
        } else {
            $("#message").removeClass('is-success');
        }
    });

    $("#submitBtn").click(function () {
        if (isEmailValid && isNameValid && isMessageValid) {
            //post to email
            setTimeout(function () {
                dismissModal();
                $("#name").val("");
                $("#email").val("");
                $("#message").val("");
                $("#name").removeClass('is-success');
                $("#email").removeClass('is-success');
                $("#message").removeClass('is-success');
            }, 500);
        } else if (!(isNameValid)) {
            $("#name").focus();
        } else if (!(isEmailValid)) {
            $("#email").focus();
        } else {
            $("#message").focus();
        }

        setTimeout(function () {
            $("#emailConfirmation").show();
            $("#emailConfirmation").addClass('slideInRight');
        }, 1000);

        setTimeout(function () {
            $("#emailConfirmation").addClass('slideOutRight');
        }, 5000);
        setTimeout(function () {
            $("#emailConfirmation").hide();
            $("#emailConfirmation").removeClass('slideOutRight');
            $("#emailConfirmation").addClass('slideInRight');
        }, 6000);
    });

});

function dismissModal() {
    $(".modal").removeClass('fadeIn');
    $(".modal").addClass('fadeOut');
    setTimeout(function () {
        $(".modal").removeClass('is-active');
        $("#html").removeClass('is-clipped');
    }, 1000);
    setTimeout(function () {
        $(".modal").removeClass('fadeOut');
        $(".modal").addClass('fadeIn');
    }, 1000);

}

function showNotificationModal() {
    setTimeout(function () {

    });
}

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

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