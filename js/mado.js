$(document).ready(function(){

	var imageCollection = ['uploads/slider/11.jpg','uploads/slider/22.jpg',
	'uploads/slider/33.jpg','uploads/slider/44.jpg','uploads/slider/55.jpg'];

	var mainContent = ['Всероссийское совещание руководителей системы ДПО',
	'Всероссийский семинар - совещание "Система оценки качества образования:проблемы и пути решения',
	'Семинар для руководителей общеобразовательных организаций-членов Ассоциации директоров ЧР',
	'Семинар по вопросам проектирования современного урока и его анализа',
	'Семинар на тему «Методика формирования деятельностных уроков истории и обществознания»'];

	var index = 0;


	for (var i = 0; i < imageCollection.length; i++) {
		$('.dot-content').append('<div class="dot"></div>');
		if (i == 0) {
			$('.dot').addClass('active')
		}
	}

	if ($('.slide-main-content').attr('style') == null) {
		$('.slide-main-content').css({
		'background-image':'url('+imageCollection[index]+')'
		});
		$('.slider-header').html('<h1>'+mainContent[index]+'</h1>');
		index++;
	}

	var dots = document.getElementsByClassName('dot');

	$('.dot').on('click',function(index){

		clearInterval(timer);
		$('.dot').removeClass('active');
		$(this).addClass('active');

		var clickItem = $('.dot').index(this);
		$('.slide-main-content').css({
		'background-image':'url('+imageCollection[clickItem]+')'
		});
		$('.slider-header').html('<h1>'+mainContent[clickItem]+'</h1>')
		
		
	})

	
	var timer = setInterval(function(){

		for(var i = index; i < dots.length; i++) {

			$('.dot').eq(index).addClass('active');
			$('.dot').eq(index-1).removeClass('active');
		}




		for(var a = 0; a < mainContent.length; a++) {

			$('.slider-header').html('<h1>'+mainContent[index]+'</h1>');
		}

		

		$('.slide-main-content').css({
		'background-image':'url('+imageCollection[index]+')'
		});
		

		index ++;

		if (index >= imageCollection.length) {
			index = 0;
		}

	},4000)

	
});
