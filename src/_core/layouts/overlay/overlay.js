(function() {
	'use strict';

	// modal elements
	const modal = document.querySelector('.l-overlay-modal'),
		modalMenu = document.querySelector('.modal__menu'),
		modalSearch = document.querySelector('.modal__search'),
		modalLogin = document.querySelector('.modal__login'),
		// masthead elements
		mastheadSearch = document.querySelector('.masthead__search'),
		mastheadHamburger = document.querySelector('.masthead__hamburger'),
		// masthead buttons
		hamburger = document.querySelector('.c-hamburger'),
		navMoreBtn = document.querySelector('.masthead__more'),
		navSearch = document.querySelector('.masthead__search-btn'),
		navLogin = document.querySelector('.masthead__login-btn'),
		// for swapping menu from elsewhere into modal
		navBody = document.querySelector('.has-b-menu'),
		navMenu = document.querySelector('.b-menu');

	// Prevent bg scrolling behind modal
	const preventScroll = function() {
		if (
			document.body.style.overflowY === '' ||
			document.body.style.overflowY === 'auto'
		) {
			(document.body.style.position = 'fixed'),
				(document.body.style.overflowY = 'scroll');
		} else {
			(document.body.style.position = 'static'),
				(document.body.style.overflowY = 'auto');
		}
	};

	const mastheadModal = function(btn) {
		if (modal) {
			const modalClosed = modal.classList.contains('is-hidden'),
				menuShow = mastheadHamburger.classList.contains(
					'masthead__hamburger--show'
				);

			// if menu is open and search is clicked
			if (modalClosed === false && btn === 'search') {
				modalSearch.classList.remove('is-hidden');
				preventScroll();
			} else {
				modal.classList.toggle('is-hidden');
				hamburger.classList.toggle('is-active');
				modal.classList.remove('u-bg-grey');
				modalMenu.classList.add('is-hidden');
			}

			// target all lis items except hamburger
			const x = document.querySelectorAll(
				'.b-masthead li:not(.masthead__hamburger)'
			);
			let i;

			if (btn === 'search' || btn === 'login') {
				if (btn === 'search') {
					modalSearch.classList.remove('is-hidden'),
						document.querySelector('.modal__search .searchform__input').focus();
					if (navLogin) {
						modalLogin.classList.add('is-hidden');
					}
				} else {
					modalLogin.classList.remove('is-hidden');
					modal.classList.add('u-bg-grey'),
						document.querySelector('.login__field').focus();
				}

				if (modalClosed === true) {
					// toggle all li items except hamburger
					for (i = 0; i < x.length; i++) {
						x[i].classList.toggle('is-hidden');
					}
				}
				if (mastheadSearch) {
					mastheadSearch.classList.add('is-hidden');
				}
				if (menuShow === false) {
					mastheadHamburger.classList.toggle('u-display-inline-b');
				}
			} else {
				// toggle all li items except hamburger
				for (i = 0; i < x.length; i++) {
					x[i].classList.toggle('is-hidden');
				}
				if (mastheadSearch) {
					mastheadSearch.classList.remove('is-hidden');
					modalSearch.classList.add('is-hidden');
				}
				modalMenu.classList.toggle('is-hidden');

				if (btn === 'more') {
					mastheadHamburger.classList.add('u-display-inline-b'),
						mastheadSearch.classList.add('is-hidden'),
						modalMenu.classList.remove('is-hidden');
				} else if (
					menuShow === false &&
					window.matchMedia('(min-width: 768px)').matches
				) {
					mastheadHamburger.classList.remove('u-display-inline-b');
					if (navLogin) {
						modalLogin.classList.add('is-hidden');
					}
				}
			}
		}
		preventScroll();
	};

	// Move menu relative to modal being open or closed
	if (navBody) {
		function menuMove() {
			if (navMenu) {
				if (hamburger.classList.contains('is-active')) {
					navBody.appendChild(navMenu);
				} else {
					modalMenu.appendChild(navMenu);
				}
			}
		}

		// mouse-down needed to trigger move before menuToggle on same button
		hamburger.addEventListener('mousedown', menuMove);

		if (navMoreBtn) {
			navMoreBtn.addEventListener('mousedown', menuMove);
		}
	}

	// mouse-up needed to trigger toggle after menuMove function in CMS theme
	if (hamburger) {
		hamburger.addEventListener(
			'mouseup',
			function() {
				mastheadModal('hamburger');
			},
			false
		);
	}

	if (navMoreBtn) {
		navMoreBtn.addEventListener(
			'mouseup',
			function() {
				mastheadModal('more');
			},
			false
		);
	}

	if (navSearch) {
		navSearch.addEventListener(
			'click',
			function() {
				mastheadModal('search');
			},
			false
		);
	}

	if (navLogin) {
		navLogin.addEventListener(
			'click',
			function() {
				mastheadModal('login');
			},
			false
		);
	}

	// Keep ability to close modal if window is resized
	const onResize = function() {
		if (hamburger.classList.contains('is-active')) {
			mastheadHamburger.classList.add('u-display-inline-b'),
				mastheadSearch.classList.add('is-hidden');
		}
	};

	// Throttle events to only run at 15fps, for performance
	let eventTimeout;
	const eventThrottler = function() {
		// ignore resize events as long as an actualResizeHandler execution is in the queue
		if (!eventTimeout) {
			eventTimeout = setTimeout(function() {
				eventTimeout = null;
				onResize();
			}, 66);
		}
	};

	window.addEventListener('resize', eventThrottler, false);
})();