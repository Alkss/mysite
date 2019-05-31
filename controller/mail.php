<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require '../mail/PHPMailer.php';
require '../mail/SMTP.php';
require '../mail/Exception.php';

$address = $_POST['email'];
$name = $_POST['name'];
$message = $_POST['message'];

$HTML5content = $message;
$rawContent = $message;

$mail = new PHPMailer(true);
$mail2 = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                                   // Enable SMTP authentication
    $mail->Username = 'smtpalexoliveira@gmail.com';                     // SMTP username
    $mail->Password = 'smtpalex';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to
    
    //Recipients
    $mail->setFrom('no-reply@gmail.com', 'No reply');
    $mail->addAddress($address);     // Add a recipient
    $mail->addReplyTo('no-reply@gmail.com', 'No reply');
    
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = "Confirmation e-mail";
    $mail->Body = "Your email has been sent with success.<br>If you have any further considerations please send another email or make contact through one of my alternative contacts.<br>Kind Regards,<br>Alex da Costa Oliveira.";
    $mail->AltBody = "Your email has been sent with success. If you have any further considerations please send another email or make contact through one of my alternative contacts. Kind Regards,Alex da Costa Oliveira.";
    $mail->send();
    
    
    //Second email
    $mail2->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail2->isSMTP();                                            // Set mailer to use SMTP
    $mail2->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail2->SMTPAuth = true;                                   // Enable SMTP authentication
    $mail2->Username = 'smtpalexoliveira@gmail.com';                     // SMTP username
    $mail2->Password = 'smtpalex';                               // SMTP password
    $mail2->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail2->Port = 587;                                    // TCP port to connect to
    
    //Recipients
    $mail2->setFrom('no-reply@gmail.com', 'No reply');
    $mail2->addAddress('alexrjrjr@gmail.com');     // Add a recipient
    $mail2->addReplyTo('no-reply@gmail.com', 'No reply');
    
    // Content
    $mail2->isHTML(true);                                  // Set email format to HTML
    $mail2->Subject = "You have an email from {$name}";
    $mail2->Body = $name . "<br>" . $address . "<br>" . $message;
    $mail2->AltBody = $name . " " . $address . " | " . $message;
    $mail2->send();
    
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Please try again latter";
    echo "<script>console.log('Message could not be sent. Mailer Error: {$mail->ErrorInfo}')</script>";
}