---
layout: docs
subsite: dev
menu: dev
section: Getting started
title: Getting started
---
## Important public service announcement

If you are affiliated with Carleton, you can skip all of the technical overhead required to build your own RDS site, by using the [Carleton CMS service](https://carleton.ca/webservices/request-a-website/). RDS, and all of its goodness, is baked right into the free WordPress CMS service.

Using the Carleton CMS service is the fastest and easiest way to get up and running with a new RDS website. This lets you focus on your content and [Web Services](https://carleton.ca/webservices) will take care of hosting, security and all of the updates. As a bonus, you are guaranteed the use of Carleton's branded font, which is [not always available](#carleton%27s-branded-font---gotham) when you build your own sites.

# Get started

There are two ways to get started with RDS:

 - Use Carleton's CDN with the resources for CSS and JS noted below.
 - [Use npm](starter-packages/#install-rds-with-npm) to integrate RDS with a build system for your project.

## Using Carleton's CDN

To quickly get up and running, add RDS' CSS and JS from Carleton's CDN.

 - **TODO:** implement subresource integrity for css and js

### CSS

Copy-paste the stylesheet <link> below into your `<head>` before any other stylesheets.

```html
<link rel="stylesheet" href="https://cu-rds.s3.amazonaws.com/rds/{{site.version}}/rds-cu.css.gz" media="print" onload="this.media='all'">
```

### JS

Copy-paste the below `<script>` directly above your closing `</body>`.

```html
<script src="https://cu-rds.s3.amazonaws.com/rds/{{site.version}}/rds-cu.js.gz" crossorigin="anonymous">
```

### What is included

The CDN hosted version ships with the RDS core, all components and all of the blocks available in the [CU theme](#).

### Minimum template requirements.

Be sure to have your pages set up with RDS' template requirements, which at a minimum looks like this:

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Uncomment the line below if you have been approved to use the CU's paid Gotham font -->
        <!-- <link rel="stylesheet" href="https://cloud.typography.com/6307052/6118752/css/fonts.css" /> -->
        <link rel="stylesheet" href="https://cu-rds.s3.amazonaws.com/rds/{{site.version}}/rds-cu.css.gz" media="print" onload="this.media='all'">
        <title>Hello, world!</title>
    </head>

    <body>
        <a class="u-visually-hidden" href="#content">Skip to main content</a>
        
        <!-- A starting <header> tag is required -->
        <header>
            <!-- Add Header blocks here -->
        </header>

        <!-- A <main> tag is required -->
        <main id="content">
            <!-- Add Main blocks here -->
        </main>

        <!-- A bottom <footer> tag is required -->
        <footer>
            <!-- Add Footer blocks here -->
        </footer>

        <!-- The dialogue Overlay layout is required, if using any dialogue blocks or mobile menu. -->
        <dialog class="l-overlay-modal">

            <!-- Uncomment and add Search block, if using Masthead Search  
            <div class="modal__search is-hidden">
              ADD SEARCH BLOCK HERE
            </div> -->

            <div class="modal__menu is-hidden">
                <!-- Add the Menu block code here ONLY if you are NOT using a SideNav and want a menu-->
            </div>

            <!-- Uncomment and add Login block, if using Masthead Login 
            <div class="modal__login is-hidden">
                ADD LOGIN BLOCK HERE
            </div> -->
        </dialog>

        <!-- Required JavaScript -->
        <script src="https://cu-rds.s3.amazonaws.com/rds/{{site.version}}/rds-cu.js.gz" crossorigin="anonymous">

    </body>
</html>
```

## Carleton's branded font - Gotham

Carleton's brand use the Gotham web font. This is a paid font and cannot be distributed freely. To use this font your site must be hosted on carleton.ca and you will need to have obtained permission.  To inquire about use, email [web@carleton.ca](mailto:web@carleton.ca).

RDS was designed with a well thought out font stack that degrades gracefully to widely distributed system fonts that should work and look good on all devices.

## Custom theming

If you are looking to extend RDS and build a custom theme leveraging the system, review the [RDS main concepts]({{site.url}}dev/main-concepts/) and [custom theming]({{site.url}}dev/custom-theming/) documentation.
