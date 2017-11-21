//wx.animate
function animate(obj,section){
  var page=obj.data[section].page;
  var pagew=obj.data.pagew;
  var mu=-pagew*page;
  clearInterval(obj.data[section].timer)
  obj.data[section].timer=setInterval(function(){
        var dang=obj.data[section].ngx;
        var speed=Math.ceil(Math.abs((mu-dang)/2));
        console.info(dang+":"+speed);
        if(dang<mu){ dang+=speed; }
        else if(dang>mu){ dang-=speed;}
        else if(dang==mu){
            clearInterval(obj.data[section].timer)
        }
        var tmp=obj.data[section]
        tmp.ngx=Math.ceil(dang);
        obj.setData({
         business:tmp
        })
  },30)
  
}

module.exports.animate=animate;


