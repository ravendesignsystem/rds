'use strict';
// Sticky scroll in masthead block js
// Show and pin the masthead when a user scrolls back up
// and hide it when they scroll down again.
let header = document.querySelector('header'),
	masthead = document.querySelector('.b-masthead'),
	last_scroll = 0,
	masthead_y = header.scrollHeight,
	lastX = window.innerWidth,
	mastheadNav = document.querySelector(".masthead__nav");

// Stick Masthead to the top on scroll u
// -------------------------------------

// Always apply on small screens.
if (window.innerWidth <= 960) {
	masthead.classList.add('js-masthead-scrollupstick');
}
// Only fire if class .js-masthead-scrollupstick is on masthead block
if (masthead.classList.contains('js-masthead-scrollupstick')) {
	window.addEventListener('scroll', function() {
		// detect if scrolling up or down
		if (window.scrollY <= 15) {
			// user has not scrolled past header yet
			masthead_y = -header.scrollHeight;
			masthead.classList.remove('b-masthead--sticky-scroll', 'b-masthead--shadow');
			document.body.style.marginTop = '0px';
		} else {
			// has scrolled past the header
			masthead.classList.add('b-masthead--sticky-scroll', 'b-masthead--shadow');
			masthead_y = masthead_y - (window.scrollY - last_scroll);
			masthead_y = Math.min(masthead_y, 0);
			masthead_y = Math.max(masthead_y, -masthead.scrollHeight);
			masthead.style.top = masthead_y + 'px';
			document.body.style.marginTop = '15px';

		}
		if (window.scrollY < 350) {
			// remove the dropshadow before a banner buts against it
			masthead.classList.remove('b-masthead--shadow');
		}
		last_scroll = window.scrollY;
		if (
			window.scrollY == 0 &&
			masthead.classList.contains('js-modalmenu--is-active')
		) {
			masthead.className = 'b-masthead js-modalmenu--is-active';
			masthead.style.top = '0';
		}
	});
}

//check to determine if an overflow is happening
function isOverflowing(element) {
	return element.scrollWidth > element.offsetWidth;
}

function moveNav(element) {
	if (isOverflowing(mastheadNav)) {
		masthead.classList.add('js-masthead-2packed');
		let xwidth = window.innerWidth;
		lastX = xwidth;
	} else {
		let xwidth = window.innerWidth;
		// needed to reduce flickering on resize
		if (lastX < xwidth) {
			masthead.classList.remove('js-masthead-2packed');
			masthead.classList.remove('b-masthead--responsivenav');
		}
	}
}


// Setup a timer to ease resizing
let timeout;

window.addEventListener('resize', function ()  {

	// If timer is null, reset it to 66ms and run the functions.
	// Otherwise, wait until timer is cleared
	if ( !timeout ) {
		timeout = setTimeout(function() {

			// Reset timeout
			timeout = null;

			// Run our resize functions
			if (window.innerWidth >= 960 && masthead.classList.contains('js-masthead-2packed') && mastheadNav.scrollWidth > mastheadNav.clientWidth) {
				masthead.classList.add("js-masthead-2biggie");
			}
			else {
				moveNav(mastheadNav);
			}

		}, 66);
	}
}, false);

if (window.innerWidth >= 960) {
	masthead.classList.remove('b-masthead--responsivenav');
window.addEventListener("load", moveNav);
} // end screen size check to fire
