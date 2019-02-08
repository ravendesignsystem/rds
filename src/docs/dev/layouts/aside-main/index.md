---
layout: base
subsite: dev
title: Aside + Main Layout
content: true
---

The `Aside + Main` layout provides a two column template, with an aside on the left hand side, and a content area on the right, and has a maximum width of 1028px.

## Left Hand Aside

The primary usage for the left hand aside is to house site navigation or other relevant links and buttons pertaining to the site. The aside has a fixed width of 200px, roughly 20% of the full layout width, and disappears from view below 720px.

## Main

The main area would contain all of the primary content of the page. Inside tha main tag, a div with a class of `body__content` is required, and each content item inside this div should be a block.

```html
<div class="l-body l-body--am">

	<aside class="body__nav">
		<div class="u-block">
			<p>Navigation</p>
		</div>
	</aside>

	<main class="body__container">
		<div class="body__content">

			<div class="u-block u-block--s u-block--white">
				<h2>First Block</h2>
				<p>Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>
			</div>

			<div class="u-block u-block--s u-block--white">
				<h2>Second Block</h2>
				<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
			</div>

		</div>
	</main>

</div>
```
