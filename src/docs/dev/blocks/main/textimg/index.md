---
layout: docs
subsite: dev
section: Blocks
title: Text-Image
banner:
  breadcrumbs:
    grandparent: Blocks
---

The Text-Image block allows you to display text to the right or the left of an image with an appropriate amount of whitespace padding around the image.

{% include 'inc' with {'block': 'textimg-base'} %}

{% include 'inc' with {'block': 'textimg-base', 'code': true} %}

{% include 'inc' with {'block': 'textimg-imgtext'} %}

{% include 'inc' with {'block': 'textimg-imgtext', 'code': true} %}

 <div class="c-alert c-alert--info c-alert--icon u-hide-s">
    {% include "icons/info.svg" %}
    <h2>HTML order remains the same</h2>
    <p>Resize your browser window to a small screen and you will notice in the examples above that order of the HTML, h2 then img then text remains the same, whether the image is on the right or the left.</p>
</div>

## Block details

| {{ page.title }}  block meta |                                          values                                           |
| ---------------------------- | :---------------------------------------------------------------------------------------: |
| handle                       |                                         `textimg`                                         |
| width type                   |                                           fixed                                           |
| colour options               |                             `u-block--white`, `u-block--grey`                             |
| section use                  |                                         `<main>`                                          |
| has heading                  |                                           true                                            |
| theme(s)                     |                                            CU                                             |
| variants                     |                           <a href="#left-image">Left image</a>                            |
| Codepen                      | [https://codepen.io/cuweb/pen/pozdQzK](https://codepen.io/cuweb/pen/pozdQzK?editors=1000) |

## Properties

| Props       |              Description               |   Type | Default |
| ----------- | :------------------------------------: | -----: | ------: |
| blockSize*  |     block width, options: `s`, `l`     | string |       s |
| blockColor* | block color, options: `white`, `grey`  | string |   white |
| heading*    |        `<h2>` or `<h3>` heading        | string |       - |
| img*        |          URL of 640x480 image          | string |       - |
| text* **    | Text content in one or more `<p>` tags |   HTML |       - |

<small>`*` = required.</small><br>
<small>`**` = HTML tags available include: `<p>`,`<a>`,`<strong>`, `<b>`, `<code>`, `<h4>`</small>


{% include 'inc' with {'block': 'textimg-grey'} %}
{% include 'inc' with {'block': 'textimg-grey', 'code': true} %}

{% include 'inc' with {'block': 'textimg-heading'} %}
{% include 'inc' with {'block': 'textimg-heading', 'code': true} %}

{% include 'inc' with {'block': 'textimg-headingcenter'} %}
{% include 'inc' with {'block': 'textimg-headingcenter', 'code': true} %}


{% include 'inc' with {'block': 'textimg-large'} %}
{% include 'inc' with {'block': 'textimg-large', 'code': true} %}

## Grouping blocks

While all blocks are separate, a pattern for this block is to use the same background colour and group several blocks that share related content. These should be grouped by setting a Block Heading on the first block and wrapping all of them in another `<section>` tag.

{% include 'close' %}


<section class="u-block u-block--grey">
    <h2 class="c-heading- c-heading--center">Supports centered block headings</h2>
    <p>In addition, it supports subheadings.</p>
    <div class="b-textimg">
        <div class="textimg__wrapper">
            <div>
                <img src="https://via.placeholder.com/640x480" alt="">
                <div class="textimg__text">
                    <p>At least one heading is required when using the Text-Image block. But if a block heading is used, you do not need to add a heading within the block...as per this example.</p><p>Multiple paragraphs can be used in the text are of this block.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="u-block u-block--grey">
    <div class="b-textimg">
        <div class="textimg__wrapper">
            <section>
                <h2>Example header</h2>
                <img src="https://via.placeholder.com/640x480" alt="" />
                <div class="textimg__text">
                    <p>It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.</p>
                </div>
            </section>
        </div>
    </div>
</div>
<div class="u-block u-block--grey">
    <div class="b-textimg">
        <div class="textimg__wrapper">
            <section>
                <h2>Example header</h2>
                <img src="https://via.placeholder.com/640x480" alt="" />
                <div class="textimg__text">
                    <p>It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.</p>
                </div>
            </section>
        </div>
    </div>
</div>


{% include 'open' %}

```html
<section class="u-block u-block--grey">
    <h2 class="c-heading- c-heading--center">Supports centered block headings</h2>
    <p>In addition, it supports subheadings.</p>
    <div class="b-textimg">
        <div class="textimg__wrapper">
            <div>
                <img src="https://via.placeholder.com/640x480" alt="">
                <div class="textimg__text">
                    <p>At least one heading is required when using the Text-Image block. But if a block heading is used, you do not need to add a heading within the block...as per this example.</p><p>Multiple paragraphs can be used in the text are of this block.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="u-block u-block--grey">
    <div class="b-textimg">
        <div class="textimg__wrapper">
            <section>
                <h2>Example header</h2>
                <img src="https://via.placeholder.com/640x480" alt="" />
                <div class="textimg__text">
                    <p>It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.</p>
                </div>
            </section>
        </div>
    </div>
</div>
<div class="u-block u-block--grey">
    <div class="b-textimg">
        <div class="textimg__wrapper">
            <section>
                <h2>Example header</h2>
                <img src="https://via.placeholder.com/640x480" alt="" />
                <div class="textimg__text">
                    <p>It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.</p>
                </div>
            </section>
        </div>
    </div>
</div>
```
