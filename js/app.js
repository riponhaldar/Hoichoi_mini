const toggle = document.getElementById('toggle');
const links = document.getElementById('nav_links');

toggle.addEventListener('click', () => {
	links.classList.toggle('show');
});

$('.single-item').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	nextArrow: $('.next'),
	prevArrow: $('.prev'),
	// prevArrow:
	// 	'<button class="previous-button is-control">' +
	// 	'  <span class="fas fa-angle-left" aria-hidden="true"></span>' +
	// 	'  <span class="sr-only">Previous slide</span>' +
	// 	'</button>',
	// nextArrow:
	// 	'<button class="next-button is-control">' +
	// 	'  <span class="fas fa-angle-right" aria-hidden="true"></span>' +
	// 	'  <span class="sr-only">Next slide</span>' +
	// 	'</button>',
});

// end slide

$('.addedslide').slick({
	// infinite: false,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 2,
	nextArrow: $('.next1'),
	prevArrow: $('.prev1'),

	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
