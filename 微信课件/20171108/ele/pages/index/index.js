//index.js
//获取应用实例
var bmap=require("../js/bmap-wx.min.js");
var banner=require("../js/animate.js");
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    /** 终端信息*/
pagew:320,

/** 头部区域地址和天气变量 */
    address:"",
    weather:"",
    tu:"../images/loading.gif",
    ld:"block",
    /** 商家列表*/ 
    business:{
        page:0,//第n页
        ngx:0,//绑定x
        startx:0, //每次移动开始的x
        touchx:0, //触摸开始点
        timer:null
    },
    bstimer:null ,
    bsactive:["active",""]

  },
  tp:function(e){
    //console.dir(e)
  },
  onLoad: function () {
    //console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })


 //initpage
  wx.getSystemInfo({
    success: function(res) {
      // success
      //console.dir(res)
      that.setData({pagew:res.windowWidth})
    }
  })


   //获取地理坐标信息
   
   var b=new bmap.BMapWX({
         ak:"SirpVcNS1xusVVVfuTjC3psbDOPnUXj9"
      })
  var back=function(d){
        // console.dir(d)  ;
         that.setData({
            address:d.wxMarkerData[0].address
         }) 
       }
  b.regeocoding({
       iconPath:"../img/marker_red.png",
       success:back
     });
// 获取天气
    var bb=function(d){
          //console.dir(d)
          that.setData({
            weather:d.originalData.results[0].weather_data[0].weather,
            tu:d.originalData.results[0].weather_data[0].dayPictureUrl,
            
          
          })

    }
    b.weather({
       success:bb
    })

  },


/*   bussiness */
 bsts:function(e){
   var that=this;
   var touchx=e.changedTouches[0].clientX;
   
   var tmp=that.data.business

   tmp.startx=that.data.business.ngx
   tmp.touchx=touchx;
   that.setData({
     business:tmp
   })

 },
 bstm:function(e){
  var that=this;
  var touchx2=e.changedTouches[0].clientX;
  
  var off=touchx2-that.data.business.touchx;
  //console.dir(off)
  var zuix=off+that.data.business.startx;

  var tmp=that.data.business
  tmp.ngx=zuix;
  
  that.setData({
    business:tmp
  })


 },
 bste:function(e){
    var that=this;
    var touchx2=e.changedTouches[0].clientX;
    
    var off=touchx2-that.data.business.touchx;
    
     var tmp=that.data.business
     var pg=tmp.page
   if(off<-100){
     pg++; if(pg>1){ pg=1}
     tmp.page=pg
     that.setData({
      business:tmp
     }) 
   }else if(off>100){
     pg--; if(pg<0) {pg=0}
     tmp.page=pg
     that.setData({
      business:tmp
     }) 
   } else{


   } 
    
   banner.animate(that,"business")
   
   var arr=that.data.bsactive;
   for(var i=0;i<arr.length;i++){
     arr[i]=""
   }
   arr[pg]="active"
   //console.dir(arr)
   that.setData({
     bsactive:arr
   })
 }
,
onShareAppMessage:function(){
    return {
      title: '自定义转发标题',
      path:  '/pages/index/index?id=123'
    }
}
})
