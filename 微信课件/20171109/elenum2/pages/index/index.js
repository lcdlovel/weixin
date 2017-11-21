//index.js
//获取应用实例
var de=require("../../utils/aaa.js")
Page({
  data:{
  a0:"#000",a1:"#000",a2:"#000",
  b:["#000","#000","#000"],
  time:"2017-11-09 14:00:00",
  sh:["block","none","none"],
  lan:["体育","财经","新闻"],
  p:0,
  cl:["active","",""] },
 chg:function(e){
  var that=this;//置换this
  var m= e.currentTarget.dataset.x//得到参数//var k=that.data.sh//获取sh值
  var z=that.data.cl//
  for(var i=0;i<z.length;i++){
   z[i]=""
  }//让sh所有下标都为none
  z[m]="active"
   that.setData({p:m,cl:z})
  },
 onLoad:function(){
     var that=this;
        de.wai(that)
     setInterval(function(){
        de.wai(that)
     },1000)

  },
 abc:function(e){
    var m=e.currentTarget.dataset.x;
    var k=this.data.b
      k[m]="#f00"
    this.setData({
      b:k
    })
//     if(m==0){
//      this.setData({
//     a0:"#f00"
//   })
//     }
//     else if(m==1){
//      this.setData({
//     a1:"#f00"
//   })
//     }
//     else if(m==2){
//     this.setData({
//     a2:"#f00"
//   })
//   }
   
 }
})




