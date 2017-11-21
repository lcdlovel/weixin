(()=>{
	var html='';
	var size=0;
	var currentpage;
	function getres(data){
	html='';
	size=data[data.length-1];
  for(var i=0;i<data.length-1;i++){
  html+=`<tr><td><input type="checkbox"></td>
           <td>${data[i]['lid']}</td>
           <td>${data[i]['pic']}</td>
           <td>${data[i]['video_card']}</td>
           <td>${data[i]['title']}</td>
           <td>${data[i]['spec']}</td>
           <td>${data[i]['price']}</td>
           <td><a href="javascript:;" class="del">删除<\/a><\/td></tr>`;
  }
  return html;
	}
	function ajax(){
	 $.get('data/loadbypage.php',{persize:$('.form-control').val(),currentpage})
		.then(data=>{
		  html=getres(data);
		 $('.loading').html(html);
	})
}
$('.form-control').change(function(){
  ajax();
	currentpage=1;
	$('.pagination:has(.active)').find('.active').removeClass('active');
  $('.pagination li:nth-child(2)').addClass('active');
})
		$('.pagination li').find(':not(.next,.prev)').click(function(){
	    currentpage=$(this).html();
			var pagecount=Math.ceil(size/$('.form-control').val());
			if(currentpage<=pagecount){
			 $('.pagination:has(.active)').find('.active').removeClass('active');
			 $(this).parent().addClass('active');
			ajax();
			}
	})
	$('.prev').click(function(){
		currentpage=$('.pagination:has(.active)').find('.active').text();
	  if(currentpage<=1){
			currentpage=1;
		  $('.prev').disabled=true;
		}
		if(currentpage>1){
		  currentpage-=1;
		  var li=$('.pagination:has(.active)').find('.active');
		  li.removeClass('active');
			li.prev().addClass('active');
	}
		ajax();
	})
		$('.next').click(function(){
		currentpage=parseInt($('.pagination:has(.active)').find('.active').children().html());
		var pagecount=Math.ceil(size/$('.form-control').val());
		currentpage+=1;
		 if(currentpage<=pagecount){
		 var li=$('.pagination:has(.active)').find('.active');
		  li.removeClass('active');
			li.next().addClass('active');
		 }
		 if(currentpage>=pagecount){
			currentpage=pagecount;
		  $('.next').disabled=true;
		}
		ajax();
	})
	$('.loading input[type=checkbox]').click(function(){
	   if($('.loading input').find('input[checked=false]'))
       $('.checkbox input').checked=false;
	})
		$('.checkbox input').click(function(){
	  if($(this).prop('checked')){
       for(var i=1;i<$('input[type=checkbox]').length;i++)
       $('input[type=checkbox]')[i].checked=true;
		}
		else{
			 for(var i=1;i<$('input[type=checkbox]').length;i++)
       $('input[type=checkbox]')[i].checked=false;
		}
	})
		$('.del').click(function(){
	   $.get('data/deletegood.php',{lid:$('.loading td:nth-child(2)').html()})
			 .then(data=>{
		   confirm("您确定要删除这条数据吗？");
		 })
	})
		window.onload=function(){
	  ajax();
	}
})();