---
layout: base
subsite: dev
content: true
title: Components
---
Components are relatively simple UI elements that, unlike blocks, __can be nested__ inside of blocks, and even other components. Components tend to be smaller, inline interface elements such as buttons and icons.
Similar to Blocks, RDS Components are UI elements built for reuse. Unlike Blocks, Components can be nested inside of blocks, and even other components. Relatively more straightforward than blocks, components tend to be smaller, inline interface elements such as buttons and icons. Components must be used within a Block and cannot be used on their own.

Components are the equivalent to Atoms or Molecules in Atomic Design and allow us to keep the CSS code lean as repeated elements are represented by only one abstraction.
## Examples
If we look at the layout of <a href="#">this</a> very page you are reading...

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/docs-block-page.png" />

...we can see the interface is made up of several RDS blocks.

### The Blocks

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/page-blocks.png" />

### Components in blocks

Taking a closer look at the Banner block...

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/banner-block.png" />

...we can see it is made up of elements dependant on the block, as well as a [button component](#) that is shared across the system.

### Component in components
The same button component found in the banner block...

<a class="c-buttoncta" href="https://central.wordcamp.org" role="button"><span class="u-icon u-icon-text" aria-hidden="true">{% include "icons/heart.svg" ignore missing %}</span>Like this post</a>

...can house an icon component.

## In short

Blocks and components are the equivalent of reusable widgets. The biggest difference between the 2 is that a component can be nested inside of any block, or another component.

Next: [Developing Blocks and Components](developing-blocks-components/)
