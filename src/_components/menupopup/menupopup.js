let elements = document.querySelectorAll('button.c-menupopup');
for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', showMenu);
	elements[i].addEventListener('mouseout', hideMenu);
}

function showMenu() {
	this.nextElementSibling.classList.add('is-visible');
}

// stop the menu from showing on hover after being clicked
function hideMenu() {
	if (event.target.closest('button.c-menupopup')) {
		this.nextElementSibling.classList.remove('is-visible');
	}
}
