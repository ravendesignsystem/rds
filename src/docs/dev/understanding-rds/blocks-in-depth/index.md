---
layout: base
subsite: dev
content: true
title: Blocks in-depth
---
RDS Blocks are the equivalent of "components" in other [design systems](#). They are chunks of reusable code that can be assembled in different combinations to build any number of user interfaces. 

Since they account for pretty much every UI element on screen, this section provides a must-read, deep dive into RDS Blocks.

## Block guidelines and rules

In their simplest form, RDS Blocks are grouped snippets of HTML, CSS, and sometimes JavaScript (JS). The UI equivalent to Lego blocks, you can build each Block by itself and then easily attach them together. 

To further the Lego analogy, unlike a tub of randomly sized/coloured Lego blocks, RDS Blocks are more the equivalent to Lego blocks found in [themed Lego sets](https://lego.fandom.com/wiki/Theme). Except, instead of, pirates or Star-Wars, our theme is Carleton.

Some critics suggest Lego has become [less creative](#) due to the increase of specialized pieces and instruction manuals. If RDS interfaces are akin to Lego Star-Wars spaceships, while RDS imposes rules, we don't expect you to follow step-by-step instructions to build a replica of an [X-Wing](https://shop.lego.com/en-CA/product/X-Wing-Starfighter-75218). 

For example, when you are building your ships (interfaces), your cockpit blocks (header blocks) need to go on top, and your landing gear (footer blocks) must go on the bottom. When building the rest of the ship, feel free to add in the Millennium Falcon's secret compartment (RDS Block) or a Star Destroyers proton beam (another Block). Make the best interfaces (coolest ships) you can to match your content requirements. However, you are expected to follow our Block guidelines so your pilot can eject properly and land their ship on its wheels. 

TODO add some images

**Note**: to further creativity we have instructions for [building your own Blocks](#).

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

## Block versions

RDS uses [Semantic Versioning (SemVer)](https://semver.org). In addition to maintaining a [SemVer for the RDS core package](#), each block and component maintains it's own version. 

MINOR or Patch version changes are always backwards compatible and safe to use within the same overall Major version of RDS.
For example, it is okay to use a block with the version 1.5.6 while using RDS with a version of only 1.1.0. Furthermore, feel free to use the [content block](#) version 1.3.1 with [listing block](#) version 1.5.0. The HTML markup, style and script for each block is encapsulated so they won't conflict. 

However, if the RDS package changes major versions, for example goes from version 1.0.0 to version 2.0.0, you can only use blocks with a major number of 2 (equivalent to the core version). It is possible that a block's markup will have changed between major versions.

**Bad**: if using RDS 2.2.1, don't use a block with the version 1.5.6.<br>
**Good**: if using RDS 1.3.2, you can use a block with the version 1.2.1.

**Note**: the best way to remain current is to install RDS via a package manager like [npm](#) or [Composer](#). Otherwise, to remain current, try and integrate comments displaying a block's version into your templating code.

## Separating data and markup

Blocks are grouped HTML, CSS and sometimes JS partials working together to form a user interface element. 

- The HTML controls their structure.
- The CSS is responsible for their presentation.
- JS can be used to control their behaviour.

However, what ultimately controls their end structure and presentation is a block's data and its data requirements. RDS blocks are created with a preference to be able to control blocks from an external database or API. The concept is that blocks can accept data and output a unique version of itself with that data. The benefits of this approach are that the data could come from anywhere, including a headless CMS.

We recommend building the logic for your templates by breaking block data into the following two categories:

- block settings
- block data 

### Block settings

Block settings are parameters used to control system-wide [block utility classes](#) for controlling options such as block size, background color and [variant](#) types. 

### Block data

This is the data that, unlike block settings, usually appears on the front-end of you block.

### Datatype properties 

Datatype properties relate individuals to literal data (e.g., strings, numbers, datetypes, etc.) and define the data types and areas to be able to render different data in the same component. 

Example 

#### Example

If you had a simple block template set up in the following macro:

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

And wanted to render the following HTML

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

...your JSON would like like this:

```json
{
  "settings": [
    {
      "bgcolor": "grey"
    }
  ],
  "data": [
    {
      "title": "Hello world"
    },
    {
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
  "data": [
    {
      "title": "Darkness"
    },
    {
      "excerpt": "Lorem ipsum"
    }
  ]
}
```
This is our recommended approach. But how you template is ultimately up to you. We do provide [templating examples](#) that follow this pattern as we feel it is the best way to approach sending data to your blocks.

img of acf setup

image of the make up a block with settings and data



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


### Block terms and common attributes

To provide consistency, all RDS Blocks must be wrapped with the `u-block` utility class.

```html
<div class="u-block">
    <!-- all RDS Blocks must be wrapped with the u-block utility class -->
</div>
```
 
Other commonalities for RDS Blocks include that **they all have**:

- a type
- a handle
- a version
- designated sections
- associated CSS
- an HTML template and data options

While **some Blocks** have:

- headings
- variants
- designated themes
- associated JavaScript

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

 img

#### Max-width Block padding

To bring a rhythm and familiar flow from page to page, all Max-width Blocks have consistent padding applied to them.

IMG

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

IMG

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


## Block categories

## Block settings

## Separation of data markup  

## Principles

 We should be writing as little CSS & JavaScript as possible

- types
- Component Status
- handle
0- theme
- section
- headings
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


## Blocks 
  Blocks make up a distinct section of an interface. Functionally independent, __a block can NOT be nested within another block__. They can, however, consist of components. For the most part, they stack on top of each other as each block occupies its own row. RDS layouts are subdivided into blocks, some of them containing components.
  
  ### building blocks
  
  Designing them - question - do i need a new block there are lots - what ux problem is it trying to solve
  
  use semantic html
  
  HTML - schema - h cards - semantic - accessible 
  
  Sent from my iPhone
  
  -
  
  use css that leverages utiltiy classes - lean and mean


RDS is Carleton's system for creating digital harmony across our many web properties. One of the systematic ways to guide our collective efforts is to insure everyone is speaking the same language. This section documents the key concepts and terminology used within RDS' underlying design language, established to create consistency across the platform. 

While this section is a must read for RDS developers, we encourage content creators and site users to read on to get a better understanding of the core concepts that make up RDS.

## A shared vocabulary

The following terms are used throughout RDS to articulate the systems’s underlying structure:

- [Pages](#pages)
- [Sections](#sections)
- [Blocks](#blocks)
- [Components](#components)
- [Layouts](#layouts)
- [Templates](#templates)
- [Themes](#themes)

## Pages 

**A page** refers to the full user interface (UI) or screen rendered in a browser at a given time. Pages display data and handle user interactions. They can be scrollable and include content off screen, as long as it is accessible without reloading the page. Your app or site is a collection of pages that are linked together.

![img of page](http://cu-raven.s3.amazonaws.com/assets/img/docs/page.png)

## Sections

RDS pages are divided into sections to define the structure of a page and isolate certain parts of the document with prescriptive rules. Sections are denoted by semantic HTML 5 elements, including:

- Header - `<header>`
- Main - `<main>`
- Aside - `<aside>`
- Footer - `<footer>`

By defining the above page sections we provide a clear understanding of what role is played by the content within those sections. In addition, it lets us categorize and provide clear use cases for certain content types. For example, the [Banner block](#) is categorized as a *header block* since it can only reside within the Header section. 

TBD: show image of banner blocks

**Note**: A single HTML document can have multiple `<header>` and `<footer>` elements. In RDS, the 'Header section' is always denoted by the first `<header>Header section</header>` on the page. The 'Footer section' by the last `<footer>Footer section</footer>` on the page. For example:

```html
<html lang="en">
<head>
  <title>Example of the definitive RDS Headers and Footers</title>
</head>
<body>
  <header><p>As the first header, THIS IS THE Header section in RDS.</p></header>
  <section>
    <header>
        <h1>This header tag is just a standard HTML 5 semantic element.</h1>
        <p>It has nothing todo with RDS sections.</p>
        </header>
  </section>
  <footer><p>As the last footer, THIS IS THE Footer section in RDS</p></footer>
</body>
</html>
```

![img of template sections ](http://cu-raven.s3.amazonaws.com/assets/img/docs/template.png)

## Blocks 

RDS Blocks are the equivalent to repeatable "components" in other [design systems](#). They are chunks of reusable code, guided by clear standards, that can be assembled together in different combinations to build any number of user interfaces. Blocks allow us to separate RDS UI into smaller, more manageable parts and provide consistent user experiences across all RDS platforms.

To control and provide consistent spacing, all RDS Blockss must be wrapped with the `u-block` [utility class](#).  Anyone integrating or developing with RDS should read both the [Blocks deep dive](#) and [Creating Blocks](#) sections as they really are the key building **blocks** of our design system. 

**Note**: most Blocks are restricted to particular page sections and themes. Before using any Block, review [its documentation](#) to view the rules on where it can be used.

## Components

Similar to Blocks, RDS Components are UI elements built for reuse. Unlike Blocks, Components can be nested inside of blocks, and even other components. Relatively simpler than blocks, components tend to be smaller, inline interface elements such as buttons and icons. Components must be used within a Block and can not be used on their own.


Components are the equivalent to Atoms or Molecules in [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/#atoms) and allow us to keep the CSS code lean as repeated elements are represented by only one abstraction. 

## Layouts
 
 Layouts are used to arrange [Blocks](#) and position them within page [sections](#). If you are working on a one column page design, chances are a layout is not necessary as RDS blocks are designed to stack directly on top of each other. If you need to lay your blocks out in multiple columns, layouts are the means to do so. Layouts also used to set content breakpoints and determine which blocks are visible on different screen sizes.
 
## Templates
 
 Templates allow you to create reusable base markup. Templates can be used to control the overall page design and establish predefined sections for your content blocks. Or, they can be used to build your Blocks and Components by breaking your HTML code into smaller pieces that are overridable on a per-instance basis.
 
 Since RDS is agnostic to what tech stack is being used, templates are not a part of RDS. You could build RDS sites with just straight up HTML but we recommend using a templating engine such as [Twig](#), [Mustache](#), [Blade](#) or [Liquid](#) to separate your HTML structure from the content contained within. 
 
 In order to better build a more maintainable codebase, RDS was developed with [separation of concerns](#) in mind, specifically being able to separate data and markup. In our Block and Component documentation we provide examples of how you might achieve this with template and JSON code snippet examples.
 
## Themes

Themes package up and contain everything needed to build and deploy your entire functional site, including your: 

- assets (images, SVGs)
- templates, 
- layouts, 
- blocks, and components.

At this time, RDS ships with two themes: [CMS](#) and [Framework](#).

All RDS themes depend on the [core](#) distribution package and need to include its required CSS and JavaScript files.
Developers looking to build new tailored themes should read the [Custom Theming section](#).

## In summary

1. RDS sites are made up of a collection of [pages](#pages).
2. Pages are divided into defined [sections](#sections).
3. Sections contain combinations of UI elements called Blocks that make up the overall UI.
4. For even DRYer coding, Blocks may contain reusable Components.
5. Sometimes you will need to use Layouts to arrange the locations of Blocks.
6. We encourage developer to build their Blocks with templating engine and consider separating your date from your markup.
7. Themes package everything up in a consistent user experience.

![img of the RDS makeup](http://cu-raven.s3.amazonaws.com/assets/img/docs/makeup.png)

Remember:

- Blocks are often restricted to certain sections and themes.
- Blocks can never be nested within other blocks.
- Components can be nested in blocks or other components.
- Components must be used within a Block and can not be used on their own.

## References

https://www.smashingmagazine.com/2018/03/static-site-with-nunjucks/
https://zellwk.com/blog/nunjucks-with-gulp/
https://www.sitepoint.com/overview-javascript-templating-engines/
