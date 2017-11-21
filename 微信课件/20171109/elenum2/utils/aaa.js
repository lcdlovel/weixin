function showTime(tat){
     var a=new Date();
     var str=a.getFullYear()+"-"+
             (a.getMonth()+1)+"-"+
             a.getDate()+" "+
             a.getHours()+":"+
             a.getMinutes()+":"+
             a.getSeconds()
     tat.setData({time:str})
}

module.exports={
 wai:showTime
}