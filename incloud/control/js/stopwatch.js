$(document).ready(function () {

    //Update the track list
    updateTrackerList();

    //Start timer
    $('#startBtn').click(function () {
        startTimer();
    });

    //Pause timer
    $('#pauseBtn').click(function () {
        pauseTimer();
    });

    //Stop timer
    $('#stopBtn').click(function () {
        stopTimer();
    });


    //Fill the current time at modal
    $('#currentTimeModalBtn').click(function () {
        currentTimeModalPopUp();
    });

    //Book current timer
    $('#bookCurrentTimer').click(function () {
        bookCurrentTimer();
    });

    //Book manual timer
    $('#bookManualTimer').click(function () {
        bookManualTimer();
    });

});
var currentTimer = 10800000,
    interval = 0,
    lastUpdateTime = new Date().getTime();

function update() {
    var now = new Date().getTime();
    var dt = now - lastUpdateTime;

    currentTimer += dt;

    var time = new Date(currentTimer);
    $('.hours').html(formatTime(time.getHours()));
    $('.minutes').html(formatTime(time.getMinutes()));
    $('.seconds').html(formatTime(time.getSeconds()));

    lastUpdateTime = now;
}

function formatTime(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

function startTimer() {
    $('#startBtn').hide();
    $('#pauseBtn').show();

    if (!interval) {
        lastUpdateTime = new Date().getTime();
        interval = setInterval(update, 100);
    }
}

function pauseTimer() {
    $('#startBtn').show();
    $('#pauseBtn').hide();

    clearInterval(interval);
    interval = 0;
}

function stopTimer() {
    pauseTimer();
    currentTimer = 10800000;

    $('.hours').html('00');
    $('.minutes').html('00');
    $('.seconds').html('00');
}

function getCurrentTime() {
    var lastTime = new Date(currentTimer);
    return formatTime(lastTime.getHours()) + ":" + formatTime(lastTime.getMinutes()) + ":" + formatTime(lastTime.getSeconds());
}

function currentTimeModalPopUp() {
    var currentStopWatch = getCurrentTime();
    $('#currentStopWatchModal').html(currentStopWatch);
}

function bookCurrentTimer() {
    var currentTimeDesc = $('#currentTimeDesc').val();
    var currentStopWatch = getCurrentTime();
    $.ajax({
        url: '/incloud/control/bookTimer.php',
        type: 'POST',
        data: {currentStopWatch: currentStopWatch, currentTimeDesc: currentTimeDesc, action: 'current'},
        success: function (returnedData) {
            stopTimer();
            updateTrackerList();
        }
    })
}

function bookManualTimer() {
    var manualStopWatch = $('#manualInputTrack').val();
    var manualTimeDesc = $('#manualTimeDesc').val();
    $.ajax({
        url: '/incloud/control/bookTimer.php',
        type: 'POST',
        data: {manualStopWatch: manualStopWatch, manualTimeDesc: manualTimeDesc, action: 'manual'},
        success: function (returnedData) {
            console.log("New id: " + returnedData);
            $("#manualInputTrack").text("");
            $("#manualTimeDesc").text("");
            stopTimer();
            updateTrackerList();
        }
    })
}

function updateTrackerList() {
    $.ajax({
        type: 'POST',
        url: '/incloud/control/savedTracks.php',
        success: function (returnedData) {
            $('#savedTracks').html(returnedData);
        }
    })

}