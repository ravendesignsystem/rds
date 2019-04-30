---
layout: docs
subsite: dev
menu: dev
section: Getting started
title: Getting started
sidebar: top
---
## Important public service announcement

If you are affiliated with Carleton, you can skip all of the technical overhead required to build your own RDS site, by using the [Carleton CMS service](https://carleton.ca/webservices/request-a-website/). RDS and all of its goodness is baked right into the free WordPress CMS service. Using the Carleton CMS service is by far the fastest and easiest way to get up and running with a new RDS website. By using this service, you can focus on your content and [Web Services](https://carleton.ca/webservices) will take care of hosting, security and all of the updates.

## Carleton themes: Quick start

If you are looking to setup a website that uses either the [Carleton CMS theme](#) or the [Framework theme](#), you should follow this [Quick start guide](#) for integrating existing Carleton themes.

## Getting started with custom themes

If you want to roll your own custom theme or extend one of the [two defaults themes](#), there are three main ways to get started with RDS:





Before getting started integrating RDS, your first decision should be chose which theme you want to use for your project. 
 
1. [Carleton CMS theme](#)
2. [Framework theme](#)
3. Roll your own [custom theme](#)



## 1. Use the Carleton CMS Service



## 2. Follow our Quick start guide for setting up our base themes

Use the [Quick start guide](#) to get started with a starter template and attach an RDS theme's hosted, compiled CSS and JS to your project.

## 3. Get setup using our package manager

Pull in RDS' source files into your project with some of the RDS npm package.

For options 1 and 2, we recommend you start by reading the docs explaining the [Main conceoptds of RDS](#) followed by the section on [Custom theming](#).
   

{%include 'inc' with {'macro': 'listing', 
    'color': 'black', 
    'title1': 'black', 
    'url1': '#', 
    'title2': 'fff', 
    'url2': '#', 
    } %}
    

## Starter Template

There is very little you need to do in order to get started with RDS. The following is the most basic markup you need to start building RDS powered prototypes. You simply need to copy and paste this into your own file, and make a couple of simple decision on masthead, blocks and footer items that you wish to use.

**Note:** Links for items that can be added to the basic markup can be found below the code example.

## Basic Markup

```html
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
	<meta name="robots" content="noodp, noydir"/>
	<meta http-equiv="x-ua-compatible" content="ie=edge">

	<link rel="stylesheet" href="https://cu-rds.s3.amazonaws.com/rds/rds-core-min.css" type="text/css"/>

	<title>Page Title</title>
</head>
<body>
	<a class="u-visually-hidden" href="#content">Skip to main content</a>

	<header>
		{Add desired masthead markup} **required**
		{Add desired banner markup}
	</header>

	<main id="content">
		{Pick one or more blocks and add the markup}
	</main>

	<footer>
		{Optionally add footer sitemap or footer simple }
		{Add footer brand} **required**
	</footer>

	<script src="https://cu-rds.s3.amazonaws.com/rds/rds-core-min.js"></script>
</body>
</html>
```

### Links to blocks that can be added to the basic markup:
- [Masthead with variations]({{site.url}}dev/blocks/header/masthead/) **Required**
- [Banner with variations]({{site.url}}/dev/blocks/header/banner/)
- [Main content blocks]({{site.url}}/dev/): found under the `Main Blocks` heading
- [Optional Footer Sitemap]({{site.url}}/dev/blocks/footer/footersitemap/)
- [Optional Footer Simple]({{site.url}}/dev/blocks/footer/footersimple/)
- [Footer Brand]({{site.url}}/dev/blocks/footer/footerbrand/) **Required**

## Important Notes

- Anything noted as a `Header Block` on [the dev overview page] is required to be placed inside of the `<header></header>` tag as shown in the markup example. There is key functionality relating to masthead items that will not function correctly if these elements live outside of header.
- Footer branding is a required elements and no build should be created without it.
