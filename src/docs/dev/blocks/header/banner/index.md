---
layout: docs
title: Banner
subsite: dev
menu: dev
section: Blocks
subsection: Header Blocks
banner:
  breadcrumbs:
    grandparent: Blocks
---
The banner block acts as the first prominent visual a visitor sees on a page, and at a minimum, should include an H1 that acts as the page title. Other options available in the banner block are breadcrumb navigation, call to action buttons, and hero images.

{% include 'inc' with {'block': 'banner-base'} %}

## Base Banner

At its bare minimum, the Banner block displays the page's `<h1>` title.

{% include 'inc' with {'block': 'banner-base', 'code': true} %}

## Block details

| {{ page.title }}  block meta   |  values
| --------------| :-------------------------------------:
| handle              | `banner` 
| options examples    | <a href="#banner-with-breadcrumbs">breadcrumbs</a>, <a href="#banner-with-cta-button">CTA button</a>, <a href="#multiple-buttons">CTA buttons</a>  
| colour options      | `u-block--grey`  
| section use         | `<header>`                  
| width type          | fixed-row                           
| has heading         | n/a
| theme(s)            | CU
| variants            | <a href="#hero-image-banner">Hero image</a>
| Codepen             | [https://codepen.io/cuweb/pen/PMQEmz?editors=1000](https://codepen.io/cuweb/pen/PMQEmz?editors=1000)

## Properties

| Props        | Desc              | Type  | Default 
| --------------| :-------------------------------------:| -------:| -:|
| breadcrumbs   | breadcrumb array to loop over          | array  | - |
| img           | url for css background image           | string  | - | 
| imgOpacity    | img overlay opacity, options: `dark`, `light` | string  | -
| imgPosition   | img position, options: `top`, `bottom`                 | string  | -
| title * | Main page title `<h1>`    | string | -

<small>`*` = required.</small>

{% include 'inc' with {'block': 'banner-breadcrumbs'} %}

## Banner with breadcrumbs

For websites that have a lot of pages, enhance the way users find their way around by adding breadcrumb navigation.
Breadcrumbs indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.

{% include 'inc' with {'block': 'banner-breadcrumbs', 'code': true} %}

**Note**: that the current page (`aria-current="page"`) is included in the breadcrumb trail but is visually hidden.

{% include 'inc' with {'block': 'banner-button'} %}

## Banner with CTA button

Call to action buttons can be added to banner using the button cta component.

{% include 'inc' with {'block': 'banner-button', 'code': true} %}

{% include 'inc' with {'block': 'banner-buttons'} %}

## Banner with multiple buttons

You can add up to two CTA buttons by using the example below.

{% include 'inc' with {'block': 'banner-buttons', 'code': true} %}

{% include 'inc' with {'block': 'banner-img'} %}

## Hero image banner

Because people are highly visual, having high quality imagery at the top of your page can help create a positive first impression.

{% include 'inc' with {'block': 'banner-img', 'code': true} %}

### Image size

Banner images are 1600px in width by 700px in height.

## Banner image position and brightness

### Banner brightness

By default, banner images have a dark transparent overlay covering them to make reading the title text easier. Depending on the original brightness of the image, you may want to darken or lighten the overlay.

- To lighten an banner image, add the modifier: `b-banner--img-light`.
- To darken a banner image, add the modifier: `b-banner--img-dark`.

### Banner image position

By default banner images are centered to the container. Depending on the image and the required text, you might want to art-direct the images position.

- To align an image to the bottom, add the modifier: `b-banner--img-bottom`.
- To align an image to the top, add the modifier: `b-banner--img-top`.

{% include 'inc' with {'block': 'banner-imgdark'} %}

### Hero image darkened and aligned to the bottom

{% include 'inc' with {'block': 'banner-imgdark', 'code': true} %}

{% include 'inc' with {'block': 'banner-imglight'} %}

### Hero image lightened and aligned to the top

{% include 'inc' with {'block': 'banner-imglight', 'code': true} %}

## Implementation Notes

- Use only one banner per page. This page obviously breaks this rule but it is an anomaly in order document all the available banners and their options.
- Banners must reside in the `<header>` section.
- Banner images are 1600px in width by 700px in height.

## Content guidelines

- For hero image banners, ask yourself whether or not the image you’ve selected actually adds value. If your image is unoriginal or doesn't compliment your content, consider not using one.
- Make sure the title text is readable. Banner images should not have text on them and they should be darkened enough so that it is easy to read the page title. The page title is the most important element in the banner. Photos are used as secondary background images and are not crucial to the banner content.
- Avoid using banner images with any text on them. All text should be in the HTML itself.

## References

https://www.optimizely.com/optimization-glossary/hero-image/

