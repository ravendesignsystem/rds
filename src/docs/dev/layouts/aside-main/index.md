---
layout: docs
subsite: dev
title: Aside + Main Layout
---

The `Aside + Main` layout establishes two columns, with an aside on the left-hand side, and a content area on the right, and has a maximum width of 1028px.

### Left-hand aside

The left-hand aside is used in the [CMS theme](#) to house site navigation and other links. The aside has a fixed width of 200px, roughly 20% of the full layout width, and disappears from view below 720px.

### Main

The main area would contain all of the primary content of the page. Inside the main tag, a div with a class of `body__content` is required, and each content item inside this div should be a block.

**INSERT IMAGE**

```html
<div class="l-body l-body--am l-body--white">
	<div class="body__container">

		<aside class="body__nav">
			<div class="u-block u-block--white">
				<p>This is a white block</p>
			</div>
			<div class="u-block u-block--white">
				<p>This is a white block</p>
			</div>
			<div class="u-block u-block--grey">
				<p>This is a grey block</p>
			</div>
		</aside>

		<main class="body__main">

			<div class="body__content">
				<div class="u-block u-block--white">
					<h2>White Block</h2>
					<p>Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>
				</div>
				<div class="u-block u-block--white">
					<h2>White Block</h2>
					<p>Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>
				</div>
				<div class="u-block u-block--grey">
					<h2>Grey Block</h2>
					<p>Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>
				</div>
				<div class="u-block u-block--white">
					<h2>White Block</h2>
					<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
				</div>
			</div>

		</main>

	</div>
</div>
```

## Required Modifier
A background colour modifier is required at the `l-body` level. This not only set the layout background colour, but it also modifies the left and right padding of the same coloured blocks used within the asides, or main content area, prevening additional spacing inside each layout column.

- `l-body--white` -- makes the full width of the layout background white, and removes the left and right padding on all white blocks used inside the layout
- `l-body--grey` -- makes the full width of the layout background grey, and removes the left and right padding on all grey blocks used inside the layout
