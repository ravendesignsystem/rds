(function() {
	'use strict';
	let tabsClass = 'b-tabs';
	let tabClass = 'b-tabs__tab';
	let tabButtonClass = 'b-tabs__button';
	let activeClass = 'active';

	/* Activates the chosen tab and deactivates the rest */
	function activateTab(chosenTabElement) {
		let tabList = chosenTabElement.parentNode.querySelectorAll('.' + tabClass);
		for (let i = 0; i < tabList.length; i++) {
			let tabElement = tabList[i];
			if (tabElement.isEqualNode(chosenTabElement)) {
				tabElement.classList.add(activeClass);
			} else {
				tabElement.classList.remove(activeClass);
			}
		}
	}

	/* Initialize each tabbed container */
	let tabbedContainers = document.body.querySelectorAll('.' + tabsClass);
	for (let i = 0; i < tabbedContainers.length; i++) {
		let tabbedContainer = tabbedContainers[i];

		/* List of tabs for this tabbed container */
		let tabList = tabbedContainer.querySelectorAll('.' + tabClass);

		/* Make the first tab active when the page loads */
		activateTab(tabList[0]);

		/* Activate a tab when you click its button */
		for (let i = 0; i < tabList.length; i++) {
			let tabElement = tabList[i];
			let tabButton = tabElement.querySelector('.' + tabButtonClass);
			tabButton.addEventListener('click', function(event) {
				event.preventDefault();
				activateTab(event.target.parentNode);
			});
		}
	}
})();
