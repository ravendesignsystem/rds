const alert = document.querySelector('.u-block--alert');
const alertHeaderClose = document.querySelector('.u-block--alert button');

if (alert ) {
	const sticky = alert.offsetTop;

	function stickTop() {
		if (window.pageYOffset > sticky) {
			alert.classList.add("u-sticky");
		} else {
			alert.classList.remove("u-sticky");
		}
	}

	window.onscroll = function() {
		stickTop()
	};

	if (alertHeaderClose) {
		alertHeaderClose.addEventListener(
			'click',
			function() {
				alert.parentNode.removeChild(alert);
			},
			false
		);
	}
}
