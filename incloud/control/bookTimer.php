<?php
require_once('../class/StopWatch.php');
require_once('StopWatchController.php');

$sw = new StopWatch();
$swc = new StopWatchController();


switch ($_POST['action']) {
    
    case 'current':
        $today = getdate();
        $now = $today['year'] . "-" . $swc->formatDate($today['mon']) . "-" . $swc->formatDate($today['mday']) . " " . $swc->formatDate($today['hours']) . ":" . $swc->formatDate($today['minutes']) . ":" . $swc->formatDate($today['seconds']);
        $tracker = $_POST['currentStopWatch'];
        $desc = $_POST['currentTimeDesc'];
        
        $sw->setDate($now);
        $sw->setTimer($tracker);
        $sw->setDescription($desc);
        
        echo $sw->createNewTrack();
        break;
    
    case 'manual':
        $today = getdate();
        $now = $today['year'] . "-" . $swc->formatDate($today['mon']) . "-" . $swc->formatDate($today['mday']) . " " . $swc->formatDate($today['hours']) . ":" . $swc->formatDate($today['minutes']) . ":" . $swc->formatDate($today['seconds']);
        $tracker = $_POST['manualStopWatch'];
        $desc = $_POST['manualTimeDesc'];
        
        $sw->setDate($now);
        $sw->setTimer($tracker);
        $sw->setDescription($desc);
        echo $sw->createNewTrack();
        break;
    
    default:
        echo "<script>alert('Error: please refresh the page and try again')</script>";
        break;
}