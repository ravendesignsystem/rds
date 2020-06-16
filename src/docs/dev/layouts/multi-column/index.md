---
layout: docs
subsite: dev
menu: dev
section: Layouts
title: Multi-column
title: Aside + Main + Aside Layout
---

RDS ships with both two and three column layouts, each having a few options. All multi-column layouts include the `<main>` section and at least one `<aside>`.

When using multi-column layouts, only fixed-width [Main section blocks](#) can be used within the `<main>` section. [Aside blocks](#) can be used in the `aside` sections.

## Multicol AM (Aside + Main)

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

## Multicol MA (Main + Aside)

This is another two column layout, but this time it consists of a `main` content area, immediately followed by the `aside`. The base class name `l-multicol-ma` reflects the order that the elements appears in its used of `ma`.

The main purpose of this layout is to provide a main content area with a sidebar of that would contain related or additional content.

### Default view

```markdown
+-----------------------+-------------+
|                       |             |
|         Main          |    Aside    |
|                       |             |
+-----------------------+-------------+
```

### View below 810px

By default, below 810px the righthand aside will drop below the main area. See section **Righthand Aside Modifiers** for more information on how to change the positioning.

```markdown
+-----------------------+
|                       |
|         Main          |
|                       |
+-----------------------+
|                       |
|         Aside         |
|                       |
+-----------------------+
```

### Main

The main area contains your primary page content.

### Right aside

The right-side `<aside>` is intended for providing content related to what is dispplayed in the main area. The column has a fixed width of 270px, and drops below the main content area below 810px.

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

## Multicol AMA (Aside + Main + Aside)

This is a three column layout consisting of an `aside`, followed by the `main` content area, the followed by another aside. The base class name `l-multicol-ama` reflects the order that the elements appears in its used of `ama`.

The main purpose of this layout is to provide a main content area with a lefthand aside containing the site navigation and a righthand aside containing additional content related to the main area.

### Default view

```markdown
+-------------+-----------------------+-------------+
|             |                       |             |
|    Aside    |         Main          |    Aside    |
|             |                       |             |
+-------------+-----------------------+-------------+
```

### View below 810px

By default, below 810px the righthand aside will drop below the main area. See section **Righthand Aside Modifiers** for more information on how to change the positioning.

```markdown
+-------------+-----------------------+
|             |                       |
|    Aside    |         Main          |
|             |                       |
|             +-----------------------+
|             |                       |
|             |         Aside         |
|             |                       |
+-------------+-----------------------+
```

### Left aside

The left-side `<aside>` is intended for site navigation using the [Menu block](#). The column has a fixed width of 200px, and disappears from view below 810px. While the main purposes of this aside is to contain a site navigation, additional aside blocks can be added below the menu.

### Main

The main area contains your primary page content.

### Right aside

The right-side `<aside>` is intended for providing content related to what is dispplayed in the main area. The column has a fixed width of 270px, and drops below the main content area below 810px.

### Code

```html
<div class="l-multicol l-multicol--ama">

	<aside class="multicol__nav">
		{ the Menu block go here }
	</aside>

	<main class="multicol__main">
		{ Fixed-width Main blocks go here }
	</main>

	<aside class="multicol__sidebar">
		{ the Menu block go here }
	</aside>

</div>
```

## Righthand Aside Modifiers

The two column `l-multicol--ma` and the three column `l-multicol-ama` offers a modifier that will position the righthand aside above the main content area at the first break point:

- Below 810px for `l-multicol--ma`
- Below 1168px for `l-multicol--ama`

To add this modifier, use the `l-multicol--sidebar-top` class on the main div that contains the `l-multicol` class, see example below.

### Code

```html
<div class="l-multicol l-multicol--ama l-multicol--sidebar-top">

	<aside class="multicol__nav">
		{ the Menu block go here }
	</aside>

	<main class="multicol__main">
		{ Fixed-width Main blocks go here }
	</main>

	<aside class="multicol__sidebar">
		{ the Menu block go here }
	</aside>

</div>
```

### Modified view below 810px

```markdown
+-------------+-----------------------+
|             |                       |
|    Aside    |         Aside         |
|             |                       |
|             +-----------------------+
|             |                       |
|             |         Main          |
|             |                       |
+-------------+-----------------------+
```