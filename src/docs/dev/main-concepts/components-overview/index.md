---
layout: docs
subsite: dev
menu: dev
section: Main concepts
title: Components Overview
---
Components are relatively simple UI elements that, unlike blocks, __can be nested__ inside of blocks, and even other components. Built for reuse, components tend to be smaller, inline interface elements such as buttons and icons. 

## Component example

The [Call to Action button](/docs/dev/components/buttons/cta-button/) is a straight-forward example of an RDS component.

```html
<a class="c-buttoncta " href="http://www.nooooooooooooooo.com"> Join the darkside</a>
```

**Note**: For easy identification, RDS components are prefixed with `c-`:

## Components must end up in a block

In most other design systems, components are the equivalent of [RDS blocks](#), more complete stand alone user interface elements. RDS components can not stand alone as complete UI elements. They need to be integrated in a block at some point. They are more the equivalent to Atoms or Molecules in [Atomic Design](http://atomicdesign.bradfrost.com/chapter-2/). This is an area where RDS terminology differs slightly from the norm.

**Cool** - the code below is allowable:

```html
...
<main>
    <u-block>
        <b-content>
            <a class="c-buttoncta " href="http://www.nooooooooooooooo.com"> Join the darkside</a>
        </b-content>  
    </u-block>
</main>
```

**Not Cool** - the code below is NOT allowable:

```html
...
<main>
    <a class="c-buttoncta " href="http://www.nooooooooooooooo.com"> Join the darkside</a>
</main>
```

### Components in blocks

Looking at the page below, we can see the interface is made up of several RDS blocks.

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/page-blocks.png" />



Taking a closer look at the Banner block...

<img src="http://cu-raven.s3.amazonaws.com/assets/img/docs/banner-block.png" />

...we can see it is made up of elements dependant on the block, as well as the [CTA button component](#) that is shared across the system.

### Component in components
The same button component found in the banner block...

<a class="c-buttoncta" href="https://central.wordcamp.org" role="button"><span class="u-icon u-icon-text" aria-hidden="true">{% include "icons/heart.svg" ignore missing %}</span>Like this post</a>

...can house an icon component.

## Two component use cases

Component are distributed in the core and therefore available to everyone. However, we can distinguish two types of components by their use cases.

### Body block components

Content creators mostly work with the `b-content` block. They should become familiar with following components to use when needed:

- [Accordion block]({{site.url}}dev/components/content/accordion/)
- [Image Caption]({{site.url}}dev/components/content/imagecaption/)
- [Image Caption]({{site.url}}dev/components/content/imagecaption/)
- [Table]({{site.url}}dev/components/content/table/)
- [Video]({{site.url}}dev/components/content/video/)

### Developer components

The remaining [components]({{site.url}}dev/components/) are available for RDS theming.

## In summary

Blocks and components are the equivalent of reusable widgets. The biggest difference between them is:
 
- components are not complete UI elements and tend to be smaller, inline elements.
- components, unlike blocks, can be nested inside of blocks and other components.
- components can not stand alone on a page without being nested within a block.

