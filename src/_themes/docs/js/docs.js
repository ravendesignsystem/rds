// *** CORE JS ***
import '../../../_core/js/core';

// Import and initialize highlight.js plugin
import hljs from 'highlight.js/lib/highlight';
hljs.initHighlightingOnLoad();

// Import CSS from highlight.js
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css);

// Import JS from highlight.js
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

// Import JSON from highlight.js
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('json', json);

// Import JSON from highlight.js
import markdown from 'highlight.js/lib/languages/markdown';
hljs.registerLanguage('markdown', markdown);

// Import Twig from highlight.js
import twig from 'highlight.js/lib/languages/twig';
hljs.registerLanguage('twig', twig);

// Import XML from highlight.js
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);

// Import XML from highlight.js
import yaml from 'highlight.js/lib/languages/yaml';
hljs.registerLanguage('yaml', yaml);

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
			emptyP[i].outerHTML = ''; //removed .remove() for stupid IE
		}
	}
}

// remove empty tags
document
	.querySelectorAll('p, strong')
	.forEach(el => el.innerHTML.trim() === '' && el.parentNode.removeChild(el));
