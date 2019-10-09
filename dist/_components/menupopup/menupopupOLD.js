let popups = document.querySelectorAll('button.c-menupopup'),
masthead = document.querySelector('.b-masthead'),
	mastheadNav = document.querySelector('.masthead__nav');

// let hoverLinks = document.querySelector('.c-menupopup > a');

for (let i = 0; i < popups.length; i++) {
	popups[i].addEventListener('click', showMenu);
	popups[i].addEventListener('mouseout', hideMenu);
}

if ("ontouchstart" in document.documentElement)
{

	//
	// let hoverLinks = document.querySelectorAll('.c-menupopup a');
	// for (let i = 0; i < hoverLinks.length; i++) {
	//
	// 	hoverLinks[i].addEventListener('click', function tat() {
	//
	// 			// this.removeAttribute("href");
	// 			let targetElement = this.target; // clicked element
	//
	//
	// 			masthead.classList.add('b-masthead--responsivenav--hack');
	// 		 this.href="#";
	// 			let cln = this.parentNode.cloneNode(true);
	// 			cln.classList.remove('c-menupopup');
	// 			cln.classList.add('js-menupopup-clonetxt');
	// 			this.nextElementSibling.prepend(cln);
	//
	// 			if (targetElement == hoverLinks[i]) {
	// 				masthead.classList.remove('b-masthead--responsivenav--hack');
	// 			}
	// 			hoverLinks[i].removeEventListener('click', tat);
	//
	// 		},
	// 		false
	// 	);
	// }
	document.addEventListener('scroll', function test() {
		masthead.classList.remove('b-masthead--responsivenav--hack');
	});



	let hoverLinks = document.querySelectorAll('li.c-menupopup');
	for (let i = 0; i < hoverLinks.length; i++) {

		hoverLinks[i].addEventListener('touchend', function fuck() {
				masthead.classList.add('b-masthead--responsivenav--hack');
				ted();

				// this.removeAttribute("href");
				let cln = this.cloneNode(true);
				cln.classList.remove('c-menupopup');
				cln.classList.add('js-menupopup-clonetxt');
				this.getElementsByTagName("A")[0].nextElementSibling.prepend(cln);
				this.firstChild.href="#";

				// this.style.position = 'absolute';


				hoverLinks[i].removeEventListener('touchend', fuck);
				mastheadNav.classList.add('js-foo');
			},
			false
		);
	}

	var ted = function() {
		mastheadNav.addEventListener('touchstart', function yes() {
			if (mastheadNav.classList.contains('js-foo')){
				masthead.classList.remove('b-masthead--responsivenav--hack');
				mastheadNav.classList.remove('js-foo');
			}
		});
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
