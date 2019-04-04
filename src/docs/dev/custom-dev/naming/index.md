---
layout: base
title: BEM & the Naming of Things
subsite: dev
content: true
banner:
  breadcrumbs:
    grandparent: Dev
    parent: Blocks
---

Blocks and components are built in a managed approach that follow a predictable pattern and the code used should be as transparent and self-documenting as possible.

## BEM Naming Convention

To better understand the relationship between our HTML and CSS, RDS uses a declarative syntax based on the [BEM methodology](https://en.bem.info/methodology/).

### Blocks

```css
.block {}
.block__element {}
.block--modifier {}

.component {}
.component__element {}
.component--modifier {}
```

* `.block` or `.component` is the highest level and represents the block or component name.
* `.block__element` or `.component__element` represents a descendent that helps form .block as a whole.
* `.block--modifier` or `.component--modifier` represents a different state or version of .block or a .block__element.

For more reading on BEM [check these awesome resources](https://github.com/sturobson/BEM-resources).

## Block and Component Class Namespacing

While the following documentation uses blocks as examples, the same principles would apply to components, the exception being that the prefix would be `c-` instead of `b-`. To provide short, but descriptive information in the markup, the block name must use the following pattern:

```html
<div class="prefix-name">
```
Where the:

* __prefix__ is either 'b-' or 'c-' indicating whether it is a block or a component.
* __name__ is its assigned unique name. The block name should describe its purpose as best as possible.

For example, the banner on this page is a block, and has a class of `b-banner`.

### Example One: Banner Block

Using the banner on this page as an example, the namespace used would be:

```html
<div class="b-banner">
```
Note:

- `b-` signifies this as a block.
- `banner` tells us the block name.

View more examples of the [banner block]({{site.url}}dev/blocks/header/banner) and the various name spaces.

### Example Two: Footer Brand Block

Using the footer on this page as an example, the namespace used would be:

```html
<ul class="b-footerbrand">
```
Note:

-  `b-` signifies this as a block.
- `footerbrand` tells us the block name.

**Important note**:

- block names should not have spaces or hyphens. Even though the above block's proper name is `Footer Brand`, the class name needs to be `footerbrand` and should *not* be `footer-brand`. This avoids confusion over what the third word in the series signifies.

<!-- There are only two hard things in Computer Science: cache invalidation and naming things. https://quotesondesign.com/phil-karlton/

An important part of system design is naming conventions. The systems naming conventions should be used in all designs, specs and communication, and are reflected in the naming of text styles, symbols and libraries in Sketch. The ultimate goal is for the code (React and CSS) to also use the same names, so everyone is speaking the same language.


Never mash word together use hyphen.


js
Variable naming is one of the most important and complex skills in programming. Please spend some time thinking about the right name for a variable before declaring it.
Some good-to-follow rules are:

Use human-readable names like userName or shoppingCart.
Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
Make the name maximally descriptive and concise. Examples of bad names are data and value. Such a name says nothing. It is only ok to use them if it’s exceptionally obvious from the context which data or value is meant.
Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables like currentUser or newUser, but not currentVisitor or a newManInTown. -->
