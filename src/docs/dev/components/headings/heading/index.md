---
layout: docs
title: Heading component
subsite: dev
menu: dev
section: Components
banner:
  breadcrumbs:
    grandparent: Components
    parent: Headings
meta:
    version: 1.0.0
    status: under review
    handle: heading
    type: Fixed-width
    path: heading/
    theme: Core
---
The Heading component specifies a block's header. Use it for introductory content in [blocks that allow for heading components](#blockswithheadings).

## Base Heading

```html
<header>
    <h2 class="c-heading">Heading component example</h2>
</header>
```

The base Heading component is always an `<h2>` wrapped in a `header` tag.

## Heading component centered

In [single column layouts](#), the Heading component can be centered using the <br> `c-heading--center` modifier.

```html
<header>
    <h2 class="c-heading c-heading--center">Centered Heading component example</h2>
</header>
```

<header>
    <h2 class="c-heading c-heading--center">Centered Heading component example</h2>
</header>

### Subheadings 

Centered Heading components can have slightly longer subheadings. 

```html
<header>
    <h2 class="c-heading c-heading--center">Centered Heading component example</h2>
    <p>Centered Heading components can have slightly longer subheadings.</p>
</header>
```

<header>
    <h2 class="c-heading c-heading--center">Centered Heading component example</h2>
    <p>Centered Heading components can have slightly longer subheadings.</p>
</header>

### Blocks with headings

The heading component can be used in the following blocks:

- [Card grid block]
- [Content block]
- [Listing block]
- [Text Image block]

## Implementation Notes

The Heading component can only be used once per block. While the Heading component can be used in the [b-content](#) block, it is important to only use it once at the beginning of the block. 


## Content guidelines

- Component headings are always `<h2`>'s. Make sure to not skip header levels (for example, from H2 to H4).
- Subheadings are meant to stand out and can be used to grab the reader's attention.
