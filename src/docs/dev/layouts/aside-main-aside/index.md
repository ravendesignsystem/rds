---
layout: base
subsite: dev
title: Aside + Main + Aside Layout
content: true
---

The `Aside + Main + Aside` layout sets up three columns, including asides on the left and right-hand sides, and a content area in the middle, and has a maximum width of 1368px.

## Left Hand Aside

Generally, the left-hand aside houses site navigation or other links. The aside has a fixed width of 200px, roughly 15% of the full layout width, and disappears from view below 720px.

## Main

The main area would contain all of the primary content of the page. Inside the main tag, a div with a class of `body__content` is required, and each content item inside this div should be a block.

## Ride-hand aside

The primary usage for the right-hand aside is to provide a space for additional blocks that relates to the page. The aside has a fixed width of 280px, roughly 20% of the full layout width.

The right hand aside is contained within the main container, but outside of the content div. By default, the aside would be placed below the content area below 720px.

**INSERT IMAGE**

```html
<div class="l-body l-body--ama">

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

- `l-body--sidebar-large` -- increases max width of the right hand aside to 350px, roughly 25% of the full layout width.
- `l-body--sidebar-top` -- positions the right hand aside above the content area below 720px

### Example of both modifiers being used
```html
<div class="l-body l-body--ama l-body--sidebar-large l-body--sidebar-top">
```

**INSERT IMAGE**
