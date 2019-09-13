---
layout: docs
subsite: dev
menu: dev
section: Components
title: Card
banner:
  breadcrumbs:
    grandparent: Components
    parent: Cards
---
RDS cards group related content and actions about a single subject. Cards serve as a linked entry point to more detailed information, while providing a quick preview of the content they link to.

{% include 'close' %}
<section class="u-block u-block--s u-block--white">
    <h2> Base card</h2>
        <div class="u-grid u-grid--3">
            {% include 'inc' with {'component': 'card-base'} %}
        </div>
</section>
{% include 'open' %}
{% include 'inc' with {'component': 'card-base', 'code': true} %}
{% include 'close' %}

<section class="u-block u-block--s u-block--white">
    <h2>Card with title and description</h2>
        <div class="u-grid u-grid--3">
            {% include 'inc' with {'component': 'card-text'} %}
        </div>
</section>
{% include 'open' %}
{% include 'inc' with {'component': 'card-text', 'code': true} %}
{% include 'close' %}

<section class="u-block u-block--s u-block--white">
    <h2>News variant with date</h2>
    <p>For news or blog posts, you can provide an associated publishing date.</p>
        <div class="u-grid u-grid--3">
            {% include 'inc' with {'component': 'card-news'} %}
        </div>
</section>
{% include 'open' %}
{% include 'inc' with {'component': 'card-news', 'code': true} %}
{% include 'close' %}

<section class="u-block u-block--s u-block--white">
    <h2>News variant with date and description</h2>
        <div class="u-grid u-grid--3">
            {% include 'inc' with {'component': 'card-newsdesc'} %}
        </div>
</section>
{% include 'open' %}
{% include 'inc' with {'component': 'card-newsdesc', 'code': true} %}
{% include 'close' %}

<section class="u-block u-block--s u-block--white">
    <h2>Video card variant</h2>
        <div class="u-grid u-grid--3">
            {% include 'inc' with {'component': 'card-video'} %}
        </div>
</section>
{% include 'open' %}
{% include 'inc' with {'component': 'card-video', 'code': true} %}
{% include 'close' %}

<section class="u-block u-block--s u-block--white">
    <h2>People variant</h2>
        <div class="u-grid u-grid--3">
            {% include 'inc' with {'component': 'card-people'} %}
        </div>
</section>
{% include 'open' %}
{% include 'inc' with {'component': 'card-people', 'code': true} %}
{% include 'close' %}

<section class="u-block u-block--s u-block--white">
    <h2>Figure variant</h2>
    <p>As per the first result when googling "definition of figure", this block is generally used for "a number, especially one which forms part of official statistics. Use this component to display number based facts or stats. The component includes an optional link and a required caption defining the number/stat.</p>
        <div class="u-grid u-grid--3">
            {% include 'inc' with {'component': 'card-figurelinked'} %}
        </div>
</section>
{% include 'open' %}
{% include 'inc' with {'component': 'card-figurelinked', 'code': true} %}
{% include 'close' %}

<section class="u-block u-block--s u-block--white">
    <h2>Figure variant without a linked URL</h2>
    <p>This is the first card example where a linked URL is optional.</p>
        <div class="u-grid u-grid--3">
            {% include 'inc' with {'component': 'card-figure'} %}
        </div>
</section>

{% include 'open' %}
{% include 'inc' with {'component': 'card-figure', 'code': true} %}
{% include 'close' %}

<div class="c-alert c-alert--info c-alert--icon">{% include 'icons/info.svg' %}
<h2>Drop shadows and cards</h2>
<p>Notice how there is no drop shadow present on the unlinked card above. By design, cards with drop shadows indicate they are clickable/touchable.</p>
</div>

<section class="u-block u-block--s u-block--white">
    <h2>Maxwidth variant</h2>
            {% include 'inc' with {'component': 'card-maxwidth'} %}
</section>
{% include 'open' %}
{% include 'inc' with {'component': 'card-maxwidth', 'code': true} %}
{% include 'close' %}

{% include 'open' %}

## Twig/Nunjucks Macro example

```twig
{% verbatim %}
{% macro card(data) %}
<article class="c-card{% if data.variant == "figure" %} c-card--figure{% elseif data.variant == "video" %} c-card--video{% elseif data.variant == "people" %} c-card--people{% endif %}{% if data.utility %} {{ data.utility }}{% endif %}" itemscope itemtype="{% if data.variant == "news" %}http://schema.org/NewsArticle{% elseif data.variant == "people" %}http://schema.org/Person{% elseif data.variant == "video" %}http://schema.org/VideoObject{% elseif data.variant == "figure" %}http://schema.org/QuantitativeValue{% else %}http://schema.org/Article{% endif %}">
{% if data.url %}
    <a href="{{ data.url }}" itemprop="url">
{% endif %}
    {% if data.img %}
        <figure itemscope itemtype="http://schema.org/ImageObject">
        {% if data.imgWebp %}
            <picture>
                <source type="image/webp" srcset="{{ data.webp }}">
                <img src="{{ data.img }}" alt="{% if data.alt %}{{ data.alt }}{% else %}Read more about {{ data.title }}{% endif  %}" loading="lazy">
            </picture>
        {% else %}
            <img src="{{ data.img }}" alt="{% if data.alt %}{{ data.imgAlt }}{% else %}Read more about {{ data.title }}{% endif  %}" loading="lazy">
        {% endif %}
        {% if data.variant == "video" %}
            <span class="u-icon u-icon--circle">
                {% include '/icons/play.svg' %}
            </span>
        {% endif %}
        </figure>
    {% endif %}
{% if data.variant == "figure" %}
        <figure>
            <figcaption>{{ data.caption }}</figcaption>
            <p itemprop="value">{{ data.value }}</p>
        </figure>
{% else %}
        <header>
        {% if data.variant == "news" %}
            <time datetime="{{ data.date }}" itemprop="datePublished" content="{{ data.date }}">{{ data.date|date("l, F jS") }}</time>
        {% endif %}
            <h3 itemprop="{% if data.variant == "news" %}headline{% else %}name{% endif %}">{{ data.title }}</h3>
        {% if data.text %}
            <p itemprop="description">{{ item.text|length > 105 ? item.text|slice(0, 105) ~ '...' : data.text  }}</p>
        {% endif %}
        </header>
{% endif %}
{% if data.url %}
    </a>
{% endif %}
</article>
{% endmacro %}
{% endverbatim %}
```

## Implementation Notes

1. Use the {% include 'link' with {'block': 'Card Grid'} %} block to group multiple cards.

2. Cards components are best displayed on top of a non-white background colour, if possible. 

## Found in

The Card component is used in the following blocks:

- {% include 'link' with {'block': 'Card Grid'} %}

## References

- [Inclusive Components: Cards](https://inclusive-components.design/cards/)
- [Best Practices for Cards](https://uxplanet.org/best-practices-for-cards-fa45e3ad94dd)
