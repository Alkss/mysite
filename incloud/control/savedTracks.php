<?php
require_once('../class/StopWatch.php');
require_once('StopWatchController.php');

$sw = new StopWatch();
$selectedSw = $sw->getAllStopWatch();
$output = "<script>
    $(document).ready(function() {
        $('#returnedTracks').DataTable();
    } );
</script>
<table id=\"returnedTracks\" class=\"table table-striped table-bordered\" style=\"width:100%\">
    <thead>
    <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>";
foreach ($selectedSw as $singleSw) {
    $finalDate = date('d M Y - h:i a',strtotime($singleSw['date']));
    $output .= "<tr>
<td>{$finalDate}</td>
<td>{$singleSw['timer']}</td>
<td>{$singleSw['description']}</td>
</tr>";
}
$output .= "</tbody></table>";
echo $output;
