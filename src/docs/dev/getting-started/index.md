---
layout: docs
title: Getting started
subsite: dev
menu: dev
section: Getting started
banner:
  breadcrumbs:
    parent: Docs
---
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
