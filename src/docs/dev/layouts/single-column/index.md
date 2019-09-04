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
      <!-- Overlay, uncomment, if needed 
      <dialog class="l-overlay-modal">
        <div class="modal__menu is-hidden"></div>
      </dialog> -->
   </body>
</html>
```

{%include 'inc' with {'cta': 'Single Col Example on Codepen', 'url': 'https://codepen.io/cuweb/pen/aboWBmd?editors=1000'} %}

## Available blocks

When using the single column layout, all [Main section blocks](#) can be used within the `<main>` section, including all [fixed](#) and [full-width](#) blocks.

## Navigation options

When using the single column layout across your site, you will need to use the [Top Nav]({{site.url}}/dev/layouts/navigation/#top-nav) available in the {% include 'link' with {'block':'Masthead', 'Block': true} %} as the [Side Nav]({{site.url}}/dev/layouts/navigation/#side-nav) is not available when using this layout.


