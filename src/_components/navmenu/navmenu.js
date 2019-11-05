let isMenuExpanded;
let expanded;
const navExpandButton = document.querySelector('.nav__expand button');
const subMenuButtons = document.querySelectorAll(
	'.c-nav--sidenav .has-submenu button'
); // nodelist
const subMenuButtonsArray = Array.from(subMenuButtons);
const navMenuButtons = document.querySelectorAll(
	'.c-nav--menubar .has-submenu button'
); // nodelist
const navMenuButtonsArray = Array.from(navMenuButtons);

const isTopNav = target => {
	return target.parentNode.parentNode.parentNode.classList.contains(
		'c-nav--menubar'
	);
};
// function to toggle nav and side nav state
const toggleMenuOpenState = buttonArray => {
	buttonArray.map(button => {
		button.addEventListener('click', e => {
			const isExpanded = e.target.getAttribute('aria-expanded');
			//check if top nav is target to close menu items before opening a new one
			if (isTopNav(e.currentTarget)) {
				buttonArray.map(button => {
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

toggleMenuOpenState(subMenuButtonsArray);
toggleMenuOpenState(navMenuButtonsArray);

// add click event listener to .nav__expand button target
navExpandButton.addEventListener('click', e => {
	// deconstruct the event for cleanliness
	const { target } = e;
	// assign isMenuExpanded to the tarets data attr
	isMenuExpanded = target.getAttribute('data-expanded');

	// if menu is expanded, change text and data attribute
	if (isMenuExpanded === 'false') {
		target.textContent = 'Collapse All';
		target.setAttribute('data-expanded', true);
	} else {
		target.textContent = 'Expand All';
		target.setAttribute('data-expanded', false);
	}

	// loop over menu buttons that have a parent of .has-menu
	subMenuButtonsArray.map(subMenuButton => {
		// assign expanded to the buttons data attribute
		expanded = subMenuButton.getAttribute('aria-expanded');
		// if menu is expanded, toggle aria
		if (expanded === 'false') {
			subMenuButton.setAttribute('aria-expanded', true);
		} else {
			subMenuButton.setAttribute('aria-expanded', false);
		}
		// if menu is expanded toggle class
		subMenuButton.parentNode.classList.toggle('open');
	});
});

// expandNav.addEventListener('click', expandMenu);

// TODO
// Can we add JS here shared by both Masthead and vertical nav
// to implement keyboard functionality?
// For example, https://codepen.io/cuweb/pen/abbVpgK
