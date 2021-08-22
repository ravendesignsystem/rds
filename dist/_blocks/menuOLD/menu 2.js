'use strict';

// let navBody = document.querySelector('.body__nav'),
let navExpand = document.querySelector('.menu__toggle'),
	checks = document.querySelectorAll('.b-menu input');

if (navExpand) {
	function expandMenu() {
		// spin the plus icon into an x when expanding menu
		navExpand.classList.toggle('menu__toggle--opened');

		// Expand the full menu
		if (navExpand.innerHTML === '<i aria-hidden="true" role="img" title="Expand all"></i>Expand all') {
			navExpand.innerHTML = '<i aria-hidden="true" role="img" title="Collapse all"></i>Collapse all';
			for (let i = 0; i < checks.length; i++) {
				checks[i].checked = true;
			}
		} else {
			// Collapse the full menu
			navExpand.innerHTML = '<i aria-hidden="true" role="img" title="Expand all"></i>Expand all';
			for (let i = 0; i < checks.length; i++) {
				checks[i].checked = false;
			}
			// navBody.classList.add('u-sticky');
		}
	}

	if (document.querySelector('.menu__toggle')) {
		navExpand.addEventListener('click', expandMenu);
	}
}
