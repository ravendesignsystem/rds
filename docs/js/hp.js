/******/ (function(modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = {}; // The require function
	/******/
	/******/ /******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports;
			/******/
		} // Create a new module (and put it into the cache)
		/******/ /******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {},
			/******/
		}); // Execute the module function
		/******/
		/******/ /******/ modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		); // Flag the module as loaded
		/******/
		/******/ /******/ module.l = true; // Return the exports of the module
		/******/
		/******/ /******/ return module.exports;
		/******/
	} // expose the modules object (__webpack_modules__)
	/******/
	/******/
	/******/ /******/ __webpack_require__.m = modules; // expose the module cache
	/******/
	/******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
	/******/
	/******/ /******/ __webpack_require__.d = function(exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter,
			});
			/******/
		}
		/******/
	}; // define __esModule on exports
	/******/
	/******/ /******/ __webpack_require__.r = function(exports) {
		/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			/******/ Object.defineProperty(exports, Symbol.toStringTag, {
				value: 'Module',
			});
			/******/
		}
		/******/ Object.defineProperty(exports, '__esModule', { value: true });
		/******/
	}; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
	/******/
	/******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
		value,
		mode
	) {
		/******/ if (mode & 1) value = __webpack_require__(value);
		/******/ if (mode & 8) return value;
		/******/ if (
			mode & 4 &&
			typeof value === 'object' &&
			value &&
			value.__esModule
		)
			return value;
		/******/ var ns = Object.create(null);
		/******/ __webpack_require__.r(ns);
		/******/ Object.defineProperty(ns, 'default', {
			enumerable: true,
			value: value,
		});
		/******/ if (mode & 2 && typeof value != 'string')
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function(key) {
						return value[key];
					}.bind(null, key)
				);
		/******/ return ns;
		/******/
	}; // getDefaultExport function for compatibility with non-harmony modules
	/******/
	/******/ /******/ __webpack_require__.n = function(module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module['default'];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/ __webpack_require__.d(getter, 'a', getter);
		/******/ return getter;
		/******/
	}; // Object.prototype.hasOwnProperty.call
	/******/
	/******/ /******/ __webpack_require__.o = function(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	}; // __webpack_public_path__
	/******/
	/******/ /******/ __webpack_require__.p = '/'; // Load entry module and return exports
	/******/
	/******/
	/******/ /******/ return __webpack_require__((__webpack_require__.s = 1));
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ './src/_blocks/masthead/masthead.js':
			/*!******************************************!*\
  !*** ./src/_blocks/masthead/masthead.js ***!
  \******************************************/
			/*! no static exports found */
			/***/ function(module, exports, __webpack_require__) {
				'use strict';
				// Sticky scroll in masthead block js
				// Show and pin the masthead when a user scrolls back up
				// and hide it when they scroll down again.

				var header = document.querySelector('header'),
					masthead = document.querySelector('.b-masthead'),
					last_scroll = 0,
					masthead_y = -header.scrollHeight; // Always apply on small screens.

				if (window.matchMedia('(max-width: 768px)').matches) {
					masthead.classList.add('js-sticky-scroll');
				}

				if (masthead.classList.contains('js-sticky-scroll')) {
					window.addEventListener('scroll', function() {
						if (window.scrollY < 5) {
							// has not scrolled past header yet
							masthead_y = -header.scrollHeight;
							masthead.classList.remove(
								'b-masthead--sticky-scroll',
								'b-masthead--shadow'
							);
							document.body.style.marginTop = '0';
						} else {
							// has scrolled past the header
							masthead.classList.add(
								'b-masthead--sticky-scroll',
								'b-masthead--shadow'
							);
							masthead_y = masthead_y - (window.scrollY - last_scroll);
							masthead_y = Math.min(masthead_y, 0);
							masthead_y = Math.max(masthead_y, -masthead.scrollHeight);
							masthead.style.top = masthead_y + 'px';
							document.body.style.marginTop = '75px';
						}

						if (window.scrollY < 350) {
							// remove the dropshadow before a banner buts against it
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
					});
				} // TODO review the code below
				// let needTouch = document.getElementsByClassName('c-menupopup');
				// if (needTouch.length > 0) {
				// 	const touchEventsExample = () => {
				// 		const el = document.getElementsByTagName('.c-menupopup');
				// 		el.addEventListener('touchstart', handleStart, false);
				// 		el.addEventListener('touchend', handleEnd, false);
				// 		el.addEventListener('touchcancel', handleCancel, false);
				// 		el.addEventListener('touchmove', handleMove, false);
				// 	};
				// }

				/***/
			},

		/***/ './src/_blocks/menu/menu.js':
			/*!**********************************!*\
  !*** ./src/_blocks/menu/menu.js ***!
  \**********************************/
			/*! no static exports found */
			/***/ function(module, exports, __webpack_require__) {
				'use strict';

				var navBody = document.querySelector('.body__nav'),
					navExpand = document.querySelector('.menu__toggle'),
					checks = document.querySelectorAll('.b-menu input'),
					daLinks = document.querySelectorAll('.b-menu a');

				if (navExpand) {
					var expandMenu = function expandMenu() {
						// spin the plus icon into an x when expanding menu
						navExpand.classList.toggle('menu__toggle--opened'); // Expand the full menu

						if (navExpand.innerHTML === 'Expand all') {
							navExpand.innerHTML = 'Collapse all';

							for (var i = 0; i < checks.length; i++) {
								checks[i].checked = true;
							}
						} else {
							// Collapse the full menu
							navExpand.innerHTML = 'Expand all';

							for (var _i = 0; _i < checks.length; _i++) {
								checks[_i].checked = false;
							}

							navBody.classList.add('u-sticky');
						}
					};

					if (document.querySelector('.menu__toggle')) {
						navExpand.addEventListener('click', expandMenu);
					}
				}

				if (navBody) {
					// if the menu is taller then the viewport remove the position sticky so it can scroll
					window.addEventListener('scroll', function() {
						var elementTarget = document.querySelector('header'); // check the height of nav once the header scrolls by

						if (
							window.scrollY >
							elementTarget.offsetTop + elementTarget.offsetHeight
						) {
							var bounding = navBody.getBoundingClientRect();

							if (
								bounding.bottom >
								(window.innerHeight || document.documentElement.clientHeight)
							) {
								navBody.classList.remove('u-sticky');
							}
						}
					});
				}

				document.addEventListener(
					'click',
					function(event) {
						// If the clicked element doesn't have the right selector, bail
						if (!event.target.matches('.menu__link')) return; // Don't follow the link

						event.preventDefault(); // Log the clicked element in the console

						console.log(event.target);
					},
					false
				);

				/***/
			},

		/***/ './src/_components/accordion/accordion.js':
			/*!************************************************!*\
  !*** ./src/_components/accordion/accordion.js ***!
  \************************************************/
			/*! no static exports found */
			/***/ function(module, exports, __webpack_require__) {
				'use strict';
				// Switch aria items for accordions on click for accessilibity

				var accordionLabelIndex = 0,
					accordionTriggerClass = document.getElementsByClassName(
						'accordion__toggle'
					),
					accordionToggleAria = function accordionToggleAria() {
						var _this = this,
							expandedState = _this.getAttribute('aria-expanded'),
							previousElement = this.previousElementSibling,
							singleInput = document.getElementsByClassName(
								'accordion__input--single'
							); // This switches all aria back to default on accordion items when being unchecked

						Array.prototype.forEach.call(singleInput, function(el) {
							el.nextElementSibling.setAttribute('aria-expanded', 'false');
							el.nextElementSibling.nextElementSibling.setAttribute(
								'aria-hidden',
								'true'
							);
						});

						if (expandedState === 'true') {
							this.setAttribute('aria-expanded', 'false');
							this.nextElementSibling.setAttribute('aria-hidden', 'true');
						} else {
							this.setAttribute('aria-expanded', 'true');
							this.nextElementSibling.setAttribute('aria-hidden', 'false');
						}
					}; // Assignment of click event to switch aria-hidden attribute

				for (
					accordionLabelIndex;
					accordionLabelIndex < accordionTriggerClass.length;
					accordionLabelIndex++
				) {
					accordionTriggerClass[accordionLabelIndex].addEventListener(
						'click',
						accordionToggleAria,
						false
					);
				} // Switch check / unchecked on accordion items with a modifier

				var accordionInputIndex = 0,
					accordionInputClass = document.getElementsByClassName('accordion__input'),
					accordionInputUncheck = function accordionInputUncheck() {
						var _this = this,
							instate = _this.checked,
							checkbox = document.getElementsByClassName('accordion__input--single');

						for (var i = 0; i < checkbox.length; i++) {
							checkbox[i].checked = false;
						}

						if (instate) {
							_this.checked = true;
						}
					}; // Assignment of click event to switch aria-hidden attribute

				for (
					accordionInputIndex;
					accordionInputIndex < accordionInputClass.length;
					accordionInputIndex++
				) {
					accordionInputClass[accordionInputIndex].addEventListener(
						'change',
						accordionInputUncheck,
						false
					);
				}

				/***/
			},

		/***/ './src/_components/menupopup/menupopup.js':
			/*!************************************************!*\
  !*** ./src/_components/menupopup/menupopup.js ***!
  \************************************************/
			/*! no static exports found */
			/***/ function(module, exports) {
				var subutton = document.querySelectorAll('button.c-menupopup');
				subutton.forEach(function(el) {
					el.addEventListener('click', function(e) {
						//const content = el.innerHTML;
						//console.log(content);
						el.nextElementSibling.classList.add('is-visible');
					});
					el.addEventListener('mouseout', function(event) {
						if (event.target.closest('button.c-menupopup')) {
							el.nextElementSibling.classList.remove('is-visible');
						}
					});
				});

				/***/
			},

		/***/ './src/_themes/core/js/core.js':
			/*!*************************************!*\
  !*** ./src/_themes/core/js/core.js ***!
  \*************************************/
			/*! no exports provided */
			/***/ function(module, __webpack_exports__, __webpack_require__) {
				'use strict';
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _layouts_overlay_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../layouts/overlay/overlay */ './src/_themes/core/layouts/overlay/overlay.js'
				);
				/* harmony import */ var _layouts_overlay_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					_layouts_overlay_overlay__WEBPACK_IMPORTED_MODULE_0__
				);
				/* harmony import */ var _blocks_masthead_masthead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ../../../_blocks/masthead/masthead */ './src/_blocks/masthead/masthead.js'
				);
				/* harmony import */ var _blocks_masthead_masthead__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					_blocks_masthead_masthead__WEBPACK_IMPORTED_MODULE_1__
				);
				/* harmony import */ var _blocks_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ../../../_blocks/menu/menu */ './src/_blocks/menu/menu.js'
				);
				/* harmony import */ var _blocks_menu_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
					_blocks_menu_menu__WEBPACK_IMPORTED_MODULE_2__
				);
				/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
					/*! ../../../_components/accordion/accordion */ './src/_components/accordion/accordion.js'
				);
				/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
					_components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__
				);
				/* harmony import */ var _components_menupopup_menupopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
					/*! ../../../_components/menupopup/menupopup */ './src/_components/menupopup/menupopup.js'
				);
				/* harmony import */ var _components_menupopup_menupopup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
					_components_menupopup_menupopup__WEBPACK_IMPORTED_MODULE_4__
				);
				// core layout scripts
				// block scripts

				// component scripts

				/***/
			},

		/***/ './src/_themes/core/layouts/overlay/overlay.js':
			/*!*****************************************************!*\
  !*** ./src/_themes/core/layouts/overlay/overlay.js ***!
  \*****************************************************/
			/*! no static exports found */
			/***/ function(module, exports) {
				(function() {
					'use strict'; // modal elements

					var modal = document.querySelector('.l-overlay-modal'),
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
						navMenu = document.querySelector('.b-menu'); // Prevent bg scrolling behind modal

					var preventScroll = function preventScroll() {
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

					var mastheadModal = function mastheadModal(btn) {
						var modalClosed = modal.classList.contains('is-hidden'),
							menuShow = mastheadHamburger.classList.contains(
								'masthead__hamburger--show'
							); // if menu is open and search is clicked

						if (modalClosed === false && btn === 'search') {
							modalSearch.classList.remove('is-hidden');
							preventScroll();
						} else {
							modal.classList.toggle('is-hidden');
							hamburger.classList.toggle('is-active');
							modal.classList.remove('u-bg-grey');
							modalMenu.classList.add('is-hidden');
						} // target all lis items except hamburger

						var x = document.querySelectorAll(
							'.b-masthead li:not(.masthead__hamburger)'
						);
						var i;

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

							mastheadSearch.classList.add('is-hidden');

							if (menuShow === false) {
								mastheadHamburger.classList.toggle('u-display-inline-b');
							}
						} else {
							// toggle all li items except hamburger
							for (i = 0; i < x.length; i++) {
								x[i].classList.toggle('is-hidden');
							}

							mastheadSearch.classList.remove('is-hidden'),
								modalSearch.classList.add('is-hidden');
							modalMenu.classList.toggle('is-hidden');

							if (btn === 'more') {
								mastheadHamburger.classList.add('u-display-inline-b'),
									mastheadSearch.classList.add('is-hidden'),
									modalMenu.classList.toggle('is-hidden');
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

						preventScroll();
					}; // Move menu relative to modal being open or closed

					if (navBody) {
						var menuMove = function menuMove() {
							if (navMenu) {
								if (hamburger.classList.contains('is-active')) {
									navBody.appendChild(navMenu);
								} else {
									modalMenu.appendChild(navMenu);
								}
							}
						}; // mouse-down needed to trigger move before menuToggle on same button

						hamburger.addEventListener('mousedown', menuMove);

						if (navMoreBtn) {
							navMoreBtn.addEventListener('mousedown', menuMove);
						}
					} // mouse-up needed to trigger toggle after menuMove function in CMS theme

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
					} // Keep ability to close modal if window is resized

					var onResize = function onResize() {
						if (hamburger.classList.contains('is-active')) {
							mastheadHamburger.classList.add('u-display-inline-b'),
								mastheadSearch.classList.add('is-hidden');
						}
					}; // Throttle events to only run at 15fps, for performance

					var eventTimeout;

					var eventThrottler = function eventThrottler() {
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

				/***/
			},

		/***/ './src/_themes/hp/js/hp.js':
			/*!*********************************!*\
  !*** ./src/_themes/hp/js/hp.js ***!
  \*********************************/
			/*! no exports provided */
			/***/ function(module, __webpack_exports__, __webpack_require__) {
				'use strict';
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _themes_core_js_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ../../../_themes/core/js/core */ './src/_themes/core/js/core.js'
				);
				// hp scripts

				/***/
			},

		/***/ 1:
			/*!***************************************!*\
  !*** multi ./src/_themes/hp/js/hp.js ***!
  \***************************************/
			/*! no static exports found */
			/***/ function(module, exports, __webpack_require__) {
				module.exports = __webpack_require__(
					/*! /Users/dannybrown/Sites/rds/rds1/src/_themes/hp/js/hp.js */ './src/_themes/hp/js/hp.js'
				);

				/***/
			},

		/******/
	}
);
