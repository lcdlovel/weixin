<?php
require_once('init.php');
header("Content-Type:application/json,charset=utf-8");
$lid=$_REQUEST['lid'];
$sql='delete from xz_laptop where lid=$lid';
$result=mysqli_query($conn,$sql);
echo $result;
?>