---
layout: t-block-docs
subsite: dev
title: Card component
banner:
  breadcrumbs:
    grandparent: Components
    parent: Cards
meta:
    handle: card
    type: Card
    path: components/cards/card/
    version: core 1.0.0
    status: under review
    since: 1.0.0
examples:
- name: base
- name: text
- name: news
- name: news-text
- name: video
- name: video-text
- name: people
- name: people2
- name: max-width
data:
- name: title*
  type: string
  desc: Button label.
- name: url*
  type: string
  desc: URL item links to.
- name: icon
  type: string
  desc: Icon's file name.
---
## Implementation Notes

1. Use the [grid block](#) or list markup to group multiple cards. 

2. Cards components are best displayed on top of a non-white background colour, if possible. Presently, only white background are available for the [CMS theme](#).

## Avoid
...

## References

https://inclusive-components.design/cards/

## In the wild
