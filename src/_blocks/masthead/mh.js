import dialogPolyfill from 'dialog-polyfill';

let scrollPosition;
let lastScrollTop = 0;
let st;
// let isNavIconHidden = null;
const body = document.querySelector('body');
const masthead = document.querySelector('#b-masthead');
const mastheadNav = document.querySelector('.masthead__nav');
const mastheadHeight = masthead.offsetHeight;
const mastheadSearch = document.querySelector('.masthead__search');
const mastheadNavIcon = document.querySelector('.masthead__navicon');
// const mhNavIconButton = document.querySelector('.c-navicon');
const mastheadLogin = document.querySelector('.masthead__login');
const mastHeadCloseAllModals = document.querySelector(
	'.masthead__close-modals'
);
const modal = document.querySelector('.l-overlay-modal');
const modalMenu = document.querySelector('.modal__menu');
const modalSearch = document.querySelector('.modal__search');
const modalLogin = document.querySelector('.modal__login');
// const moveMenu = document.querySelector('.js-overlay-movemenu');
const secondaryNav = document.querySelector('.b-menu');

/**
 *  @name detectOverflowOnMasthead()
 *  @desc returns boolean where viewport width is compared to elements total width
 *  @param { html entity } element element to compare
 *  @return { boolean }
 */
const detectOverflowOnMasthead = function(element) {
	const m = document.querySelector('.masthead__nav');
	const mu = document.querySelector('.masthead__nav ul');
	return m.offsetWidth <= mu.offsetWidth + 1;
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

const mastheadHasDropNav = () => {
	return mastheadNav.classList.contains('masthead__second-level');
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

/**
 *  @name preventScroll()
 *  @desc disables scroll on body
 */
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
/**
 *  @name showModal()
 *  @desc reveals modals depending on type passed in
 *  @param { string } type the class name slug  of modal to show
 */
const showModal = type => {
	const modalToShow = document.querySelector(`.modal__${type}`);
	const modalToShowButton = document.querySelector(`.masthead__${type}`);
	const isMenu = type === 'menu' ? mastheadNavIcon : modalToShowButton;

	// show modal container
	modal.style.display = 'block';
	// hide selected modal CTA
	isMenu.classList.add('u-visually-hidden');
	// show selected modal content
	modalToShow.classList.remove('u-visually-hidden');
	// show close all modals CTA
	mastHeadCloseAllModals.classList.remove('u-visually-hidden');
	//prevent scrolling while modal is open
	preventScroll();
};
/**
 *  @name closeAllModals()
 *  @desc closes all modals
 */
const closeAllModals = () => {
	// hide modal container
	modal.style.display = 'none';
	// hide search modal
	modalSearch.classList.add('u-visually-hidden');
	// hide login modal
	modalLogin.classList.add('u-visually-hidden');
	// hide close all modal CTA
	mastHeadCloseAllModals.classList.add('u-visually-hidden');

	// show/hide CTA buttons for modals in masthead depending on selected modal
	if (modalSearch) {
		mastheadSearch.classList.remove('u-visually-hidden');
	}
	if (modalLogin) {
		mastheadLogin.classList.remove('u-visually-hidden');
	}
	if (modalMenu) {
		mastheadNavIcon.classList.remove('u-visually-hidden');
	}
};
/**
 *  @name appendSecondaryNav()
 *  @desc copies .b-menu and appends it to .modal__menu
 */
const appendSecondaryNav = () => {
	modalMenu.appendChild(secondaryNav);
};
/**
 *  @name removeSecondaryNav()
 *  @desc removes .b-menu from .modal__menu
 */
const removeSecondaryNav = () => {
	if (modalMenu.childNodes.length > 1) {
		modalMenu.removeChild(secondaryNav);
	}
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
			if (mastheadHasDropNav()) {
				body.classList.add('extraMarginTop');
			} else {
				body.classList.remove('extraMarginTop');
			}
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

			if (mastheadHasDropNav()) {
				body.classList.add('extraMarginTop');
			} else {
				body.classList.remove('extraMarginTop');
			}
		},
		false
	);
};

const MastheadHandleClick = () => {
	mastheadSearch.addEventListener(
		'click',
		e => {
			showModal('search');
		},
		false
	);
	mastheadLogin.addEventListener(
		'click',
		() => {
			showModal('login');
		},
		false
	);
	mastHeadCloseAllModals.addEventListener(
		'click',
		() => {
			closeAllModals();
			removeSecondaryNav();
		},
		false
	);
	if (mastheadNavIcon) {
		mastheadNavIcon.addEventListener(
			'click',
			() => {
				appendSecondaryNav();
				showModal('menu');
			},
			false
		);
	}
};

const Masthead = () => {
	MastheadIsScrolling();
	MastheadIsResizing();
	MastheadIsLoading();
	MastheadHandleClick();
};

export default Masthead;
