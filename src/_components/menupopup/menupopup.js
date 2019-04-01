const subutton = document.querySelectorAll('button.c-menupopup');

subutton.forEach(function(el) {
	el.addEventListener('click', function(e) {
		//const content = el.innerHTML;
		//console.log(content);
		el.nextElementSibling.classList.add('is-visible');
	});

	el.addEventListener('mouseout', function(event) {
		if (event.target.closest('button.c-menupopup')) {
			el.nextElementSibling.classList.remove('is-visible');
		}
	});
});
