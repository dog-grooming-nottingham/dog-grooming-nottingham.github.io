$(window).load(function() { 
  $('.feedback__collection').bxSlider({
  	pager: false,
	adaptiveHeight: true,
  	auto: true,
  	nextText: '<i class="fa fa-angle-right"></i>',
  	prevText: '<i class="fa fa-angle-left"></i>' 
	});

	$('body').addClass('loaded'); 


// Thank you page message
var isThanks = function(){
    return window.location.href.search("[?&]q=") != -1;
};

if ( isThanks() ) {  
	var el = document.querySelector('main-content');
	el.innerHTML = ''; 

	var p = document.createElement('p');
	p.innerHTML = "Form sent! We'll be in touch shortly...";
	p.classList.add("intro");
	el.appendChild(p);
}

var year = new Date();
year = year.getFullYear();
document.getElementById('js-year').innerHTML = year;

});