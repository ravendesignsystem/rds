'use strict';

let navBody = document.querySelector('.body__nav'),
	navExpand = document.querySelector('.menu__toggle'),
	checks = document.querySelectorAll('.b-menu input');

if (navExpand) {
	function expandMenu() {
		// spin the plus icon into an x when expanding menu
		navExpand.classList.toggle('menu__toggle--opened');

		// Expand the full menu
		if (navExpand.innerHTML === 'Expand all') {
			navExpand.innerHTML = 'Collapse all';
			for (let i = 0; i < checks.length; i++) {
				checks[i].checked = true;
			}
		} else {
			// Collapse the full menu
			navExpand.innerHTML = 'Expand all';
			for (let i = 0; i < checks.length; i++) {
				checks[i].checked = false;
			}
			navBody.classList.add('u-sticky');
		}
	}

	if (document.querySelector('.menu__toggle')) {
		navExpand.addEventListener('click', expandMenu);
	}
}

if (navBody) {
	// if the menu is taller then the viewport remove the position sticky so it can scroll
	window.addEventListener('scroll', function() {
		let elementTarget = document.querySelector('header');
		// check the height of nav once the header scrolls by
		if (window.scrollY > elementTarget.offsetTop + elementTarget.offsetHeight) {
			let bounding = navBody.getBoundingClientRect();
			if (
				bounding.bottom >
				(window.innerHeight || document.documentElement.clientHeight)
			) {
				navBody.classList.remove('u-sticky');
			}
		}
	});
}
