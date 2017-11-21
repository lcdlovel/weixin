//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    motto:"hello 张三",
    abc:234,
    xyz:"#000"
  },
  onLoad:function(){},
  onReady:function(){},
  onShow:function(){},
	onHide:function(){},
	onUnload:function(){},
  onPullDownRefresh:function(){},
  onReachBottom:function(){},
  onShareAppMessage:function(){
     return {
      title: 'jd购物很好玩',
      path: '/page/index/index'
    }
  }, 
  onPageScroll:function(){
    console.log(12)
  },
  zzz:function(){},
  kkk:function(){
       console.log(34)
       console.dir(this)
         /// var k=t.innerHTML
         //k++;
         //t.innerHTML=k
       var k=this.data.motto;
       k++;
       this.setData({
         motto:k
       });

       this.setData({
        xyz:"#f00"
       })
       //var t=document.getElementById("txt")
       //t.style.color="#f00"
    },
  mn:56
  
})



//  data: {
//    motto: 'Hello World',
//    userInfo: {}
//  },
//  //事件处理函数
//  bindViewTap: function() {
//    wx.navigateTo({
//      url: '../logs/logs'
//    })
//  },
//  onLoad: function () {
//    console.log('onLoad')
//    var that = this
//    //调用应用实例的方法获取全局数据
//    app.getUserInfo(function(userInfo){
//      //更新数据
//      that.setData({
//        userInfo:userInfo
//      })
//    })
//  }
