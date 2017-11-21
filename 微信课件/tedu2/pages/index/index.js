//index.js
//获取应用实例
var app = getApp()
Page({
  data: {

    // 弹出框信息
    motto: '达内高端班测试系统',
    userInfo: {},
    toast1Hidden:true,  
    modalHidden: true,  
    modalHidden2: true,  
    notice_str: '',  
    index:0  ,

    //前进后退按钮显示状态 
    
    prevbtn:true,
    nextbtn:false,
    subds:"none",
    // 试卷倒计时时间
    totalTime:30*60,
    timeStr:" ",
    timer:null,
    // 试卷状况
    testID:"",// 试卷第n次测试
    now:0,  //试卷第n题
    lists:[
      {
        type:"1",
        ask:"web前端技术总共包含哪些板块？测试长文本你看这里的长文本？我们如何看待长文本长文本",
        askID:"T304903201",
        items:[
          {name: '1', value: '美国'},
          {name: '2', value: '中国'},
          {name: '3', value: '巴西'},
          {name: '4', value: '日本'}
        ],
        answer:["-1"]
      },

      {
        type:"2",
        ask:"web前端技术总共包含哪些板块？测试长文本你看这里的长文本？我们如何看待长文本长文本",
        askID:"T304903202",
        items:[
          {name: '1', value: '美国',unique: 'unique_1'},
          {name: '2', value: '中国',unique: 'unique_2'},
          {name: '3', value: '巴西',unique: 'unique_3'},
          {name: '4', value: '日本',unique: 'unique_4'},
          {name: '5', value: '英国',unique: 'unique_5'},
          {name: '6', value: '法国',unique: 'unique_6'},
        ],
        answer:["-1"]
      },
      {
        type:"2",
        ask:"web前端技术总共包含哪些板块？测试长文本你看这里的长文本？我们如何看待长文本长文本",
        askID:"T304903203",
        items:[
          {name: '1', value: '美国',unique: 'unique_1'},
          {name: '2', value: '中国',unique: 'unique_2'},
          {name: '3', value: '巴西',unique: 'unique_3'},
          {name: '4', value: '日本',unique: 'unique_4'},
          {name: '5', value: '英国',unique: 'unique_5'},
          {name: '6', value: '法国',unique: 'unique_6'},
        ],
        answer:["-1"]
      }
      ,
     {
        type:"1",
        ask:"web前端技术总共包含哪些板块？测试长文本你看这里的长文本？我们如何看待长文本长文本",
        askID:"T304903204",
        items:[
          {name: '1', value: '美国'},
          {name: '2', value: '中国'},
          {name: '3', value: '巴西'},
          {name: '4', value: '日本'},
          {name: '5', value: '英国'},
          {name: '6', value: '法国'},
        ],
        answer:["-1"]
      },
      {
        type:"3",
        ask:"判断题",
        askID:"T304903205",
        items:[
          {name: '1', value: '是'},
          {name: '2', value: '否'}
        ],
        answer:["-1"]
      }
      ,
      {
        type:"4",
        ask:"简单题，请你简要描述盒子模型",
        askID:"T304903206",
        items:[],
        answer:["-1"]
      }
        // 添加其他题目
      ]
    ,
    answers:[
      

    ],
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ]
  },

// 事件部分

// 加载初始化
  onLoad: function () {
    
    var that = this
    console.log('onLoad')
    //判断用户是否完成测试
    var m= wx.getStorageSync('hasFinished')
    //wx.setStorageSync('hasFinished', "-1");
    
    if(m==null||m==""){
           wx.setStorageSync('hasFinished', "-1");
           console.dir("第一次")

           this.data.timer= setInterval(function(){
               timeClock(that)
               console.log(34)
           },100)

    }else if(m==-1){
            console.dir("上次没有测试完成分")
            this.data.timer= setInterval(function(){
               timeClock(that)
              // that.sub();
           },100)
           console.log(this.data.timer)
    }
    else if(m==1){
        console.dir("已经完成")
        wx.redirectTo({
          url: '/pages/wel/wel',
          success: function(res){
            // success
           
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }

  var pg= this.data.now
  if(pg==0){
    this.setData({
      prevbtn:true,
      nextbtn:false,
      subds:"none",
    })
  }


    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

 toast1Change:function(e){  
    this.setData({toast1Hidden:true});  
  },  

  //事件处理函数 提交表单
  sub:function(e){
     //console.dir("提交")
     
     var that=this;
     var dt=that.data.answers
     that.modalTap();
      //   wx.request({
      //        url: 'http://localhost:80/weixin/index.php',
      //        data: e.detail.value,
      //        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      //        // header: {}, // 设置请求的 header
      //       header: {  
      //     'Content-Type': 'application/json'  
      // },  
      //        success: function(res){
      //          // success
              
      //           
      //        },
      //        fail: function() {
      //          // fail
      //        },
      //        complete: function() {
      //          // complete
      //        }
      //      })
   } ,
radioChange: function(e) {
    
    var that=this;
   
    var inlists=that.data.lists;
    var inan=that.data.answers;
    //console.dir(inlists[that.data.now])
    var ky=inlists[that.data.now].askID
    var va=e.detail.value
    inan[ky]=va;
    that.setData({
        answers:inan
    })
console.dir(that.data)

  },
  prev:function(e){
        var m=this.data.now;
        m--
        var that=this;
        this.setData({
            now:m
        })
    chgCfg(this)

  },
  next:function(e){
    console.dir(e)
        var m=this.data.now;
        m++
        var that=this;
        this.setData({
            now:m
        })
chgCfg(this)

  },
  
  //弹出确认框  
  modalTap: function(e) {  
    this.setData({  
      modalHidden: false  
    })  
  },  
  confirm_one: function(e) {  
    console.log(e);
    var that=this;
    clearInterval(that.data.timer)

    this.setData({  
      modalHidden: true,  
      toast1Hidden:false,  
      notice_str: '提交成功'  
    });  

    console.dir( that.data.answers)
    up(that)
    // wx.redirectTo({
    //   url: '/pages/wel/wel',
    //   success: function(res){
    //     // success
    //     wx.setStorageSync('hasFinished', "1")
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })
  },  
  cancel_one: function(e) {  
    console.log(e);  
    this.setData({  
      modalHidden: true,  
      toast1Hidden:false,  
      notice_str: '取消成功'  
    });  
  },  
  //弹出提示框  
  modalTap2: function(e) {  
    this.setData({  
      modalHidden2: false  
    })  
  },  
  modalChange2: function(e) {  
    this.setData({  
      modalHidden2: true  
    })  
  },  
  bindPickerChange: function(e) {  
    console.log('picker发送选择改变，携带值为', e.detail.value)  
    this.setData({  
      index: e.detail.value  
    })  
  },
   onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/pages/wel/wel'
    }
  }
})





