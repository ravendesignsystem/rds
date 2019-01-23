if (document.getElementsByClassName('b-docs-textimg').length > 0) {
	let hero = document.querySelector('.b-textimg__img');
	let imgs = [
		'http://cu-rds.s3.amazonaws.com/docs/assets/home-hero-1.svg',
		'http://cu-rds.s3.amazonaws.com/docs/assets/home-hero-2.svg',
		'http://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
	];

	let size = imgs.length;
	let x = Math.floor(size * Math.random());
	hero.src = imgs[x];
}
