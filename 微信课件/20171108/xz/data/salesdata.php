<?php
require_once('init.php');
header("Content-Type:application/json;charset=utf-8");
$data=[];
$data[]=['月份'=>'一月','value'=>280];
$data[]=['月份'=>'二月','value'=>290];
$data[]=['月份'=>'三月','value'=>370];
$data[]=['月份'=>'四月','value'=>340];
$data[]=['月份'=>'五月','value'=>320];
$data[]=['月份'=>'六月','value'=>180];
$data[]=['月份'=>'七月','value'=>310];
$data[]=['月份'=>'八月','value'=>120];
$data[]=['月份'=>'九月','value'=>250];
$data[]=['月份'=>'十月','value'=>310];
$data[]=['月份'=>'十一月','value'=>330];
$data[]=['月份'=>'十二月','value'=>220];
for($i=0;$i<count($data);$i++){
 foreach($data[$i] as $key=>$value)
   echo $value;
}
?>