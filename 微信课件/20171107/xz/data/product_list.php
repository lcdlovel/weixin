<?php
header("Content-Type:application/json,charset=utf-8");
require_once('init.php');
$sql="select lid,(select sm from xz_laptop_pic where pid=lid) pic,video_card,title,spec,price from xz_laptop";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($row);
?>