import dialogPolyfill from 'dialog-polyfill';
import { closeMenuState } from '../../_components/navmenu/navmenu';

let scrollPosition;
let lastScrollTop = 0;
let st;
const body = document.querySelector('body');
const masthead = document.querySelector('#id-masthead');
const mastheadNav = document.querySelector('.c-nav--topnav');
const mastheadNavContainer = document.querySelector('.b-masthead nav');
const mastheadNavUl = document.querySelector('.c-nav--topnav ul');
const mastheadActions = document.querySelector('.masthead__actions');
const sideNav = document.querySelector('.c-nav--sidenav');
const sideNavContainer = document.querySelector('.b-menu--sidenav');
const mastheadNavIcon = document.querySelector('.c-navicon');

let mastheadActionsCTA;
if (mastheadActions !== null) {
	mastheadActionsCTA = mastheadActions.querySelectorAll(
		`li[class*="masthead__"]`
	);
}

const mastheadHeight = masthead.offsetHeight;
const mastheadSearch = document.querySelector('.masthead__search');

const mastheadLogin = document.querySelector('.masthead__login');
const globalCloseModalButton = document.querySelector(
	'.masthead__close-modals'
);
const modal = document.querySelector('.l-overlay-modal');
const modalMenu = document.querySelector('.modal__menu');
const modalSearch = document.querySelector('.modal__search');
const modalLogin = document.querySelector('.modal__login');
const setAriaHidden = (target) => {
	target.setAttribute('aria-hidden', true);
};
const unsetAriaHidden = (target) => {
	target.setAttribute('aria-hidden', false);
};
const searchFormInput = document.querySelector('input.searchform__input');

/**
 *  @name detectOverflowOnMasthead()
 *  @desc returns boolean where viewport width is compared to elements total width
 *  @param { html entity } element element to compare
 *  @return { boolean }
 */
const detectOverflowOnMasthead = () => {
	if (!mastheadNav) return;
	return mastheadNav.offsetWidth <= mastheadNavUl.offsetWidth;
};

/**
 *  @name toggleMobileMenu()
 *  @desc adds class to display red banner error stating the menu is too wide
 */
// const navContainer = document.querySelector('.c-nav--topnav');

const navContainer = document.querySelector('.b-masthead nav');
const navMenu = document.querySelector('.nav__menu--top');
const initialNavMenuWidth = navMenu && navMenu.offsetWidth + 20;

const toggleMobileMenu = () => {
	if (!mastheadNav) return;

	const navWidth = mastheadNav.offsetWidth + 800;
	const mastheadClassList = mastheadNavIcon.parentNode.classList;

	const navContainerWidth = navContainer.offsetWidth;
	const navMenuWidth = navMenu.offsetWidth + 20;

	const windowW = window.innerWidth;

	console.log({ navContainerWidth, navMenuWidth, initialNavMenuWidth, windowW });

	// capture div width and compare against window width
	// if (window.innerWidth <= navWidth || window.innerWidth <= 960) {

	// TODO: aria expanded stays at true when nav comes back into view, this causes the grey bg on buttons with submenus

	if (initialNavMenuWidth >= navContainerWidth) {
		modalMenu.appendChild(mastheadNav);
		Array.from(mastheadNavUl.querySelectorAll('.has-submenu')).map((li) => {
			if (li.firstElementChild.getAttribute('aria-disabled') === 'false') {
				li.firstElementChild.setAttribute('aria-disabled', true);
				li.firstElementChild.setAttribute('aria-expanded', true);
			} else {
				li.firstElementChild.setAttribute('aria-disabled', false);
				li.firstElementChild.setAttribute('aria-expanded', false);
			}
			li.classList.remove('c-menupopup');
			li.classList.add('open');
		});
		mastheadClassList.remove('u-hide-l');
	} else {
		mastheadClassList.add('u-hide-l');
		Array.from(mastheadNavUl.querySelectorAll('.has-submenu')).map((li) => {
			li.classList.remove('open');
			li.classList.add('c-menupopup');
		});
		mastheadNavContainer.appendChild(mastheadNav);
	}
};

/**
 *  @name toggleAppendMenu()
 *  @desc move secondary menu to dialog
 */
const toggleAppendMenu = () => {
	if (!sideNav) return;

	// capture window size
	if (window.innerWidth <= 760) {
		appendSideNav();
	} else {
		removeSideNav();
	}
};

/**
 *  @name toggleMastheadVisibilty()
 *  @desc hides/shows masthead depending on scroll position and direction
 */
