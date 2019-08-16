(function() {

'use strict';

let header = document.querySelector('header'),
	//masthead elements
		masthead = document.querySelector('.b-masthead'),
		mastheadNav = document.querySelector(".masthead__nav"),
		mastheadSearch = document.querySelector('.masthead__search'),
		navSearch = document.querySelector('.masthead__searchbtn'),
		mastheadHamburger = document.querySelector('.masthead__hamburger'),
		hamburger = document.querySelector('.c-hamburger'),
	 hamburgerShow = false,
		navLogin = document.querySelector('.masthead__login-btn'),
	 navHor = document.querySelector('.b-masthead--responsivenav'),
	// scroll vars
		last_scroll = 0,
		lastX = window.innerWidth,
		masthead_y = header.scrollHeight,
	// dialogue - modal elements
		modal = document.querySelector('.l-overlay-modal'),
		modalMenu = document.querySelector('.modal__menu'),
		modalSearch = document.querySelector('.modal__search'),
		modalLogin = document.querySelector('.modal__login'),
	 modalOpen = false,
	// for swapping b-menu from elsewhere into modal
		moveMenu = document.querySelector('.js-overlay-movemenu'),
		navMenu = document.querySelector('.b-menu');

if (mastheadHamburger.classList.contains('u-hide-l')) {
	 var hideBurger = true;
}

// only run if there is a hamburger menu
	if (hamburger) {

	// Prevent scrolling other then menu when dialogue modal open
	// ----------------------------------------------------------
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

		if (window.innerWidth <= 960 && masthead.classList.contains('b-masthead--responsivenav')) {
			document.querySelector('.l-overlay-modal').classList.add('l-overlay-modal--tall');
		}

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

			if (btn === 'search' || btn === 'login') {
				if (btn === 'search') {
					if (hideBurger === true ) {
					mastheadHamburger.classList.remove('u-hide-l');
						hideBurger = "ushow";
					}
					hamburgerShow = true;
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
				if (mastheadSearch) {
					mastheadSearch.classList.add('is-hidden');
				}
			} else {
				// toggle all li items except hamburger
				if (mastheadSearch) {
					mastheadSearch.classList.remove('is-hidden');
					modalSearch.classList.add('is-hidden');
				}
				modalMenu.classList.toggle('is-hidden');

				if (
					menuShow === false &&
					window.matchMedia('(min-width: 768px)').matches
				) {
					if (navLogin) {
						modalLogin.classList.add('is-hidden');
					}
				}
			}
		}
		preventScroll();
	};

	// Move menu relative to modal being open or closed
	if (moveMenu) {
		function menuMove() {
			if (navMenu) {
				if (hamburger.classList.contains('is-active')) {
					moveMenu.appendChild(navMenu);
				} else {
					modalMenu.appendChild(navMenu);
				}
			}
		}

		// mouse-down needed to trigger move before menuToggle on same button
		hamburger.addEventListener('mousedown', menuMove);

	}

	// mouse-up needed to trigger toggle after menuMove function in CMS theme
	if (hamburger) {
		hamburger.addEventListener(
			'mouseup',
			function() {
    // if the hamburger is hidden u-show-s but search is used on l screens
				if (hideBurger = "ushow") {
					mastheadHamburger.classList.add('u-hide-l');
					hideBurger = true;
				}
				mastheadModal('hamburger');
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
			// mastheadHamburger.classList.add('u-display-inline-b'),
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
}


// Stick Masthead to the top on scroll up
// --------------------------------------
	// Only fire sticky masthead, if class .js-masthead-scrollupstick is on masthead block
if (masthead.classList.contains('js-masthead-stick')) {
	function stickMasthead() {
		if (window.scrollY <= 15) {
			// user has not scrolled past masthead yet
			masthead_y = -header.scrollHeight;
			masthead.classList.remove('js-masthead--stickyscroll', 'b-masthead--shadow');
			document.body.style.marginTop = '0px';
		} else {
			// has scrolled past the masthead
			masthead.classList.add('js-masthead--stickyscroll', 'b-masthead--shadow');
			masthead_y = masthead_y - (window.scrollY - last_scroll);
			masthead_y = Math.min(masthead_y, 0);
			masthead_y = Math.max(masthead_y, -masthead.scrollHeight);
			masthead.style.top = masthead_y + 'px';
			document.body.style.marginTop = '15px';
		}
		// remove the drop shadow before a banner buts against it
		if (window.scrollY < 300) {
			masthead.classList.remove('b-masthead--shadow');
		}
		last_scroll = window.scrollY;
		if (
			window.scrollY == 0 &&
			masthead.classList.contains('js-modalmenu--is-active')
		) {
			masthead.className = 'b-masthead js-modalmenu--is-active';
			masthead.style.top = '0';
		}
	}

// Always apply on small screens.
if (window.innerWidth <= 960) {
	masthead.classList.add('js-masthead-stick');
}

	window.addEventListener('scroll', stickMasthead);

// stop the sticky scroll if the menu modal is open - need to check on mousedown
	if (hamburger) {
		hamburger.addEventListener(
			'mousedown',
			function() {
				if (hamburger.classList.contains('is-active')) {
					window.addEventListener('scroll', stickMasthead)
				} else {
					window.removeEventListener('scroll', stickMasthead)
				};
			},
			false
		);
	}
} // end sticky masthead shiznit

// Check to determine if an overflow is happening
// on masthead nav and drop it down
// --------------------------------
	if (navHor) {

		function isOverflowing(element) {
			return element.scrollWidth > element.offsetWidth;
		}

		function moveNav(element) {
			if (isOverflowing(mastheadNav)) {
				masthead.classList.add('js-masthead-2packed');
				let xwidth = window.innerWidth;
				lastX = xwidth;
			} else {
				let xwidth = window.innerWidth;
				// needed to reduce flickering on resize
				if (lastX < xwidth) {
					masthead.classList.remove('js-masthead-2packed');
					masthead.classList.remove('b-masthead--responsivenav');
				}
			}
		}

// Setup a timer to ease resizing
		let timeout;
		window.addEventListener('resize', function() {
			// If timer is null, reset it to 66ms.
			// Otherwise, wait until timer is cleared
			if (!timeout) {
				timeout = setTimeout(function() {
					// Reset timeout
					timeout = null;
					// Run our resize functions
					if (window.innerWidth >= 960 && masthead.classList.contains('js-masthead-2packed') && mastheadNav.scrollWidth > mastheadNav.clientWidth) {
						masthead.classList.add("js-masthead-2biggie");
					}	else {
						moveNav(mastheadNav);
					}

				}, 66);
			}
		}, false);

		if (window.innerWidth >= 960) {
			masthead.classList.remove('b-masthead--responsivenav');
		} // end screen size check to fire
		window.addEventListener("load", moveNav);
	}
})();
