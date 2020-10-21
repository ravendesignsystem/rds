---
layout: docs
subsite: dev
menu: dev
title: Image Tiles
section: Blocks
subsection: Main Blocks
---

The image tile block allows you to feature content using images as the primary focal point. The left hand portion of the block is the featured content and uses a large image with title and excerpt, while the right hand side displays 4 additional items with hover effects to reveal the excerpt.

<img src="https://cu-rds.s3.amazonaws.com/docs/assets/imagetile.png"  alt="Image tile sections">

## Markup Example
```html
{% filter escape %}
{% include 'imagetile/imagetile' %}
{% endfilter %}
```

## Block details

| {{ page.title }} block meta | values          |
| :-------------------------- | :-------------- |
| handle                      | `imagetile`     |
| width type                  | full            |
| colour options              | `u-block--full` |
| section use                 | `<main>`        |
| has heading                 | false           |
| theme(s)                    | CU              |
