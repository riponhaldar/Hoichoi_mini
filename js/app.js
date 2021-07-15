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
