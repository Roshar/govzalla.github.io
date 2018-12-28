$(document).ready(function(){


	$('.post__item').slice(0, 4).show();

	$('#load-news').on('click',function(e){

		e.preventDefault();

		$('.post__item:hidden').slice(0,2).slideDown();

		if ($('.post__item:hidden').length == 0) {
			$('.load__btn').fadeOut('slow');
		}

		$('html,body').animate({
			scrollTop: $(this).offset().bottom
		}, 1500)
		
	})


})