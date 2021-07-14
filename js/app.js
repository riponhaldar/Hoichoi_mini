const toggle = document.getElementById('toggle');
const links = document.getElementById('nav_links');

toggle.addEventListener('click', () => {
	links.classList.toggle('show');
});
