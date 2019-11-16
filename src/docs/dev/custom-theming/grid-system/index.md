---
layout: docs
subsite: dev
title: Working with the CSS Grid
banner:
 breadcrumbs:
  grandparent: Custom Development
---

This base setup provides a super simple, responsive CSS Grid to easily list components or other types of content in equal width and equal height columns without having to write cluttered markup. Not intended for broader page layouts, the CSS Grid is intended to be used inside a block [(read more about blocks)](blocks), and currently provides a 2, 3 and 4 column grid option.

# Building a Grid

To build a grid you need to add a div inside a block and apply 2 classes:

- `u-grid` &mdash; this utility class sets the grid container and gutter spacing
- `u-grid--4` &mdash; this is a modifier of the main grid utility class and specified the number of columns you wish to use. Here you can set the number of columns at 2, 3 or 4.

## 4 Column Grid

This 4 column grid examples uses nested div for each individual grid item.

```html
<div class="u-grid u-grid--4">
	<div>This is grid item 1</div>
	<div>This is grid item 2</div>
	<div>This is grid item 3</div>
	<div>This is grid item 4</div>
</div>
```

Alternatively, you can use ordered or unordered lists to build your grid:

```html
<ul class="u-grid u-grid--4">
	<li>This is grid item 1</li>
	<li>This is grid item 2</li>
	<li>This is grid item 3</li>
	<li>This is grid item 4</li>
</ul>
```

# Wrapping Grid Items

If you have more grid items inside the container than you specify with your modifier, no problem. The grid is smarter than your average bear and the grid items will automatically wrap to the next line, and the default grid gutter spacing will be applied between items vertically.

The following grid will have 2 rows or 3 grid items:

```html
<div class="u-grid u-grid--3">
	<div>This is grid item 1</div>
	<div>This is grid item 2</div>
	<div>This is grid item 3</div>
	<div>This is grid item 4</div>
	<div>This is grid item 5</div>
	<div>This is grid item 6</div>
</div>
```

If you have an uneven number of grid items, or they are not a multiple of the column number specified, the grid will automatically handle that as well. Should the last row have less than the specified number of grid items, the will automatically align left, leaving empty space to the right.

The following example is a 3 column grid that contains only 5 grid items. There will be an empty space where the 6th item would normally exist.

```html
<div class="u-grid u-grid--3">
	<div>This is grid item 1</div>
	<div>This is grid item 2</div>
	<div>This is grid item 3</div>
	<div>This is grid item 4</div>
	<div>This is grid item 5</div>
</div>
```

# Small Screen Columns

By default, all grid items drop down to a 2 column layout at the small breakpoint. If you wish to change this and force them to break to a 1 column grid, then add `u-grid--s1` to the main grid container. In this modifier, `s1` signifies `small 1`.

The following example would break a 3 column grid to 1 column at the small breakpoint:

```html
<div class="u-grid u-grid--3 u-grid--s1">
	<div>This is grid item 1</div>
	<div>This is grid item 2</div>
	<div>This is grid item 3</div>
</div>
```

# Column Gutters

By default, the gutters are set to 30px. You can adjust this at the project level by setting a new value for the variable `$grid-gutter` in your project vars.scss file.

To remove the gutters on a grid, add `u-grid--no-gutters` to the main grid container, as the following example shows:

```html
<div class="u-grid u-grid--3 u-grid--no-gutters">
	<div>This is grid item 1</div>
	<div>This is grid item 2</div>
	<div>This is grid item 3</div>
	<div>This is grid item 4</div>
	<div>This is grid item 5</div>
	<div>This is grid item 6</div>
</div>
```
