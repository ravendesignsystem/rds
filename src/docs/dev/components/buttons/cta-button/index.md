---
layout: t-block-docs
subsite: dev
title: CTA Button
content: true
banner:
  breadcrumbs:
    grandparent: Components
    parent: Buttons
meta:
    version: 0.1.0
    status: under review
    handle: cta
    type: button
    path: components/buttons/cta/
    theme: Core
context:
- name: ghost
modifiers:
- name: ghost
dependencies:
    js: n/a
    selector: c-btn
    restricted: <a> or <button>
    maxwidth: na.
examples:
- name: base
- name: ghost
- name: icon
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
## Block availability

The CTA button component should only be used within the following blocks:

- [Banner](#)
- [Content](#)

##Implementation Notes

CTA button classes are designed to be used with the  `<a>` element. Do NOT use the `<button>` element for CTA buttons.

### Ghost button usage

[Ghost buttons](https://www.smashingmagazine.com/2018/01/ghost-button-design/) have proven to be less effective then our default solid buttons. While Ghost Buttons have their place in web design, they should be used less frequently and in the right context.

Ghost buttons should:

- be used as secondary call-to-actions.

<a class="c-button" href="http://www.imdb.com/title/tt0087332/" role="button">Main action</a> <a class="c-button c-button--ghost" href="http://www.imdb.com/title/tt0087332/" role="button">Secondary action</a>

- Should only be used on solid white backgrounds. If placed over a busy image without sufficient contrast, it can be difficult for users to read the button's text.

<a class="c-button c-button--ghost" href="http://www.imdb.com/title/tt0087332/" role="button">Read Ghostbuster reviews</a>

### Margins
By default, buttons only have a 5px right-margin and no bottom margin. To add the proper spacing between buttons and following blocks, wrap the button in a `<p>` tag.

If you are using a button component within a block and need to adjust margin spacing around the button, use the block element styles to do so.

### Centering
To center a button, add the modifier class `c-button--center`.

<a class="c-button c-button--center" href="https://gist.github.com/dannybrown73/30bf8390d63dda2bce39dacb0c562e7d" role="button">View this Gist</a>

```html
<a class="c-button c-button--center" href="https://gist.github.com/dannybrown73/30bf8390d63dda2bce39dacb0c562e7d" role="button">View this Gist</a>
```

##Content guidelines

Buttons should:

- Communicate the action that will occur when the user touches them.
- Be used as calls to action (cta).
- Be clearly and accurately labeled and start with strong, actionable verbs.
- Be brief: A couple of words is best, no more than five is ideal
- Be used for the most important actions on a page.
- Fall on their own line and have a good amount of white space surrounding them.

Examples of buttons with good calls to action:

<a class="c-button" href="https://central.wordcamp.org" role="button">{% include "icons/arrow-down.svg" ignore missing %}Download our free ebook now</a>

<a class="c-button" href="https://central.wordcamp.org" role="button">Start a free trial</a>

<a class="c-button" href="https://central.wordcamp.org" role="button">{% include "icons/heart.svg" ignore missing %}Like this post</a>

<a class="c-button" href="https://central.wordcamp.org" role="button">{% include "icons/plus.svg" ignore missing %}Book an appointment</a>

<a class="c-button" href="https://central.wordcamp.org" role="button">Register for WordCamp Ottawa 2018</a>

## Avoid

- Don't use buttons for standard links within text [such as this](http://www.nooooooooooooooo.com).
- Avoid using Ghost buttons for main actions.

## References

- https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/
- http://uxmovement.com/buttons/where-to-place-icons-next-to-button-labels/
