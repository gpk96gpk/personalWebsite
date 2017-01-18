$('#blue').click(function() {
	$('#blue').hide(900)
});
$('#red').click(function() {
	$('#red').hide(1050)
});
$('#yellow').click(function() {
	$('#yellow').hide(1200)
});


$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
      $('#blue').show(1200)
	}if ($(document).scrollTop() > 250) {
	  $('#red').show(900);
	}if ($(document).scrollTop() > 450) {
	  $('#yellow').show(1200);     
	}
});

var currentImage;
$('#img').click(function(e){
	currentImage = e.target;

	$(e.target)
		.css('position','fixed')
		.css('z-index','2')
		.animate({
			width:"200%",
			height:"200%",
			margin:0,
			top:0,
			left:0,
		}, 900, function() {
			$(".close").show(900);
		});
});


$('.close').click(function() {
$(".close").hide();
$(currentImage)

  .css('position','relative')
   .css('z-index','1')
   .animate({
   width:"250px",
   height:"250px",
   margin:"10px"
   }, 900, function() {
			
   

  
  });
});



