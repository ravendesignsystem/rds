(function() {
	'use strict';

	let mastheadNav = document.querySelector('.masthead__nav'),
		butMenupopup = document.querySelector('button.c-menupopup');

	if (butMenupopup) {
		let elements = document.querySelectorAll('button.c-menupopup');
		for (let i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', showMenu);
			elements[i].addEventListener('mouseout', hideMenu);
		}

		function showMenu() {
			this.nextElementSibling.classList.add('is-visible');

			// only for the masthead block and only for touch devices
			if ('ontouchstart' in document.documentElement) {
				return;
			} else {
				// if this is a popup menu in the masthead nav
				if (mastheadNav.contains(this)) {
					this.nextElementSibling.classList.add('u-fixed');
				}
			}
		}

		// stop the menu from showing on hover after being clicked
		function hideMenu() {
			this.nextElementSibling.classList.remove('is-visible');
		}
	} // end are there popup buttons
})();