function chgCfg(o){
  var pg= parseInt(o.data.now)
  var lg=parseInt(o.data.lists.length)
  console.dir(lg)
  if(pg==0){
    o.setData({
      prevbtn:true,
      nextbtn:false,
      subds:"none",
    })
  }
 else if(pg>=lg-1){
    o.setData({
      prevbtn:false,
      nextbtn:true,
      subds:"block",
    })

 } else {
    o.setData({
      prevbtn:false,
      nextbtn:false,
      subds:"none",
    })

 } 


}



// 定时器倒计时
function timeClock(o){
 // console.dir(o)
   var m=o.data.totalTime
   m--;
 
   if(m<=0){
       m=0;
     //  console.dir(o.data)
       clearInterval(o.data.timer)
       console.dir(o.answers)
       
   }
   o.setData({
      totalTime:m,
      timeStr:"还剩"+formateTime(m)
   })


}
function formateTime(t){
  var m=t%60  //秒
  var f=Math.round((t-m)/60)  //分          
  return f+"分"+m+"秒"
}
//倒计时结束提交
function up(o){
   wx.setStorageSync('hasFinished', "1")
   console.dir(o.data)
   wx.request({
    url: 'https://localhost',
    data: {},
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function(res){
      // success
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })

  wx.redirectTo({
    url: '/pages/wel/wel',
    success: function(res){
      // success
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })

}