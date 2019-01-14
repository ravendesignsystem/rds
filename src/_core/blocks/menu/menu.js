'use strict';

let navExpand = document.querySelector('.menu__expand-text--not-selected'),
	expandText = document.querySelector('.menu__expand-text'),
	checks = document.querySelectorAll('.menu__checkbox');

if (navExpand) {
	function expandMenu() {
		'use strict';

		// spin the plus icon into an x when expanding menu
		navExpand.classList.toggle('menu__expand-text--is-selected');
		// Expand the full menu
		if (expandText.innerHTML === 'Expand all') {
			expandText.innerHTML = 'Collapse all';
			for (let i = 0; i < checks.length; i++) {
				checks[i].checked = true;
			}
		} else {
			// Collapse the full menu
			expandText.innerHTML = 'Expand all';
			for (let i = 0; i < checks.length; i++) {
				checks[i].checked = false;
			}
		}
	}

	if (document.querySelector('.has-b-nav-menu')) {
		navExpand.addEventListener('click', expandMenu);
	}
}
