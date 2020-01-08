---
layout: docs
subsite: dev
menu: dev
section: Layouts
title: Multi-column
title: Aside + Main + Aside Layout
---

RDS ships with both two and three column layouts, each having a few options. All multi-column layouts include the `<main>` section and at least one `<aside>`. 

## Layout AM (Aside + Main)

This is a two column layout consisting of an `aside`, immediately followed by the `main` content area. The base class name `l-multicol-am` reflects the order that the elements appears in its used of `am`.

The main purpose of this layout is to provide a main content area with a lefthand aside containing the site navigation.

**Note:** The two column `l-multicol-am` layout is being used on this very page, and sets the columns up as per the following diagram.

```markdown
+-------------+----------------------+
|             |                      |
|  Aside (a)  |       Main (m)       |
|             |                      |
+-------------+----------------------+
```

### Left aside

The left-side `<aside>` is intended for site navigation using the [Menu block](#). The column has a fixed width of 200px, and disappears from view below 810px. While the main purposes of this aside is to contain a site navigation, additional aside blocks can be added below the menu.

### Main

The main area contains your primary page content.

### Code

```html
<div class="l-multicol l-multicol--am">

	<aside class="multicol__nav">
		{ the Menu block go here }
	</aside>

	<main class="multicol__main">
		{ Fixed-width Main blocks go here }
	</main>

</div>
```

## Layout AM (Aside + Main)

This is another two column layout, but this time it consists of a `main` content area, immediately followed by the `aside`. The base class name `l-multicol-ma` reflects the order that the elements appears in its used of `ma`.

The main purpose of this layout is to provide a main content area with a sidebar of that would contain related or additional content.

```markdown
+----------------------+-------------+
|                      |             |
|       Main (m)       |  Aside (a)  |
|                      |             |
+----------------------+-------------+
```

### Main

The main area contains your primary page content.

### Right aside

The right-side `<aside>` is intended for providing content related to what is dispplayed in the main area. The column has a fixed width of 270px, and disappears from view below 810px.

### Code

```html
<div class="l-multicol l-multicol--ma">

	<main class="multicol__main">
		{ Fixed-width Main blocks go here }
	</main>

	<aside class="multicol__sidebar">
		{ the Menu block go here }
	</aside>

</div>
```