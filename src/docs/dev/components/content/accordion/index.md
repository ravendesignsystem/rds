---
layout: docs
title: Accordion
subsite: dev
menu: dev
section: Components
subsection: Content Components
banner:
  breadcrumbs:
    grandparent: Components
    parent: Content
---
The Accordion component is a vertically stacked list of items with content sections collapsed by default. Each item's content can be expanded and then collapsed by clicking the title allowing users to expose content in a progressive manner. Accordions minimize scrolling on long pages and display critical information first.

## Base example

{% include 'inc' with {'component': 'accordion-base'} %}

{% include 'inc' with {'component': 'accordion-base', 'code': true} %}


## Accordion - single variant

The single variant insures only one section is open at any given time.

{% include 'inc' with {'component': 'accordion-single'} %}

{% include 'inc' with {'component': 'accordion-single', 'code': true} %}

## Found in

The {{page.title}} components are used in the following blocks:

- {%include "link" with {'block': 'Content'} %}

## References

- [Smashing mag](https://www.smashingmagazine.com/2017/06/designing-perfect-accordion-checklist/)
- [nngroup](https://www.nngroup.com/articles/accordions-complex-content/)
