---
layout: docs
subsite: dev
title: Text-Image block
banner:
  breadcrumbs:
    grandparent: Blocks
meta:
  version: 1.0.0
  status: review required
  handle: textimg
  type: Fixed-width
  section: Main
  path: textimg/
  theme: na
  heading: Yes
context: 
- name: imgtext
dependencies:
    js: n/a
    selector: b-textimg
    restricted: div or section
    maxwidth: u-block--m
examples:
- name: base
- name: heading
- name: imgtext
- name: widths
wild: n/a
alternatives: wrap images in content block.
---
## Implementation Notes

### Repeated Text-Image blocks

When Text-Image blocks are repeated back to back, it is best to:

- alternate the column order and image location.
- group sectioning blocks with related content together by using the same background color.

{% include 'inc' with {'block': 'textimg-base', 'close': true} %}
{% include 'inc' with {'block': 'textimg-imgtext', 'close': true} %}
{% include 'inc' with {'block': 'textimg-base'} %}

- Use different background colours to divide the non-sectioning blocks.

{% include 'inc' with {'block': 'textimg-base', 'close': true} %}
{% include 'inc' with {'block': 'textimg-white', 'close': true} %}
{% include 'inc' with {'block': 'textimg-base'} %}
