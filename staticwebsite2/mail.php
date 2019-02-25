<?php
    $name = $_POST(full-name);
    $email = $_POST(email);
    $readbefore = $_POST(readership-type);
    $messagetype = $_POST(contact-type);
    $comment = $_POST(comment);
    $response = $_POST(reponse);

    $formcontent = "From $name \n Email $email \n Prior Readership $readbefore \n Type of Message $messagetype \n Message $comment \n Response Requested $response";

    $recipient = "taylor.ruhoff@ndsu.edu";
    $subject = "Contact from Miodrend";
    $mailheader = "From $email \r\n";

    mail($recipient, $subject, $formcontent, $mailheader) or die("Error");
?>