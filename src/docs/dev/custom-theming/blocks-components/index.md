---
layout: base
title: Naming Blocks and Components
content: true
banner:
  breadcrumbs:
    grandparent: Dev
    parent: Blocks
---

<!-- Blocks and components are built in a managed approach that follow a predictable pattern and the code used should be as transparent and self-documenting as possible.

## BEM Naming Convention

To better understand the relationship between our HTML and CSS, RDS uses a declarative syntax based on the [BEM methodology](https://en.bem.info/methodology/).

```css
.block {}
.block__element {}
.block--modifier {}
```

* .block is the highest level and represents the block/component name.
* .block__element represents a descendent that helps form .block as a whole.
* .block--modifier represents a different state or version of .block or a .block__element.

For more reading on BEM [check the awesome resources](https://github.com/sturobson/BEM-resources). -->

<!-- ## Core Block Class namespacing

To glean even more information from the HTML, the block name must use the following pattern:

```html
<div class="prefix-section/type-name">
```
Where the:

* __prefix__ is either 'b-' or 'c-' indicating whether it is a block or a component.

* __section__ refers to the section of the template where the block can be used. Available sections include: `header`, `main`, `footer` and `modal`. If a block can be used in multiple template sections, it is given a type. Examples of block types are: `nav` and `listing`.

* __name__ is its assigned unique name. The block name should describe its purpose as best as possible. -->

<!-- ### Namespacing example - the Banner block

Below is the opening HTML markup for the [Banner block](/docs/blocks/header/banner/):

```html
<div class="b-banner u-block-full u-block-full--grey">
```
Note:

- `b-` signifies this as a block.
- `header-` tells us this block can only be used in the semantic Header element.
- `banner` tells us the block name. -->

<!-- ### Namespacing Example - the List Group block

Below is the opening HTML markup for the [List Group block](/docs/blocks/listing/list-group/):

```html
<ul class="b-listing">
```
Note:

-  `b-` signifies this as a block.
- `listing-` tells us this can be used in multiple sections and belongs to the Listing block type.
- `listgroup` tells us the block name.

**Important note**:

- block names should not have spaces or hyphens. Even though the above block's proper name is List Group, the class name needs to be `listgroup` and should *not* be `list-group`.

toDO add and link - View all of our CSS namespacing here - (u-, l-) -->

<!-- ## Core Component class namespacing

Components follow the same namespacing rules as blocks but since components are never restricted to sections of a template their convention only use type and never section.

```html
<div class="prefix-type-name">
```

### Component namespacing example - the Button component

Below is the opening HTML markup for the [Button component](/docs/components/buttons/button/):

```html
<a class="c-buttoncta" href="http://www.nooooooooooooooo.com">Base button</a>>
``` -->

## Organizing block partials in themes

These naming conventions help make the code more transparent and help us find associated partials. The SCSS file for List Group block, in the example above, should be found under a folder structure similar to this:

```md
├── scss
│   ├── blocks
│       ├── listing
│           ├── _listgroup.scss
```

## Five important naming rules

The following rules are key for creating consistent blocks and components in RDS.

### 1. Only use the prefix-type-name convention in the first tag
The parent block tag is the only tag that requires the full naming convention as per below.

```html
 <div class="prefix-section/type-name">
```

All element class names should exclude the prefix `b-` or `c-` and the `type-` and use BEM namespacing on just the block's name. Do not repeat the prefix and block type in every element's class name.

#### Incorrect
```html
<ul class="b-header-foo">
<li class="b-header-foo__item">
    <a class="b-header-foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
</li>
</ul>
```

#### Correct
```html
<ul class="b-header-foo">
    <li class="foo__item">
        <a class="foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
    </li>
</ul>
```

**Note for the kids watching at home**: don't do this! It breaks with BEM conventions. Stick to the BEM rule of repeating the `exactClasName__elementName`. Due to long class names, we diverge from BEM in RDS for reasons of brevity. We get away with it because we have a process to guarantee all class names are unique.

### Modifiers on parent tags

While sub elements should exclude the prefix pattern, modifiers on the block's parent class name must repeat the full prefixed name.

#### Incorrect
```html
<ul class="b-header-foo foo--red">
    <li class="foo__item">
         <a class="foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
    </li>
</ul>

```
#### Correct
```html
<ul class="b-header-foo b-header-foo--red">
    <li class="foo__item">
        <a class="foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
    </li>
</ul>
```
### 2. Don't use grandchildren BEM selectors
The double underscore pattern should only appear once in a selector class name. Don't use extra grandchildren selectors when elements are nested two or more levels deep.

#### Incorrect
```html
<ul class="b-header-foo">
    <li class="foo__item">
        <a class="foo__item__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
    </li>
</ul>
```
#### Correct
```html
<ul class="b-header-foo">
     <li class="foo__item">
         <a class="foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
     </li>
</ul>
```
### 3. Don't add class names to elements without any associated styles
While a unique class name (even if it has no css) is required at the parent block name level, do not add class names to elements if they don't have any styles associated with them.

#### Incorrect

```html
<div class="b-main-content">
    <p class="content__para">This paragraph uses the base p style.</p>
</div>
```
#### Correct

```html
<div class="b-main-content">
    <p>This paragraph just uses the base p style so there is no need to add a class name.</p>
</div>
```
The code above is fine. Since no styles are attached to the paragraph, there is no need to create a class on the `<p>` tag.

### 4. Names made up of two words should never be hyphen delimited

Names made up of two words, or more, should never be broken up with a hyphen. The reason for this is to help identify if the block is a core RDS block or a theme block further outlined below.


#### Incorrect

```html
<div class="b-listing-list-group">
```

#### Correct

```html
<div class="b-listing">
```
### 5. Theme blocks, not a part of core require a unique theme identifier within each class name.

For further reference, see the next item below.

## Theme Block and Component class namespacing

All of the namespacing rules above apply when you are creating new block for your own theme, **except you must add an extra namespace for your theme**.



```html
<div class="prefix-themeShortName-section/type-name">
```
Where the:

* __prefix__ is either 'b-' or 'c-' indicating whether it is a block or a component.

* __themeShortName__ To avoid naming collisions, add a unique theme name (best if short or abbreviated) to your block classed.

* __section__ refers to the section of the template where the block can be used. Available sections include: `header`, `main`, `footer` and `modal`. If a block can be used in multiple template sections, it is given a type. Examples of block types are: `nav` and `listing`.

* __name__ is its assigned unique name. The block name should describe its purpose as best as possible.

For example, for the Future Funder theme we have established a unique theme identifier as `ff` and a new header block would look like this:

```html
<ul class="b-ff-header-foo">
     <li class="ff-foo__item">
         <a class="ff-foo__url" href="https://en.wikipedia.org/wiki/Common_raven">foo</a>
     </li>
</ul>
```

**Note**: notice how the `ff` theme identifier is used on every class in the block.

### Identifying theme blocks vs core blocks

Even if you aren't the author of the theme an easy way to identify whether a block is a theme block or a core RDS block is to count the number of hyphened names used in the first class name. Core blocks only have three hyphened names in the opening class. While a theme block would have four.

For example, we know the following is a theme block because it has four names: `b-ff-header-foo`.

Finally, we know the following is a core block because it only has three: `b-header-foo`.

**Note**: while you can use the same block name (`foo` in the example above) for a block in your theme that already exists in core, it is not recommended.




