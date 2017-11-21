//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    xin:"",
    shexin:"0",
    gongxin:"0",
    resultstatus:true,
    geren:[0,0,0,0,0,0,0,0,0,0],
    danwei:[0,0,0,0,0,0,0,0]
  },
  //事件处理函数
   fs:function(){
      var m=this.data.xin;
      if(m=="0"||m=="请输入工资"){
         this.setData({
         xin:""
         })
      }
      
   },
  kd:function(e){ 
     var x=e.detail.value;
     this.setData({
      xin:x,
      shexin:setShe(x),
      gongxin:setGong(x)
     })
      console.log(this.data.xin)   
  }
,
  kd1:function(e){
     var x=e.detail.value
     this.setData({
       shexin:x
     })
     console.dir(this)
  },
  kd2:function(e){
     var x=e.detail.value
     this.setData({
       gongxin:x
     })
  },
  bb1:function(){
    var x=this.data.shexin
    x=setShe(x)
    var y=this.data.xin;
    this.setData({
      shexin:Math.min(x,y)
    })
  }
  ,
  bb2:function(){
     var x=this.data.gongxin
    x=setGong(x)
    var y=this.data.xin;
    this.setData({
      gongxin:Math.min(x,y)
    })
  },
  cl:function(){
   var xinc= this.data.xin;
   var shexinc=this.data.shexin;
   var gongxinc=this.data.gongxin;
   
   var gerenc=this.data.geren;
   var danweic=this.data.danwei;
   
  gerenc[0]=(shexinc*0.08).toFixed(2);
  gerenc[1]=(shexinc*0.02).toFixed(2);
  gerenc[2]=(shexinc*0.002).toFixed(2);
  gerenc[3]=(gongxinc*0.12).toFixed(2);

  gerenc[6]=(parseFloat(gerenc[0])+parseFloat(gerenc[1])+parseFloat(gerenc[2])+parseFloat(gerenc[3])+parseFloat(gerenc[4])+parseFloat(gerenc[5])).toFixed(2)
  gerenc[7]=(xinc-gerenc[6]).toFixed(2);//应税收入
  
  var abcd=gerenc[7]-3500
  if(abcd<=0){
    gerenc[8]=0;
  }else if(abcd<=1500){
    gerenc[8]=(abcd*0.03-0).toFixed(2);
  }else if(abcd<=4500){
    gerenc[8]=(abcd*0.1-100).toFixed(2);
  }else if(abcd<=9000){
    gerenc[8]=(abcd*0.2-555).toFixed(2);
  }else if(abcd<=35000){
    gerenc[8]=(abcd*0.25-1005).toFixed(2);
  }else if(abcd<=55000){
    gerenc[8]=(abcd*0.3-2775).toFixed(2);
  }else if(abcd<=80000){
    gerenc[8]=(abcd*0.35-5505).toFixed(2);
  }else if(abcd>80000){
    gerenc[8]=(abcd*0.45-13505).toFixed(2);
  }
  
  
  
  
  gerenc[9]=(gerenc[7]-gerenc[8]).toFixed(2);


  danweic[0]=(shexinc*0.19).toFixed(2)
  danweic[1]=(shexinc*0.1).toFixed(2)
  danweic[2]=(shexinc*0.008).toFixed(2)
  danweic[3]=(shexinc*0.12).toFixed(2)
  danweic[4]=(shexinc*0.004).toFixed(2)
  danweic[5]=(shexinc*0.008).toFixed(2) 

  danweic[6]=(parseFloat(danweic[0])+parseFloat(danweic[1])+parseFloat(danweic[2])+parseFloat(danweic[3])+parseFloat(danweic[4])+parseFloat(danweic[5])).toFixed(2);
  danweic[7]=(parseFloat(danweic[6])+parseFloat(xinc)).toFixed(2)

  this.setData({
    geren:gerenc,
    danwei:danweic
  })
  }
  ,
  onLoad: function () {
    
  },
  onShareAppMessage:function(){
     return {
      title: '北京最新工资计算器',
      desc: '按照最新社保基数和薪资等级划分-2016-12-10',
      path: '/page/index?id=1'
    }
  }
})

function setShe(n){
 return n>=2834?(n<=21258?n:21258):2834
}
function setGong(n){
 return n>=1955?(n<=21258?n:21258):1955
}
