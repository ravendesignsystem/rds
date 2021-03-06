---
layout: docs
subsite: dev
title: Main + Aside Layout
---

The `Main + Aside` layout sets up two columns, with the primary content area on the left and an aside on the right-hand side, and has a maximum width of 1108px.

## Main

The main area would contain all of the primary content of the page. Inside the main tag, a div with a class of `body__content` is required, and each content item inside this div should be a block.

## Ride-hand aside

The primary usage for the right-hand aside is to provide space for blocks whose content is only indirectly related to the document's main content. The aside has a fixed width of 280px, roughly 25% of the full layout width.

The right-hand aside is contained within the main container, but outside of the content div. By default, the aside would be placed below the content area below 720px.

**INSERT IMAGE**

```html
<div class="l-body l-body--ma l-body--white">
	<div class="body__container">

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

			<aside class="body__sidebar">
				<div class="u-block u-block--grey">
					<p>This is a grey block</p>
				</div>
				<div class="u-block u-block--white">
					<p>This is a white block</p>
				</div>
				<div class="u-block u-block--white">
					<p>This is a white block</p>
				</div>
			</aside>

		</main>

	</div>
</div>
```

## Required Modifier
A background colour modifier is required at the `l-body` level. This not only set the layout background colour, but it also modifies the left and right padding of the same coloured blocks used within the asides, or main content area, prevening additional spacing inside each layout column.

- `l-body--white` -- makes the full width of the layout background white, and removes the left and right padding on all white blocks used inside the layout
- `l-body--grey` -- makes the full width of the layout background grey, and removes the left and right padding on all grey blocks used inside the layout

## Optional Modifiers
There are two modifiers available for this layout. One will provide a slightly larger right-hand aside, while the other will position the right-hand aside above the main content area he screen is sized below 720px.

To use one or both modifiers, add the following classes to the main layout div, modifying the `l-body` class.

- `l-body--sidebar-large` -- increases max width of the right hand aside to 350px, roughly 35% of the full layout width.
- `l-body--sidebar-top` -- positions the right hand aside above the content area below 720px

### Example of both modifiers being used
```html
<div class="l-body l-body--ama l-body--sidebar-large l-body--sidebar-top">
```

**INSERT IMAGE**
