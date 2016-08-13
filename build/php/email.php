<?php

if (is_ajax()) {
  if (isset($_GET)) {
    send_email();
  }
}

function is_ajax() {
 return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}

function send_email() {
  $name = $_GET['data']['name'];
  $email = $_GET['data']['email'];
  $phone = $_GET['data']['phone'];
  $location = $_GET['data']['location'];



  $to = 'aloysiusnally@gmail.com'.', '.$email;
  $subject = $_GET['data']['subject'];

  echo json_encode($_GET['data']['name']);
}

?>
