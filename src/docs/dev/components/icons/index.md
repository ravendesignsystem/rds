---
layout: t-docs
subsite: dev
title: Icons
content: true
banner:
  breadcrumbs:
    parent: Compponents
meta:
    version: 1.0.0
    status: under review
    handle: img-caption
    type: Content
    path: components/icons/
    theme: Core
---
# NEEDS UPDATING AND REVIEW 

RDS iconography uses SVG symbols to represent a common action, idea or object visually. They should be seen as a form of “visual shorthand”, lowering cognitive load.

While RDS icons are simple and consistent to ensure clarity, we should never assume people understand what an icon conveys. Icons should be accompanied with short descriptive text (label) and be used sparingly throughout Carleton digital properties. They should only be used without labels when it's necessary to better utilize space or if the icons used are considered [universal icons](#).

## The Icons
RDS ships with a [collection of 181 icons](library/). This page explains how to use these icons in your projects.

## Why SVG Icons?
SVG icons are vector-based and look great in all resolutions and sizes. SVGs are just code, with much smaller file sizes then raster images and simpler to control and style with CSS then icon fonts. 

# Icon System

RDS offers a simple system empowering the creation, maintenance and implementations of icons project-wide .

## Integrating Icons

Easily integrate icons in your projects by including/inlining the SVG icon and then contol its size and style with available utility classes.

### Including Icons in your Project with Inline SVG

Simply include the SVG icons inline in your project by either:
 
- **Copying the code** of the icon and pasting it in your document where you want the icon to be visible.

```HTML
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#222" d="M118.6 16.5C113.14 9.885 105.475 6.525 95.5 6c-10.185 0-17.745 4.41-23.1 10.5S64.21 26.16 64 27c-.21-.84-2.94-4.41-8.4-10.5C50.14 10.41 43.315 6 32.5 6c-9.975.525-17.745 3.99-23.1 10.5-5.46 6.405-8.19 13.44-8.4 21 0 5.46.945 15.96 7.035 28.035S32.605 96.405 64 121.5c31.29-25.095 50.085-43.785 56.07-55.965C126.055 53.355 127 42.75 127 37.5c-.21-7.56-2.94-14.595-8.4-21.21v.21z"></path></svg>
```
{% include "icons/heart.svg" ignore missing %}

- Or more practically, **with your server-side or templating language include** of choice.
 
```twig
 {% verbatim %} {% include "icons/heart.svg" %} {% endverbatim %}
```
{% include "icons/heart.svg" ignore missing %}

### Icon Path Variable

In the example above, the reason the include path is so short is because we have registered a namespaced path in Twig for these docs.

