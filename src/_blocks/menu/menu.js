'use strict';

let navExpand = document.querySelector('.menu__toggle'),
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
		}
	}

	if (document.querySelector('.menu__toggle')) {
		navExpand.addEventListener('click', expandMenu);
	}
}
