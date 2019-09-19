---
layout: docs
title: Listing
subsite: dev
main: null
menu: dev
banner:
  breadcrumbs:
    grandparent: Blocks
section: Blocks
subsection: Main blocks
---
Listing blocks display a series of related content in vertical lists as a single continuous element. The Listing block has several options and variants for dealing with different content types.

{% include 'inc' with {'block': 'listing-base'} %}

{% include 'inc' with {'block': 'listing-base', 'code': true} %}

<div class="c-alert c-alert--info c-alert--icon">{% include 'icons/info.svg' %}
<h2>Listing block headings</h2>
<p>For Listing blocks a heading is required. Therefore all the  code examples on this page include a block headings.</p>
</div>

{% include 'inc' with {'block': 'listing-subtitle'} %}
{% include 'inc' with {'block': 'listing-subtitle', 'code': true} %}

{% include 'inc' with {'block': 'listing-img'} %}
{% include 'inc' with {'block': 'listing-img', 'code': true} %}

{% include 'inc' with {'block': 'listing-badge'} %}
{% include 'inc' with {'block': 'listing-badge', 'code': true} %}

{% include 'inc' with {'block': 'listing-icon'} %}
{% include 'inc' with {'block': 'listing-icon', 'code': true} %}

{% include 'inc' with {'block': 'listing-file'} %}
{% include 'inc' with {'block': 'listing-file', 'code': true} %}

{% include 'inc' with {'block': 'listing-event'} %}
{% include 'inc' with {'block': 'listing-event', 'code': true} %}

{% include 'inc' with {'block': 'listing-news'} %}
{% include 'inc' with {'block': 'listing-news', 'code': true} %}

{% include 'inc' with {'block': 'listing-newsimg'} %}
{% include 'inc' with {'block': 'listing-newsimg', 'code': true} %}

{% include 'inc' with {'block': 'listing-people'} %}
{% include 'inc' with {'block': 'listing-people', 'code': true} %}

{% include 'inc' with {'block': 'listing-video'} %}
{% include 'inc' with {'block': 'listing-video', 'code': true} %}

## Listing blocks in two columns

The Listing block is one of the few blocks that can be positioned side-by-side, on large screens, by wrapping two blocks in a single u-block class and a nested u-grid u-grid--2 class.

{% include 'close' %}

<div class="u-block u-block--white">
    <div class="u-grid u-grid--2 u-grid--s1">
     <section>
        <h3>Two column Listing blocks</h3>
        <div class="b-listing">
            <ul itemscope itemtype="http://schema.org/ItemList">
                <li itemprop="item">
                    <a href="https://en.wikipedia.org/wiki/White-necked_raven" itemprop="url">
                        <header class="listing__body" itemprop="name">
                            <h4 class="listing__title">White-necked Raven</h4>
                        </header>
                    </a>
                </li>
                <li itemprop="item">
                    <a href="https://en.wikipedia.org/wiki/Australian_raven" itemprop="url">
                        <header class="listing__body" itemprop="name">
                            <h4 class="listing__title">Australian raven</h4>
                        </header>
                    </a>
                </li>
            </ul>
        </div>
        </section>
        <section>
            <h3>Two column Listing blocks</h3>
            <div class="b-listing">
                <ul itemscope itemtype="http://schema.org/ItemList">
                    <li itemprop="item">
                        <a href="https://en.wikipedia.org/wiki/White-necked_raven" itemprop="url">
                            <header class="listing__body" itemprop="name">
                                <h4 class="listing__title">White-necked Raven</h4>
                            </header>
                        </a>
                    </li>
                    <li itemprop="item">
                        <a href="https://en.wikipedia.org/wiki/Australian_raven" itemprop="url">
                            <header class="listing__body" itemprop="name">
                                <h4 class="listing__title">Australian raven</h4>
                            </header>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--white">
    <div class="u-grid u-grid--2 u-grid--s1">
     <section>
        <h3>Two column Listing blocks</h3>
        <div class="b-listing">
            <ul itemscope itemtype="http://schema.org/ItemList">
                <li itemprop="item">
                    <a href="https://en.wikipedia.org/wiki/White-necked_raven" itemprop="url">
                        <header class="listing__body" itemprop="name">
                            <h4 class="listing__title">White-necked Raven</h4>
                        </header>
                    </a>
                </li>
                <li itemprop="item">
                    <a href="https://en.wikipedia.org/wiki/Australian_raven" itemprop="url">
                        <header class="listing__body" itemprop="name">
                            <h4 class="listing__title">Australian raven</h4>
                        </header>
                    </a>
                </li>
            </ul>
        </div>
        </section>
        <section>
            <h3>Two column Listing blocks</h3>
            <div class="b-listing">
                <ul itemscope itemtype="http://schema.org/ItemList">
                    <li itemprop="item">
                        <a href="https://en.wikipedia.org/wiki/White-necked_raven" itemprop="url">
                            <header class="listing__body" itemprop="name">
                                <h4 class="listing__title">White-necked Raven</h4>
                            </header>
                        </a>
                    </li>
                    <li itemprop="item">
                        <a href="https://en.wikipedia.org/wiki/Australian_raven" itemprop="url">
                            <header class="listing__body" itemprop="name">
                                <h4 class="listing__title">Australian raven</h4>
                            </header>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</div>
```

**Note** how the headings in the block switch to `<h4>`s as they followed `<h3>`s.

### Two column implementation notes

Listing blocks should only be used in two columns if:

- The the titles are short. If they wrap both should wrap.
- There are no more then 12 items total (six a side) for easy scanning and no need for the user to scroll.
- is NOT a news variant can not be used in a two column use case.

## Block details

| {{ page.title }}  block meta   |  values
| --------------| :-------------------------------------:
| handle              | `listing`    
| colour options      | `u-block--white`,`u-block--grey`
| section use         | `<main>`                  
| width type          | fixed                         
| has heading         | true
| theme(s)            | CU
| variants            | events, icon, news, people, video
| Codepen             | coming soon


## Content guidelines

List Group items should:

- present objects of the same type.
- start with a capital letter.
- not use commas or semicolons at the end of each line.
- link to a page for the item with more information.
- have text labels be as short as possible.

## When To Avoid

- Don't use this block to replace default content ordered and unordered lists.
- Don't us this block if you are listing items that don't link anywhere.

## Dates and Times
Date and time format should always be CCYY-MM-DDThh:mm:ss as per [W3C](https://www.w3.org/TR/NOTE-datetime)

## References

- [How to mark up subheadings, subtitles, alternative titles and taglines](http://html5doctor.com/howto-subheadings/)
- [HTML5 subtitle mark-up for every level of headings, ie, h1 to h6](https://stackoverflow.com/questions/43178019/html5-subtitle-mark-up-for-every-level-of-headings-ie-h1-to-h6)
