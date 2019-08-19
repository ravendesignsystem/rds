let popups = document.querySelectorAll('button.c-menupopup');

// let hoverLinks = document.querySelector('.c-menupopup > a');

for (let i = 0; i < popups.length; i++) {
	popups[i].addEventListener('click', showMenu);
	popups[i].addEventListener('mouseout', hideMenu);
}



if ("ontouchstart" in document.documentElement)
{


	let hoverLinks = document.querySelectorAll('.c-menupopup a');
	for (let i = 0; i < hoverLinks.length; i++) {

		hoverLinks[i].addEventListener('click', function fuck() {
				alert (this);
				this.removeAttribute("href");
				let cln = this.parentNode.cloneNode(true);
				cln.classList.remove('c-menupopup');
				cln.classList.add('js-menupopup-clonetxt');
				this.nextElementSibling.prepend(cln);
				hoverLinks[i].removeEventListener('click', fuck);
			},
			false
		);
	}


}
// hoverLinks[i].setAttribute('href', '#url');

	//
	// document.getElementById("myAnchor").removeAttribute("href")
	// // yourElement.setAttribute('href', '#url');


// else
// {
// 	alert ('noooo ttttttouch me');
// }



// if (popups) {
// hoverLinks.addEventListener('touchstart', moo);
// }
//
// function moo() {
//
// 	document.this.link.href = 'poop';
// 	alert (this);
// 	// alert (this);
// 	// red.link.href = 'fffff';
// // this.getElementsByClassName('parent')[0];
// // this.link.href = '';
// 	// document.this.querySelector('a').link.href = '';
// 	// this.nextElementSibling.classList.add('is-visible');
// 	// this.nextElementSibling.classList.add('is-visible');
// }

function showMenu() {
	this.nextElementSibling.classList.add('is-visible');
}

// stop the menu from showing on hover after being clicked
function hideMenu() {
	if (popups.target.closest('button.c-menupopup')) {
		this.nextElementSibling.classList.remove('is-visible');
	}
}
