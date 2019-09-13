// IE For each polyfill
(function () {
	if ( typeof NodeList.prototype.forEach === "function" ) return false;
	NodeList.prototype.forEach = Array.prototype.forEach;
})();
