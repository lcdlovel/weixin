<?PHP
header("Content-Type:text/html;charset=utf-8");
session_start();
$p=$_GET["page"];//前端网址
if(empty($p)) exit;

//date_default_timezone_set("Asia/Shanghai");
$appid='wx8460529c8128c4f8';//申请的公众号appID
$appsecret='88fdb6ec630eeb6102cdccc42859cf0e';//appsecret
/*$appid='wxf049334e39e3e42b';
$appsecret='c10aadf66dc32b557b6c27c3584b9dfa';*/
$appurl=$p;
$nonceStr="abcdef";//随机字符
$debug="true";//非调试状态





/*判断是否有access.xml文件，如果有，读取*/
/*template  模板*/
$filename="../access.xml";
$template=<<<XML
<?xml version="1.0" encoding="utf-8"?>
<access>
   <token>0</token>
   <time>0</time>
</access>
XML;
$token='';//凭证
$time='';//时间
$now=time();
if (file_exists($filename)) {
    $xml = simplexml_load_file($filename);
	//var_dump($xml);
    $time=$xml->time;
	if($now-$time<7200){//有效期内
		$token=$xml->token;
		$time=$xml->time;
     //   echo "期限内";
          if(empty($token)||$token==""){
      //      echo "token为空";
            createNew();
          } 
		}
	else{
      //  echo "超时";
		createNew();
		}
} else {
      //   echo "无文件";
        createNew();
}


function createNew(){
	global $template,$appid,$appsecret,$token,$time,$filename,$now;
  
$url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$appsecret."";
$ch = curl_init();//form
curl_setopt($ch,CURLOPT_URL,$url);//action
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);//0为主动输出 1不主动输出
curl_setopt($ch,CURLOPT_HEADER,0);//不要头信息
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,FALSE);//ssl是重点，不验证。
curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,FALSE);// 验证主机
$output = curl_exec($ch);
$outobj=json_decode($output);
	//var_dump($outobj);
	$token=$outobj->access_token;
    //var_dump($token);
    $time=$now;
	
$outxml=simplexml_load_string($template);    
$outxml->token=$token;
$outxml->time=$time;
$outxml->asXML($filename);
	}

//echo $token;
//echo $time;












//@step1.得到access_tocken
$access=$token;//转为对象，方便调用

//@step2.得到ticket
$url="https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=".$token."&type=jsapi";
$ch = curl_init();//新建表单类似
curl_setopt($ch,CURLOPT_URL,$url);//action
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);//不输出
curl_setopt($ch,CURLOPT_HEADER,0);//不要头信息
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,FALSE);//这个是重
curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,FALSE);
$output = curl_exec($ch);//提交表单
$tmp_ticket=json_decode($output);
$ticket=$tmp_ticket->ticket;

//@step3生成signature

$arr=array();
$arr["jsapi_ticket"]=$ticket;
$arr["noncestr"]=$nonceStr;
$arr["timestamp"]=$time;
$arr["url"]=$appurl;
ksort($arr);

$str='';
$arrtmp=array();
$i=0;
foreach($arr as $k=>$v){
	$arrtmp[$i]=$k."=".$v;
	$i++;
	}
$str=implode("&",$arrtmp);
$signature=sha1($str);


//@四个数据
$nonceStr=$nonceStr;
$appid=$appid;
$time=$time;
$signature=$signature;

$outscript='wx.config({'.
           'debug: '.$debug.', '.
		   'appId:"'.$appid.'", '.
		   'timestamp:"'.$time.'" , '.
		   'nonceStr: "'.$nonceStr.'", '.
		   'signature: "'.$signature.'",'.
		   'jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","translateVoice","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"] '.
		   '});';
		   

echo $outscript;

		   
?>