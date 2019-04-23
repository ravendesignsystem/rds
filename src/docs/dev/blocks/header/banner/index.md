---
layout: blocks
subsite: dev
title: Banner Block
banner:
  breadcrumbs:
    grandparent: Blocks
desc: 
meta:
  version: 1.0.1
  status: ready
  handle: banner
  type: Max-width
  section: Header
  path: banner/
  theme: Core
  heading: N/A
context:
- name: image
dependencies:
    js: N/A
    selector: b-banners-banner
    restricted: div
    maxwidth: na
examples:
- name: base
- name: breadcrumbs
  nicename: Banner with breadcrumbs
- name: button
  nicename: Banner with Call to Action Button
- name: buttons
  nicename: Banner with Multiple Call to Action Buttons
- name: img-ban
  nicename: Banner - Hero Image variant with button
- name: img-light
  nicename: Hero Image Lightened and Aligned to the Top
- name: img-dark
  nicename: Hero Image Darkened and Aligned to the Bottom
wild: n/a
alternatives: n/a
data:
- name: title*
  type: string
  desc: Banner title.
  options: null / na
- name: breadcrumbs
  type: boolean
  desc: Hide/show breadcrumbs
  options: null / na
- name: buttons
  type: boolean
  desc: Hide/show button(s)
  options: null / na
- name: img
  type: string
  desc: Background image path.
  options: null / na
---
##Implementation Notes

- Use only one banner per page. This page obviously breaks this rule but it is an anomaly in order document all the available banners and their options.
- Banners are not content area blocks and reside in the page header in RDS.
- The theme's templates and layout will dictate if banners are available.

##Content guidelines

Banner blocks should:

-

##When To Avoid

- Don't use this block.

https://www.optimizely.com/optimization-glossary/hero-image/

