---
layout: base
subsite: dev
title: Getting Started
banner:
  breadcrumbs:
    parent: Docs
content: true
---
## Starter Template

There is very little you need to do in order to get started with RDS. The following is the most basic markup you need to start building RDS powered prototypes. You simply need to copy and paste this into your own file, and make a couple of simple decision on masthead, blocks and footer items that you wish to use.

Links for items that can be added to the basic markup can be found below the code example.

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
		{Optionally add footersitemap or footersimple }
		{Add footerbrand} **required**
	</footer>

	<script src="https://cu-rds.s3.amazonaws.com/rds/rds-core-min.js"></script>
</body>
</html>
```

https://picturepan2.github.io/spectre/getting-started.html
