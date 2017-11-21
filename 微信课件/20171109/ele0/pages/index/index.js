//index.js
//获取应用实例
Page({
data:{
 list:[{pic:"","price":2.3,"ID":"","name":"d"},
       {pic:"","price":2.3,"ID":"","name":"d"},
			 {pic:"","price":2.3,"ID":"","name":"d"},
 ]
},
onLoad:function(){
  var that=this;
wx.request({
  url: 'https://localhost/getList.php', 
  data: {
     x: '' ,
     y: ''
  },
  header: {
      'content-type': 'application/json' // 默认值
  },
  success: function(res) {
    console.dir(res.data.data)
    that.setData({list:res.data.data})
  }
})

 }
})
