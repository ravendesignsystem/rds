// Using approach #2 as per https://www.w3.org/WAI/tutorials/menus/flyout/

var menuItems = document.querySelectorAll('.c-nav--vert .has-submenu');

Array.prototype.forEach.call(menuItems, function(el, i) {
	var activatingA = el.querySelector('a');
	var btn = '<button>+</button>';

	// var btn =
	// 	'<button><span><span class="visuallyhidden">show submenu for “' +
	// 	activatingA.text +
	// 	'”</span></span></button>';

	activatingA.insertAdjacentHTML('afterend', btn);

	el.querySelector('button').addEventListener('click', function(event) {
		if (this.parentNode.className == 'has-submenu') {
			this.parentNode.className = 'has-submenu open';
			this.parentNode.querySelector('a').setAttribute('aria-expanded', 'true');
			this.parentNode
				.querySelector('button')
				.setAttribute('aria-expanded', 'true');
		} else {
			this.parentNode.className = 'has-submenu';
			this.parentNode.querySelector('a').setAttribute('aria-expanded', 'false');
			this.parentNode
				.querySelector('button')
				.setAttribute('aria-expanded', 'false');
		}
		event.preventDefault();
	});
});
