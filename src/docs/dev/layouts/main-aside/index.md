---
layout: base
subsite: dev
title: Main + Aside Layout
content: true
---

The `Main + Aside` layout provides a two column template, with a content area on the left and an aside on the right hand side.

## Main

The main area would contain all of the primary content of the page. Inside tha main tag, a div with a class of `body__content` is required, and each content item inside this div should be a block.

## Ride Hand Aside

The primary usage for the right hand aside is to provide additional information that relates to the page. Items contained within thise aside are block level items.

The right hand aside is contained within the main container, but outside of the content div. By default, the aside would be placed below the content area below 720px, and has a default width of 280px.

```html
<div class="l-body l-body--ma">

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

		<aside class="body__sidebar">
			<div class="u-block u-block--s u-block--white">
				<p>This is a block in the right hand aside</p>
			</div>
		</aside>

	</main>

</div>
```

## Modifiers
There are 2 modifiers available. One will provide a slightly large right hand aisde, while the other will position the right hand aside above the main content area below 720px. To use one or both modifiers, add the following classes to the main layout div, modifying the `l-body` class.

- `l-body--sidebar-large` -- increases max width of the right hand aside to 350px
- `l-body--sidebar-top` -- positions the right hand aside above the content area below 720px

### Example of both modifiers being used
```html
<div class="l-body l-body--ama l-body--sidebar-large l-body--sidebar-top">
```
