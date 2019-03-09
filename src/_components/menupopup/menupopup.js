let subutton = document.querySelector('button.c-menupopup');

// Detect all clicks on the document
document.addEventListener('click', function(event) {
	// If user clicks inside the element, show it!
	if (event.target.closest('button.c-menupopup')) {
		subutton.nextElementSibling.classList.add('is-visible');
	} else {
		// If user clicks outside the element, hide it!
		subutton.nextElementSibling.classList.remove('is-visible');
	}
});

document.addEventListener('mouseout', function(event) {
    if (event.target.closest('button.c-menupopup')) {
        subutton.nextElementSibling.classList.remove('is-visible');
    }
});
