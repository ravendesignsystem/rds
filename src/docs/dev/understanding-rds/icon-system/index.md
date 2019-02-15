---
layout: base
subsite: dev
title: Icon system
content: true
---
RDS offers a simple icon system empowering the creation, maintenance and implementation of SVG icons project-wide.

## Integrating icons

Easily integrate icons in your projects by simply including the SVG icons inline and wrapping them in the `u-icon` utility class.. 

### Inline SVGs

Inline SVG simply refers to SVG markup that gets included directly in your markup.

When possible, use a templating language or server-side include to inline our SVG icons.

```twig
{% verbatim %}{% include 'icons/heart.svg' %}{% endverbatim %}
```

Or, you can embed all of the icon's SVG code inside your HTML:

```HTML
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#222" d="M118.6 16.5C113.14 9.885 105.475 6.525 95.5 6c-10.185 0-17.745 4.41-23.1 10.5S64.21 26.16 64 27c-.21-.84-2.94-4.41-8.4-10.5C50.14 10.41 43.315 6 32.5 6c-9.975.525-17.745 3.99-23.1 10.5-5.46 6.405-8.19 13.44-8.4 21 0 5.46.945 15.96 7.035 28.035S32.605 96.405 64 121.5c31.29-25.095 50.085-43.785 56.07-55.965C126.055 53.355 127 42.75 127 37.5c-.21-7.56-2.94-14.595-8.4-21.21v.21z"></path></svg>
```
The first approach above of using an include is much better because if an icon is updated, all use cases receive the changes, instead of having to update the SVG code in several files.

#### SVG icon paths

In the RDS projects, all icons are located in the folder labelled **'icons'** under **/components**.

```html
your-project/
├── scss
│   └── custom.scss
└── node_modules/
    └── rds
        ├── blocks
        ├── components
        │   └── icons
        │      ├── alert.svg
        │      ├── apple.svg
        │      └── etc..
        └── scss
```

**Note**: to easily include icons across your project, consider registering a short namespaced variable path to the RDS icon folder. For example:

```TWIG
{% verbatim %}{% include iconPath ~ '.alert.svg' %}{% endverbatim %} 
```
## Icon types and usage

There are two ways an icon might be used:

1. **Standalone**: an icon presented alone that needs to convey meaning all by itself. This includes icons without text next to them used as interactive controls — buttons, form elements, toggles, etc.
2. **Decorative**: an icon used for visual or branding reinforcement - the words around it convey the meaning.

