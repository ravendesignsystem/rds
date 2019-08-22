(function() {

	'use strict';

	let header = document.querySelector('header'),
		//masthead elements
		masthead = document.querySelector('.b-masthead'),
		// mh = masthead
		mhNav = document.querySelector(".masthead__nav"),
		mhSearch = document.querySelector('.masthead__search'),
		mhHamburger = document.querySelector('.masthead__hamburger'),
		mhHamburgerButton = document.querySelector('.c-hamburger'),
		mhLogin = document.querySelector('.masthead__login'),
		msNavHor = document.querySelector('.b-masthead--responsivenav'),
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
		masthead_y = header.scrollHeight;

// state vars
// -----------
	// is the mh nav overflowing?
	let nav2packed = null,
		// is the hamburger hidden?
		hideBurger = null;


	// only if masthead contains .b-masthead--responsivenav,
	if (msNavHor) {
		// check if an element has overflow
		const isOverflowing = function(element) {
			return element.scrollWidth > element.offsetWidth;
		}

		let dropNav = function() {
			// if the mh nav is overflowing
			if (isOverflowing(mhNav)) {
				nav2packed = true;
				masthead.classList.add('js-masthead-2packed');
				// setup vars to test if resizing bigger or smalelr
				let xwidth = window.innerWidth;
				lastX = xwidth;
			} else {
				nav2packed = false
				let xwidth = window.innerWidth;
				// needed to reduce flickering on resize
				if (lastX < xwidth) {
					masthead.classList.remove('js-masthead-2packed');
				}
			}
			if (window.innerWidth <= 960 || nav2packed === true) {
				document.body.classList.add('js-mh-2packed');
			} else {
				document.body.classList.remove('js-mh-2packed');
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
					if (window.innerWidth >= 960 && nav2packed === true && mhNav.scrollWidth > mhNav.clientWidth) {
						masthead.classList.add("js-masthead-2biggie");
					} else {
						dropNav();
					}
				}, 66);
			}
		}, false);
		window.addEventListener('load', function() {
			dropNav();
		});

	} // end msNavHor stacking shiz

	// Stick Masthead to the top on scroll up
	// --------------------------------------
	// Only fire sticky masthead, if class .js-masthead-scrollupstick is on masthead block

	if (masthead.classList.contains('js-masthead-stick')) {

		var stickMasthead = function() {
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
		}

		window.addEventListener('scroll', stickMasthead);
	} // end sticky scroll

	// Masthead button/modal functions
	// oh man, a lot of state going on here
	// not sure if this can be simplified, but hope so
	// for a future review
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
			modal.classList.remove('is-hidden');
			mhHamburger.classList.remove('u-hide-l');
			mhHamburgerButton.classList.add('is-active');
			window.removeEventListener('scroll', stickMasthead)
			preventScroll();
			if (hideBurger !== null) {
				mhHamburger.classList.remove(hideBurger);
			}

			if (btn === 'search') {
				mhSearch.classList.add('is-hidden');
				modalSearch.classList.remove('is-hidden');
				document.querySelector('.searchform__input').focus();
				if (mhLogin) {
					modalLogin.classList.add('is-hidden');
				}
			}

			if (btn === 'login') {
				document.querySelector('.login__field').focus();
				modalLogin.classList.remove('is-hidden');
				modal.classList.remove('is-hidden');
				mhLogin.classList.add('is-hidden');
			}
		}

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
			hideBurger = 'u-hide-l';
		} else if (mhHamburger.classList.contains('is-hidden')) {
			hideBurger = 'is-hidden';
		}

		mhHamburgerButton.addEventListener(
			'mousedown',
			function() {
				mhHamburgerButton.classList.toggle('is-active');
				if (mhHamburgerButton.classList.contains('is-active')) {
					if (moveMenu) {
						modal.classList.remove('is-hidden');
						modalMenu.classList.remove('is-hidden');
						modalMenu.appendChild(leftMenu);
					} else {
						alert('If you are going to have the hamburger button displayed, you need to add \'js-overlay-movemenu to your b-menu block. If you need the hamburger but don\'t have a vertical b-menu, add \'.is-hidden\' to the hamburger.');
					}
					preventScroll();
					window.removeEventListener('scroll', stickMasthead);
					if (mhLogin) {
						modalLogin.classList.add('is-hidden');
						mhLogin.classList.add('is-hidden');
					}
				} else {
					preventScroll();
					window.addEventListener('scroll', stickMasthead);
					modal.classList.add('is-hidden');
					if (moveMenu) {
						modalMenu.classList.add('is-hidden');
						moveMenu.appendChild(leftMenu);
					}
					if (mhSearch) {
						modalSearch.classList.add('is-hidden');
						mhSearch.classList.remove('is-hidden');
					}
					if (mhLogin) {
						mhLogin.classList.remove('is-hidden');
						modalLogin.classList.remove('is-hidden');
					}
					if (hideBurger !== null) {
						mhHamburger.classList.add(hideBurger);
					}
				}
				;
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

// are we dealing with a touch device?
	if ("ontouchstart" in document.documentElement) {
		// if so lets account for any hover popupmenu subnavs..okay?
		// start by finding masthead nav links with hovers
		let hoverLinks = document.querySelectorAll('.masthead__nav li.c-menupopup');
		for (let i = 0; i < hoverLinks.length; i++) {
			// lets listen to them, as they might have something to say
			hoverLinks[i].addEventListener('touchend', function touchMenus(event) {
					[].forEach.call(hoverLinks, function() {
						// properly position the uls
						hoverLinks[i].getElementsByTagName("UL")[0].setAttribute(
							"style", "position: absolute; top: 70px;");
					});
					// clone the parent link since its no longer clickable
					let cln = this.cloneNode(true);
					cln.classList.remove('c-menupopup');
					cln.classList.add('js-menupopup-clonetxt');
					this.getElementsByTagName("A")[0].nextElementSibling.prepend(cln);
					this.firstChild.href = "#";
					// kill it so we dont keep cloning like the evil Empire
						hoverLinks[i].removeEventListener('touchend', touchMenus);
				},
				false
			);
		}

		// Detect all clicks on the document
		document.addEventListener("touchend", function(event) {
			// If the submenus are clicked
			if (event.target.closest("li.c-menupopup a") || event.target.closest("button.c-menupopup")) 	{
				mhNav.style.paddingBottom = '100vh';
				if (window.innerWidth >= 960 && !document.querySelector('.js-masthead-2packed')) {
					mhNav.style.paddingTop = '35px';
				}
			} else {
				// If user clicks outside the element, refocus and restyle
				mhNav.setAttribute("style", "padding-bottom: 0; padding-top: 0");
				masthead.focus();
			}
		});

	} // end touch detection


})();
