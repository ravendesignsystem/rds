// IE 11 polyfills
if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
	let iePolyFills = document.getElementById('iePolyFills');
	iePolyFills.setAttribute('async', 'async');
	iePolyFills.setAttribute('src', 'https://unpkg.com/element-closest/browser');
}

// IE For each polyfill
(function() {
	if (typeof NodeList.prototype.forEach === 'function') return false;
	NodeList.prototype.forEach = Array.prototype.forEach;
})();
