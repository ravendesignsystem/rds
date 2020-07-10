// TODO move and rename to core
import '../../_themes/cu/scss/cu.scss';

// polyfills
import './polyfills/polyfills';
import './polyfills/From-polyfill';

// component scripts
import '../../_components/accordion/accordion';
import '../../_components/alert/alert';

import '../../_components/navmenu/navmenu';

// block scripts
import '../../_blocks/alertheader/alertheader';
import '../../_blocks/form/form';

// commenting out for refactor
import Masthead from '../../_blocks/masthead/masthead';
Masthead();

// we should probably get rid of this before v1
// but for old time sake...
let pattern = [
	'ArrowUp',
	'ArrowUp',
	'ArrowDown',
	'ArrowDown',
	'ArrowLeft',
	'ArrowRight',
	'ArrowLeft',
	'ArrowRight',
	'b',
	'a',
];
let current = 0;

let keyHandler = function (event) {
	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	if (pattern.length === current) {
		current = 0;
		window.location.href = 'https://www.youtube.com/watch?v=RRwqftGrxf4';
	}
};

document.addEventListener('keydown', keyHandler, false);