**Important**: with the [exception of a few](#) icons, the majority of icons in RDS are **intended to be used as decorative icons**. This means visible text labels must be present alongside an icon to better communicate the meaning. Icons isolated from supporting context are bad at conveying concepts. In most use cases the icon should be there to draw someones attention to a label, it is not a label itself.

> “a word is worth a thousand pictures.” - Bruce Tognazzini

If you scroll up a bit and look on the right-side of the masthead across the top of this page, you will see a link to our Github projects. Even though the Github icon is used across the web and is well known, we still have the "Github" text accompanying the icon.

<span class="u-icon">{% include 'icons/mark-github.svg' %}</span>Github

## Icon utility classes

Apply base icon styling by wrapping all icons in a `<span>` **OR** `<a>` element using the `u-icon` utility class on it.

```twig
{% verbatim %}<span class="u-icon">{% include 'icons/heart.svg' %}</span>{% endverbatim %}
```
This sets an icon's default height and width equal to 1em to align with text of varying font sizes. In addition, it sets the default icon color to RDS' near black.

**Remember**: we always need a text label. 

Text labels should be included within the `u-icon` element.

```twig
{% verbatim %}<span class="u-icon">{% include 'icons/heart.svg' %} Love</span>{% endverbatim %}
```
<span class="u-icon">{% include 'icons/heart.svg' %} Love</span>

### Icon colors

Use the following utility class modifiers to change an icon's color:

- `u-icon--red`,
- `u-icon--grey`,
- `u-icon--white`

```twig
<span class="u-icon u-icon--red">{% verbatim %}{% include 'icons/heart.svg' %}{% endverbatim %} love</span>
```
<span class="u-icon u-icon--red">{% include 'icons/heart.svg' %} love</span> 

### Aligning icons to text

By wrapping the text label in the element with the `u-icon` class, the icon will align with the text size.

```twig
<p>
    <span class="u-icon u-icon--red">{% verbatim %}
        {% include 'icons/heart.svg' %}{% endverbatim %}love
    </span> 
</p>
```
<p><span class="u-icon u-icon--red">{% include 'icons/heart.svg' %}love</span></p>

Then even if the text size changes...

```html
<p style="font-size: 2.5em">
    <span class="u-icon u-icon--red">
        {% verbatim %}{% include 'icons/heart.svg' %}{% endverbatim %}love
    </span>
</p>
```
 <p style="font-size: 2.5em"><span class="u-icon u-icon--red">{% include 'icons/heart.svg' %} </span>love</p>
 
..the icon and text size remain proportional.

### Circular icons

**TODO overflow: visible; broken in Safari :()**

Add a circular background to any icon using the `u-icon--circle` modifier.

```html
<p style="font-size: 2.5em">
    <span class="u-icon u-icon--circle">
        {% verbatim %}{% include 'icons/heart.svg' %}{% endverbatim %}love
    </span>
</p>
```

<p style="font-size: 2.5em"><span class="u-icon u-icon--circle">{% include 'icons/grabber.svg' %}<span>love</span></span></p>

Notice how the icon shrinks and the background height remains the sames as the label. For guidance on when to use circular background icons, view the [design guidelines for icons](#).

#### Dark backgrounds

For circular icons on dark backgrounds use an additional modifier: <br> `.u-icon--circle--white`.

```html
<p>
    <span class="u-icon u-icon--circle u-icon--circle--white">
        {% verbatim %}{% include 'icons/heart.svg' %}{% endverbatim %} love
    </span>
</p>
```

<p style="color: #fff;font-size: 2em;background:#222;padding: 10px;"><span class="u-icon u-icon--circle u-icon--circle--white">{% include 'icons/heart.svg' %} love</span></p>

**Note**: if using a circular icon, you can **not** change an icon's color.

### Icon sizes

Since the methods above let us easily match icon size with accompanying text, RDS does not provide any utility classes for icon sizes. If you need a certain size icon, handle the sizing in the block's CSS. You should, however, try and align with RDS's [typographic scale](#) for sizing.

## Standalone icons

RDS has just a few icons that can be used as standalone icons. These are either common interface controls or are recognized globally as [universal icons](#). 

Very few icons are universally recognized among all users. As rare as these are, some icons are considered to be universal and are understandable when used alone. We believe the following icons are universal and therefore can be used without **visible** labels, if space is too tight.

### Universal icons

- <span class="u-icon">{% include "icons/home.svg" %} home</span> 
- <span class="u-icon">{% include "icons/search.svg" %} search</span> 
- <span class="u-icon">{% include "icons/grabber.svg" %} hamburger menu</span> 
- <span class="u-icon">{% include "icons/facebook.svg" %} Facebook</span>  
- <span class="u-icon">{% include "icons/twitter.svg" %} Twitter</span> 
- <span class="u-icon">{% include "icons/instagram.svg" %} Instagram</span> 
- <span class="u-icon">{% include "icons/youtube.svg" %} YouTube</span> 
- <span class="u-icon">{% include "icons/linkedin.svg" %} LinkedIn</span> 
- <span class="u-icon">{% include "icons/pinterest.svg" %} Pinterest</span>  

### Interface control icons

The following icons can be used alone when used in the appropriate interface controls:

- <span class="u-icon">{% include "icons/plus.svg" %} plus</span>
- <span class="u-icon">{% include "icons/chevron-right.svg" %} chevron-right</span>

## Use hidden labels for standalone icons

Standalone icons should still have their textual equivalent next to them, but the text can be visually hidden but still readable to screen readers. To do this use a `<span>` element to wrap the text and then visually hide it from the viewer with the utility class: `u-visually-hidden` .

```HTML
<span class="u-icon">{% verbatim %}
    {% include 'icons/search.svg' %}{% endverbatim %} 
    <span class="u-visually-hidden">Search</span>
</span> 
```

<span class="u-icon">{% include 'icons/search.svg' %} <span class="u-visually-hidden">Search</span> </span> 

Because the labels are hidden, feel free to be more descriptive with standalone icons as space is not a concern.

```HTML
<span class="u-icon">{% verbatim %}
    {% include 'icons/search.svg' %}{% endverbatim %} 
    <span class="u-visually-hidden">
        Search across all of the carleton.ca domain
    </span>
</span> 
```

## Icon accessibility

### ALT text and ARIA labels

Since our decorative icons always have a text label, they **do not need additional alt text** added to the SVG. The label should speak for itself and **does not need an aria-label** attribute either.

### Linked icons with text

When linking an icon, use an `<a>` element instead of a `<span>`.  For linked icons that are paired with text, you can add aria-label on the `<a>` tag to provide even more descriptive, alternative text then the label.

```twig
{% verbatim %}<a class="u-icon" aria-label="Love this post!">
    {% include 'icons/heart.svg' %} Love
</a>{% endverbatim %}
```

## Why inline SVG icons?

Scalable Vector Graphic (SVG) is emerging as the preferred graphic format to use on the web today because it is vector-based and looks great in all resolutions and sizes. Because SVGs are just code, they offer smaller file sizes then raster images. They have also proven to be more performant then icon fonts.  Inline SVGs do not require an additional network request, enabling improved page loading.

Since the SVG is essentially the DOM, you can easily use external CSS, fonts and scripts. Multiple SVG can be inlined that refers to a single CSS or font files, therefore saving bandwidth and resources.

Presently, RDS has ## of icons. By including the SVGs inline our icon library can continue to grow without any overhead file size concerns.

Inlining the SVG provides more predictable results and control than if it is added with <use> or <img> because the SVG source is directly available in the DOM which is exposed to the accessibility API.

**TODO ALL CONTENT BELOW IS STILL IN THE WORKS**

## Icon principles and guidelines

RDS uses SVG icons to represent common actions, ideas and objects visually. They should be seen as a form of “visual shorthand”, lowering cognitive load.

 icon position - left except interaxce icons
 presented alone that needs to convey meaning all by itself. This includes icons without text next to them used as interactive controls — buttons, form elements, toggles, etc.

>  Clarity is the most important characteristic of a great interface. To avoid the ambiguity that plague most icons, we can include a text label to clarify an icon’s meaning in a particular context.

Icons help dealing with narrow spaces, where text doesn’t fit,
They can have a common meaning independent of language,
They brand,
They can help draw attention to important elements in a user interface.
We should: 

- never assume people understand what an icon conveys
- use use icons sparingly across RDS interfaces

Icons should have a fair amount of white space around them. Avoid crunching them into heavy text areas.

### <span class="u-icon u-icon--circle u-docs-icon u-docs-icon--red">{% include 'icons/x.svg' %} Don't add an icon in the middle of a paragraph</span>

<p>
Lorem ipsum dolor sit amet, consectetur elit. Fusce blandit tellus  luctus. Nullam sodales imperdiet aliquam. Follow on <span class="u-icon">{% include 'icons/twitter.svg' %}Twitter</span> non lorem laoreet odio efficitur vulputate. Phasellus leo elit, fermentum vestibulum nisl a, congue tincidunt sapien. Nulla ac posuere velit, a pulvinar erat
</p>

### <span class="u-icon u-icon--circle u-docs-icon">{% include 'icons/check.svg' %} Add them to the begining of lists and titles</span>

- <span class="u-icon">{% include "icons/facebook.svg" %} Facebook</span>  
- <span class="u-icon">{% include "icons/twitter.svg" %} Twitter</span> 
- <span class="u-icon">{% include "icons/instagram.svg" %} Instagram</span> 

## Icon accessibility

While RDS icons are simple and consistent to ensure clarity, we should never assume people understand what an icon conveys. Icons should be accompanied with short descriptive text (label) and be used sparingly. They should only be used without labels when it's necessary to better utilize space or if the icons used are considered [universal icons](#).



 create reusable and accessible inline SVGs that could be sized and colored with utility classes.We can also add color, sizing, and spacing utility classes. In the end, the markup looks something like this:

 
Since in most uses cases our icons are decorative and are accompanied with text, our icons are hidden from screen readers by default. 

## The icons

RDS icons are indented to symbolize common actions and objects in a simple manner.

## Best practices / Examples

Use them when there is natuarl space bnetween elements like a UL no in the middle of a <p>

> If your target audience is a general population, you should not be using icons alone to convey anything meaningful. By doing so, you have made assumptions that are unlikely to be appropriate to a general audience.

### Don't
- Don’t over-communicate. Limit concepts to one per icon. It should be instantly understandable.

### Do
- Minimal detail: Excessive detail increases the risk of misinterpretation.
- Legible - Clarity is the most important characteristic of a great interface. 

Need
Guidelines to instruct designers on how to design icons in a way that ensured consistency and usability.

## Governance

To have a new icon added to the RDS icon library, it needs to be approved by the RDS core team. Should you need a new icon to be added to the system, please submit a feature request here. All icons accepted into the system must provide ‘sufficient additional value’.

## Designing and adding icons

## TLDR

How to use decorative icons

How to use standalone

## References

https://css-tricks.com/pretty-good-svg-icon-system/

https://css-tricks.com/accessible-svgs/

https://css-tricks.com/can-make-icon-system-accessible/

https://cloudfour.com/thinks/seriously-dont-use-icon-fonts/

https://www.nngroup.com/articles/icon-testing/

https://vecta.io/blog/best-way-to-embed-svg/

https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/

https://mattwilcox.net/musing/the-ineffectiveness-of-icons

https://ux.stackexchange.com/questions/1795/when-to-use-icons-vs-icons-with-text-vs-just-text-links
