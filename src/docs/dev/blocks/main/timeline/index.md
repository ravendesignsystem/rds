---
layout: docs
subsite: dev
menu: dev
title: Timeline
section: Blocks
subsection: Main Blocks
---
The timeline block allows you to display a chronological list of items that have a start point, and end point. The most common use case for this block would be a list of events with a defined start and end year, with each individual item pertaining to a specific day, month, or even year.

{% include 'close' %}
{% include 'timeline/timeline' %}
{% include 'open' %}

<div class="c-alert c-alert--info c-alert--icon u-hide-s">
    {% include "icons/info.svg" %}
    <h2>Optional Components</h2>
    <p>Both the heading and paragraph components are optional for this block. While they are optional, the paragraph should not be used without the header, the formatting will not be what you expect.</p>
</div>

## Markup Example
```html
{% filter escape %}
{% include 'timeline/timeline' %}
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
