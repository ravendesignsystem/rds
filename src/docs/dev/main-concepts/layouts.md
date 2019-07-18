---
layout: docs
title: Block Spacing and Layout
banner:
  breadcrumbs:
    grandparent: Dev
    parent: Blocks
---
TODO THIS IS OLD GLEAN AND REMOVE
Utility classes are used to control block spacing and layout. Almost always, blocks require at least one block utility class.

## Block layout types

There are two types of blocks, in terms of layout:

1. Fixed width blocks (fixed blocks)
2. Full width blocks (full blocks)

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/blocks.png" />

## Fixed blocks

Centered on the screen, fixed width blocks have containers with a maximum width applied to them. The available max-width sizes correspond with the RDS media query breakpoints, including:

- small
- medium
- large

### u-block utility class

Fixed blocks require the utility class `u-block`.

The majority of fixed blocks in RDS use the default width equalling the ['small' breakpoint](#). Modifiers are needed to assign other sizes.

### Default fixed width block example

Below is simple example of how to build a default sized fixed block. Note: we've added some inline styles to easily see the block's width.

```HTML
<div class="b-main-foo u-block">
    <p style="background: #eee">Hello world</p>
</div>
```

**Note** the `u-block` class should reside on the block's first tag and should be the last class name assigned.

Output:

{%include 'inc' with {'close': 'true'}%}

<div class="b-main-foo u-block">
    <p style="background: #eee">Hello world</p>

{%include "inc" with {'open': 'true'} %}

### Medium fixed width block example

To create a medium-sized fixed width block, apply the modifier class `u-block--l`.

```HTML
<div class="b-main-foo u-block u-block--l">
    <p style="background: #eee">Hello world</p>
</div>
```

Output:

{%include "inc" with {'close': 'true'} %}

<div class="b-main-foo u-block u-block--l">
    <p style="background: #eee">Hello world</p>
</div>

{%include "inc" with {'open': 'true'} %}

### Large fixed width block example

To create a large-sized fixed width block, apply the modifier class `u-block--l`.

```HTML
<div class="b-main-foo u-block u-block--l">
    <p style="background: #eee">Hello world</p>
</div>
```

Output:

{%include "inc" with {'close': 'true'} %}

<div class="b-main-foo u-block u-block--l">
    <p style="background: #eee">Hello world</p>
</div>

{%include "inc" with {'open': 'true'} %}

Note: there is no `u-block--s` because the default width of `u-block` is its equivalent.

## Fixed width blocks and padding

Fixed blocks have max-widths, not set widths, so they are still responsive. If you are reading this documentation on a phone or on a viewport smaller then the widths used in these demos, all of the block examples above are the same size.

It is **important to note that `u-block` controls the left and right padding** creating a consistent padding for all block on small and large screens. You need to take this into account when building [layouts](#) to contain blocks.

## Fixed blocks with Headings

Fixed blocks can have headings associated with them. The heading is technically not a part of the block but should be grouped together as [sectioning content](https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#sectioning-content-0). The `u-block` utility class changes location when fixed blocks are grouped with headings.

### To group a heading with a fixed block:

1. Add an HTML 5 `<section>` tag surrounding the block.
2. Move the `u-block` class from the block into the section tag.
3. Add the heading between the opening section tag and the block.

```HTML
<section class="u-block">
    <h2>Example of a fixed block with a heading</h2>
    <div class="b-main-foo">
        <p style="background: #eee">Hello world</p>
    </div>
</section>
```
**Note** in the code above, how the `u-block` class has been moved up to be on the `<section>` tag.

Output:
{%include "inc" with {'close': 'true'} %}
<section class="u-block">
    <h2>Example of a fixed block with a heading</h2>
    <div class="b-main-foo">
        <p style="background: #eee">Hello world</p>
    </div>
</section>

{%include "inc" with {'close': 'open'} %}

## Full width blocks

Full width blocks have a container that spans the entire width of the page.

### Full width block example

```html
<div class="b-header-foo u-block-full" style="height:400px;background-image:url('http://cu-raven.s3.amazonaws.com/assets/img/raven/raven-bg.png');">
</div>
```

Output:

{%include "inc" with {'close': 'close'} %}

<div class="b-header-foo u-block-full" style="height:400px;background-image:url('http://cu-raven.s3.amazonaws.com/assets/img/raven/raven-bg.png');">

{%include "inc" with {'open': 'true'} %}

### To make a full width block:

- Use the utility class `u-block-full`.

The utility class `u-block-full` forces a full-width container around the block. Unlike `u-block`, there is no left and right padding around the `u-block-full` container.

**Note**: you should never use `u-block` or `u-block--full` together on the same block or section. It is either one or the other.

### Block margins and padding

The `u-block` utility class sets up site-wide spacing so block layout is consistent and easy.

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/u-block.png">

#### Bottom margins

Both the `u-block` and `u-block-full` classes add bottom margins so blocks can easily stack on top of each other with consistent spacing in between.

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/u-block-margin.png">

#### Auto removal of margins for `u-block-full` blocks

RDS is set up to recognize when either...

- `u-block-full`,
- `u-block-full--grey`,
- `u-block-full-black`

...blocks are stacked one after another and removes the default bottom-margin from the top block. This lets you use full blocks one after another without any unwanted margin gaps.

For example, if we consider the layout in the image below...

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/blocks.png" />

... we do not want margin spacing between the masthead block and the banner block. Since they both have `u-block-full` applied to them, this gap is removed automatically.

#### Side padding

By setting a consistent `padding-left` and `padding-right` we prevent fixed blocks from becoming full blocks when the block width meets the screen's edge. This applies for any screen size but the primary need for the side padding is to provide consitent gutters for all fixed blocks on small screens.

<img width="308px" src="http://cu-raven.s3.amazonaws.com/assets/img/docs/u-block-padding.png">

## Block utility class review

To review, the available block utility classes and modifiers are:

- u-block
    - u-block--l
    - u-block--l
- u-block-full

### u-block

The  `u-block` utility class:

- sets the block to a fixed width.
- adds system-wide side padding to all blocks.
- adds system-wide bottom margins to all blocks.
- helps us identify where a block begins, when looking at the HTML.

### u-block--l

The `u-block--l` modifier:

- sets a max-wdth of 1024px on the fixed width block.

### u-block--l

The `u-block--l` modifier:

- sets a max-wdth of 1366px on the fixed width block.

### u-block-full

The `u-block-full` class:

- sets the width of the blocks content area to 100%.
- adds system-wide bottom margin for spacing.

Note: by design, the system automatically removes the bottom margin when full width blocks are stacked directly on top of each other.

<img width="309px" src="http://cu-raven.s3.amazonaws.com/assets/img/docs/full.png">

### Block sizing review

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/block-widths.png">

## Storybook

Check out and play around with straight forward rendered examples on [Codepen](https://codepen.io/cuweb/pen/odyjrg?editors=1010) or change some classes below and view the results.

{%include "inc" with {'close': 'true'} %}

<div class="u-block u-block--l"><p data-height="415" data-theme-id="light" data-slug-hash="odyjrg" data-default-tab="result" data-user="cuweb" data-embed-version="2" data-pen-title="Storybook - block sizing" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/cuweb/pen/odyjrg/">Storybook - block sizing</a> by Carleton (<a href="https://codepen.io/cuweb">@cuweb</a>) on <a href="https://codepen.io">CodePen</a>.</p><script async src="https://static.codepen.io/assets/embed/ei.js"></script></div>

{%include "inc" with {'open': 'true'} %}

<a class="c-buttoncta" href="https://codepen.io/cuweb/pen/odyjrg?editors=1010">Test these Concepts on Codepen</a>

 - explain variants
 -- setting - data options


Next: [Developing Blocks and Components](developing-blocks-components/)












