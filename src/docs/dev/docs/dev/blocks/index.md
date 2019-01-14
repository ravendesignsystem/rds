---
layout: base
title: Blocks and Components
banner:
  settings:
    variant: 
  data:
    img:
      url: 
      url_s: 
      opacity: light
      position: 
    breadcrumbs: true
    breadcrumb:
      parent: Dev
    buttons: true
    button: 
    - title: Building blocks & components
      url: news
---
The bulk of RDS interfaces are made up of two reusable component types:

1. Blocks
2. Components

RDS "blocks" and "components" are the equivalent of traditional components found in modern design systems. They are repeatable UX patterns, guided by clear standards, that can be assembled together to build any number of user interfaces. The difference between blocks and components, in RDS, is how they can be used.

## Blocks 
  Blocks make up a distinct section of an interface. Functionally independent, __a block can NOT be nested within another block__. They can, however, consist of components. For the most part, they stack on top of each other as each block occupies its own row. RDS layouts are subdivided into blocks, some of them containing components.

## Components
Components are relatively simple UI elements that, unlike blocks, __can be nested__ inside of blocks, and even other components. Components tend to be smaller, inline interface elements such as buttons and icons.

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

<a class="c-buttons-button" href="https://central.wordcamp.org" role="button"><span class="u-icon u-icon-text" aria-hidden="true">{% include "icons/heart.svg" ignore missing %}</span>Like this post</a>

...can house an icon component.

## In short

Blocks and components are the equivalent of reusable widgets. The biggest difference between the 2 is that a component can be nested inside of any block, or another component.

Next: [Developing Blocks and Components](developing-blocks-components/) 







