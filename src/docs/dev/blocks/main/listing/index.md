---
layout: t-block-docs
subsite: dev
title: Listing block
banner:
  breadcrumbs:
    grandparent: Blocks
meta:
  version: 1.0.1
  status: ready
  handle: listing
  type: Fixed-width
  section: Main
  path: listing/
  theme: na
  heading: Yes
context: 
- name: image
- name: carousel
dependencies:
    js: n/a
    selector: b-main-listing
    restricted: div or section
    maxwidth: u-block--s
examples:
- name: base
- name: subtitle
- name: img
- name: badge
- name: icon
- name: event
- name: news
- name: news-img
- name: people
- name: video
- name: 2column
wild: n/a
alternatives: grid-list
data:
- name: title*
  type: string
  desc: List item title/name.
  options: null / na
- name: url*
  type: string
  desc: URL item links to.
  options: null / na
- name: subtitle
  type: string
  desc: A secondary title.
  options: null / na
- name: img
  type: string
  desc: Item's image path.
  options: null / na
- name: icon
  type: string
  desc: Item's icon file name.
  options: null / na
- name: date **
  type: String format of YYYY-MM-DD.
  desc: Required for News & Event contexts.
  options: null / na
---
##Content guidelines

List Group items should:

- Present objects of the same type.
- Start with a capital letter.
- Not use commas or semicolons at the end of each line.
- Link to a page for the item with more information.
- Have text labels be as short as possible.

##Implementation Notes

- It is important to note the markup changes when different context variants and data attributes are used. 
- If you are using the base H2 heading with a slight underline before this block, it looks best removed by adding the class 'u-no-borders' to the h2 tag.

##When To Avoid

- Don't use this block to replace default content ordered and unordered lists.
- Don't us this block if you are listing items that don't link anywhere.  

## Dates and Times
Date and time format should always be CCYY-MM-DDThh:mm:ss as per [W3C](https://www.w3.org/TR/NOTE-datetime)
