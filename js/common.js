$(function() {

	$('document').ready(function () {
      var Closed = false;

      $('.hamburger').click(function () {
        if (Closed == true) {
          $(this).removeClass('open');
          $(this).addClass('closed');
          Closed = false;
        } else {               
          $(this).removeClass('closed');
          $(this).addClass('open');
          Closed = true;
        }
      });
});


	// $('.btn-link').click(function(){
	// 	// $(this).find('.accordion-marker').toggleClass('accordion-show');
	// 	// $(this).find('.list-title').toggleClass('list-title-active');
	// });
});
