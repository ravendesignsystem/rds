// Notes
// The arrow icon could be made darker

// Main Nav Styles
// =======================================

// .b-menu {
// 	background-color: white;
// }

.b-menu h2 {
	// position: relative;
	background: $grey;
	// border-bottom: 1px solid white;
	// font-weight: 500;
	// height: 30px;
	// padding: 0 15px;
	padding: 10px 15px;
	color: $grey-vader;
	// line-height: 30px;
	margin: 0;
	font-size: $pixel12;
	text-transform: uppercase;
}

.b-menu .active {
	color: $red;
}

.b-menu ul {
	margin: 0;
	list-style-type: none;
}

.b-menu li {
	position: relative;
	// list-style-type: none;

	// TODO: what was this doing? can't figure it out
	 label > i {
	 	transition: transform 0.65s ease;
	 }

	a {
		display: block;
		padding: 10px 15px;
		border-bottom: 1px solid $grey;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition: all 0.25s ease-in; // TODO: what was this doing? can't figure it out
	}
}

.b-menu > ul li:last-of-type:not(.b-menu ul ul li:last-of-type) {
	// tighten expand all line-height
	line-height: 1;
}

// remove bottom border, if open
.b-menu li input:checked + label a {
	border-bottom: 1px solid rgba(255, 255, 255, 0);
	padding-bottom: 5px;
}

.b-menu li:last-child a {
	border-bottom: none;
}

.b-menu label:hover a,
.b-menu li a:hover {
	// text-decoration: none;
	color: $red;
}

.b-menu i {
	font-style: normal;
	// font-size: $pixel18;
	position: absolute;
	top: 0;
	right: 0;
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: $grey-vader;

	&:hover {
		cursor: pointer;
	}

	&:after {
		content: '+';
		 display: inline-block;
		transition: all 0.25s ease-in;
		// left: 50%;
		// line-height: normal;
	}
}

.b-menu ul ul i {
	line-height: 40px;
}

.body__nav .b-menu ul ul li:last-child a {
	padding-bottom: 14px;
}

.b-menu input[type='checkbox']:checked + label > i:after {
	transform: rotate(135deg);
	transform-origin: center center;
}

// Hide nested lists
// =======================================

.b-menu ul ul,
.b-menu ul ul ul,
.b-menu ul ul ul ul {
	// height: 100%;
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.5s ease-in-out;
}

.b-menu ul input[type='checkbox']:checked + label + ul {
	max-height: 1000px; // reset the height when checkbox is checked
}

// only show menu heading in overlay
.body__nav h2 {
	display: none;
}
// Child Level Nav Styles
// =======================================
// 1st level
.b-menu ul {
	// no background color if not in  overlay
	font-size: $pixel16;
}
// 2nd level
.b-menu ul ul:not(.b-menu ul ul ul) {
	box-shadow: inset 0px -11px 12px -12px $grey-yoda;
}

.b-menu ul ul:not(.body__nav .b-menu ul ul) { // no background color if not in  overlay
	background-color: $grey;
}

.b-menu ul ul ul:not(.body__nav .b-menu ul ul ul) { // no background color if not in  overlay
	background-color: white;
}

.body__nav .b-menu ul ul ul li:last-child a {
	padding-top: 0px;
	padding-bottom: 2px;
}

.b-menu ul ul a {
	padding-left: 35px;
	border-bottom: 1px solid white;
	padding-top: 5px;
	padding-bottom: 5px;
	color: $grey-emperor;
}

// 3rd level
.b-menu ul ul ul {
	a {
		padding-left: 60px;
		font-size: $pixel14;
	}
}

// 4th level
.b-menu ul ul ul ul {
	a {
		padding-left: 90px;
	}
}

// Expand/show nested lists
// =======================================

.menu__toggle {
	font-style: normal;
	font-size: $pixel10;
	text-transform: uppercase;
	// padding: 0 15px;
	// line-height: normal;

	&:hover {
		color: $red;
	}

	&:before {
		content: '+';
		display: inline-block;
		transition: all 0.25s ease-in;
		font-size: $pixel14;
		vertical-align: middle;
		line-height: normal;
		margin-right: 5px;
		margin-top: -1px;
		color: $grey-emperor;
	}

	&.menu__toggle--opened:before {
		transform: rotate(135deg);
		transform-origin: center center;
	}
}

input#menu--1-129:checked + label {
	color: #f00;
	font-style: normal;
}