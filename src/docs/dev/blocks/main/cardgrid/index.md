---
layout: base
subsite: dev
title: Card Grid block
banner:
 breadcrumbs:
  grandparent: Blocks
content: true
meta:
 version: 1.0.0
 status: under review
 handle: cardgrid
 type: Fixed-width
 section: Any
 path: cardgrid/
 theme: Core
 heading: true
dependencies:
 js: n/a
examples:
wild: n/a
alternatives: grid-list
data:
 - name: inc*
   type: string
   desc: Card component inc path.
---

The Card Grid block uses RDS' [responsive grid](#) to list [Card components](#) in equal-width columns.

**Note**: this block should not be used for general layout purposes.{%include "/docs/inc/close.twig"%}

<div class="u-block u-block--white u-block--s">
	<h2>Base example</h2>
	<div class="b-cardgrid b-cardgrid--stacks u-grid u-grid--3">
		{%include "card/data/card--base"%}
		{%include "card/data/card--base"%}
		{%include "card/data/card--base"%}
	</div>
</div>

<div class="u-block u-block--white u-block--s u-no-padding-bottom">
	<h2>Base example</h2>
	<div class="b-cardgrid u-grid u-grid--3">
		{%include "card/data/card--base"%}
		{%include "card/data/card--base"%}
		{%include "card/data/card--base"%}
	</div>
</div>

{%include "/docs/inc/open-b-content.twig"%}

```html
<div class="u-block u-block--white u-block--s">
	<div class="b-cardgrid u-grid u-grid--3">
		{% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
	</div>
</div>
```

## Grid column settings

Four and three column grids are available. To control the number of columns, adjust the `u-grid` modifier to either `u-grid--3` or `u-grid--4`.

### Four column grid example

{%include '/docs/inc/close.twig'%}

<div class="u-block u-block--white u-block--m">
	<div class="b-cardgrid u-grid u-grid--4">
		{%include "card/data/card--base"%}
		{%include "card/data/card--base"%}
		{%include "card/data/card--base"%}
		{%include "card/data/card--base"%}
	</div>
</div>

{%include "/docs/inc/open-b-content.twig"%}

```html
<div class="u-block u-block--white u-block--s">
	<div class="b-cardgrid u-grid u-grid--4">
		{% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
	</div>
</div>
```

### Card grid with CTA link or button

If you need a 'Load more' button under the card grid add it within the `u-block` tag but outside of the `b-cardgrid` tag.
{%include '/docs/inc/close.twig'%}

<div class="u-block u-block--white u-block--m">
	<div class="b-cardgrid u-grid u-grid--4">
		{%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
	</div>
	<button class="c-buttoncta c-buttoncta--center" href="#">Load more</a>
</div>

{%include "/docs/inc/open-b-content.twig"%}

```
<div class="u-block u-block--white u-block--m">
	<div class="b-cardgrid u-grid u-grid--4">
		{% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
	</div>
	<button class="c-buttoncta c-buttoncta--center" href="#">Load more</a>
</div>
```

Or, if you want to use a CTA to link off to an archive or another page.

{%include '/docs/inc/close.twig'%}

<div class="u-block u-block--white u-block--m">
	<div class="b-cardgrid u-grid u-grid--4">
		{%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
	</div>
	<a class="c-buttoncta c-buttoncta--center" href="#">Visit archive page</a>
</div>

{%include "/docs/inc/open-b-content.twig"%}

```
<div class="u-block u-block--white u-block--m">
	<div class="b-cardgrid u-grid u-grid--4">
		{% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
	</div>
	<a class="c-buttoncta c-buttoncta--center" href="#">Visit archive page</a>
</div>
```


## Block settings

Control the block's width and background colour using the following [block settings](#)

- **Block widths**: `u-block--s`\*, `u-block--m`, `u-block--l`
- **Block colours**: `u-block--white`\*, `u-block--grey`

**Notes**: \* = default

**Important**: if you are using the [CMS theme](#), only the default settings can be used.

{%include '/docs/inc/close.twig'%}

<section class="u-block u-block--grey u-block--m">
	<h2>Grid block with medium width and white background settings</h2>
	<div class="b-cardgrid u-grid u-grid--4">
		{%include "card/data/card--base"%}
			{%include "card/data/card--base"%}
			{%include "card/data/card--base"%}
			{%include "card/data/card--base"%}
	</div>
</section>

{%include '/docs/inc/open-b-content'%}

```html
<div class="u-block u-block--grey u-block--m">
	<div class="b-cardgrid u-grid u-grid--4">
		{% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
	</div>
</div>
```

## Content guidelines

Grid block cards should:

- Present objects of the same content and type.
- Images should have a similar tone and treatment to visually unify the panel.

## Implementation Notes

- If you are building pages with Grid blocks but without [Content blocks](#), use the four column grid and the medium-size width setting `u-block--m`.

## When To Avoid

- Don't use this block inside of a content block. If you need a grid within a content block, use the `u-grid` modifier. Remember, blocks can never be nested.
