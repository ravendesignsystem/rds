if (document.getElementsByClassName('b-docs-textimg').length > 0) {
	let hero = document.querySelector('.textimg__img');
	let imgs = [
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-1.svg',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-2.svg',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png'
	];

	let size = imgs.length;
	let x = Math.floor(size * Math.random());
	hero.src = imgs[x];
}
