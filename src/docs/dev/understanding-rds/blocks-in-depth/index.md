---
layout: base
subsite: dev
content: true
title: Blocks in-depth
---
RDS Blocks are the equivalent of "components" in other [design systems](#). They are chunks of reusable code that can be assembled together in different combinations to build any number of user interfaces. 

Pretty much every UI element on screen is a Block. Since they make up the bulk of user interfaces in RDS, this section in the documentation offers a deep dive into Blocks.

## Block usage standards

In their simplest form, RDS Blocks are grouped snippets of HTML, CSS, and sometimes JS. The UI equivalent to Lego blocks, you can build each Block by itself and then easily attach them together.

However, RDS Blocks are guided by clear standards and a shared set of principles in order to:

- create consistent UI and UX experiences, 
- dictate where and how Blocks can be used,
- establish consistent spacing across the system,
- meet Carleton's online branding standards.

To further the Lego analogy... unlike when you grab a tub of randomly sized and coloured Lego blocks and start building without any real forethought, we are trying to to build the equivalent of a themed [Lego set](https://en.wikipedia.org/wiki/Lego#Lego_set_themes) While not quite as strict, our goal is comparable to using Star-Wars lego to build an (X-Wing)[https://shop.lego.com/en-CA/product/X-Wing-Starfighter-75218]. The theme provides standarized 

### Creativity within a box

Extending the Lego analogy... some critics suggest in recent decades Lego has become [less creative](specialised pieces and instruction manuals) because of the increase of specialised pieces and instruction manuals. The goal of any good design system should not be to stifle creative. 

If RDS interfaces were to Star-Wars lego Starships, we don't provide step by step instructions to build an (X-Wing)[https://shop.lego.com/en-CA/product/X-Wing-Starfighter-75218]. But we do have guidelines and rules for how certain types of blocks can be used. So, when you are building your ships (interfaces) your cockpit blocks (header blocks) need to go on top and your landing gear (footer blocks) must go on the bottom. Some sane guidelines so your pilot can eject properly and land the ship on its wheels. But by all means, when building the rest, add on the Millennium Falcon's secret compartment or a Star Destroyers proton beam. Make the best interfaces that match your content requirements.

Note: to further creativity we have instructions for [building your own Blocks](#).





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