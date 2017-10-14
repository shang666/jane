/*点击左侧产品小图片切换大图*/
$(function(){
	$(".pro_detail_left ul li img").livequery("click",function(){ 
		  var imgSrc = $(this).attr("src");  //被点击小图片对应的路径
		  var i = imgSrc.lastIndexOf(".");   //返回.最后出现的位置
		  var unit = imgSrc.substring(i);    //文件扩展名
		  imgSrc = imgSrc.substring(0,i);    //文件主名
		  var imgSrc_small = imgSrc + "_small"+ unit;//小图
		  var imgSrc_big = imgSrc + "_big"+ unit;//大图
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
	});
	
	//换颜色
	$(".color_change ul li img").click(function(){           
		  var imgSrc = $(this).attr("src");//小图路径
		  var i = imgSrc.lastIndexOf(".");//小图路径.的索引（位置）
		  var unit = imgSrc.substring(i);//小图扩展
		  imgSrc = imgSrc.substring(0,i);//小图主名
		  var imgSrc_small = imgSrc + "_one_small"+ unit;//蓝白小图
		  var imgSrc_big = imgSrc + "_one_big"+ unit;//蓝白大图
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });//大图路径
		  //$("#thickImg").attr("href", imgSrc_big);
		  var alt = $(this).attr("alt");//获取alt的值
		  $(".color_change span").text(alt);//将alt的值添加到span标签

	});
	//换尺寸
	$(".big_change button").click(function(){ 
		  var alt = $(this).val();
		  $(".big_change span").text(alt);

	});
	
	/*商品评分效果*/
	//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	})
});