<?php 
$name = $_POST["txtName"];
$mail = $_POST["txtMail"];
$district = $_POST["slctDistrict"];
$city = $_POST["txtCity"];
$status = $_POST["radStatus"];

$str = "your name is: <B>" . $name . "</B><BR>";
$str = $str . "your mail is: <B>" . $mail . "</B><BR>";
$str = $str . "you chose <B>" . $district . "</B> district<BR>";
$str = $str . "the city is: <B>" . $city . "</B><BR>";
$str = $str . "yout status is: <B>" . $status . "</B>";
print($str);

?>