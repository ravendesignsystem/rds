let isMenuExpanded;
let expanded;
const navExpandButton = document.querySelector('.nav__expand button');
const subMenuButtons = document.querySelectorAll(
	'.c-nav--sidenav .has-submenu button'
); // nodelist
const subMenuButtonsArray = Array.from(subMenuButtons);
const navMenu = document.querySelector('.c-nav--topnav');
const actionsMenu = document.querySelector('.masthead__actions');
const navMenuButtons = document.querySelectorAll(
	'.c-nav--topnav .has-submenu button'
); // nodelist
const navMenuButtonsArray = Array.from(navMenuButtons);
const actionMenuButtons = document.querySelectorAll(
	'.masthead__actions .has-submenu button'
); // nodelist
const actionMenuArray = Array.from(actionMenuButtons);

const isTopNav = (target) => {
	return target.parentNode.parentNode.parentNode.classList.contains(
		'c-nav--topnav'
	);
};

//there is a much better way to do this, but for now it's verbose.
export const closeMenuState = () => {
	if (!navMenu || !navMenuButtons) return;
	document.addEventListener('click', (e) => {
		if (!navMenu.contains(e.target) || e.key === 'Escape') {
			navMenuButtonsArray.map((button) => {
				button.parentNode.classList.remove('open');
				// TODO this was preventing aria from changing when mobile nav is displayed based on container width
				// TODO see line 93-101 && line 109-117 in src/_blocks/masthead/masthead.js
				// button.setAttribute('aria-expanded', false);
			});
		}
		if (!actionsMenu.contains(e.target) || e.key === 'Escape') {
			actionMenuArray.map((button) => {
				button.parentNode.classList.remove('open');
				button.setAttribute('aria-expanded', false);
			});
		}
	});
	document.addEventListener('keydown', (e) => {
		const allMastheadButtons = navMenuButtonsArray.concat(actionMenuArray);
		if (e.key === 'Escape') {
			allMastheadButtons.map((button) => {
				button.parentNode.classList.remove('open');
				button.setAttribute('aria-expanded', false);
			});
		}
	});
};

// function to toggle nav and side nav state
const toggleMenuOpenState = (buttonArray) => {
	buttonArray.map((button) => {
		button.addEventListener('click', (e) => {
			const isExpanded = e.target.getAttribute('aria-expanded');
			//check if top nav is target to close menu items before opening a new one
			if (isTopNav(e.currentTarget)) {
				buttonArray.map((button) => {
					button.parentNode.classList.remove('open');
					button.setAttribute('aria-expanded', false);
				});
			}
			if (isExpanded === 'false') {
				e.target.setAttribute('aria-expanded', true);
				e.target.parentNode.classList.add('open');
			} else {
				e.target.setAttribute('aria-expanded', false);
				e.target.parentNode.classList.remove('open');
			}
		});
	});
};
if (navMenuButtons) {
	toggleMenuOpenState(navMenuButtonsArray);
}
if (actionMenuButtons) {
	toggleMenuOpenState(actionMenuArray);
}

if (subMenuButtons && navExpandButton) {
	toggleMenuOpenState(subMenuButtonsArray);

	// add click event listener to .nav__expand button target
	navExpandButton.addEventListener('click', (e) => {
		// deconstruct the event for cleanliness
		const { currentTarget } = e;
		const navExpandButtonText = currentTarget.querySelector('span');

		// assign isMenuExpanded to the tarets data attr
		isMenuExpanded = currentTarget.getAttribute('data-expanded');

		// if menu is expanded, change text and data attribute
		if (isMenuExpanded === 'false') {
			navExpandButtonText.textContent = 'Collapse All';
			currentTarget.setAttribute('data-expanded', true);
			currentTarget.classList.add('nav__expand--open');
		} else {
			navExpandButtonText.textContent = 'Expand All';
			currentTarget.setAttribute('data-expanded', false);
			currentTarget.classList.remove('nav__expand--open');
		}

		// loop over menu buttons that have a parent of .has-menu
		subMenuButtonsArray.map((subMenuButton) => {
			// if menu is expanded, toggle aria
			if (isMenuExpanded === 'false') {
				subMenuButton.setAttribute('aria-expanded', true);
				subMenuButton.parentNode.classList.add('open');
			} else {
				subMenuButton.setAttribute('aria-expanded', false);
				subMenuButton.parentNode.classList.remove('open');
			}
		});
	});
}

// TODO
// Can we add JS here shared by both Masthead and vertical nav
// to implement keyboard functionality?
// For example, https://codepen.io/cuweb/pen/abbVpgK
