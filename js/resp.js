$(document).ready(main);
// barra de navegacion
var contador = 1;
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('#reg').click(function(){
		$(this).children('#reg-content').slideToggle();
	});

	$('a[href*=#]').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 $('html,body').animate({scrollTop: targetOffset}, 1000);
                 return false;
            }
       }
   });
	 $(".slides").slidesjs({
	 play: {
		 active: true,
			 // [boolean] Generate the play and stop buttons.
			 // You cannot use your own buttons. Sorry.
		 effect: "slide",
			 // [string] Can be either "slide" or "fade".
		 interval: 4000,
			 // [number] Time spent on each slide in milliseconds.
		 auto: true,
			 // [boolean] Start playing the slideshow on load.
		 swap: true,
			 // [boolean] show/hide stop and play buttons
		 pauseOnHover: false,
			 // [boolean] pause a playing slideshow on hover
		 restartDelay: 2500
			 // [number] restart delay on inactive slideshow
	 }
 });
}
