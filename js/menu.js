$(document).ready(function(){

	$(function() {
		$('.dropdown').hover(function(){
			$(this).children('.dropdown-menu').stop(false,true).fadeIn(300)
		},function(){
			$(this).children('.dropdown-menu').stop(false,true).fadeOut(300)
		})
	})

})