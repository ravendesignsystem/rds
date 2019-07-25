// Masthead block - v3.0.0
// =======================

// masthead height
$b-height: 75px;

.b-masthead {
	display: flex;
	justify-content: space-between;
	background-color: white;
	border-top: 2px solid $red;
	height: $b-height;
	z-index: $z-index-10000;
	transition: 0.2s;

	& > div {
		display: flex;
	}

	h2 {
		margin: 0;
		float: left;

		a {
			font-size: $pixel18;
			padding-left: 7px;

			@include media('>=s') {
				padding-left: 12px;
				font-size: $pixel20;
			}
		}
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: table;
	}

	li {
		&:hover > a {
			color: $red;
		}
	}

	.masthead__sep {
		border-left: 1px solid $grey-kenobi;
		padding-left: 12px;
		margin-left: 12px;
	}

	a,
	button {
		display: flex;
		height: 73px;
		padding-left: 17px;
		padding-right: 17px;
		font-size: $pixel14;
		font-weight: 500;
		white-space: nowrap;
		align-items: center;
	}

	a:hover {
		color: $red;
	}
}

// used in conjunction with js to stick the masthead on scroll up
.b-masthead--sticky-scroll {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	border-bottom: 1px solid $grey;

	& ~ .b-banner,
	& ~ .b-bannerhero,
	& ~ .tns-outer {
		margin-top: 78px !important; // avoid the jumping from the loss of masthead height when made position fixed.
	}
}

.b-masthead--shadow {
	box-shadow: 0 10px 11px -7px $grey-yoda;
	margin-bottom: 6px;
}

div.b-masthead ul.menupopup__menu {
	top: 60px;
}

.masthead__site {
	white-space: nowrap;
	line-height: $b-height;
	border-bottom: none;
	cursor: pointer;

	svg:not(.c-culogo) {
		min-width: 40px;
		width: 40px;
		height: 40px;
		vertical-align: middle;
		margin-right: 3px;
	}

	// TODO dont think this is needed?
	//& + .menupopup__menu {
	//	left: 200px !important;
	//}

	.c-culogo {
		width: 150px;

		@include media('>=s') {
			width: 175px;
		}
	}

	a {
		cursor: pointer;
		padding-left: 12px;

		@include media('<=s') {
			max-width: 300px;
			//min-width: 200px;
			white-space: normal;
			line-height: 1;
		}

		&:after {
			top: 43% !important;
		}
	}
}

.masthead__primarynav {
	overflow: hidden;

	h2 {
		display: flex;
	}

	ul {
		position: relative;
		display: none;

		@include media('>=1033px') {
			display: table;
			border-left: 1px solid $grey-kenobi;
		}
	}

	li {
		display: inline-flex;
	}

	a {
		display: flex;
		align-items: center;
	}

	.menupopup__menu {
		position: fixed !important;
		margin-left: 5px;

		//IE Only styles
		@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
			margin-left: -95px;
		}
	}
}

.masthead__primarynav

nav + .masthead__primarynav > .masthead__site {
	padding-left: 10px;

	&::before {
		content: '/';
		color: $grey-kenobi;
		margin-left: -8px;
		font-size: $pixel18;
	}

	a {
		padding-left: 10px;
	}
}

.masthead__more {
	position: absolute;
	right: 0;
	bottom: 73px;
	box-shadow: -10px 0 30px 20px white;
	background-color: white;
}

.masthead__controls {
	ul {
		display: flex;
	}

	li:not(.masthead__search):not(.masthead__hamburger):not(.masthead__login):not(.masthead__jump) {
		display: none;

		@include media('>=s') {
			display: list-item;
		}
	}

	li:hover > a {
		color: $black;
		background-color: $grey-yoda;

		&:after {
			color: black !important;
		}

		svg {
			fill: $black;
		}
	}

	a,
	button {
		border-left: 1px solid $grey-kenobi;

		&:hover {
			background-color: $grey-yoda;
			color: $black;
		}
	}

	svg {
		height: 16px;
		width: 16px;
	}

	.c-menupopup a {
		padding-right: 25px;
	}

	.c-menupopup a:after {
		margin-right: 8px;
	}

	.menupopup__menu {
		svg {
			height: 1em;
			width: 1em;
			margin-top: -1px;
		}
	}
}

.masthead__cta > a {
	background-color: $red;
	color: white;
	display: none;

	@include media('>500px') {
		display: flex;
	}

	&:after {
		color: white !important;
		//right: 15px !important;
	}

	svg {
		fill: white;
	}
}

//li.masthead__signup,
//li.masthead__login {
//	display: none;
//
//	@include media('>600px') {
//		display: table;
//	}
//}

.masthead__hamburger {
	display: list-item;

	@include media('>=1200px') {
		display: none;
	}
}

@include media('>=1472px') {
	.b-masthead--cu {
		height: 90px;

		button,
		a {
			height: 90px;
			font-size: $pixel16;
		}
	}
	.b-masthead--cu .c-culogo {
		width: 210px !important;
	}
}

@include media('<=1474px') {

	.masthead__search span{
		display: none;
	}
}

@include media('<=1135px') {
	.b-masthead--cu .masthead__primarynav li {
		display: none;
	}
}

@include media('<=1334px') {
	.b-masthead--cu .masthead__primarynav li:nth-child(5) {
		display: none;
	}
}

@include media('<=s') {

	.masthead__jump span {
		display: none;
	}
}


