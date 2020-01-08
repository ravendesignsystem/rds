---
layout: docs
subsite: dev
menu: dev
section: Layouts
title: Multi-column
title: Aside + Main + Aside Layout
---

RDS and the [CU theme](#) ship with both two and three column layouts, each having a few options. 

All multi-column layouts include the `<main>` section and at least one `<aside>`. 

## Two column: a-m layout

The two column `a-m` layout is being used on this very page. 

```markdown
+-----------+----------------------+
|           |                      |
| Aside (a) |       Main (m)       |
|           |                      |
+-----------+----------------------+
```

### Left aside

The left-side `<aside>` is intended for site navigation using the [Menu block](#) and disappears from view below 720px. Other Aside blocks can go beneath the navigation.

### Main

The main area contains your primary page content.

### Code

```html
<div class="l-multicol l-multicol--am l-multicol--white">
	<div class="multicol__container">

		<aside class="multicol__nav">
			<-- the Menu block go here -->
		</aside>

		<main class="multicol__main">
			<div class="multicol__content">
		        <-- Fixed-width Main blocks go here -->
			</div>
		</main>

	</div>
</div>
```

## Three column: a-m-a layout

The three column `a-m-a layout` includes asides on the left and right, with the main content area in the middle.


```markdown
+-----------+----------------------+------------+
|           |                      |            |
| Aside (a) |       Main (m)       |  Aside (a) |
|           |                      |            |
+-----------+----------------------+------------+
```

### Left aside

The left-side `<aside>` is intended for site navigation using the [Menu block](#) and disappears from view below 720px. Other Aside blocks can go beneath the navigation.

### Main

The main area contains your primary page content.

### Right aside

The right aside provides a sidebar for additional [Aside blocks](#) relating to the page. 

### Code

```html
<div class="l-multicol l-multicol--ama l-multicol--white">
	<div class="multicol__container">

	    <aside class="multicol__nav">
			<-- the Menu block go here -->
		</aside>

		<main class="multicol__main">

			<div class="multicol__content">
				<div class="u-block u-block--white">
					<-- Fixed-width Main blocks go here -->
				</div>
			</div>

			<aside class="multicol__sidebar">
				<-- Aside blocks go here -->
			</aside>

		</main>

	</div>
</div>
```
{%include 'inc' with {'cta': 'AMA Example on Codepen', 'url': 'https://codepen.io/cuweb/pen/QWLOdQJ?editors=1000'} %}


### Right aside modifiers

The three column layout has two modifiers impacting the right aside. 

#### Larger right aside modifier

- `l-multicol--sidebar-large` -- increases the width of the right aside to 350px.

```html
<div class="l-multicol l-multicol--ama l-multicol--white l-multicol--sidebar-large">
```

```markdown
+-----------+----------------------+----------------+
|           |                      |                |
| Aside (a) |       Main (m)       |    Aside (a)   |
|           |                      |                |
+-----------+----------------------+----------------+
```
#### Right aside top modifier

At smaller screen sizes the three column layout breaks to a two column layout. By default, the right aside moves underneath the main content.

```markdown
+-----------+----------------------+
|           |                      |
| Aside (a) |       Main (m)       |
|           |       Aside(a)       |
+-----------+----------------------+
```

- Use the `l-multicol--sidebar-top` modifier to position the right aside above the content area when the screen width is smaller then 720px wide.

```markdown
+-----------+----------------------+
|           |       Aside(a)       |
| Aside (a) |       Main (m)       |
|           |                      |
+-----------+----------------------+
```
#### Combine

Both right aside modifiers can be used together or independently. The code below increases the right aside and forces it above the content wheen breaking to two columns.

```html
<div class="l-multicol l-multicol--ama l-multicol--white l-multicol--sidebar-large l-multicol--sidebar-top">
```

## Layout colour modifiers

- `l-multicol--white` -- the default modifier, makes the full width of the layout background white, and removes the left and right padding on all white blocks used inside the layout

```html
<div class="l-multicol l-multicol--ama l-multicol--white">
```
- `l-multicol--grey` -- makes the full width of the layout background grey, and removes the left and right padding on all grey blocks used inside the layout

```html
<div class="l-multicol l-multicol--ama l-multicol--grey">
```

## Available blocks

When using multi-column layouts, only fixed-width [Main section blocks](#) can be used within the `<main>` section. [Aside blocks](#) can be used in the `aside` sections.




