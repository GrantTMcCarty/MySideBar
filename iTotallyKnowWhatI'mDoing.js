



var page =1;
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function printReview(){
	var toPrint="";
	for (var i = 0; i < list['id'].length-2; i++){
		var key = list['id'][i]
		toPrint+="<div class='common_form_field'>";
		toPrint+="<h2 class='common_form_title'>"+ (i+1) +". "+ list['question'][i] + "</h2>";
		toPrint+="<h2 class='review_form_title'>"+ document.getElementById(key).value+"</h2>";
		toPrint+="<button class='edit' type='button' onclick='editForm("+list['page'][i]+", "+key+")'>edit</button></div>";
	}

	return toPrint;
};

function editForm(pageNow, id){
	$(document).ready(function(){
		elementId='#'+id;
		showPage='#'+pageNow;
		page=pageNow;
		$(showPage).slideDown();
		$('#review').slideUp();
		$('html, body').animate({
	        scrollTop: $(elementId).offset().top
	    }, 2000);
	});
}

$(document).ready(function(){
	$(".nextButton").click(function(){
		if(page==1){
			$('#home').hide();
			$('#back').show();
		}
		thisPage='#'+page;
		$(thisPage).slideUp();
		page = page+1;
		nextPage='#'+page;
		$(nextPage).slideDown();
	});

	$(".backButton").click(function(){
		thisPage='#'+page;
		$(thisPage).slideUp();
		page = page-1;
		if(page==1){
			$('#home').show();
			$('#back').hide();
		}
		nextPage='#'+page;
		$(nextPage).slideDown();
	});

	$(".finishButton").click(function(){
		$('#review').empty();
		var printMe = printReview();
		$('#review').append(printMe);
		thisPage='#'+page;
		$(thisPage).slideUp();
		$('#review').slideDown();
	});
});
