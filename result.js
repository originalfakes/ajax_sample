$(document).ready(function() {
	$('.district').hide("fast");
	//<------------顯示目前時間--------------------->
	function nowTime() {
		var NowDate=new Date();
		var hour=NowDate.getHours();
		if(hour>=0 && hour<=9) {
			hour = '0' + hour;
		}
		var minute=NowDate.getMinutes();
		if(minute>=0 && minute<=9) {
			minute = '0' + minute;
		}
		var second=NowDate.getSeconds();
		if(second>=0 && second<=9) {
			second = '0'+ second;
		}　
		document.getElementById('time').innerHTML = hour+':'+minute+':'+second;
		refresh();
	}
	function refresh() {
		setTimeout(nowTime,1000);
	}
	nowTime();
	//<----------------------end----------------->
	//<------------------回到最上方的按鈕-------->
	window.onscroll = function() { //當滑鼠轉動卷軸時
		scrollFunc();
	};
	function scrollFunc() { //當卷軸滾動超過50顯示按鈕，否則不顯示
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { 
	        document.getElementById("toTop").style.display = "block";
	    	} else {
        		document.getElementById("toTop").style.display = "none";
    		}
	}
	$('#toTop').click(function() { //回到網頁最上方
		//document.body.scrollTop = 0; //為javascript語法
	    //document.documentElement.scrollTop = 0;
	    $('html,body').animate({ scrollTop: 0 }, 'slow');
	})
	//<------------------end------------------------>

	$('input:radio[name=select]').change(function() {
		if(this.value=="free")
		{
			$('.show').html('');
			$('.district').hide("fast");
			$('.district').fadeIn();
			mapClose();
			var url = "freePark.json";
			$('#north').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#center').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#south').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#east').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#annan').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Yongkang').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Anping').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Ryuaki').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Guanmiao').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Guiren').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Rende').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#nanhua').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Nanxi').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Yujing').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Shanshang').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Anting').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Sinshih').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Shanhua').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Xinhua').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Beimen').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Jiangjun').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Qigu').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Xigang').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Xuejia').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Jiali').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Danei').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Guantian').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Xiaying').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Liujia').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
				mapClose();
			});
			$('#Madou').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Dongshan').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Houbi').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Liuying').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Baihe').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Yanshui').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Hsinying').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});	
		}
		//------公有收費停車場-------
		if(this.value=="notfree")
		{
			$('.show').html('');
			$('.district').hide("fast");
			$('.district').fadeIn();
			var url = "publicCharge.json";
			mapClose();
			$('#north').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#center').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#south').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#east').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#annan').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Yongkang').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Anping').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Ryuaki').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Guanmiao').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Guiren').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Rende').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#nanhua').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Nanxi').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Yujing').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Shanshang').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Anting').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Sinshih').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Shanhua').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Xinhua').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Beimen').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Jiangjun').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Qigu').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Xigang').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Xuejia').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Jiali').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Danei').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Guantian').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Xiaying').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Liujia').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Madou').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Dongshan').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Houbi').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Liuying').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Baihe').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Yanshui').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});
			$('#Hsinying').click(function() {
				var name = $(this).attr("name");
				doAjax(name, url);
				mapClose();
			});	
		}
		
	});
});

function mapClose() {
	$('#map_info').hide();
	$('#map').hide();
}

function doAjax(name, dataUrl) {
	$.ajax({
		url: dataUrl,
		type: "GET",
		dataType: "json",
		success: function(e) {
			var data = "<ul class=selectData>";
			$('.show').html('');
			$.each(e, function(i, n) {
				if(dataUrl==="freePark.json") {
					if(n["id"]===name) {
						var lan = n["經緯度"];	
						data+="<li>"+ "停車場名稱 : " + n["name"] +"<br>" +"停車場地址 :" + n["address"] 
						+ "<input type=button class=map_pos value=地圖 myValue=" + lan +  ">"
						+ "<br>" + "車位 : " + n["amount"] + "</li>" + "<br>";
					}
				}
				if(dataUrl==="publicCharge.json") {
					if(n["id"]===name) {
						var lan = n["經緯度"];
						data+="<li>" + "停車場名稱 : " + n["停車場名稱"] + "<br>" + "停車場地址 :" + n["停車場地址"]  
						+ "<input type=button class=map_pos value=地圖 myValue=" + lan +  ">"
						+ "<br>" + "車位 : " + n["小型車(一般)"] + "<br>" + "收費方式 : " + n["收費費率"] + "</li>" + "<br>";
					}
				}
			});
			data+="</ul>";
			$('.show').append(data);
			showMap();
		}
	});
}

function showMap() {
	$('.map_pos').click(function(){
		var info="<div id=map_title>";
		$('.pos').html('');
		info+="停車場地圖資訊";
		info+="</div>";
		$('.pos').append(info);
		var lans = $(this).attr("myValue");
		var latlng = new google.maps.LatLng(lans.slice(0, 9), lans.slice(10));
        //設定地圖參數
        var mapOptions = {
            zoom: 16, //初始放大倍數
            center: latlng, //中心點所在位置
            mapTypeId: google.maps.MapTypeId.ROADMAP //正常2D道路模式
        };
        //在指定DOM元素中嵌入地圖
        var map = new google.maps.Map(
            document.getElementById("map"), mapOptions);
        //加入標示點(Marker)
        var marker = new google.maps.Marker({
            position: latlng, //經緯度
            map: map //指定要放置的地圖對象
        });
        $('#map').show();
		$('#map_info').show();
		//window.scrollTo(0,document.body.scrollHeight); //為javascript語法
		$("html, body").animate({ scrollTop: $(document).height() }, 1000); //移動網頁到最下方
	})
}