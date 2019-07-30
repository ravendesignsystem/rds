---
layout: docs
subsite: dev
menu: dev
section: Getting started
title: Getting started
---
## Important public service announcement

If you are affiliated with Carleton, you can skip all of the technical overhead required to build your own RDS site, by using the [Carleton CMS service](https://carleton.ca/webservices/request-a-website/). RDS, and all of its goodness, is baked right into the free WordPress CMS service. Using the Carleton CMS service is the fastest and easiest way to get up and running with a new RDS website. This lets you focus on your content and [Web Services](https://carleton.ca/webservices) will take care of hosting, security and all of the updates. As a bonus, you are guaranteed the use of Carleton's branded font, which is [not always available](#) when you build your own sites.

# Get started

There are two ways to get started with RDS:

 - Use Carleton's CDN and follow the [Quick start guide](#quick-start) below.
 - [Use npm](#) to integrate RDS with a build system for your project.

## Using Carleton's CDN

To quickly get up and running, add RDS' CSS and JS from Carleton's CDN.

### CSS

Copy-paste the stylesheet <link> below into your `<head>` before any other stylesheets.

```html
<link rel="stylesheet" href="https://cu-rds.s3.amazonaws.com/rds/{{site.version}}/rds-cu.css" media="print" onload="this.media='all'">
```

#### Gzipped CSS

If your server supports gzip, use the gzip version for an even smaller file size.

```html
<link rel="stylesheet" href="https://cu-rds.s3.amazonaws.com/rds/{{site.version}}/rds-cu.gzip.css" media="print" onload="this.media='all'">
```

TODO add integrity and cross origin hashes.

### JS

Copy-paste the below `<script>` directly above your closing `</body>`.

```html
<script src="https://cu-rds.s3.amazonaws.com/rds/{{site.version}}/rds-cu.js" crossorigin="anonymous">
```
#### Gzipped JS

If your server supports gzip, use the gzip version for an even smaller file size.

```html
<script src="https://cu-rds.s3.amazonaws.com/rds/{{site.version}}/rds-cu.gzip.js" crossorigin="anonymous">
```

### What is included

The CDN hosted version ships with the RDS core, all components and all of the blocks available in the [CU theme](#).

### Minimum template requirements.

Be sure to have your pages set up with RDS` template requirements, which at a minimum looks like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Uncomment the line below if you have been approved to use the CU's paid Gotham font -->
    <!-- <link rel="stylesheet" href="https://cloud.typography.com/6307052/6118752/css/fonts.css" /> -->
    <link rel="stylesheet" href="https://cu-rds.s3.amazonaws.com/rds/{{site.version}}/rds.css" media="print" onload="this.media='all'">
    <title>Hello, world!</title>
  </head>
  <body>
    <!-- A starting <header> tag is required -->
    <header><!-- Add Header blocks here --></header>
    <!-- A <main> tag is required -->
    <main><!-- Add Main blocks here --></main>
    <!-- A bottom <footer> tag is required -->
    <footer><!-- Add Footer blocks here --></footer>
    <!-- The Overlay layout ios required -->
    <dialog class="l-overlay-modal is-hidden">
  
        <div class="modal__search is-hidden">
            <!-- If using, Search block goes here-->
        </div>
        <div class="modal__menu is-hidden">
            <!-- If using, Menu block goes here-->
        </div>
        <div class="modal__login is-hidden">
            <!-- If using, Login block goes here-->
        </div>
    </dialog>
    <!-- Required JavaScript -->
    <script src="https://cu-rds.s3.amazonaws.com/rds/{{site.version}}/rds.js" crossorigin="anonymous">
  </body>
</html>
```

## Starter downloads

To get going even faster with templates, check out and download our Starter projects that contain skeleton examples of RDS in use.

## Install RDS with npm

The docs below assume you are familiar with [using npm](http://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/) and have [Node/npm](https://nodejs.org/en/download/) installed.

1. Install RDS in your project directory.

```js
npm install --save-dev @carleton/rds
```
RDS will require a Sass compiler and Autoprefixer for a setup that matches our official compiled versions.

### npm starter projects

You can download the following npm starter projects to get started with everything you need to use RDS with modern build tools:

- RDS webpack starter (coming soon)
- RDS webpack / elenventy starter

### Custom theming

If you are looking to extend RDS and build a custom theme leveraging the system, review the [RDS main concepts](#) and [custom theming](#) documentation.

## Carleton's branded font - Gotham

Carleton's brand use the Gotham web font. This is a paid font and cannot be distributed freely. To use this font your site must be hosted on carleton.ca and you will need to have obtained permission.  To inquire about use, email [web@carleton.ca](mailto:web@carleton.ca).

RDS was designed with a well thought out font stack that degrades gracefully to widely distributed system fonts that should work and look good on all devices.
