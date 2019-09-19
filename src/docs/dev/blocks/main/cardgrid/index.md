---
layout: docs
subsite: dev
title: Card Grid
section: Blocks
subsection: Main blocks
---
The Card Grid block uses RDS' [responsive grid](#) to list [Card components]({{site.url}}/dev/components/cards/card/) in equal-width columns.

**Note**: this block should be only be used to list cards and should not be used for general layout purposes.

## Base example

{%include "inc" with {'block': 'cardgrid-base', 'close': false} %}

```html
<div class="u-block u-block--white">
	<div class="b-cardgrid u-grid u-grid--3">
		{% verbatim %}{%include 'components/card'%}{% endverbatim %}
        {% verbatim %}{%include 'components/card'%}{% endverbatim %}
        {% verbatim %}{%include 'components/card'%}{% endverbatim %}
	</div>
</div>
```
**Note**: the code above assumes you have the ability to use a server-side include. If not, replace each include with the appropriate [card component]({{site.url}}/dev/components/cards/card/) code.

## Block details

| {{ page.title }}  block meta   |  values
| --------------| :-------------------------------------:
| handle              | `cardgrid` 
| options examples    | <a href="#small-screen-stack-modifier">stack mod</a>, <a href="#card-grid-with-cta-link-or-button">CTA button</a>
| block colour options      | `u-block--white`, `u-block--grey`  
| section use         | `<main>`                  
| width type          | fixed                           
| has heading         | [true](#with-heading)
| theme(s)            | CU
| variants            | [3 column](#grid-column-settings), [4 column](#grid-column-settings)
| Codepen             | [https://codepen.io/cuweb/live/mdbwyEd](https://codepen.io/cuweb/live/mdbwyEd)


## Small screen stack modifier 

By default, card grids drop down to a 2 column grid at the small screen breakpoint. If you want to display a 3 column grid but don't want to leave a card hanging in the small screen view, or if you simply want a tighter presentation of your cards on mobile, apply the modifier `b-cardgrid--stacks` at the block class level.

The modifier `b-cardgrid--stacks` implements a single column view on small screens. It also sets the cards appearance to flow horizontally instead of the default vertical view.

{%include "inc" with {'block': 'cardgrid-stacks', 'close': false} %}

<p class="u-hide-s"><strong>Note</strong>: your screen size is currently too large to view the difference applying this modifier makes in the example above. To see the difference, make your browser window smaller.</p>

```html
<div class="u-block u-block--white">
	<div class="b-cardgrid b-cardgrid--stacks u-grid u-grid--3">
		{% verbatim %}{%include 'components/card'%}{% endverbatim %}
        {% verbatim %}{%include 'components/card'%}{% endverbatim %}
        {% verbatim %}{%include 'components/card'%}{% endverbatim %}
	</div>
</div>
```

**Note**: Using this modifier card descriptions get removed on small screens. Furthermore, when using this modifier the amount of space for your title content is limited. Verbose titles will be trimmed by the CSS.

## With heading

```html
<section class="u-block u-block--white"
    <h2>Heading</h2>
    <div class="b-cardgrid u-grid u-grid--3">
        {% verbatim %}{%include 'components/card'%}
        {%include 'components/card'%}
        {%include 'components/card'%}{% endverbatim %}
    </div>
</section>
```
## Grid column settings

Four and three column grids are available. To control the number of columns, adjust the `u-grid` modifier to either `u-grid--3` or `u-grid--4`.

### Four column grid example

{%include "inc" with {'close': true} %}

<div class="u-block u-block--grey">
	<div class="b-cardgrid u-grid u-grid--4">
		{%include "card/data/card--base"%}
		{%include "card/data/card--base"%}
		{%include "card/data/card--base"%}
		{%include "card/data/card--base"%}
	</div>
</div>

{%include "inc" with {'open': 'true'} %}

```html
<div class="u-block u-block--grey">
	<div class="b-cardgrid u-grid u-grid--4">
		{% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
	</div>
</div>
```
**Note**: the above block uses `u-block--grey` which is not allowed in this [mulit-column layout](#) but is the preferred option for this block when used in a [single-column layout](#).

### Card grid with CTA link or button

If you need a 'Load more' button under the card grid add it within the `u-block` tag but outside of the `b-cardgrid` tag.

{%include "inc" with {'close': 'true'} %}

<div class="u-block u-block--white">
	<div class="b-cardgrid u-grid u-grid--4">
		{%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
	</div>
	<button class="c-buttoncta c-buttoncta--center" href="#">Load more</a>
</div>

{%include "inc" with {'open': 'true'} %}

```
<div class="u-block u-block--white">
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

{%include "inc" with {'close': 'true'} %}

<div class="u-block u-block--white">
	<div class="b-cardgrid u-grid u-grid--4">
		{%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
	</div>
	<a class="c-buttoncta c-buttoncta--center" href="#">Visit archive page</a>
</div>

{%include "inc" with {'open': 'true'} %}

```
<div class="u-block u-block--white">
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

TODO UPDATE

Control the block's width and background colour using the following [block settings](#)

- **Block widths**: `u-block--s`\*, `u-block--l`, `u-block--l`
- **Block colours**: `u-block--white`\*, `u-block--grey`

**Note: \*** = default

**Important**: if you are using the [CMS theme](#), only the default settings can be used.

{%include "inc" with {'close': 'true'} %}

<section class="u-block u-block--grey">
	<h2>Grid block with medium width and grey background setting</h2>
	<div class="b-cardgrid u-grid u-grid--4">
		{%include "card/data/card--base"%}
			{%include "card/data/card--base"%}
			{%include "card/data/card--base"%}
			{%include "card/data/card--base"%}
	</div>
</section>

{%include "inc" with {'open': 'true'} %}

```html
<div class="u-block u-block--grey">
	<div class="b-cardgrid u-grid u-grid--4">
		{% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
	</div>
</div>
```

## Content guidelines

When possible, use a grey background to allow the cards to stand out more visually.

Grid block cards should:

- Present objects of the same content and type.
- Images should have a similar tone and treatment to visually unify the panel.

## When To Avoid

- Don't use this block inside of a content block. If you need a grid within a content block, use the `u-grid` modifier. Remember, blocks can never be nested.
