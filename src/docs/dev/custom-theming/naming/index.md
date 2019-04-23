---
layout: docs
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

## File and Folder Structure

These naming conventions help make the code more transparent and help us find files related the block or component. The following folder overview demonstrated the ideal structure when building blocks and components, including associated scss and js files.

```md
├── project
│   ├── blocks
│       ├── banner
│           ├── _banner.scss
│           ├── banner.php
│           ├── banner.js
│       ├── footerbrand
│           ├── _footerbrand.scss
│           ├── footerbrand.php
│   ├── components
│       ├── button
│           ├── _button.scss
│           ├── button.php
│           ├── button.js
```
