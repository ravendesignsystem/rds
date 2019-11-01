const buttons = document.querySelectorAll(
	'.nav__menu--vert .has-submenu button'
);
const buttonsArray = Array.from(buttons);

buttonsArray.map(button => {
	button.addEventListener('click', e => {
		const isExpanded = e.target.getAttribute('aria-expanded');
		if (isExpanded === 'false') {
			e.target.setAttribute('aria-expanded', true);
			e.target.parentNode.classList.add('open');
		} else {
			e.target.setAttribute('aria-expanded', false);
			e.target.parentNode.classList.remove('open');
		}
	});
});