In the RDS project, all of the icons are located in the folder labelled **'icons'** under **src/components/**.

```html
├── src
│   ├── blocks
│   ├── components
│   │   ├── icons
│   │   │   ├── alert.svg
│   │   │   ├── apple.svg
│   │   │   └── etc..
│   ├── scss
```

To easily remember the include path, consider setting up a project-wide path variable to the icons folder. If using a server-side language like PHP, your include might look like this:

```PHP
<?php include($iconPath . "/heart.svg"); ?>
```

## Sizing and Styling Icons

To start styling your icon, wrap the include or svg code in a span tag with the `u-icon` utility class:

```twig
 <span class="u-icon">{% verbatim %}{% include "icons/heart.svg" %}{% endverbatim %}</span>
```
 
 <span class="u-icon">{%include "icons/heart.svg"%}</span>
 
 This will set the icon to the preferred near black colour that should be used for all icons on white backgrounds. Without this class, icons come in at the true black value of `#000`. It's a subtle difference, but if you inspect this icon from the ones above you will see it is filled with `#222`, our system-wide black. Another subtle enhancement is it removes the bottom spacing found in inline SVGs.

Note: you don't have to use a <span> tag to surround your icon. If you have a clear parent tag that it makes sense to put the `u-icon` class on, that works.

### Sizes

By default icons are sized to 24px by 24px. Icon size utility classes are available to resize your icon to one of the six predefined sizes. Icon size utility classes are named using the format: `u-icon--[size]`

**Available values** for size include:

- **u-icon--xxs** = 10px
- **u-icon--xs** = 15px
- **u-icon--s** = 20px
- **u-icon--m** = 25px
- **u-icon--l** = 35px
- **u-icon--xl** = 55px
- **u-icon--xxl** = 75px

```twig
<span class="u-icon u-icon--xxs">{% verbatim %}{%include "icons/heart.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--xs">{% verbatim %}{%include "icons/heart.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--s">{% verbatim %}{%include "icons/heart.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--m">{% verbatim %}{%include "icons/heart.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--l">{% verbatim %}{%include "icons/heart.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--xl">{% verbatim %}{%include "icons/heart.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--xxl">{% verbatim %}{%include "icons/heart.svg"%}{% endverbatim %}</span>
```
<span class="u-icon u-icon--xxs">{%include "icons/heart.svg"%}</span>
<span class="u-icon u-icon--xs">{%include "icons/heart.svg"%}</span>
<span class="u-icon u-icon--s">{%include "icons/heart.svg"%}</span>
<span class="u-icon u-icon--m">{%include "icons/heart.svg"%}</span>
<span class="u-icon u-icon--l">{%include "icons/heart.svg"%}</span>
<span class="u-icon u-icon--xl">{%include "icons/heart.svg"%}</span>
<span class="u-icon u-icon--xxl">{%include "icons/heart.svg"%}</span>

## Sizing and Aligning Icons with Text
Sometimes you just want an inline icon to align with and match your text size. <br>To do this, use the `u-icon--text` utility class.

```twig
<p>I <span class="u-icon u-icon--text" aria-hidden="true">{% verbatim %}{%include "icons/heart.svg"%}{% endverbatim %}</span>love how easy this icon system is! I can't find any </p> <span class="u-icon u-icon--text" aria-hidden="true">{% verbatim %}{%include "icons/bug.svg"%}{% endverbatim %}</span> bugs!
```
<p>I <span class="u-icon u-icon--text" aria-hidden="true">{%include "icons/heart.svg"%}</span>love how easy this icon system is! I can't find any <span class="u-icon u-icon--text" aria-hidden="true">{%include "icons/bug.svg"%}</span>bugs</p>

**Usability note: Avoid placing the logo on the right**. UX best practises tell us it is best to place icons to the left of their labels so that users see them first. However, if you must place the icon to the right of the text label, use the modifier class `u-icon--text--right`.

```twig
<p>Donwload our <a href="#">anual report</a> (PDF<span class="u-icon u-icon--text" aria-hidden="true">{% verbatim %}{%include "icons/file-pdf.svg"%}{% endverbatim %}</span>)</p>
```
<p>Donwload our <a href="#">anual report</a> (PDF<span class="u-icon u-icon--text" aria-hidden="true">{%include "icons/file-pdf.svg"%}</span>)</p>

**Integration note**: avoid putting a space between the label and the icon.

## Icon Colours

As mentioned above, icons should be wrapped in a span tag with the `u-icon` utility class. This insures all icons are the preffered default colour of `#222` for light backgrounds. To adjust your icon's colour for different backgrounds and actions, apply one of the icon colour utility classes that classes are named using the format: `u-icon--[color name]`. The colour names match the names in the [RDS color pallete](#)

**Available values** for icon colours:

- u-icon--red
- u-icon--white
- u-icon--grey

```twig
<span class="u-icon u-icon--red u-icon--xl">{% verbatim %}{%include "icons/paintcan.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--white u-icon--xl">{% verbatim %}{%include "icons/paintcan.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--grey u-icon--xl">{% verbatim %}{%include "icons/paintcan.svg"%}{% endverbatim %}</span>

```
<ul class="u-grid">
    <li>
        <span class="u-icon u-icon--red u-icon--xl u-center-inline u-iconography">{%include "icons/paintcan.svg"%}</span>
    </li>
    <li>
        <span class="u-icon u-icon--white u-icon--xl u-center-inline u-iconography">{%include "icons/paintcan.svg"%}</span>
    </li>
    <li>
        <span class="u-icon u-icon--grey u-icon--xl u-center-inline u-iconography">{%include "icons/paintcan.svg"%}</span>
    </li>
</ul>

## Circular backgrounds

Circular backgrounds can be placed behind any icon using the utility class modifier `u-icon--circle`. 

```HTML
<span class="u-icon u-icon--circle u-icon--xxs">{% verbatim %}{%include "icons/alert.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--circle u-icon--xs">{% verbatim %}{%include "icons/apple.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--circle u-icon--s">{% verbatim %}{%include "icons/bell.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--circle u-icon--m">{% verbatim %}{%include "icons/bug.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--circle u-icon--l">{% verbatim %}{%include "icons/database.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--circle u-icon--xl">{% verbatim %}{%include "icons/paintcan.svg"%}{% endverbatim %}</span>
<span class="u-icon u-icon--circle u-icon--xxl">{% verbatim %}{%include "icons/squirrel.svg"%}{% endverbatim %}</span>
```

<span class="u-icon u-icon--circle u-icon--xxs">{%include "icons/alert.svg"%}</span>
<span class="u-icon u-icon--circle u-icon--xs">{%include "icons/apple.svg"%}</span>
<span class="u-icon u-icon--circle u-icon--s">{%include "icons/bell.svg"%}</span>
<span class="u-icon u-icon--circle u-icon--m">{%include "icons/bug.svg"%}</span>
<span class="u-icon u-icon--circle u-icon--l">{%include "icons/database.svg"%}</span>
<span class="u-icon u-icon--circle u-icon--xl">{%include "icons/paintcan.svg"%}</span>
<span class="u-icon u-icon--circle u-icon--xxl">{%include "icons/squirrel.svg"%}</span>

By default, the circles are grey. You can change them to white by adding the utility class modifier:<br>  `u-icon--circle-white`. Note: you still need the `u-icon--circle` class as well.

```twig
<span class="u-icon u-icon--circle u-icon--circle-white u-icon--xl">{% verbatim %}{%include "icons/paintcan.svg"%}{% endverbatim %}</span>
```

<div style="background-color: #939393;padding: 10px; width: 25%; text-align: center;margin-bottom: 20px;">
    <span class="u-icon u-icon--circle u-icon--circle-white u-icon--xl">{%include "icons/paintcan.svg"%}</span>
</div>


**Design note**: the overall size of the icon doesn't change but the circle adds height and width to all sides of the element, depending on the size used. Design around this accordingly.

### Social Media icons

Linked social media icons in RDS often use the circular background to provide a bigger pressable/clickable area. For larger screens, hover classes have been setup for the social media icons to let users further identify each brand before clicking.

**Available values** for social icons include:

- u-icon--facebook
- u-icon--instagram
- u-icon--twitter
- u-icon--youtube
- u-icon--linkedin
- u-icon--pinterest

```twig
<a class="u-icon u-icon--circle u-icon--facebook u-icon--s" href="#urltosocial" role="img">
    {% verbatim %}{% include "icons/facebook.svg" %}{% endverbatim %}<span class="u-visually-hidden">Like us on Facebook</span>
</a>
<a class="u-icon u-icon--circle u-icon--instagram u-icon--s" href="#urltosocial" role="img">
    {% verbatim %}{% include "icons/instagram.svg" %}{% endverbatim %}<span class="u-visually-hidden">Follow us on Instagram</span>
</a>
<a class="u-icon u-icon--circle u-icon--twitter u-icon--s" href="#urltosocial" role="img">
    {% verbatim %}{% include "icons/twitter.svg" %}{% endverbatim %}<span class="u-visually-hidden">Follow us on Twitter</span>
</a>
<a class="u-icon u-icon--circle u-icon--youtube u-icon--s" href="#urltosocial" role="img">
    {% verbatim %}{% include "icons/youtube.svg" %}{% endverbatim %}<span class="u-visually-hidden">Subscribe to our Youtube channel</span>
</a>
<a class="u-icon u-icon--circle u-icon--linkedin u-icon--s" href="#urltosocial" role="img">
    {% verbatim %}{% include "icons/linkedin.svg" %}{% endverbatim %}<span class="u-visually-hidden">View us on Linkedin</span>
</a>
 <a class="u-icon u-icon--circle u-icon--pinterest u-icon--s" href="#urltosocial" role="img">
    {% verbatim %}{% include "icons/pinterest.svg" %}{% endverbatim %}<span class="u-visually-hidden">Check us out on Pinterest</span>
</a>
```

Hover over the icons below to view their brand colours.

<a class="u-icon u-icon--circle u-icon--facebook u-icon--s" href="#urltosocial" role="img">
    {% include "icons/facebook.svg" %}<span class="u-visually-hidden">Like us on Facebook</span>
</a>
<a class="u-icon u-icon--circle u-icon--instagram u-icon--s" href="#urltosocial" role="img">
    {% include "icons/instagram.svg" %}<span class="u-visually-hidden">Follow us on Instagram</span>
</a>
<a class="u-icon u-icon--circle u-icon--twitter u-icon--s" href="#urltosocial" role="img">
    {% include "icons/twitter.svg" %}<span class="u-visually-hidden">Follow us on Twitter</span>
</a>
<a class="u-icon u-icon--circle u-icon--youtube u-icon--s" href="#urltosocial" role="img">
    {% include "icons/youtube.svg" %}<span class="u-visually-hidden">Subscribe to our Youtube channel</span>
</a>
<a class="u-icon u-icon--circle u-icon--linkedin u-icon--s" href="#urltosocial" role="img">
    {% include "icons/linkedin.svg" %}<span class="u-visually-hidden">View us on Linkedin</span>
</a>
 <a class="u-icon u-icon--circle u-icon--pinterest u-icon--s" href="#urltosocial" role="img">
    {% include "icons/pinterest.svg" %}<span class="u-visually-hidden">Check us out on Pinterest</span>
</a>                                                                           

## Accessibility and Best Practices for Icons

 It's important that our icons are useful to the largest amount of people possible when they are necessary. Because icons should mostly be accompanied with short descriptive text, by default, they are hidden from screen readers since. You can make sure they are hidden by adding the aria-hidden="true" to your icon markup. 
 
 Whenever possible, text labels are necessary to communicate the meaning and reduce ambiguity of our icons. 
 
 **Avoid doing this**:
 
 <p>I <span class="u-icon u-icon--text" aria-hidden="true">{%include "icons/heart.svg"%}</span> how easy this icon system is! I haven't found one <span class="u-icon u-icon--text" aria-hidden="true">{%include "icons/bug.svg"%}</span>!</p>

 But if you do or **if an icon is not used for pure decorative or visual styling and does not have accompanying text**, supplement the missing label with a hidden text alternative by using the `.u-visually-hidden` utility class. Using the example of what to avoid above, we would write the markup like this:
 
 
```twig
  <p>I <span class="u-icon u-icon--text">{% verbatim %}{%include "icons/heart.svg"%}{% endverbatim %}</span><span class="u-visually-hidden">love</span> how easy this icon system is! I haven't found one <span class="u-icon u-icon--text">{% verbatim %}{%include "icons/bug.svg"%}{% endverbatim %}</span><span class="u-visually-hidden"> bug</span>!</p>
```
## Universal Icons

Very few icons are universally recognized among all users. As rare as these are, some icons are considered to be universal and are understandable when used alone. We believe the following icons are universal and therefore can be used without labels or accompanying text, if space is too tight.

**Available universal icons** include:

- <span class="u-icon u-icon--text">{% include "icons/home.svg" %}</span> - home
- <span class="u-icon u-icon--text">{% include "icons/search.svg" %}</span> - search 
- <span class="u-icon u-icon--text">{% include "icons/grabber.svg" %}</span> - menu 
- <span class="u-icon u-icon--text">{% include "icons/facebook.svg" %}</span> - facebook
- <span class="u-icon u-icon--text">{% include "icons/twitter.svg" %}</span> - twitter
- <span class="u-icon u-icon--text">{% include "icons/instagram.svg" %}</span> - instagram

## Creating Icons

...

### Don't
- Don’t over-communicate. Limit concepts to one per icon. It should be instantly understandable.

### Do
- Minimal detail: Excessive detail increases the risk of misinterpretation.
- Legible - Clarity is the most important characteristic of a great interface. 

Need
Guidelines to instruct designers on how to design icons in a way that ensured consistency and usability.

## Governance

To have a new icon added to the RDS icon library, it needs to be approved by the RDS core team. Should you need a new icon to be added to the system, please submit a feature request here. All icons accepted into the system must provide ‘sufficient additional value’.

## References

https://medium.com/etsy-design/etsys-evolving-icon-system-41c55a639be2 Apple’s iOS7 icon grid served as a starting poin


Portions derived from the Django Code of Conduct, The Citizen Code of Conduct, The Rust Code of Conduct and The Ada Initiative under a Creative Commons Attribution-ShareAlike license.

