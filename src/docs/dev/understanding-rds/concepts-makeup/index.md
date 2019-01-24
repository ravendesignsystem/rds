---
layout: base
content: true
title: Concepts that Makeup RDS Sites
---
RDS is Carleton's system for creating digital harmony across platforms. One of the systematic ways to guide our collective efforts is to insure everyone is speaking the same language. This section documents the key concepts and terminology used within RDS' underlying design language to create consistency across the platform. 

While this section is a must read for RDS developers, we encourage content creators and site users to read on to get a better understanding of the core concepts that make up RDS.

## A shared vocabulary

The following terms are used throughout RDS to articulate the systems’s underlying structure:

- [Pages](#)
- [Sections](#)
- [Blocks](#)
- [Components](#)
- [Layouts](#)
- [Templates](#)
- [Themes](#)

## Pages 

**A page** refers to the full user interface (UI) (or screens) rendered in a browser at a given time. Pages display data and handle user interactions. They can be scrollable and include content off screen, as long as it is accessible without reloading the page. Your app or site is a collection of pages that are linked together.

> "Our page load times on mobile need to be made faster across the entire site." - RDS dev talk.

![img of page](http://cu-raven.s3.amazonaws.com/assets/img/docs/page.png)

## Sections

RDS pages are divided into sections to define the structure of a page and isolate certain parts of the document with prescriptive rules. Sections are denoted by semantic HTML 5 elements, including:

- Header - `<header>`
- Main - `<main>`
- Aside - `<aside>`
- Footer - `<footer>`

By defining the above page sections we provide a clear understanding of what role is played by the content within those sections. In addition, it lets us categorize and provide clear use cases for certain content types. For example, the Banner block is categorized as a header block since it can only reside within the Header section. 

#show image of banner blocks

> "Remember, the Content block needs to go inside the Main section." - RDS dev talk.

**Note**: A single HTML document can have multiple `<header>` and `<footer>` elements. In RDS, the Header section is always denoted by the first `<header>Header section</header>` tags on the page. The Footer section by the last `<footer>Footer section</footer>` tags on the page.

![img of template sections ](http://cu-raven.s3.amazonaws.com/assets/img/docs/template.png)

## Blocks 

RDS Blocks are the equivalent to repeatable "components" in other design systems. They are chunks of reusable code, guided by clear standards, that can be assembled together in different combinations to build any number of user interfaces. Blocks allow us to separate RDS UI into smaller, more manageable parts and provide consistent user experiences across all RDS platforms.

Anyone integrating or developing RDS should read both the [Blocks deep dive](#) and [Creating Blocks] sections as they really are the key building **blocks** of the design system. 

## Components

Similar to Blocks, RDS Components are UI elements built for reuse. Unlike Blocks, Components can be nested inside of blocks, and even other components. Relatively simpler than blocks, components tend to be smaller, inline interface elements such as buttons and icons. Components must be used within a Block and can not be used on their own.

Components are the equivalent to Atoms or Molecules in [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/#atoms) and allow us to keep the CSS code lean as repeated elements are represented by only one abstraction. 

## Layouts
 
 Layouts are used to arrange [Blocks](#) and position them within page [sections](#). If you are working on a one column page design, chances are a layout is not necessary as RDS blocks designed to stacked directly on top of each other. If you need to lay your blocks out in multiple columns, Layouts are the means to do so. Layouts can set content breakpoints asnd determine which blocks are visible on different screen sizes.
 
 
- **Templates**: Templates are code that can be used as the basis to control a page’s design and structure. 
- **Themes**: Themes package up and contain everything need to build and deploy your entire functional site, including: templates, layouts, blocks and components.

Blocks are  the building blocks of any RDS app.

Components are portions of reusable code within your system and they serve as the building blocks of your application’s interface
Components range in complexity. Reducing components to a single function, like a button or a drop down increases flexibility, making them more reusable. More complex components, like tables for specific types of data, can serve their use cases well, but this complexity limits the number of applicable scenarios. The more reusable your components are, the less you need to maintain, and the easier scale becomes.

Components are an interface chunk to be added to an overall layout. 

Blocks and components are built for domain-specific reuse within a system. 


Functional pattern, Component: Reusable tangible elements. Buttons, form fields, navigation, etc.
Perceptual pattern, Styles: This is more abstract than the functional pattern. It will emotionally enhance message perception. Color, typography, animation, etc.
Pattern library: Documentation of functional and perceptual patterns.
Style guide: Documentation of standards for using pattern library. This includes logo usage and space adjustments. It also includes examples of best practices, and information about the development process.
 

   RDS' visual hierarchy is made up of the following :
   
   Pages

RDS sites are a collection of related pages. 



### Page templates

Page templates control the page’s design and establish predefined sections to display content. You will define separate templates for the various aspects of your site. Typical templates found in RDS themes include:

- base
- home
- single
- category

While discussed in the documentation, templates don't live in RDS. As RDS is meant to be agnostic RDS developers can bring their own templating tools and engines, such as twig blad wordpress to the table.

#### Page template sections

Page templates in RDS, are made up of the following sections:

- Header
- Body
- Footer
- Off canvas

![img of template sections ](http://cu-raven.s3.amazonaws.com/assets/img/docs/template.png)

Page template sections are important as certain [layouts](#) and [blocks](#) can only be used in certain sections. For example, the [Banner block](#) can only be used within a page template header.

## Layouts

Layouts are used to arrange the content [blocks](#) within a page template section. Layouts control blocks in a responsive manner across all screen sizes. Layouts generally setup columns and act as containers for blocks. [Learn more about layouts](#).

## Themes

Themes package up and contain all of the assests and styles that make up an entire functional site, including: templates, layouts, blocks and components. [Learn more about RDS themes](#).

## In summary

RDS sites are made up of a collection of page templates that arrange layouts to control blocks. It becomes clearer as you work with the system and get use to the nomenclature.

![img of the RDS makeup](http://cu-raven.s3.amazonaws.com/assets/img/docs/makeup.png)

Remember:

- Layouts go inside specific template sections
- Template sections never nest within other template sections
- Blocks never nest within other blocks



