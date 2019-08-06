const alert = document.querySelector('.u-block--alert');
const alertClose = document.querySelector('.alertheader__dismiss');

if (alert) {
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

	if (alertClose) {
		alertClose.addEventListener(
			'click',
			function() {
				alert.parentNode.removeChild(alert);
			},
			false
		);
	}
}
