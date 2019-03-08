// TODO: note for Danny why is this here?\
// TODO: It's extending the block for just this theme - b-docs-textimg...wil explain
// TODO: DELETE these comments

if (document.getElementsByClassName('b-docs-textimg').length > 0) {
	let hero = document.querySelector('.textimg__img');
	let imgs = [
		'http://cu-rds.s3.amazonaws.com/docs/assets/home-hero-1.svg',
		'http://cu-rds.s3.amazonaws.com/docs/assets/home-hero-2.svg',
		'http://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
		'http://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
		'http://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png'
	];

	let size = imgs.length;
	let x = Math.floor(size * Math.random());
	hero.src = imgs[x];
}
