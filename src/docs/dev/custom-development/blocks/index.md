---
layout: t-block-docs
subsite: dev
title: Working with Blocks
banner:
  breadcrumbs:
    grandparent: Custom Development
---

Blocks are built by using utility classes to control spacing, colour and layout width. Almost always, blocks require at least one block utility class, `u-block`.

# Default Block
Creating a block is as easy as creating a div with the proper utility classes. The `u-block` class will apply padding inside the container. The most basic block markup is as follows:

```html
<div class="u-block">
    <p>This is an example of the most basic usage of a block</p>
</div>
```

# Block Colour Modifiers
It is required that you apply one of three background colour modifiers to each block. Adding one of the following modifiers will add a background colour to the block that spans the full width of the browser window:

* `u-block--white`
* `u-block--grey`
* `u-block--black`

```html
<div class="u-block u-block--grey">
    <p>This is an example of the a block with a grey background</p>
</div>
```

Not only do these modifiers set the background colour, they are also used as a means to tighten up spacing when the same coloured blocks are used consecutively. For example, if you have two consecutive white blocks, the default `u-block` adds `40px` of spacing top and bottom on each block, resulting in spacing of `80px`, twice as much as you would expect.

```html
<div class="u-block u-block--white">
    <p>This is the first instance of a block with a white background</p>
</div>

<div class="u-block u-block--white">
    <p>This is the second instance of a block with a white background.</p>
    <p>Block would have no top padding, keeping space between them at 40px</p>
</div>
```

By using `u-block--white` the system will remove the top padding from each white block that immediately follows the first instance, resulting in a `40px` space as expected.

# Block Sizes
There are 3 modifiers that you can use to set the width of the contents inside each block. Each size corresponds with the default breakpoint map.

* `u-block--s` &mdash; Set the max width at 768px wide
* `u-block--m` &mdash; Set the max width at 1024px wide
* `u-block--l` &mdash; Set the max width at 1366px wide

The max width is only applied to the direct children of the main `u-block` wrapper, allowing the background colours, if applied, to span the full window width.

```html
<div class="u-block u-block--s">
    <p>The p tag is a direct child, and now has a max-width of 768px</p>
</div>


<div class="u-block u-block--m">
    <p>The p tag is a direct child, and now has a max-width of 1024px</p>
</div>
```

**Note:** If you do not apply a block size modifier, the child elements will span the full width of the browser window, and only be contained by the padding that exists on `u-block`.

# Block Without Padding
In a few rare cases you might want to use a block without the padding that comes from `u-block`. In this case, you would use the `u-block--full` modifier which removes the padding.

The best example of this modifier is for an image. In the following example, the image will fill the full width and height of the block without padding.

```html
<div class="u-block u-block--full">
    <img src="image.jpg">
</div>
```

**Note:** the full width modifier will over write any max width from the size modifiers, so they should not be used together.

# Block Examples
The following are examples of how blocks should be used.

## White block with a max-width of 768px

```html
<div class="u-block u-block--white u-block--s">
    <h1>Header</h1>
    <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
    </ul>
</div>
```

## White blocks with various max-widths

```html
<div class="u-block u-block--white u-block--m">
    <h1>Medium block</h1>
    <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
    </ul>
</div>

<div class="u-block u-block--white u-block--l">
    <h1>Large block</h1>
    <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
    </ul>
</div>
```

## Grey block with no max-width

```html
<div class="u-block u-block--grey">
    <h1>Medium block</h1>
    <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
    </ul>
</div>
```
