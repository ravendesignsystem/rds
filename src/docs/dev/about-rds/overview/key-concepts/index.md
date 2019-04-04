---
layout: base
subsite: dev
content: true
title: Key concepts that makeup RDS
readingTime: 4:14
---
RDS is Carleton's system for creating digital harmony across our many web properties. One of the systematic ways to guide our collective efforts is to ensure everyone is speaking the same language. This section documents the fundamental concepts and terminology used within RDS' underlying design language, established to create consistency across the platform.

> Our design system isn’t our UI kit or our style guide. It’s the shared language we have when we talk about our work. Read: [The system always kicks back](https://ux.shopify.com/the-system-always-kicks-back-d94b945407f2)

## A shared vocabulary

The following terms are used throughout RDS to articulate the systems’ underlying structure:

- [Pages](#pages)
- [Sections](#sections)
- [Blocks](#blocks)
- [Components](#components)
- [Layouts](#layouts)
- [Templates](#templates)
- [Themes](#themes)

## Pages

**A page** refers to the full user interface (UI) or screen rendered in a browser at a given time. Pages display data and handle user interactions. They can be scrollable and include content off screen, as long as it is accessible without reloading the page. Your app or site is a collection of pages that are linked together.

[test]({{site.url}}foo)

![img of page](http://cu-raven.s3.amazonaws.com/assets/img/docs/page.png)

## Sections

RDS pages are divided into sections to define the structure of a page and isolate certain parts of the document with prescriptive rules. Sections are denoted by semantic HTML 5 elements, including:

- Header - `<header>`
- Main - `<main>`
- Aside - `<aside>`
- Footer - `<footer>`

By defining the above page sections, we provide a clear understanding of what role is played by the content within those sections. Also, it lets us categorize and provide clear use cases for certain content types. For example, the [Banner block](#) is categorized as a *header block* since it can only reside within the Header section.

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

**Note**: While there may be multiple aside sections, there can be only one header, main and footer section per page.

## Blocks

RDS Blocks are the equivalent to repeatable "components" in other [design systems](#). They are chunks of reusable code, guided by clear standards, that can be assembled in different combinations to build any number of user interfaces. Blocks allow us to separate RDS UI into smaller, more manageable parts and provide consistent user experiences across all RDS platforms.

To control and provide consistent spacing, all RDS Blocks must be wrapped with the `u-block` [utility class](#).  Anyone integrating or developing with RDS should read both the [Blocks deep dive](#) and [Creating Blocks](#) sections as they are the key building **blocks** of our design system.

**Note**: most Blocks are restricted to particular page sections and themes. Before using any Block, review [its documentation](#) to view its usage guidelines.

## Components

Similar to Blocks, RDS Components are UI elements built for reuse. Unlike Blocks, Components can be nested inside of blocks, and even other components. Relatively more straightforward than blocks, components tend to be smaller, inline interface elements such as buttons and icons. Components must be used within a Block and cannot be used on their own.


Components are the equivalent to Atoms or Molecules in [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/#atoms) and allow us to keep the CSS code lean as repeated elements are represented by only one abstraction.

## Layouts

 Layouts are used to arrange [Blocks](#) and position them within page [sections](#). If you are working on a one column page design, chances are a layout is not necessary as RDS blocks are designed to stack directly on top of each other. If you need to lay your blocks out in multiple columns, layouts are the means to do so. Layouts also used to set content breakpoints and determine which blocks are visible on different screen sizes.

## Templates

 Templates allow you to create reusable base markup. Templates can be used to control the overall page design and establish predefined sections for your content blocks. Alternatively, they can be used to build your Blocks and Components by breaking your HTML code into smaller pieces that are overridable on a per-instance basis.

 Since RDS is agnostic to what tech stack is being used, templates are not a part of RDS. You could build RDS sites with just straight up HTML, but we recommend using a templating engine such as [Twig](#), [Mustache](#), [Blade](#) or [Liquid](#) to separate your HTML structure from the content contained within.

To better build a more maintainable codebase, RDS was developed with [separation of concerns](#) in mind, specifically being able to separate data and markup. In our Block and Component documentation, we provide examples of how you might achieve this with template and JSON code snippet examples.

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
5. Layouts are sometimes required to arrange the locations of Blocks.
6. We encourage developers to build their Blocks with templating engine and consider separating your date from your markup.
7. Themes package everything up to provide a consistent user experience.

![img of the RDS makeup](http://cu-raven.s3.amazonaws.com/assets/img/docs/makeup.png)

Remember:

- Blocks are often restricted to certain sections and themes.
- Blocks can never be nested within other blocks.
- Components can be nested in blocks or other components.
- Components must be used within a Block and cannot be used on their own.

## References

- [Building A Static Site With Components Using Nunjucks](https://www.smashingmagazine.com/2018/03/static-site-with-nunjucks/)
- [How to Modularize HTML Using Template Engines and Gulp](https://zellwk.com/blog/nunjucks-with-gulp/)
- [An Overview of JavaScript Templating Engines](https://www.sitepoint.com/overview-javascript-templating-engines/)
