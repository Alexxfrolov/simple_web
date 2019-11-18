'use strickt';

function Formdata(data){

	/* контактный телефон */
	if(data.number != null && data.number.value.length == 0){
		alert('поле "Телефон" пустое');
		return false;
	}

	if(data.number != null && data.number.value.length < 5){
		alert('поле "Телефон" должно содержать минимум 5 символов');
		return false;
	}
 	/* Поле с email */
	if(data.email != null && data.email.value.length == 0){
		alert('поле "E-mail');
		return false;
	}

	if(data.email != null && data.email.value.length < 5){
		alert('поле "Введите телефон или е-mail" должно содержать минимум 5 символов');
		return false;
	}
}
$(function(){

	/*Плавный скроулинг*/
	$(window).scroll(function (){
		if ($(this).scrollTop() > 979)
			$('div#wr-scrollmenu').fadeIn();
		else
			$('div#wr-scrollmenu').fadeOut(400);
	});
	/*Плавный паралакс*/
	$('.anch').click(function(e){
		e.preventDefault();
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
		return false;
	});

});










jQuery(document).ready(function(){

	function getScrollTop() {
			   var scrOfY = 0;
			   if( typeof( window.pageYOffset ) == "number" ) {
					   //Netscape compliant
					   scrOfY = window.pageYOffset;
			   } else if( document.body
			   && ( document.body.scrollLeft
			   || document.body.scrollTop ) ) {
					   //DOM compliant
					   scrOfY = document.body.scrollTop;
			   } else if( document.documentElement
			   && ( document.documentElement.scrollLeft
				|| document.documentElement.scrollTop ) ) {
					   //IE6 Strict
					   scrOfY = document.documentElement.scrollTop;
			   }
			   return scrOfY;
	}



});




$(function() {


	 $(document).ready(function() {
		$('a[name=modal]').click(function(e) {	
			e.preventDefault();
			var id = $(this).attr('href');
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
			$('#mask').css({'width':maskWidth,'height':maskHeight});
			$('#mask').fadeIn(300);
			$('#mask').fadeTo("fast",0.8);
			var winH = $(window).height();
			var winW = $(window).width();
			$(id).css('top',  winH/2-$(id).height()/2);
			$(id).css('left', winW/2-$(id).width()/2);
			$(id).fadeIn(900);
		});
		$('.window .close').click(function (e) {
			e.preventDefault();
			$('#mask, .window').hide();
		});
		$('#mask').click(function () {
			$(this).hide();
			$('.window').hide();
		});


		$('input[name=phone]').mask("+7 (999) 999-99-99", {placeholder: "+7 (999) 999-99-99"});

});




/* main-catalog*/



$('button').click(function(){
 return	Formdata(this.form);
});

  //$('.oks').click(function() {
	// if($('.oks').hasClass('active')){
	//	$('.catalog-item').addClass('hide');
	//	if($('.catalog-item').hasData('shoestype')){
	//		$(this).removeClass('hide');
	//		$(this).addClass('show');
	//		}
	//}
//});



});

$(document).ready(function() {
		$(".gallery").fancybox();
	});


	 $(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager: true,
  	controls: true
  });
});