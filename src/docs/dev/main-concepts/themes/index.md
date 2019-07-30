---
layout: docs
subsite: dev
menu: dev
title: Themes
section: Main concepts
---
RDS themes package up a unified set of HTML, CSS and JavaScript code to provide predefined styling, available blocks,  and page layouts.

## CU theme

Currently, there is one supported theme distributed with RDS: the CU theme. 

Pre-built on top of RDS, the CU theme is Carleton's official theme developed and supported by the RDS creators. The theme extends off of the RDS base and contains all of the blocks and functionality needed for you to build out full-featured, responsive, mobile-first Carleton web projects. 

Content should be the most important and preeminent focus for all websites. The Carleton theme is content-focused and accommodates the majority of all web site content needs and requirements. In addition to being flexible, the theme is performant and built for speed.

### Available blocks and components

The Carleton themes ships with all RDS components and the following blocks:

- banner
- card grid
- content
- footer - brand
- footer - simple
- footer - sitemap
- global nav
- listing
- login
- masthead
- menu
- sidebar
- text image

**Note**: more blocks and functionality may be available within the [Carleton CMS service](https://carleton.ca/webservices/request-a-website/). Yet another good reason to go that route for your Carleton websites.


## Custom themes

If you want to limit the number of blocks in your package and/or create custom blocks, you will need to create a custom theme by pulling in RDS’s source files. Learn more about [custom theming here](#).


TODO move this to getting started

## CU theme navigation options

There are two ways to setup your site-wide navigation in the Carleton theme.

1. **Vertical navigation**: using a multi-column layout to provide a left-side column for vertical navigation using the `b-menu` block. 
2. **Top horizontal navigation**: a horizontal navigation can be set up in the [masthead block](#).

**Note**: you may notice throughout this RDS docs site that the navigation jumps between the top horizontal nav and the left-side vertical nav. For example, this page, you are reading now, uses the left side vertical nav and [this page]({{site.url}}/dev/blocks/header/banner/) uses the top horizontal nav. **Don't do this**. Pick a navigation structure and stick to it throughout your entire site. The only reason we do it on this site is on [the pages]({{site.url}}/dev/blocks/header/banner/) using the top horizontal nav, we needed to showcase full width items or use the one column layout. To select the best navigation for your site, read the docs below outlining the differences and use cases.








