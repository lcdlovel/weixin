//index.js
//获取应用实例
Page({
  data:{
    sh:"none",
    num:0
  },
  jia:function(){
     var k=this.data.num;
     k++;
     this.setData({
      sh:"block",
      num:k
     })
    },
  jian:function(){
      var k=this.data.num;
      k--;
        this.setData({
        num:k
        })
      if(k<=0){
        this.setData({
         sh:"none"
        })
       }  
      }
})
