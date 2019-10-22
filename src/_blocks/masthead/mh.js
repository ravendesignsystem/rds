//* show masthead on scroll up

let scrollPosition = window.scrollY;
let lastScrollTop = 0;
let st;
const masthead = document.querySelector('#b-masthead');
const mastheadNav = document.querySelector('.masthead__nav');
const header = document.querySelector('header');
const body = document.body;
const mastheadHeight = masthead.offsetHeight;
let isNav2packed;

const detectOverflowOnMasthead = function(element) {
	return element.scrollWidth > element.offsetWidth;
};

const toggleMastheadSizeAlert = () => {
	if (window.innerWidth >= 960 && detectOverflowOnMasthead(mastheadNav)) {
		mastheadNav.classList.add('masthead__overflow-detected');
	} else {
		mastheadNav.classList.remove('masthead__overflow-detected');
	}
};
const toggleMastheadDropNav = () => {
	if (window.innerWidth <= 960 && detectOverflowOnMasthead(mastheadNav)) {
		mastheadNav.classList.add('masthead__second-level');
	} else {
		mastheadNav.classList.remove('masthead__second-level');
	}
};

const toggleMastheadVisibilty = () => {
	scrollPosition = window.scrollY;
	st = window.pageYOffset || document.documentElement.scrollTop;

	if (st > lastScrollTop && st > mastheadHeight) {
		// on scroll down
		masthead.classList.add('hidden');
	} else {
		// on scroll up
		masthead.classList.remove('hidden');
	}
	lastScrollTop = st <= 0 ? 0 : st;
};

export const MastheadIsScrolling = () => {
	window.addEventListener(
		'scroll',
		() => {
			toggleMastheadVisibilty();
		},
		false
	);
};
export const MastheadIsResizing = () => {
	window.addEventListener(
		'resize',
		() => {
			toggleMastheadSizeAlert();
			toggleMastheadDropNav();
		},
		false
	);
};

export const MastheadIsLoading = () => {
	window.addEventListener(
		'load',
		() => {
			toggleMastheadDropNav();
		},
		false
	);
};
