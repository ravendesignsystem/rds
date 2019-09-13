// Random image loading for homepage
// Only run script if modifier class is there. aka only homepage
if (document.querySelector('.b-docs-textimg')) {
	let daheader = document.querySelector('.b-docs-textimg').getElementsByTagName('h2');
	let images = [
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-1.svg',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-1.svg',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-1.svg',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-1.svg',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-2.svg',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png',
		'https://cu-rds.s3.amazonaws.com/docs/assets/home-hero-3.png'
	];

	// Resolve random
	let size = images.length;
	let x = Math.floor(size * Math.random());
	// Create the image right after the H2
	const image = document.createElement('img');
	image.src = images[x];
	daheader.item(0).parentNode.insertBefore(image, daheader.item(0).nextSibling);
}
