// *** CORE JS ***
import '../../../_core/js/core';

// Highlight JS plugin
import hljs from '../js/vendor/highlight-9-12-0';
hljs.initHighlightingOnLoad();

// Tabs use on docs
import '../blocks/tabs/tabs';
import '../blocks/textimg/textimg';

// TODO lol I'm sure this can be improved
// The below strips empty and <p> tags filled with whitespace caused by Markdown
// thanks 4 nothing Gruber..j/k thanks for markdown

// remove <p> tags with whitespace but no content
let emptyP = document.getElementsByTagName('p');
for (let i = 0; i < emptyP.length; i++) {
	if (!emptyP[i].innerHTML.replace(/\s/g, '').length) {
		emptyP[i].classList.add('is-gone');
		let remove = document.getElementsByClassName('is-gone');
		while (remove[0]) {
			emptyP[i].outerHTML = ""; //removed .remove() for stupid IE
		}
	}
}

// remove empty tags
document
	.querySelectorAll('p, strong')
	.forEach(el => el.innerHTML.trim() === '' && el.parentNode.removeChild(el));