const toggleMastheadVisibilty = () => {
	scrollPosition = window.scrollY;
	st = window.pageYOffset || document.documentElement.scrollTop;
	const modalIsClosed = modal.getAttribute('aria-hidden');

	if (st > lastScrollTop && st > mastheadHeight && modalIsClosed === 'true') {
		// on scroll down
		masthead.classList.add('u-visually-hidden');
		body.classList.remove('u-masthead-sticky');
	} else {
		masthead.classList.remove('u-visually-hidden');
		body.classList.add('u-masthead-sticky');
		// on scroll up
	}
	lastScrollTop = st <= 0 ? 0 : st;
};

/**
 *  @name showModal()
 *  @desc reveals modals depending on type passed in
 *  @param { string } type the class name slug  of modal to show
 */
const showModal = (type) => {
	const modalToShow = document.querySelector(`.modal__${type}`);

	// show modal container
	modal.style.display = 'block';
	unsetAriaHidden(modal);

	// hide masthead actions
	Array.from(mastheadActionsCTA).map((el) =>
		el.classList.add('u-visually-hidden')
	);

	// show selected modal content
	modalToShow.classList.remove('u-visually-hidden');
	// show close all modals CTA
	globalCloseModalButton.classList.remove('u-visually-hidden');
};
/**
 *  @name closeAllModals()
 *  @desc closes all modals
 */
const closeAllModals = () => {
	// hide modal container
	modal.style.display = 'none';
	setAriaHidden(modal);

	// hide close all modal CTA
	Array.from(mastheadActionsCTA).map((el) =>
		el.classList.remove('u-visually-hidden')
	);
	globalCloseModalButton.classList.add('u-visually-hidden');

	if (modalSearch && mastheadSearch) {
		modalSearch.classList.add('u-visually-hidden');
		mastheadSearch.classList.remove('u-visually-hidden');
	}
	if (modalLogin && mastheadLogin) {
		modalLogin.classList.add('u-visually-hidden');
		mastheadLogin.classList.remove('u-visually-hidden');
	}
	if (modalMenu) {
		modalMenu.classList.add('u-visually-hidden');
		if (!mastheadNavIcon) return;
		mastheadNavIcon.classList.remove('u-visually-hidden');
	}
};
/**
 *  @name appendSideNav()
 *  @desc copies .b-menu content and appends it to .modal__menu
 */
const appendSideNav = () => {
	modalMenu.appendChild(sideNav);
};
/**
 *  @name removeSideNav()
 *  @desc removes .b-menu from .modal__menu
 */
const removeSideNav = () => {
	if (modalMenu.childNodes.length > 1) {
		sideNavContainer.appendChild(sideNav);
	}
};

const handleScroll = () => {
	window.addEventListener(
		'scroll',
		() => {
			toggleMastheadVisibilty();
		},
		false
	);
};
const handleResize = () => {
	let timeout = true;

	window.addEventListener(
		'resize',
		() => {
			if (!timeout) return;

			timeout = false;

			setTimeout(() => {
				toggleMobileMenu();
				toggleAppendMenu();
				timeout = true;
			}, 500);
		},
		false
	);
};
/**
 *  @name handleLoading()
 *  @desc init function for the masthead functionality
 */
const handleLoading = () => {
	window.addEventListener(
		'load',
		() => {
			toggleMobileMenu();
			toggleAppendMenu();
			closeMenuState();
		},
		false
	);
};

const handleClick = () => {
	if (mastheadSearch) {
		mastheadSearch.addEventListener('click', (e) => {
			showModal('search');
			document.querySelector('.searchform__input').focus();
		});
	}

	if (mastheadLogin) {
		mastheadLogin.addEventListener(
			'click',
			() => {
				showModal('login');
			},
			false
		);
	}

	if (globalCloseModalButton) {
		globalCloseModalButton.addEventListener(
			'click',
			() => {
				closeAllModals();
			},
			false
		);
		if (mastheadNavIcon) {
			mastheadNavIcon.addEventListener(
				'click',
				() => {
					showModal('menu');
				},
				false
			);
		}
	}
};

const handleKeyPress = () => {
	window.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			closeAllModals();
		}
	});
};
/**
 *  @name Masthead()
 *  @desc init function for the masthead functionality
 */
const Masthead = () => {
	if (!masthead) return;
	handleScroll();
	handleResize();
	handleLoading();
	handleClick();
	handleKeyPress();
};

export default Masthead;
