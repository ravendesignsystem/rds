const alert = document.querySelector('.c-alert');
const alertClose = document.querySelector('.c-alert button');

if (alertClose) {
	let elements = document.querySelectorAll('.c-alert button');
	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', hideAlert);
	}

	function hideAlert() {
				this.parentNode.remove();
	}

}
