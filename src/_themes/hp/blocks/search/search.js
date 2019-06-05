import dompurify from 'dompurify';

document.addEventListener('DOMContentLoaded', () => {
	const searchForm = document.getElementById('searchform');
	const button = searchForm.querySelector('button');
	const searchInput = document.getElementById('cu-search__input');
	const target = document.getElementById('cu-search__results');
	const search = document.querySelector('.masthead__search');
	let dataList;

	Array.prototype.unique = function() {
		return Array.from(new Set(this));
	};

	search.addEventListener('click', async () => {
		await fetch(
			'https://cuframework.s3.amazonaws.com/toplevel/assets/json/cusearch.json'
		)
			.then(res => {
				return res.json();
			})
			.then(data => {
				dataList = data;
				return dataList;
			})
			.catch(err => {
				console.log(err);
			});
	});

	searchInput.addEventListener('input', async e => {
		let userInput = e.target.value;
		let results = [];

		//filter results and template
		dataList.map(item => {
			item.tokens.map(token => {
				if (token.toLowerCase().includes(userInput.toLowerCase())) {
					let res = `
					<a href="${item.link}">
						<li data-cat="${item.category}">${item.name}</li>
					</a>`;

					results.push(res);
				}
			});
		});
		results = results.unique();
		// clear target on focusout
		searchInput.addEventListener('focusout', () => {
			target.innerHTML = dompurify.sanitize('');
		});

		// show no results for empty strings or array
		// prevent form submition on empty search or enter key
		if (userInput === ' ' || userInput === '') {
			button.disabled = true;
		} else {
			button.disabled = false;
			target.innerHTML = dompurify.sanitize(results.join(' '));
		}
	});
});
