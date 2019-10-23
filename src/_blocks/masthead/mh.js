import dialogPolyfill from 'dialog-polyfill';

let scrollPosition;
let lastScrollTop = 0;
let st;
let isHamburgerHidden = null;
const masthead = document.querySelector('#b-masthead');
const mastheadNav = document.querySelector('.masthead__nav');
const mastheadHeight = masthead.offsetHeight;
const mastheadSearch = document.querySelector('.masthead__search');
const mhHamburger = document.querySelector('.masthead__hamburger');
const mhHamburgerButton = document.querySelector('.c-hamburger');
const mhLogin = document.querySelector('.masthead__login');
const modal = document.querySelector('.l-overlay-modal');
const modalMenu = document.querySelector('.modal__menu');
const modalSearch = document.querySelector('.modal__search');
const modalLogin = document.querySelector('.modal__login');
const moveMenu = document.querySelector('.js-overlay-movemenu');
const leftMenu = document.querySelector('.b-menu');

/**
 *  @name detectOverflowOnMasthead()
 *  @desc returns boolean where viewport width is compared to elements total width
 *  @param { html entity } element element to compare
 *  @return { boolean }
 */
const detectOverflowOnMasthead = function(element) {
	return element.scrollWidth > element.offsetWidth;
};

/**
 *  @name toggleMastheadSizeAlert()
 *  @desc adds class to display red banner error stating the menu is too wide
 */

const toggleMastheadSizeAlert = () => {
	if (window.innerWidth >= 960 && detectOverflowOnMasthead(mastheadNav)) {
		mastheadNav.classList.add('masthead__overflow-detected');
	}
};

/**
 *  @name toggleMastheadDropNav()
 *  @desc adds class to move the menu to a second level if conditions are met
 */
const toggleMastheadDropNav = () => {
	if (window.innerWidth <= 960 || detectOverflowOnMasthead(mastheadNav)) {
		mastheadNav.classList.add('masthead__second-level');
	} else if (
		window.innerWidth >= 961 &&
		!detectOverflowOnMasthead(mastheadNav)
	) {
		mastheadNav.classList.remove('masthead__second-level');
	} else {
		return;
	}
};
/**
 *  @name toggleMastheadVisibilty()
 *  @desc hides/shows masthead depending on scroll position and direction
 */
const toggleMastheadVisibilty = () => {
	scrollPosition = window.scrollY;
	st = window.pageYOffset || document.documentElement.scrollTop;

	if (st > lastScrollTop && st > mastheadHeight) {
		// on scroll down
		masthead.classList.add('hidden');
	} else {
		// on scroll up
		masthead.classList.remove('hidden');
	}
	lastScrollTop = st <= 0 ? 0 : st;
};

const MastheadModals = () => {
	if (!mhHamburgerButton) return;
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
		// window.removeEventListener('scroll', stickMasthead);
		preventScroll();
		if (isHamburgerHidden !== null) {
			mhHamburger.classList.remove(isHamburgerHidden);
		}

		if (btn === 'search') {
			mastheadSearch.classList.add('u-visually-hidden');
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

	if (mastheadSearch) {
		mastheadSearch.addEventListener(
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
				modal.show();
				if (moveMenu) {
					modalMenu.classList.remove('u-visually-hidden');
					modalMenu.appendChild(leftMenu);
				}
				preventScroll();
				// window.removeEventListener('scroll', stickMasthead);
				if (mhLogin) {
					modal.close();
					mhLogin.classList.add('u-visually-hidden');
				}
			} else {
				preventScroll();
				// window.addEventListener('scroll', stickMasthead);
				modal.close();
				if (moveMenu) {
					modalMenu.classList.add('u-visually-hidden');
					// modal.close();
					moveMenu.appendChild(leftMenu);
				}
				if (mastheadSearch) {
					modalSearch.classList.add('u-visually-hidden');
					mastheadSearch.classList.remove('u-visually-hidden');
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
	return;
};

const MastheadIsScrolling = () => {
	window.addEventListener(
		'scroll',
		() => {
			toggleMastheadVisibilty();
		},
		false
	);
};
const MastheadIsResizing = () => {
	window.addEventListener(
		'resize',
		() => {
			toggleMastheadSizeAlert();
			toggleMastheadDropNav();
		},
		false
	);
};

const MastheadIsLoading = () => {
	window.addEventListener(
		'load',
		() => {
			toggleMastheadDropNav();
			toggleMastheadSizeAlert();
		},
		false
	);
};

const MastheadHandleClick = () => {
	mastheadSearch.addEventListener(
		'click',
		() => {
			showModal('search');
		},
		false
	);
};

const Masthead = () => {
	MastheadIsScrolling();
	MastheadIsResizing();
	MastheadIsLoading();
	MastheadHandleClick();
	MastheadModals();
};

export default Masthead;
