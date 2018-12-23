$(document).ready(function(){
	var imageCollection = ['uploads/slider/11.jpg','uploads/slider/22.jpg',
	'uploads/slider/33.jpg','uploads/slider/44.jpg','uploads/slider/55.jpg',
	'uploads/slider/66.jpg','uploads/slider/77.jpg'];

	var current = 1;
	var index = 0;
	setInterval(function(){
	 var image = $('slide-main-content');
	 $('.slide-main-content').css('background-image',
			'url('+imageCollection[index])+')'
	 index++;
	if(index>=imageCollection.length){
	    index = 0;
	}
	},4000);
	

});