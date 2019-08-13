'use strict';
// Sticky scroll in masthead block js
// Show and pin the masthead when a user scrolls back up
// and hide it when they scroll down again.
let header = document.querySelector('header'),
	masthead = document.querySelector('.b-masthead'),
	last_scroll = 0,
	masthead_y = -header.scrollHeight;

let lastX = window.innerWidth,
mastheadNav = document.querySelector(".masthead__nav");

// Always apply on small screens.
if (window.matchMedia('(max-width: 768px)').matches) {
	masthead.classList.add('js-sticky-scroll');
}
if (masthead.classList.contains('js-sticky-scroll')) {
	window.addEventListener('scroll', function() {
		if (window.scrollY < 5) {
			// has not scrolled past header yet
			masthead_y = -header.scrollHeight;
			masthead.classList.remove('b-masthead--sticky-scroll', 'b-masthead--shadow');
			document.body.style.marginTop = '0';
		} else {
			// has scrolled past the header
			masthead.classList.add('b-masthead--sticky-scroll', 'b-masthead--shadow');
			masthead_y = masthead_y - (window.scrollY - last_scroll);
			masthead_y = Math.min(masthead_y, 0);
			masthead_y = Math.max(masthead_y, -masthead.scrollHeight);
			masthead.style.top = masthead_y + 'px';
			document.body.style.marginTop = '75px';
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
		mastheadNav.classList.add("masthead__nav--priority");
		let xwidth = window.innerWidth;
		lastX = xwidth;
	} else {
		let xwidth = window.innerWidth;
		// needed to reduce flickering on resize
		if (lastX < xwidth) {
			mastheadNav.classList.remove("masthead__nav--priority");
		}
	}
}

let resizeId; // wait until resizing is done
window.addEventListener("resize", function() {
// if the nav drops and they still dont have room on big screens, give em heck!
	if (window.innerWidth >= 800 && mastheadNav.classList.contains("masthead__nav--priority") && mastheadNav.scrollWidth > mastheadNav.clientWidth) {
		mastheadNav.classList.add("masthead__nav--2packed");

	}
	else {
		clearTimeout(resizeId);
		resizeId = setTimeout(moveNav(mastheadNav), 500);
	}
});


window.addEventListener("load", moveNav);
