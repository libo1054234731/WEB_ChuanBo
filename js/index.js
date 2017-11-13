$(function(){



	var piao = '<select name="piao"><option value="315">普通：￥315</option><option value="300">学生：￥300</option><option value="170">军人：￥170</option><option value="100">儿童：￥100</option></select>';
	var zheng = '<select name="zheng"><option value="1">身份证</option><option value="2">军官证</option><option value="3">港澳居民证</option><option value="4">其他证</option></select>';
	var nameInput = '姓名：<input type="text"/>';
	var zhengInput = '<input type="text"/>';
	var phoneNum = '电话：<input type="text"/>';
	var delButton = '<input type="button" value="删除当前" class="delBtn" />';
	var renshu = 0;
	var pid = 0;
	var htmlStr ;
//	打开更多
	$('#more').click(function(){
		$('#ccryy').css('display','block');
		$('#more').css('display','none');
		$('#shouqi').css('display','block');
	});
//	收起
	$('#shouqi').click(function(){
		$('#ccryy').css('display','none');
		$('#more').css('display','block');
		$('#shouqi').css('display','none');
	});
//	新增乘船人
	$('#add').click(function(e){
		
		
		if(renshu >= 5){
			alert('最多选择5人！');
			return false;
		}
		pid++;
		
		htmlStr = '<ul>';
	    htmlStr += '<li>' + piao +'</li>';
	    htmlStr += '<li>' + nameInput + '</li>';
	    htmlStr += '<li>' + zheng + zhengInput +'</li>';
	    htmlStr += '<li>' + phoneNum + '</li>';
	    htmlStr += '<li>' + delButton + '</li>';
	    htmlStr += '</ul>';
	    
	    $('.ccr-2').append(htmlStr);
		
	});
	
	$('#ccr-1').click(function(e){
		e = e || window.event;
		var currObj = e.target || e.srcElement;
		for(var i = 0;i < $('checkbox').length;i ++){
			
					
					$('checkbox')[i].style.display = 'none';
					
		}
	});
});