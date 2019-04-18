---
layout: base
subsite: dev
content: true
title: Blocks In-Depth
banner:
  breadcrumbs:
    parent: Main concepts
---
RDS Blocks are the equivalent of "components" in other [design systems](#). They are chunks of reusable code that can be assembled in different combinations to build any number of user interfaces.

Since they account for pretty much every UI element on screen, this section provides a must-read, deep dive into RDS Blocks.

## Block guidelines and rules

In their simplest form, RDS blocks are grouped snippets of HTML, CSS, and sometimes JavaScript (JS). The UI equivalent to Lego blocks, you can build each block by itself and then easily attach them together. Blocks make up a distinct section of an interface. Functionally independent, a block can NOT be nested within another block.

To further the Lego analogy, unlike a tub of randomly sized/coloured Lego blocks, RDS Blocks are more the equivalent to Lego blocks found in [themed Lego sets](https://lego.fandom.com/wiki/Theme). Except, instead of, pirates or Star-Wars, our theme is Carleton University.

Some critics suggest Lego has become [less creative](#) due to the increase of specialized pieces, instruction manuals and strict rules that govern how they are assembled by the end user. If RDS interfaces are akin to Lego Star-Wars spaceships, while RDS does impose rules, when building your interfaces we don't expect you to follow exact step-by-step instructions like you would in building a replica of an [X-Wing](https://shop.lego.com/en-CA/product/X-Wing-Starfighter-75218). However, there rules and guideline to follow.

For example, when you are building your spaceships (interfaces), your cockpit blocks (header blocks) need to go on top, and your landing gear (footer blocks) must go on the bottom. For the rest of the ship, feel free to add in the Millennium Falcon's secret compartment (RDS Block) or a Star Destroyers proton beam (another Block). Make the best interfaces (coolest ships) you can to match your content requirements. However, you are expected to follow our Block guidelines so your pilot can eject properly and land their ship on its wheels.

TODO: add some images

**Note**: to further creativity we have instructions for [building your own Blocks](#).

## Block terms and attributes

All blocks have the following attributes:

- a [type](#block-types-and-spacing)
- a [handle](#block-handles)
- a [version](#block-versioning)
- a [status](#block-status)
- [properties](#props)
- designated [block-sections](#sections)
- associated CSS
- an HTML template and data options
- their own [documentation](#block-documentation)

**Some blocks** have:

- [headings](#block-headings)
- [variants](#block-variants)
- designated themes
- associated JavaScript

## Block handles

A block's handle refers to its unique short name for use in code.

Block handles must:

- be lowercase. For example, the [Content block's](#) handle is `'content'`.
- be one word without spaces or dashes. For example, the Card Grid block's handle is `'gridcard'`. Note: the order of words may change.
- follow [RDS naming conventions](#). For example, the Text and Image block's handle is `'textimg'` which uses the [system's abbreviations](#).

The formula for each block's main CSS class name is the `b-` prefix + a block's handle. For example, the Banner block's class name is `b-banner`.

A block's handle should mirror its full name as best as possible.

For example, for a block named "Doe Ray Me":

- Good handle name = `doerayme`.
- Bad handle name = `farsoela`.

### Handles for folder and file names

A block's handle is used to name all of its associated files and folders.

For example, if you're using a package manager like npm to include RDS in your project, the file structure for importing block SCSS and JS modules looks like this:

```html
your-project/
└── node_modules/
    └── rds
        └── blocks
            └── masthead
                ├── masthead.js
                └── masthead.scss
```

If you are creating a custom block for your theme, follow this naming convention. For example, if creating a block called "foo," your folder structure would be similar to this:

```html
your-project/
├── blocks
│   └── foo
│       ├── foo.js
│       └── foo.scss
└── node_modules/
    └── rds
        └── blocks
            └── ...
```

**Note for custom themers**: [themes](#) also have [handles](#). For custom blocks the formula for a block's class name is "`b-` + {theme handle} + {block handle}". For example, the class name for a new block called "Foo" in a custom theme with the (theme) handle of "cu" would be `b-cu-foo`.

By following these conventions, we can avoid conflicts and easily distinguish custom blocks from core RDS blocks. If a block's primary class name has one hyphen (b-content), we know it is a core block. Consequently, if a block's primary class name has two hyphens (b-cu-foo), we know it is a custom theme block.

Also, the "Doe Ray Me" named block above is used to exaggerate a point. You should keep block names to two words max while trying to describe their use case as best as possible. We know, [naming in programming is hard](#).

## Block versioning

RDS uses [Semantic Versioning (SemVer)](https://semver.org). In addition to maintaining a [SemVer for the RDS core package](#), each block and component maintains it's own version.

MINOR or Patch version changes are always backwards compatible and safe to use within the same overall Major version of RDS.
For example, it is okay to use a block with the version 1.5.6 while using RDS with a version of only 1.1.0. Furthermore, feel free to use the [content block](#) version 1.3.1 with [listing block](#) version 1.5.0. The HTML markup, style and script for each block is encapsulated so they won't conflict.

However, if the RDS package changes major versions, for example goes from version 1.0.0 to version 2.0.0, you can only use blocks with a major number of 2 (equivalent to the core version). It is possible that a block's markup will have changed between major versions.

**Bad**: if using RDS 2.2.1, don't use a block with the version 1.5.6.<br>
**Good**: if using RDS 1.3.2, you can use a block with the version 1.2.1.

**Note**: the best way to remain current is to install RDS via a package manager like [npm](#) or [Composer](#). Otherwise, to remain current, try and integrate comments displaying a block's version into your templating code.

## Block Variants

Variants change the appearance of a block, usually with modifier classes. Variants are used to extend a base block when it has multiple different possible implementations.  Variants of a block are considered the same block type and generally share CSS and template code. The [Listing block](#) is an excellent example of a block with several variants.

## Block headings
 Some [max-width blocks](#) can have headings. Block headings make use of the [Heading component](#). The heading HTML resides outside block's code in between the `u-block` wrapper tag (which should be a `<section>` tag) and the block's opening tag (which always starts with `b-`).

For example, here is a simple block without a header:

```html
 <div class="u-block u-block--s u-block--white">
     <div class="b-foo">
        <p>A block without a heading</p>
    </div>
</div>
```

Here is the same block with a header:

```html
 <section class="u-block u-block--s u-block--white">
    <h2>Foo block</h2>
    <p>A block without a heading</p>
</section>
```
Notice how the utility block wrapper `<div>` was changed to a `section>` tag. Learn more about [setting up block headings](#).

## Block status
Blocks in RDS are labelled with status labels that reflect their state of completion and readiness to use.

### Block status labels

- **Prototype**: block is new and should not be used in production.
- **Ready**: ready to be used in production.
- **Under review**: the block is currently being reviewed for quality assurance.
- **Deprecated**: the block is supported but not recommended.
- **Not available**: the block is no longer supported and should be removed.

Note: remember even though a block is available they are restricted to page sections and some are not available in certain themes. TODO are we going with themes.

## Block sections

While Blocks can be stacked in any order, they are restricted to specific page [sections](#). Sections are denoted by semantic HTML 5 elements, including:

- Header - `<header>`
- Main - `<main>`
- Aside - `<aside>`
- Footer - `<footer>`

For example, the [Content block](#) (`b-content`) can only be used within the `<main>` section.

Some blocks can be used in multiple sections. For example, the [Search block](#) (`b-search`) can be used inside both the `<header>` and `<aside>` sections.

Section restrictions are available in each block's respective [documentation](#).

**Note**: While an HTML document can have multiple `<header>` and `<footer>` elements. In RDS, there can only be one header and footer section. The 'Header section' is always denoted by the first `<header>Header section</header>` on the page. The 'Footer section' by the last `<footer>Footer section</footer>` on the page. For example:

## Block types and spacing

There are two types of Blocks:

1. Max-width Blocks
2. Full-width Blocks.

### Max-width Blocks

These Blocks use modifiers of the `u-block` utility class to set the content's max-width to either small (s), medium (m) or large (l) presets. For example:
{%include 'docs/inc/close.twig'%}
<div class="u-block u-block--s"><div style="background-color: lightgrey">
<p>This is using the code below, which restricts the content to the smallest max-width.</p>
</div></div>
{%include 'docs/inc/open-b-content.twig'%}

```html
<div style="background-color: lightgrey" class="u-block u-block--s">
 <p>Restricts the content to the smallest max-width.</p>
</div>
```

{%include 'docs/inc/close.twig'%}
<div class="u-block u-block--m"><div style="background-color: lightgrey">
<p>This is using the code below, which restricts the content to the medium max-width.</p>
</div></div>
{%include 'docs/inc/open-b-content.twig'%}

```html
<div style="background-color: lightgrey" class="u-block u-block--m">
 <p>Restricts the content to the medium max-width.</p>
</div>
```

{%include 'docs/inc/close.twig'%}
<div class="u-block u-block--l"><div style="background-color: lightgrey">
<p>This is using the code below, which restricts the content to the largest max-width.</p>
</div></div>
{%include 'docs/inc/open-b-content.twig'%}

```html
<div style="background-color: lightgrey" class="u-block u-block--l">
 <p>Restricts the content to the largest max-width.</p>
</div>
```

All Max-Width Blocks must use either a `u-block--s`, `u-block--m`, or `u-block--l` class in its opening tag.

**Note**: for better readability, the recommended max-width for content blocks with type is `u-block--s`.

TODO: add some images

#### Max-width Block padding

To bring a rhythm and familiar flow from page to page, all Max-width Blocks have consistent padding applied to them.

TODO: add some images

#### Max-width background colors - creating rows

While the content within Max-Width Blocks is restricted in width, the rest of the block extends the full length of the screen or it or to its layout container restrictions. This allows us to create blocks with differing background colours that appear as rows.

For example:
{%include 'docs/inc/close.twig'%}
<div class="u-block u-block--s u-block--grey"><div class="b-example">
<p>This is using the code below, which by adding both `u-block--s` and `u-block--grey`, we create a row with a grey background that stretches 100%, while restricting the content's width to the smallest size.</p>
</div></div>
{%include 'docs/inc/open-b-content.twig'%}

```html
<div class="u-block u-block--s u-block--grey">
    <div class="b-example">
         <p>Create a row with a grey background that stretches 100%, while restricting the content width to the small size.</p>
    </div>
</div>
```

A color variable of either `u-block--white`, `u-block--grey`, or `u-block--black` must be applied to all Max-Width Blocks. Even if the body background colour is white, you still need to put `u-block--white` on your block.

These block utilities (`u-block`) are important as they adjust spacing between blocks. For example, if you put two blocks with the class `u-block--grey` back to back the spacing between them needs to be less then when a block with `u-block--grey` is followed by `u-block--white`.

TODO: add some images

You can use different coloured background rows to separate different sections of content. For example:

{%include 'docs/inc/close.twig'%}
<div class="u-block u-block--s u-block--grey"><div class="b-content">
<p>This is a content section</p>
</div></div>
<div class="u-block u-block--s u-block--white"><div class="b-content">
<p>This is a new content section</p>
</div></div>
<div class="u-block u-block--s u-block--grey"><div class="b-content">
<p>This is a new content section</p>
</div></div>
{%include 'docs/inc/open-b-content.twig'%}

```html
<div class="u-block u-block--s u-block--grey">
    <div class="b-content">
        <p>This is a content section</p>
    </div>
</div>
<div class="u-block u-block--s u-block--grey">
    <div class="b-content">
        <p>This is a new content section</p>
    </div>
</div>
<div class="u-block u-block--s u-block--grey">
    <div class="b-content">
        <p>This is a new content section</p>
    </div>
</div>
```
[View all of the Max-Width Blocks](#) available in RDS.

**Note**: coloured block rows can not be used in the [CMS theme](#).

## Full-width Blocks

Full-width Blocks fill the entire width of the browser window's size and cannot be used inside of layouts. Because of this they should not use any of the u-block width modifiers, such as `u-block--s`.

Instead they must use always use the block utility class `u-block--full`.

[View all of the Full-Width Blocks](#) available in RDS.

### For review

The main difference between the two different types of Blocks are...

**Max-width Blocks** have:

 - their content is restricted to a maximum width, on large screens.
 - consistent padding applied to them.
 - a background-color that fills the width of the screen.
 - the ability to be used inside of [layouts](#).

while...

 **Full-width Blocks**:

 - have their content fill the entire width of the browser window's size.
 - do not have padding applied to them.
 - can not used inside of [layouts](#).

## Block properties

Blocks are grouped HTML, CSS and sometimes JS partials working together to form a user interface element.

- The HTML controls their structure.
- The CSS is responsible for their presentation.
- JS can be used to control their behaviour.

Conceptually, blocks are made up of a set of properties as a way to accept data. Block properties are typed fields set on a specific instance of a block to be referenced from within its markup. The concept is that blocks can accept data and output a unique version of itself with that data.

When setting up your template logic to access properties values, consider splitting those properties into the following two conceptual categories:

- block settings
- block fields

### Block settings

Block settings are used to control global block meta and parameters, including:

- block headings
- background colour
- block width (s,m,l)
- block [variants](#)

#### Block headings

Since block headings  reside outside of a block's code, they can be considered a setting.

#### Background colour settings

All blocks have a background colour setting of either white, grey or black. The default setting should be white which works in most use cases.

#### Block width setting

All [max-width block's](#) have a width setting of either small (s), medium (m) or large (l). The default should be small.

#### Block variant setting

Some blocks have [variants](#) that you may want to identify in your settings.

### Block fields

With the exception of [include blocks](#), all blocks have fields assigned to them. These are your content fields who's values, unlike block settings, appear on the rendered front-end display of the block.

#### Field types

Field types indicate the type of content and their format needed. At the end of the day, they all return HTML strings. Existing field types include:

- text: alphanumeric string of letters, numbers, and (in some cases) symbols.
- numbers: must be numeric characters.
- date/time: properly-formatted Date and/or Time allowed in your language used.
- url: properly structured URL, referencing a web resource.

#### Field restrictions

Some fields have characters limits indicating that their strings will be cut off at a set length.

#### Required fields

Some block fields are require values, while other are optional.

## Separating data and markup

 RDS blocks were created with a preference to be able to control blocks from an external database or API. A benefit of this approach is that the data can come from anywhere, including a headless CMS.

#### Example of feeding values to block properties

If you had a simple block template set up in the following macro...

```twig
{% verbatim %}
{% macro simple(settings, data) %}
<div class="u-block u-block--{{ settings.bgcolor }}>
    <h2>{{ data.title }}</h2>
    <p>{{ data.excerpt }}</p>
</div>
{% endmacro %}
{% endverbatim %}
```

...and wanted to render the following HTML.

```HTML
<div class="u-block u-block--grey">
    <h2>Hello world</h2>
    <p>Lorem ipsum</p>
</div>
```

Which would look like this:

<div class="u-block u-block--grey">
    <h2>Hello world</h2>
    <p>Lorem ipsum</p>
</div><br>

...a JSON schema could look like this:

```json
{
  "settings": [
    {
      "bgcolor": "grey"
    }
  ],
  "fields": [
    {
      "title": "Hello world",
      "excerpt": "Lorem ipsum"
    }
  ]
}
```

To change your output to:

```HTML
<div class="u-block u-block--black">
    <h2>Darkness</h2>
    <p>Lorem ipsum</p>
</div>
```
<div class="u-block u-block--black">
 <h2>Darkness</h2>
 <p>Lorem ipsum</p>
</div><br>

Your JSON would look like this:

```json
{
  "settings": [
    {
      "bgcolor": "black"
    }
  ],
  "fields": [
    {
      "title": "Darkness",
      "excerpt": "Lorem ipsum"
    }
  ]
}
```

**Recommendation only**: This is just one recommended approach. How you set up your templates is ultimately up to you. We do provide [templating examples](#) that follow this pattern.

TODO: add some images of acf setup

TODO: add some images of the make up a block with settings and data

## Available components

For DRYer code, many blocks contain components in their markup. Optional components are available for some blocks. For example, the [Content block] can contain the following components: c-blockquote, c-table, c-form, c-accordion.

## Block documentation

Each RDS block has it's own [documentation on this website](#) providing examples, uses cases, design and code references detailing most of the concepts above. Before integrating a block, we suggest you visit it's documentation page.

## Principles

 We should be writing as little CSS & JavaScript as possible

- theme?
- qa

Blocks allow us to separate RDS UI into smaller, more manageable parts and provide consistent user experiences across all RDS platforms.

### What does making blocks with love mean?

It means:

- All blocks need to be crafted in a meticulous manner with a focus on accessibility, clean, semantic markup and lean CSS styles while following the design system standards guiding their creation and use.
- All blocks need to go through a Release Management process where they are well-tested on all browsers and platforms. Multi-step code reviews and quality assurance are required before any block can be released in the wild.
- All blocks need to be documented and commented enough to be easily integrated and expandable in future.

Setting and options and variant

Data

block types - banners - headers - footers etc

### building blocks

Designing them - question - do i need a new block there are lots - what ux problem is it trying to solve

use semantic html

HTML - schema - h cards - semantic - accessible

Sent from my iPhone

-

## References

- [Building A Static Site With Components Using Nunjucks](https://www.smashingmagazine.com/2018/03/static-site-with-nunjucks/)
- [How to Modularize HTML Using Template Engines and Gulp](https://zellwk.com/blog/nunjucks-with-gulp/)
- [An Overview of JavaScript Templating Engines](https://www.sitepoint.com/overview-javascript-templating-engines/)
