---
layout: docs
subsite: dev
menu: dev
section: Blocks
title: Sidebar
banner:
  breadcrumbs:
    parent: Docs
---
## Sidebar block

The sidebar block is available to add secondary content to your pages. As an [aside block](#), the sidebar block is restricted to the aside layout sections.

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

## Sidebar with image

A single image can be added to the sidebar block.

{% include 'inc' with {'block': 'sidebar-img'} %}

```HTML
{%include 'inc' with {'block': 'sidebar-img', 'code': true}%}
```
