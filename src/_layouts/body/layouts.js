// remove the margin from the last u-block within .body__content
let removeMargin = function() {
	'use strict';

	let mainContent = document.querySelector('.body__content');

	if (mainContent) {
		let findUblock = mainContent.getElementsByClassName('u-block'),
			lastBlock = findUblock[findUblock.length - 1];

		if (lastBlock) {
			lastBlock.classList.add('u-no-margin-bottom');
		}
	}
};
removeMargin();
