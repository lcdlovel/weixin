//app.js 调用了一个App({a:2,b:function(){}})
// 供其他页面调用 4+公共方法
App({
  onLaunch:function(){
    var that=this;
//  查看终端信息的
    wx.getSystemInfo({
      success: function(res) {  
          that.kkk=res.windowWidth
      }
    })
//网络状态 result
wx.getNetworkType({
  success: function(res) {
    console.dir(res.networkType)
  }
})



  },
  onShow:function(){
    console.log("显示")
    },
  onHide:function(){
    console.log("隐藏")
    },
  onError:function(){
    console.log("出错")
    },
  abc:function(){
     console.log("abc")
    },
  abd:function(){
     console.log("abd")
     },
  kkk:"df",
  fff:[4,6]
})


/*
onLaunch: function () {//
    console.log("23343")
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }

*/
