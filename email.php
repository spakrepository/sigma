<?php
     if (isset($_POST['submit'])) {

        $name = $_REQUEST['name'];
        $email = $_REQUEST['email'];
        $message = $_REQUEST['message'];
        $mob = $_REQUEST['mob'];
        $cname = $_REQUEST['cname'];        

        $to = $email;
        $subject = 'Contact Request From Website';
        $headers = "From: ".$name." <".$email."> \r\n";
        $send_email = mail($to,$subject,$message,$headers);
        echo ($send_email) ? 'success' : 'error';
  }?>