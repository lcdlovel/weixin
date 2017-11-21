
//模块一:完成用户登录
//1:为登录按钮绑定点击事件
console.log(1);
$("#btn1").click(function(e){
    console.log(2);
    //2:阻止事件默认行为,原因:a默认行为
    e.preventDefault();
    //3:获取用户输入用户名和密码
    var n = $("#uname").val();
    var p = $("#upwd").val();
    console.log(3);
    //alert(n+p);
    //4:发送ajax请求
    $.ajax({
        type:"GET",
        url:"data/login_do.php",
        data:{uname:n,upwd:p},
        success:function(data){
         alert(data.code+":"+data.msg);
        },
        error:function(data){
            alert("您的网络出现故障，请检查");
        }
    });
    //data/login_do.php
    //5:接收服务器返回结果
});


