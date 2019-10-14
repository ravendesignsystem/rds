---
layout: docs
subsite: dev
menu: dev
section: Blocks
subsection: Aside blocks
title: Sidebar
banner:
  breadcrumbs:
    parent: Docs
sidebar:
  content: This is an example of the base Sidebar block within an actual aside section.
  title: Sidebar block example
---
## Sidebar block

The sidebar block is available to add secondary content to your pages. For documentation purposes, on this page the sidebar block is displayed in the main section of the page. However, as an [aside block](#), the sidebar block is restricted to the aside layout sections.

## Sidebar base example

At a minimum, the sidebar block requires a title and some content. 

{% include 'inc' with {'block': 'sidebar-base'} %}

```HTML
{%include 'inc' with {'block': 'sidebar-base', 'code': true}%}
```
### Note on content

Sidebar blocks are intended to be succinct. In general, a single paragraph is recommended. The content needs to be properly formatted HTML. The following HTML tags can be used within the block: `<a>`, `<p>`.

{% include 'inc' with {'block': 'sidebar-link'} %}

```HTML
{%include 'inc' with {'block': 'sidebar-link', 'code': true}%}
```

## Heading vs title

Sometimes your sidebar block is related to a taxonomy or section of your site that you want to reference. If this is the case you can use what we are calling a heading and move your title into the content area.

{% include 'inc' with {'block': 'sidebar-heading'} %}

```HTML
{%include 'inc' with {'block': 'sidebar-heading', 'code': true}%}
```

## Sidebar with image

A single image can be added to the sidebar block.

{% include 'inc' with {'block': 'sidebar-img'} %}

```HTML
{%include 'inc' with {'block': 'sidebar-img', 'code': true}%}
```

## Sidebar with CTA button

If your sidebar block has a conversion goal, add a Call To Action (CTA) button to encourage users to click.

{% include 'inc' with {'block': 'sidebar-button'} %}

```HTML
{%include 'inc' with {'block': 'sidebar-button', 'code': true}%}
```

## Turn the entire block into a CTA

If you do have a conversion goal, an even better option is to turn the entire sidebar block into a CTA.

{% include 'inc' with {'block': 'sidebar-cta'} %}

```HTML
{%include 'inc' with {'block': 'sidebar-cta', 'code': true}%}
```

**Important** note how:

* the `b-sidebar` div is now an `<a>`
* the `c-buttoncta` `<a>` is now an `<div>`
* the content can no longer include links. `<a>` tags are no longer available in the content as only one link is permitted for the entire block in this use case.

## With icons

RDS icons are available for both the heading and CTA button areas of the block.

{% include 'inc' with {'block': 'sidebar-icon'} %}

```HTML
{%include 'inc' with {'block': 'sidebar-icon', 'code': true}%}
```
