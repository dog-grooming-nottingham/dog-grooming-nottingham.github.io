$(window).load(function() { 
  $('.feedback__collection').bxSlider({
  	pager: false,
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
	var el = document.getElementsByClassName('main-content')[0];
	el.innerHTML = ''; 

	var p = document.createElement('p');
	p.innerHTML = "Form sent! We'll be in touch shortly...";
	p.classList.add("intro");
	el.appendChild(p);
} 

// Show bookings available for current month

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();
var monthTarget = document.getElementById('month');

if (typeof(monthTarget) != 'undefined' && monthTarget != null) 	{ 
			monthTarget.innerHTML = monthNames[d.getMonth()]
	}
});