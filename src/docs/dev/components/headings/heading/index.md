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
The Heading component provides [certain blocks](#blocks-with-headings) the option to employ a heading at the start of the block. Use the Heading component for block headers and introductory content.

<h2 class="c-heading">Base Heading component example</h2>

```html
<h2 class="c-heading">Base Heading component</h2>
<u-block...
```

**Note:** the first heading in the Heading component is always an `<h2>`.

## Centered Heading component 

In [single column layouts](#), the Heading component can be centered using the <br> `c-heading--center` modifier.

<h2 class="c-heading c-heading--center">Centered Heading component</h2>

```html
<h2 class="c-heading c-heading--center">Centered Heading component</h2>
```

## Subheadings and paragraphs

An `<h3>` subheading and a single paragraph can be used either together or individually. 

<header>
    <h2 class="c-heading">Heading with Paragraph</h2>
    <p>There should only be one, short paragraph within heading components.</p>
</header>

```html
<header>
    <h2 class="c-heading">Heading with Paragraph</h2>
    <p>There should only be one, short paragraph within heading components.</p>
</header>
```
<br>
<header>
    <h2 class="c-heading c-heading--center">Centered Heading with Paragraph</h2>
    <p>There should only be one, short paragraph within heading components</p>
</header>

```html
<header>
    <h2 class="c-heading c-heading--center">Centered Heading with Paragraph</h2>
    <p>There should only be one, short paragraph within heading components.</p>
</header>
```
<br>
<header>
    <h2 class="c-heading">Heading with Paragraph and Subheading</h2>
    <p>There should only be one, short paragraph within heading components.</p>
    <h3>Subheadings following an h2 need to be an h3.</h3>
</header>

```html
<header>
    <h2 class="c-heading">Heading with Paragraph and Subheading</h2>
    <p>There should only be one, short paragraph within heading components.</p>
    <h3>Subheadings following an <code>h2</code> need to be <code>h3</code>s.</h3>
</header>
<u-block...
```

## Blocks with headings

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
