
document.addEventListener("DOMContentLoaded", init);

function init(){
	
	

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(5000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
},  7000);
 
};