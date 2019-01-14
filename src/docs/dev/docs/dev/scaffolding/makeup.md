---
layout: l-rdsdocs-markdown
title: The makeup of RDS sites
---

## Pages

RDS apps and sites are a collection of related pages. A page refers to the full user interface (UI) of an application at a given time. Pages are scrollable and include content off screen, as long as it is accessible without reloading the page.

![img of page](http://cu-raven.s3.amazonaws.com/assets/img/docs/page.png)

### Page templates 

Page templates control the page’s design and establish predefined sections to display content. You will define separate templates for the various aspects of your site. Typical templates found in RDS themes include:

- base
- home 
- single
- category

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

 

