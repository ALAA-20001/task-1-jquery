let interval;

$("#cycler> img:gt(0)").hide();

interval = setInterval(function() { 
	$('#cycler > img:first')
	  .fadeOut(1000)
	  .next()
	  .fadeIn(1000)
	  .end()
	  .appendTo('#cycler');
  },  2000);
  
$('#stopButton').on('click', function(){
	clearInterval(interval);
  })