---
layout: docs
subsite: dev
menu: dev
title: Image Tile
section: Blocks
subsection: Main blocks
---
The timeline block allows you to display a chronological list of items that have a start point, and end point. The most common use case for this block would be a list of events with a defined start and end year, with each individual item pertaining to a specific day, month, or even year.

{% include 'close' %}
{% include 'imagetile/imagetile' %}
{% include 'open' %}

## Markup Example
```html
{% filter escape %}
{% include 'imagetile/imagetile' %}
{% endfilter %}
```

## Block details

| {{ page.title }}  block meta |                                          values                                           |
| ---------------------------- | :---------------------------------------------------------------------------------------: |
| handle                       |                                         `timeline`                                        |
| width type                   |                                           fixed                                           |
| colour options               |                             `u-block--white`, `u-block--grey`                             |
| section use                  |                                         `<main>`                                          |
| has heading                  |                                           true                                            |
| theme(s)                     |                                            CU                                             |
