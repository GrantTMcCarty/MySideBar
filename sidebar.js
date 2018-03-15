$(document).ready(function(){
	var windowWidth = $(window).width();
	var sbOpen=false;
	if(windowWidth <767 ){
		$('#sidebar').hide();
		$('#content').toggleClass("full_content");
		$("#sidebarCollapse").show();
	}
	else{
		$('#sidebar').show();
		$('#content').removeClass("full_content");
		$('#content').addClass("content");
	}

	$(window).resize(function(){
		windowWidth = $(window).width();
		if(sbOpen==true){
			sbOpen=false;
			$('#sidebar').toggle("slide",767);
			$('#sidebarCollapse').toggleClass("margin_left", 767);
			$('#overlay').toggleClass("overlay_show")
		}
		if(windowWidth < 767 ){
			$('#sidebar').hide();
			$('#content').removeClass("content");
			$('#content').addClass("full_content");
			$("#sidebarCollapse").show();
		}
		else{

			$('#sidebar').show();
			$('#content').removeClass("full_content");
			$('#content').addClass("content");
			$("#sidebarCollapse").hide();
		}
	})


	function doTheThing(){
		windowWidth = $(window).width();
		console.log('im hitting the button');
		if(sbOpen == false){
			sbOpen=true;
		}
		else{
			sbOpen=false;
		}
		// $('#sidebar').toggle("slow");
		if(windowWidth < 767 ){
			$('#sidebar').toggle("slide",767);
			$('#sidebarCollapse').toggleClass("margin_left", 767);
			$('#overlay').toggleClass("overlay_show")
		}
	}

	$("#sidebarCollapse").click(function(){
		doTheThing();
	});
	$("#overlay").click(function(){
		doTheThing();
	});

})
