$(function(){

	//侧边栏折叠
	$("aside div h3").click(function(){
		$(this).toggleClass("active").siblings().slideToggle(500);
	})
	$("aside div>ul>li>a").click(function(){
		$(this).toggleClass("active").siblings().slideToggle(500)
	})
	//最新动态字幕滚动定时器
	var $this=$(".scrollNews");
	var timer;
	$this.hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			scrollNews($this);
		},3000)
	}).trigger("mouseleave");
	//最新动态字幕滚动
	function scrollNews(obj){
		var $self=obj.find("ul:first");
		var lineHeight=$self.find("li:first").height();
		$self.animate({"marginTop":-lineHeight+"px"},600,function(){
			$self.css({marginTop:0}).find("li:first").appendTo($self);
		})
	}
	


//	点击左侧产品小图片切换大图
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
//	数量和价格联动
		 var $span = $("p.pro_price span");
		var price = $span.text();	
		$("#num_sort").change(function(){
		    var num = $(this).val();
			var amount = num * price;
			$span.text( amount );
		}).change();
	
//	商品评分效果
	//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	})	
//	最终购买输出
	var $product = $(".right");
	$(".right>a").click(function(){
        var name = $product.find("h3:first").text();
		var size = $product.find(".big_change span").text();
		var color =  $(".color_change span").text();
		var num = $product.find("#num_sort").val();
	    var price = $product.find(".pro_price span").text();
		var dialog = " 感谢您的购买。\n您购买的\n"+
		        "产品是："+name+"；\n"+
				"尺寸是："+size+"；\n"+
				"颜色是："+color+"；\n"+
				"数量是："+num+"；\n"+
				"总价是："+price +"元。";
		if( confirm(dialog) ){
			alert("您已经下单!");
		}
//		alert(dialog)
		return false;//避免页面跳转
	})
	
	
	
	
	
	
	
	
	
	
	
	//详情tab切换
	$("#content p:not('.show')").hide();//隐藏 除去class名为show的所有p   
	$("#tab li").click(function(){   //li
		$(this).addClass("def")
		.siblings().removeClass("def");
		//p
		$("#content p").hide().eq($(this).index()).show()
		.addClass("show");
	})
	
})




//banner
$(function(){
     var len  = $(".num > li").length;  
	 var index = 0;
	 var adTimer;
	 $(".num li").click(function(){
		index  =   $(".num li").index(this);
		showImg(index);
	 }).eq(0).click();	
	 //滑入停止动画，滑出开始动画.
	 $('.ad').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 3000);
	 }).trigger("mouseleave");
})
//通过控制left ，来显示不同的幻灯片
function showImg(index){
    var adWidth = $(".ad").width();
	$(".slider").stop(true,false).animate({left:-adWidth*index},1000);
	$(".num li").removeClass("on").eq(index).addClass("on");
}

