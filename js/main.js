$(window).load(function() { 
  $('.feedback__collection').bxSlider({
  	pager: false,
  	auto: true,
  	nextText: '<i class="fa fa-angle-right"></i>',
  	prevText: '<i class="fa fa-angle-left"></i>' 
	});

	$('body').addClass('loaded');


var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();
var monthTarget = document.getElementById('month');

if (typeof(monthTarget) != 'undefined' && monthTarget != null)
	{
	monthTarget.innerHTML = monthNames[d.getMonth()]
	//console.log(monthTarget)
	}
});