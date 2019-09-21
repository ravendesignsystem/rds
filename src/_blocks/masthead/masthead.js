import dialogPolyfill from 'dialog-polyfill';

(function() {
	'use strict';
	//mh = masthead
	let body = document.body,
		header = document.querySelector('header'),
		//masthead elements
		masthead = document.querySelector('.b-masthead'),
		// mh = masthead
		mhNav = document.querySelector('.masthead__nav'),
		mhSearch = document.querySelector('.masthead__search'),
		mhHamburger = document.querySelector('.masthead__hamburger'),
		mhHamburgerButton = document.querySelector('.c-hamburger'),
		mhLogin = document.querySelector('.masthead__login'),
		// dialogue/modal elements
		modal = document.querySelector('.l-overlay-modal'),
		modalMenu = document.querySelector('.modal__menu'),
		modalSearch = document.querySelector('.modal__search'),
		modalLogin = document.querySelector('.modal__login'),
		// for swapping b-menu from elsewhere into modal
		moveMenu = document.querySelector('.js-overlay-movemenu'),
		leftMenu = document.querySelector('.b-menu'),
		// scroll vars
		last_scroll = 0,
		lastX = window.innerWidth,
		masthead_y = header.scrollHeight,
		mhSubmenu = document.querySelector('button.c-menupopup + .menupopup__menu');

	// dialogue polyfill
	if (modal) {
		dialogPolyfill.registerDialog(modal);
	}

	// state vars
	// -----------
	// is the mh nav overflowing?
	let isNav2packed = null,
		// is the hamburger hidden?
		isHamburgerHidden = null;

	// get started here only if masthead contains .masthead__nav

	if (mhNav && masthead.classList.contains('b-masthead--responsivenav')) {
		// check if an element has x overflow
		const isOverflowing = function(element) {
			return element.scrollWidth > element.offsetWidth;
		};

		let dropNav = function() {
			// if the mh nav is overflowing and smaller then 640
			// this slides out the top nav to remind users they can scroll horizontally
			// This is only applied if the body tag has a class of 'homepage'.
			if (
				isOverflowing(mhNav) &&
				window.innerWidth < 640 &&
				body.classList.contains('homepage')
			) {
				mhNav.classList.add('js-masthead-slidenav');
			}

			// if the mh nav is overflowing and smaller then 960
			if (isOverflowing(mhNav) || window.innerWidth <= 960) {
				isNav2packed = true;
				body.classList.add('js-masthead-2packed');
				// setup vars to test if resizing bigger or smaller
				let xwidth = window.innerWidth;
				lastX = xwidth;
			} else {
				isNav2packed = false;
				let xwidth = window.innerWidth;
				// needed to reduce flickering on resize
				if (lastX < xwidth) {
					body.classList.remove('js-masthead-2packed');
				}
			}
		};

		// Setup a timer to ease resizing
		let timeout;
		window.addEventListener(
			'resize',
			function() {
				// If timer is null, reset it to 66ms.
				// Otherwise, wait until timer is cleared

				if (!timeout) {
					timeout = setTimeout(function() {
						// Reset timeout
						timeout = null;
						// Run our resize functions
						if (
							window.innerWidth >= 960 &&
							isNav2packed === true &&
							mhNav.scrollWidth > mhNav.clientWidth
						) {
							masthead.classList.add('js-masthead-2biggie');
						} else {
							dropNav();
							// deciding below is not worth it, for rare case someone resizes with menu open
							// commenting out for now
							// if (!modal.classList.contains('is-hidden')) {
							// 	// if the modal menu is opened and window is resize hide it
							// 	// so it doesnt get stuck open on large screens without hamburger
							// 	modal.classList.add('is-hidden');
							// 	mhHamburgerButton.classList.remove('is-active');
							// 	if (moveMenu) {
							// 		moveMenu.appendChild(leftMenu);
							// 	}
							// }
						}
					}, 66);
				}
			},
			false
		);
		window.addEventListener('load', function() {
			dropNav();
		});
	} // end msNavHor stacking shiz

	// need to improve nav popup submenus for touch devices
	// there's no i in team or hover on touch devices
	// are we dealing with a touch device?
	if ('ontouchstart' in document.documentElement) {
		// ok, so lets account for any hover popupmenu subnavs in masthead
		// start by finding masthead nav links with hovers
		let hoverLinks = document.querySelectorAll('.masthead__nav li.c-menupopup');
		for (let i = 0; i < hoverLinks.length; i++) {
			// lets listen to them, as they might have something to say
			hoverLinks[i].addEventListener(
				'touchend',
				function touchMenus(event) {
					[].forEach.call(hoverLinks, function() {
						// properly position the submenu uls
						hoverLinks[i]
							.getElementsByTagName('UL')[0]
							.setAttribute('style', 'position: absolute; top: 70px;');
					});
					// clone the parent link since its no longer clickable
					let cln = this.cloneNode(true);
					cln.classList.remove('c-menupopup');
					cln.classList.add('js-menupopup-clonetxt');
					cln.classList.add('menupopup__sep');
					this.getElementsByTagName('A')[0].nextElementSibling.prepend(cln);
					this.firstChild.href = '#';
					// kill it so we dont keep cloning like the evil Empire
					hoverLinks[i].removeEventListener('touchend', touchMenus);
				},
				false
			);
		}

		// Detect all clicks on the document
		document.addEventListener('touchend', function(event) {
			if (mhSubmenu) {
			// If the submenus are clicked
			if (
				event.target.closest('li.c-menupopup a') ||
				event.target.closest('button.c-menupopup')
			) {
				mhSubmenu.style.position = 'absolute';
				mhSubmenu.classList.remove('u-fixed');
				mhNav.style.paddingBottom = '100vh';
				if (
					window.innerWidth >= 960 &&
					!document.querySelector('.js-masthead-2packed')
				) {
					mhNav.style.paddingTop = '35px';
				}
			} else {
				// If user clicks outside the element, refocus and restyle
				mhNav.setAttribute('style', 'padding-bottom: 0; padding-top: 0');
				mhSubmenu.classList.remove('is-visible');
				masthead.focus();
			}
			} // end if mhSubmenus exist
		});
	} // end touch detection

	// Stick Masthead to the top on scroll up
	// --------------------------------------
	// Only fire sticky masthead, if class .js-masthead-scrollupstick is on masthead block
	// but first, is there a masthead ?
	if (masthead) {
		if (masthead.classList.contains('js-masthead-stick')) {
			var stickMasthead = function() {
				if (window.scrollY <= 15) {
					// user has not scrolled past masthead yet
					// Yell at them if they forgot a <header>
					if (header === null) {
						alert(
							'RDS requires you put your Header blocks inside a <header> tag, or things are going to break. Please fix.'
						);
					} else {
						masthead_y = -header.scrollHeight;
					}

					masthead.classList.remove(
						'js-masthead--stickyscroll',
						'b-masthead--shadow'
					);
					document.body.style.marginTop = '0px';
				} else {
					// has scrolled past the masthead
					masthead.classList.add('js-masthead--stickyscroll', 'b-masthead--shadow');
					masthead_y = masthead_y - (window.scrollY - last_scroll);
					masthead_y = Math.min(masthead_y, 0);
					masthead_y = Math.max(masthead_y, -masthead.scrollHeight);
					masthead.style.top = masthead_y + 'px';
					document.body.style.marginTop = '15px';
					if (
						masthead.style.top === '0px' &&
						window.scrollY > 300 &&
						window.innerWidth > 720
					) {
						document.body.classList.add('has-stickyscroll');
					} else {
						document.body.classList.remove('has-stickyscroll');
					}
				}
				// remove the drop shadow before a banner buts against it
				if (window.scrollY < 300) {
					masthead.classList.remove('b-masthead--shadow');
				}
				last_scroll = window.scrollY;
			};

			window.addEventListener('scroll', stickMasthead);
		} // end sticky scroll
	}

	// Masthead button/modal functions
	// oh man, a lot of state going on here
	// I'm sure this can be simplified, but hope so
	// ..for a future review
	// -----------------------------------------------

	// Don't even bother if there isn't a hamburger button
	if (mhHamburgerButton) {
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

		const showModal = function(btn) {
			modal.show();
			mhHamburger.classList.remove('u-hide-l');
			mhHamburgerButton.classList.add('is-active');
			window.removeEventListener('scroll', stickMasthead);
			preventScroll();
			if (isHamburgerHidden !== null) {
				mhHamburger.classList.remove(isHamburgerHidden);
			}

			if (btn === 'search') {
				mhSearch.classList.add('u-visually-hidden');
				modalSearch.classList.remove('u-visually-hidden');
				document.querySelector('.modal__search .searchform__input').focus();
				if (mhLogin) {
					modalLogin.classList.add('u-visually-hidden');
				}
			}

			if (btn === 'login') {
				document.querySelector('.login__field').focus();
				modalLogin.classList.remove('u-visually-hidden');
				modal.show();
				mhLogin.classList.add('u-visually-hidden');
			}
		};

		if (mhSearch) {
			mhSearch.addEventListener(
				'click',
				function() {
					showModal('search');
				},
				false
			);
		}

		if (mhHamburger.classList.contains('u-hide-l')) {
			isHamburgerHidden = 'u-hide-l';
		} else if (mhHamburger.classList.contains('is-hidden')) {
			isHamburgerHidden = 'is-hidden';
		}

		mhHamburgerButton.addEventListener(
			'mousedown',
			function() {
				mhHamburgerButton.classList.toggle('is-active');
				if (mhHamburgerButton.classList.contains('is-active')) {
					if (moveMenu) {
						modal.show();
						modalMenu.classList.remove('u-visually-hidden');
						modalMenu.appendChild(leftMenu);
					}
					preventScroll();
					window.removeEventListener('scroll', stickMasthead);
					if (mhLogin) {
						modal.close();
						mhLogin.classList.add('u-visually-hidden');
					}
				} else {
					preventScroll();
					window.addEventListener('scroll', stickMasthead);
					modal.close();
					if (moveMenu) {
						modalMenu.classList.add('u-visually-hidden');
						// modal.close();
						moveMenu.appendChild(leftMenu);
					}
					if (mhSearch) {
						modalSearch.classList.add('u-visually-hidden');
						mhSearch.classList.remove('u-visually-hidden');
					}
					if (mhLogin) {
						mhLogin.classList.remove('u-visually-hidden');
						modalLogin.classList.remove('u-visually-hidden');
					}
					if (isHamburgerHidden !== null) {
						mhHamburger.classList.add(isHamburgerHidden);
					}
				}
			},
			false
		);

		if (mhLogin) {
			mhLogin.addEventListener(
				'click',
				function() {
					showModal('login');
				},
				false
			);
		}
	}
})();
