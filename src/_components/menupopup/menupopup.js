let popups = document.querySelectorAll('button.c-menupopup');
let hoverLinks = document.querySelectorAll('.c-menupopup a');
// let hoverLinks = document.querySelector('.c-menupopup > a');

for (let i = 0; i < popups.length; i++) {
	popups[i].addEventListener('click', showMenu);
	popups[i].addEventListener('mouseout', hideMenu);
}

for (let i = 0; i < hoverLinks.length; i++) {
	hoverLinks[i].addEventListener('touchstart', moo);
}

window.addEventListener('load', function () {
	function is_touch_device() {
		return (('ontouchstart' in window)
			|| (navigator.MaxTouchPoints > 0)
			|| (navigator.msMaxTouchPoints > 0));
	}


if ( is_touch_device()) {
	// document.getElementById('touchOnly').style.display='none';
	alert ('ttttttouch me');
}

// if (popups) {
// hoverLinks.addEventListener('touchstart', moo);
// }
//
function moo() {
	alert (this);
// this.link.href = '';
	// document.this.querySelector('a').link.href = '';
	// this.nextElementSibling.classList.add('is-visible');
	// this.nextElementSibling.classList.add('is-visible');
}

function showMenu() {
	this.nextElementSibling.classList.add('is-visible');
}

// stop the menu from showing on hover after being clicked
function hideMenu() {
	if (popups.target.closest('button.c-menupopup')) {
		this.nextElementSibling.classList.remove('is-visible');
	}
}
