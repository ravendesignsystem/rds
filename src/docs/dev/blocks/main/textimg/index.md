---
layout: docs
subsite: dev
section: Blocks
title: Text-Image
banner:
  breadcrumbs:
    grandparent: Blocks
meta:
  version: 1.0.0
  status: review required
  handle: textimg
  type: Fixed-width
  section: Main
  path: textimg/
  theme: na
  heading: Yes
context: 
- name: imgtext
dependencies:
    js: n/a
    selector: b-textimg
    restricted: div or section
    maxwidth: u-block--l
examples:
- name: base
- name: heading
- name: imgtext
- name: widths
wild: n/a
alternatives: wrap images in content block.
---

The Text-Image block allows you to display text to the right or the left of an image with an appropriate amount of whitespace padding around the image.

{% include 'inc' with {'block': 'textimg-base'} %}

{% include 'inc' with {'block': 'textimg-base', 'code': true} %}

## Block details

| {{ page.title }}  block meta   |  values
| --------------| :-------------------------------------:
| handle              | `textimg` 
| width options       | `u-block--s`, `u-block--l`   
| colour options      | `u-block--white`, `u-block--grey`  
| section use         | `<main>`                  
| width type          | fixed-row                           
| has heading         | true
| theme(s)            | CU
| variants            | <a href="#left-image">Left image</a>
| Codepen             | [https://codepen.io/cuweb/pen/pozdQzK](https://codepen.io/cuweb/pen/pozdQzK?editors=1000)

## Properties

| Props        | Desc              | Type  | Default 
| --------------| :-------------------------------------:| -------:| -:|
| blockSize     | block width, options: `s`, `l`           | string  | - |
| blockColor           | url for css background image           | string  | - | 
| imgOpacity    | img overlay opacity, options: `dark`, `light` | string  | -
| imgPosition   | img position, options: `top`, `bottom`                 | string  | -
| title * | Main page title `<h1>`    | string | -

<small>`*` = required.</small>

## Left image

{% include 'inc' with {'block': 'textimg-imgtext'} %}

{% include 'inc' with {'block': 'textimg-imgtext', 'code': true} %}

 <div class="c-alert c-alert--info c-alert--icon u-hide-s">
    {% include "icons/info.svg" %}
    <h2>HTML order remains the same</h2>
    <p>Resize your browser window to a small screen and you will notice in the examples above that order of the HTML, `< h2 >< img >< p >` remains the same, wether the image is on the right or the left.</p>
</div>

{% include 'inc' with {'block': 'textimg-grey'} %}

{% include 'inc' with {'block': 'textimg-grey', 'code': true} %}

{% include 'inc' with {'block': 'textimg-heading'} %}

{% include 'inc' with {'block': 'textimg-heading', 'code': true} %}

{% include 'inc' with {'block': 'textimg-large'} %}

{% include 'inc' with {'block': 'textimg-large', 'code': true} %}

## Grouping blocks

While separate blocks, a pattern is often to put several blocks in row with related content. These can be group by setting a Block Heading on the first block and wrapping all of them in another `<section>` tag.

{% include 'close' %}

<section>
    <section class="u-block u-block--s u-block--grey">
        <h2 class=" c-heading--center">Supports Centered and Default Block Headings</h2>
        <p>In addition, it supports subheadings.</p>
        <div class="b-textimg">
            <div class="textimg__wrapper">
                <div class="textimg__section">
                    <h3 class="textimg__heading"></h3>
                    <img class="textimg__img" src="https://via.placeholder.com/640x480" alt="">
                    <div class="textimg__desc">
                        <p>It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="u-block u-block--s u-block--grey">
        <div class="b-textimg b-textimg">
            <div class="textimg__wrapper">
                <div class="textimg__section">
                    <img class="textimg__img" src="https://via.placeholder.com/640x480" alt="" />
                    <div class="textimg__desc">
                        <p>It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="u-block u-block--s u-block--grey">
        <div class="b-textimg">
            <div class="textimg__wrapper">
                <div class="textimg__section">
                    <img class="textimg__img" src="https://via.placeholder.com/640x480" alt="" />
                    <div class="textimg__desc">
                        <p>It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{% include 'open' %}

```html
<section>
    <section class="u-block u-block--s u-block--grey">
        <h2 class=" c-heading--center">Supports Centered and Default Block Headings</h2>
        <p>In addition, it supports subheadings.</p>
        <div class="b-textimg">
            <div class="textimg__wrapper">
                <div class="textimg__section">
                    <h3 class="textimg__heading"></h3>
                    <img class="textimg__img" src="https://via.placeholder.com/640x480" alt="">
                    <div class="textimg__desc">
                        <p>It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="u-block u-block--s u-block--grey">
        <div class="b-textimg b-textimg">
            <div class="textimg__wrapper">
                <div class="textimg__section">
                    <img class="textimg__img" src="https://via.placeholder.com/640x480" alt="" />
                    <div class="textimg__desc">
                        <p>It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="u-block u-block--s u-block--grey">
        <div class="b-textimg">
            <div class="textimg__wrapper">
                <div class="textimg__section">
                    <img class="textimg__img" src="https://via.placeholder.com/640x480" alt="" />
                    <div class="textimg__desc">
                        <p>It is important to note the text is not intended to wrap around the image. In general, the amount of text used should be the same height as the image on large screens. This will, of course, differ if you use a large or small block size.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```
