// Rudimentary js just for building styles on new masthead
// Expected to reworked into new masthead JS updated from mh.js

// For testing Masthead Nav, click the Hamburger to open modal and move Masthead nav in

// For testing b-menu, click the Search button to open modal and move vert nav in

const modal = document.querySelector('.l-overlay-modal'),
	mastheadNavIcon = document.querySelector('.c-navicon'),
	searchBut = document.querySelector('.masthead__search'),
	mastheadNav = document.querySelector('.b-masthead nav'),
	modalMenu = document.querySelector('.modal__menu');

// Only target c-menupopups in masthead as there could be more on page elsewhere
const mastheadNavLis = document.querySelectorAll('.b-masthead .c-menupopup');

// // Move the Masthead nav to modal
// mastheadNavIcon.addEventListener('click', function() {
// 	modal.classList.toggle('is-visible');
// 	// Remove the Masthead c-nav styles when in modal
// 	mastheadNav.classList.toggle('c-nav--menubar');

// 	for (var i = 0; i < mastheadNavLis.length; i++) {
// 		console.log(mastheadNavLis[i]);
// 		// Remove the Masthead c-popup
// 		mastheadNavLis[i].classList.toggle('c-menupopup');
// 		// Since there are only 2 levels and vertical space, expand all - also helps deal with buttons
// 		mastheadNavLis[i].classList.toggle('open');
// 		// Disable buttons..might be a better approach here?
// 		mastheadNavLis[i].firstElementChild.setAttribute('disabled', '');
// 	}

// 	modalMenu.classList.toggle('u-visually-hidden');
// 	modalMenu.appendChild(mastheadNav);
// });

// Use search to move vertical menu to modal

// Aside vert menu
// const vertMenu = document.querySelector('aside .c-nav');

// searchBut.addEventListener('click', function() {
// 	modal.classList.toggle('is-visible');
// 	modalMenu.classList.toggle('u-visually-hidden');
// 	modalMenu.appendChild(vertMenu);
// });
