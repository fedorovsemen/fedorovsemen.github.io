<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$text = $_POST['user_name'];
$phone = $_POST['user_phone'];
$text = $_POST['user_text'];
$text = $_POST['user_text_two'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'FedorovWebDeveloper@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'ctvtyctvtyW2211'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 995; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('FedorovWebDeveloper@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('fed.5emen@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = . $text . "<br>" .$phone . "<br>" . $text . "<br>" . $text;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return 'true';
}
?>