---
layout: docs
subsite: dev
title: Card
menu: dev
section: Components
banner:
  breadcrumbs:
    grandparent: Components
---
RDS cards group related content and actions about a single subject. Cards serve as a linked entry point to more detailed information, while providing a quick preview of the content they link to.

## Base card

{%include "inc" with {'close': true} %}
<div class="u-block u-block--white u-block--s">
	<div class="b-cardgrid u-grid u-grid--3">
        {% include 'inc' with {'component': 'card-base'} %}
    </div>
</div>
{%include "inc" with {'open': true} %}

{% include 'inc' with {'component': 'card-base', 'code': true} %}

## Card with text description

Provide more information about the linked item by adding a description to the card.

{%include "inc" with {'close': true} %}
<div class="u-block u-block--white u-block--s">
	<div class="b-cardgrid u-grid u-grid--3">
        {% include 'inc' with {'component': 'card-text'} %}
    </div>
</div>
{%include "inc" with {'open': true} %}

{% include 'inc' with {'component': 'card-text', 'code': true} %}

## Card with date

For news or blog posts, you can provide an associated publishing date.

{%include "inc" with {'close': true} %}
<div class="u-block u-block--white u-block--s">
	<div class="b-cardgrid u-grid u-grid--3">
        {% include 'inc' with {'component': 'card-news'} %}
    </div>
</div>
{%include "inc" with {'open': true} %}

{% include 'inc' with {'component': 'card-news', 'code': true} %}

## Card with text description and date

Provide more information about the linked item by adding a description to the card and a date.

{%include "inc" with {'close': true} %}
<div class="u-block u-block--white u-block--s">
	<div class="b-cardgrid u-grid u-grid--3">
        {% include 'inc' with {'component': 'card-newstext'} %}
    </div>
</div>
{%include "inc" with {'open': true} %}

{% include 'inc' with {'component': 'card-newstext', 'code': true} %}

## Video card variant

Use the video card variant to highlight that the linked item's content contains a video.

{%include "inc" with {'close': true} %}
<div class="u-block u-block--white u-block--s">
	<div class="b-cardgrid u-grid u-grid--3">
        {% include 'inc' with {'component': 'card-video'} %}
    </div>
</div>
{%include "inc" with {'open': true} %}

{% include 'inc' with {'component': 'card-video', 'code': true} %}

## Video card variant with text description

{%include "inc" with {'close': true} %}
<div class="u-block u-block--white u-block--s">
	<div class="b-cardgrid u-grid u-grid--3">
        {% include 'inc' with {'component': 'card-videotext'} %}
    </div>
</div>
{%include "inc" with {'open': true} %}

{% include 'inc' with {'component': 'card-videotext', 'code': true} %}

## People card variant 

To list groups of people, use the people card variant. People images should be square and at least 500x500px.

{%include "inc" with {'close': true} %}
<div class="u-block u-block--white u-block--s">
	<div class="b-cardgrid u-grid u-grid--3">
        {% include 'inc' with {'component': 'card-people'} %}
    </div>
</div>
{%include "inc" with {'open': true} %}

{% include 'inc' with {'component': 'card-people', 'code': true} %}

## Max-width card variant 

Usually, cards are listed in 3 and 4 column grid blocks. Max-width cards can be used outside of a grid in a single column. Note: for max-width cards, the image dimensions need to be 768x300px. They do not need to be in the Card Grid block and can go directly within the `b-content` block. These size best inside three column layouts.

<article class="c-card" itemscope itemtype="http://schema.org/Article">
    <a href="https://news.nationalgeographic.com/2017/07/ravens-problem-solving-smart-birds/" itemprop="url">
        <figure class="card__figure" itemscope itemtype="http://schema.org/ImageObject">
            <img src="https://dummyimage.com/768x300/eee/222.gif" alt="Read more about Max-width card">
        </figure>
        <div class="card__body">
            <h3 class="card__title" itemprop="name">Max-width card</h3>
            <p class="card__text" itemprop="description">Usually, cards are used in 3 and 4 column grid blocks to control their size. You can use them outside a grid, but the image dimensions need to be 768x300px.</p>
        </div>
    </a>
</article><br>

```html
<article class="c-card" itemscope itemtype="http://schema.org/Article">
    <a href="https://news.nationalgeographic.com/2017/07/ravens-problem-solving-smart-birds/" itemprop="url">
        <figure class="card__figure" itemscope itemtype="http://schema.org/ImageObject">
            <img src="https://dummyimage.com/768x300/eee/222.gif" alt="Read more about Max-width card">
        </figure>
        <div class="card__body">
            <h3 class="card__title" itemprop="name">Max-width card</h3>
            <p class="card__text" itemprop="description">Usually, cards are used in 3 and 4 column grid blocks to control their size. You can use them outside a grid, but the image dimensions need to be 768x300px.</p>
        </div>
    </a>
</article>
```

## Implementation Notes

- Cards are adaptive and size to their container. Card components need to be confined via grids and blocks . For example, the {%include "link" with {'block': 'Card Grid'} %} can be used to group related cards.

- When using a [single-column layout](#), card components are best displayed on top of a grey background colour rows.

## Found in

{{page.title}} components are used in the following blocks:

- {%include "link" with {'block': 'Card Grid'} %}


## References

- [Inclusive Components: Cards](https://inclusive-components.design/cards/)
- [Best Practices for Cards](https://uxplanet.org/best-practices-for-cards-fa45e3ad94dd)

