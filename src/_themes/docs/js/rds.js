// Highlight JS plugin
import hljs from '../js//vendor/highlight-9-12-0';
hljs.initHighlightingOnLoad();

// Tabs use on docs
import '../blocks/tabs/tabs';
import '../blocks/textimg/textimg';

// SVG copy for icons
import '../components/cardlabel/cardlabel';

// TODO lol I'm sure this can be improved
// The below strips empty and <p> tags filled with whitespace caused by Markdown
// thanks Gruber

// remove <p> tags with whitespace but no content
let emptyP = document.getElementsByTagName('p');
for (let i = 0; i < emptyP.length; i++) {
	if (!emptyP[i].innerHTML.replace(/\s/g, '').length) {
		emptyP[i].classList.add('is-gone');
		let remove = document.getElementsByClassName('is-gone');
		while (remove[0]) {
			emptyP[i].remove();
		}
	}
}

// remove empty tags
document.querySelectorAll('p, strong')
	.forEach(el => el.innerHTML.trim() === "" && el.parentNode.removeChild(el))


