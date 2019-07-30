---
layout: docs
subsite: dev
menu: dev
section: Layouts
title: HTML & CSS Guide
banner:
  breadcrumbs:
    parent: Dev

---
## Single column layout

The single column layout only requires a `<main>` tag in between your `<header`> and `<footer>` tags.

```haml
<!doctype html>
<html>
   <head>
      <title>Single column layout</title>
   </head>
   <body>
      <header>...</header
      <main>
        <!–– Add any Main section blocks here -->
      </main>
      <footer>...</footer>
   </body>
</html>
```

## Available blocks

When using the single column layout, all [Main section blocks](#) can be used within the `<main>` section, including all [fixed](#) and [full-width](#) blocks.

## Navigation options

When using the single column layout across your site, you will need to use the [horizontal site-wide navigation](#) available in the [Masthead block](#.) as the [left-side navigation](#) is not available].
