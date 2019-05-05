---
layout: docs
subsite: dev
menu: dev
sidebar: dev
title: Themes
section: Main concepts
---
RDS themes package up a unified set of HTML, CSS and JavaScript code to provide predefined styling, available blocks,  and page layouts.

{% include 'inc' with {'block': 'cardgrid-base'} %}

## CU theme

Currently, there is one distributed RDS theme: the CU theme. 

Pre-built on top of RDS, the CU theme is Carleton's official theme developed and supported by the RDS creators. The theme extends off of the RDS base and contains all of the core blocks and functionality needed for you to build out full-featured, responsive, mobile-first Carleton web projects. 

Content should be the most important and preeminent focus for all websites. The Carleton theme is content-focused and accommodates the majority of all web site content needs and requirements. In addition to being flexible, the theme is performant and built for speed.

### Available blocks and components

The Carleton themes ships with all of the following core RDS blocks and components.

<div class="u-grid u-grid--2">

<div>
<h4>Blocks</h4>
<ul>
    <li><a href="#">banner</a></li>
    <li><a href="#">card grid</a></li>
    <li><a href="#">content</a></li>
    <li><a href="#">footer - brand</a></li>
    <li><a href="#">footer - simple</a></li>
    <li><a href="#">footer - sitemap</a></li>
    <li><a href="#">global nav</a></li>
    <li><a href="#">listing</a></li>
    <li><a href="#">login</a></li>
    <li><a href="#">masthead</a></li>
    <li><a href="#">menu</a></li>
    <li><a href="#">sidebar</a></li>
    <li><a href="#">text image</a></li><br>
</ul>
</div>
<div>
<h4>Components</h4>
<ul>
    <li><a href="#">accordion</a></li>
    <li><a href="#">CTA button</a></li>
    <li><a href="#">card</a></li>
    <li><a href="#">form</a></li>
    <li><a href="#">heading</a></li>
    <li><a href="#">icons</a></li>
    <li><a href="#">table</a></li>
    <li><a href="#">video</a></li>
</ul>
</div>
</div>

**Note**: more blocks and functionality may be available within the [Carleton CMS service](https://carleton.ca/webservices/request-a-website/). Yet another good reason to go that route for your Carleton websites.


## Getting started with the CU theme

To begin integrating the CU theme into your project, checkout the [Getting started documentation](#).

## Custom themes

If you want to limit the number of blocks in your package and/or create custom blocks, you will need to create a custom theme by pulling in RDS’s source files. Learn more about [custom theming here](#).


TODO move this to getting started
## CU theme navigation options

There are two ways to setup your site-wide navigation in the Carleton theme.

1. **Vertical navigation**: using a two column layout to provide a left-side column for vertical navigation using the `b-menu` block. 
2. **Top horizontal navigation**: a horizontal navigation can be set up in the [masthead block](#).

**Note**: you may notice throughout this RDS docs site that the navigation jumps between the top horizontal nav and the left-side vertical nav. For example, this page, you are reading now, uses the left side vertical nav and [this page]({{site.url}}/dev/blocks/header/banner/) uses the top horizontal nav. **Don't do this**. Pick a navigation structure and stick to it throughout your entire site. The only reason we do it on this site is on [the pages]({{site.url}}/dev/blocks/header/banner/) using the top horizontal nav, we needed to showcase full width items or use the one column layout. To select the best navigation for your site, read the docs below outlining the differences and use cases.








