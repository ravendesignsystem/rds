---
layout: docs
subsite: dev
section: Blocks
title: Masthead
banner:
 breadcrumbs:
  grandparent: Blocks
  parent: Header
---
As the first block located on top of the page, the masthead is an essential toolbar that provides site-wide content and actions.

## Masthead sections

The masthead block contains three distinct sections.

{% include 'close' %}

<img src="https://cu-rds.s3.amazonaws.com/docs/assets/topnav-mh.png" style="margin: 0 auto;max-width:1200px" alt="Masthead sections">

{% include 'open' %}

1. **Branding and site title**:<br> a required section to display Carleton's shield mark and your site title.
<br><br>
2. **Top Nav**:<br> optional, site-wide navigation area for primary/top level navigation.
<br><br>
3. **Action buttons**:<br> optional, CTA and UI buttons for common application controls, such as search and mobile navigation.

The Masthead block and its sections in code:

```html
<!-- standard u-block wrapper -->
<div class="u-block u-block--full">
    <!-- main block container -->
    <div class="b-masthead">
        <!-- 1. Branding and site title *req.-->
        <div class="masthead__brand">
            section code...
        </div>
        <!-- 2. Site-wide navigation -->
        <nav class="masthead__nav">
            section code...
        </nav>
        <!-- 3. Action buttons -->
        <div class="masthead__actions" aria-label="Header actions and controls">
            section code...
        </div>
    </div>
</div>
```

## Masthead anatomy

{% include 'close' %}

<img src="https://cu-rds.s3.amazonaws.com/docs/assets/masthead-anatomy.png" style="margin: 0 auto;max-width:1200px" alt="Masthead anatomy">


{% include 'open' %}

1. Carleton shield mark*
2. Site title and link to your home page*
3. Site-wide navigation
4. CTA links
5. Common site-wide action buttons
6. Overlay mobile menu

<small>* = required</small>

## Masthead dependencies

1. **Javascript Required**: the masthead block requires the use of RDS' [core JavaScript file](#) to function.
2. **Overlay layout required**: when using the action and mobile menu buttons, the hidden [overlay layout](#) is required on your page.

Make sure your page template accommodates these dependencies. To easily get started with the masthead, use one of the RDS [getting started templates](/docs/dev/getting-started) or grabbing the minimum template code example from the same page.

## Block details

| {{ page.title }}  block meta   |  values
| --------------| :-------------------------------------:
| handle              | `masthead`
| width options       | `u-block--full`
| colour options      | n/a
| section use         | `<header>`
| width type          | full-width
| has heading         | n/a
| theme(s)            | CU
| variants            | n/a
| Codepen             | [https://codepen.io/cuweb/pen/vYBWmWY?editors=1000](https://codepen.io/cuweb/pen/vYBWmWY?editors=1000)


## Base Masthead

The masthead block has many options and configurations. At it's simplest, the masthead provides your application's title and Carleton's brand.

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">{% include 'icons/mark-cushield.svg' %} Raven Design System</a>
            </h2>
        </div>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--full">
    <div class="b-masthead">
        <div class="masthead__brand b-masthead--shadow">
            <h2>
                <a href="/docs/">
                    {%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%}
                    Raven Design System
                </a>
            </h2>
        </div>
    </div>
</div>
```

**Notes**:

- this is the only required section of the Masthead.
- the site title should always link back to your home page, even when on the home page.
- the site title length becomes more of a factor on small screens

<div class="c-alert c-alert--info c-alert--icon">{% include 'icons/info.svg' %}
<h2>Server-side includes for SVGs</h2>
<p>If you are using RDS via NPM, for cleaner code and up to date icons, you should consider including the shield and other Masthead SVGs with server-side includes. <br>For eg: `{%verbatim%}{% include '../node_modules/rds/components/icons/mark-cushield.svg' %}{%endverbatim%}` </p>
<p>For those without this ability, we are including all required SVG code on the code examples below.</p>
</div>

## Scrolling behaviour - stick on scroll

Upon scrolling down, the Masthead disappears.

By adding `js-masthead-stick` to the `b-masthead` element, scrolling upward reveals the Masthead for easy access at any point on the page. Try it out by scrolling back up on this page.

```html
<!-- Masthead will reappear on scroll up -->
<div class="b-masthead js-masthead-stick">
```

```html
<!-- Default scrolling offscreen-->
<div class="b-masthead">
```

**Notes**:

- this behaviour is forced on small screens.
- the remaining code examples on this page include this option. Simply remove `js-masthead-stick` from any snippets below to disable this feature for large screens.

## Dealing with long site titles

Long titles impact the amount of horizontal space available in the Masthead. To help with this, you can wrap long titles on to two lines.

**To wrap a title**:

1. Wrap all of your title text in a `<span>`.
2. Wrap the text you want to drop in another `<span>`.

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">{% include 'icons/mark-cushield.svg' %}
                    <span>Raven Design System <span>Raven Design System</span></span>
                </a>
            </h2>
        </div>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">{%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%}
                    <span>Raven Design System <span>Raven Design System</span></span>
                </a>
            </h2>
        </div>
    </div>
</div>
```

**Important**: the maximum number of lines a title can wrap on to is two. If your title is still too long, consider shortening it with acronyms or removing nonessential text
For examples, instead of using "The Department of History at Carleton University", go with "Department of History".

## Adding action buttons

Action buttons get added to the right side of the Masthead blocks.


### With search button

If your application requires search functionality, you can add a search button to the masthead.

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {% include 'icons/mark-cushield.svg' %}
                    Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {% include "icons/search.svg" %}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--full">
    <div class="b-masthead">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%}
                    Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.52 21.28l-6.096-6.128A9.488 9.488 0 0 0 19.2 9.6c0-5.296-4.304-9.6-9.6-9.6C4.304 0 0 4.304 0 9.6c0 5.296 4.304 9.6 9.6 9.6 2.08 0 3.968-.656 5.552-1.776l6.128 6.096c.304.32.72.48 1.12.48.4 0 .832-.144 1.12-.48a1.594 1.594 0 0 0 0-2.256v.016zM9.6 17.12c-4.144 0-7.52-3.376-7.52-7.52S5.456 2.08 9.6 2.08s7.52 3.376 7.52 7.52-3.376 7.52-7.52 7.52z"></path></svg>
                        <span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
```

### With login button

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {% include 'icons/mark-cushield.svg' %}Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__login">
                    <button class="u-icon u-btn-reset">
                        {% include 'icons/lock.svg' %}
                        <span class="u-hide-s">Login</span>
                    </button>
                </li>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {% include "icons/search.svg" %}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--full">
    <div class="b-masthead">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%}Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__login">
                    <button class="u-icon u-btn-reset">
                        {%filter escape%}{% include 'icons/lock.svg' %}{%endfilter%}
                        <span class="u-hide-s">Login</span>
                    </button>
                </li>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {%filter escape%}{% include "icons/search.svg" %}{%endfilter%}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
```

### With a single CTA button

To promote key links or actions, add a CTA button to the action buttons section.

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {% include 'icons/mark-cushield.svg' %}Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__cta u-hide-s">
                    <a class="u-icon" href="https://github.com/ravendesignsystem">Github</a>
                </li>
                <li class="masthead__login">
                    <button class="u-icon u-btn-reset">
                        {% include 'icons/lock.svg' %}
                        <span class="u-hide-s">Login</span>
                    </button>
                </li>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {% include "icons/search.svg" %}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--full">
    <div class="b-masthead">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%}Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__cta u-hide-s">
                    <a class="u-icon" href="https://github.com/ravendesignsystem">Github</a>
                </li>
                <li class="masthead__login">
                    <button class="u-icon u-btn-reset">
                        {%filter escape%}{% include 'icons/lock.svg' %}{%endfilter%}
                        <span class="u-hide-s">Login</span>
                    </button>
                </li>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {%filter escape%}{% include "icons/search.svg" %}{%endfilter%}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
```

### With a single CTA button and icon

To further communicate meaning to your CTA button, add an icon.

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {% include 'icons/mark-cushield.svg' %}Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__cta u-hide-s">
                    <a class="u-icon" href="https://github.com/ravendesignsystem">{% include 'icons/mark-github.svg' %} Github</a>
                </li>
                <li class="masthead__login">
                    <button class="u-icon u-btn-reset">
                        {% include 'icons/lock.svg' %}
                        <span class="u-hide-s">Login</span>
                    </button>
                </li>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {% include "icons/search.svg" %}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--full">
    <div class="b-masthead">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%}Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__cta u-hide-s">
                    <a class="u-icon" href="https://github.com/ravendesignsystem">{%filter escape%}{% include 'icons/mark-github.svg' %}{%endfilter%} Github</a>
                </li>
                <li class="masthead__login">
                    <button class="u-icon u-btn-reset">
                        {%filter escape%}{% include 'icons/lock.svg' %}{%endfilter%}
                        <span class="u-hide-s">Login</span>
                    </button>
                </li>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {%filter escape%}{% include "icons/search.svg" %}{%endfilter%}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
```

### Less emphasis on the CTA

The red background added to the CTA by default adds significant visual emphasis to the element. If you want to balance the focus between your CTA and other Masthead elements, add the modifier class `masthead__cta--white` to the `masthead__cta` element for a white background.

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {% include 'icons/mark-cushield.svg' %}Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__cta masthead__cta--white u-hide-s">
                    <a class="u-icon" href="https://github.com/ravendesignsystem">{% include 'icons/mark-github.svg' %} Github</a>
                </li>
                <li class="masthead__login">
                    <button class="u-icon u-btn-reset">
                        {% include 'icons/lock.svg' %}
                        <span class="u-hide-s">Login</span>
                    </button>
                </li>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {% include "icons/search.svg" %}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--full">
    <div class="b-masthead">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%}Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__cta masthead__cta--white u-hide-s">
                    <a class="u-icon" href="https://github.com/ravendesignsystem">
                        {%filter escape%}{% include 'icons/mark-github.svg' %}{%endfilter%} Github
                    </a>
                </li>
                <li class="masthead__login">
                    <button class="u-icon u-btn-reset">
                        {%filter escape%}{% include 'icons/lock.svg' %}{%endfilter%}
                        <span class="u-hide-s">Login</span>
                    </button>
                </li>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {%filter escape%}{% include "icons/search.svg" %}{%endfilter%}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
```

**Rule**: the masthead block should only contain one CTA element. This block has limited space. The goal of the CTA element is to focus on one item and its submenu, if used. The right-side of the masthead is not intended for primary navigation.

### Add a submenu to the CTA

Use the {% include 'link' with {'component': 'Menu Popup'} %} to setup a submenu for the CTA. While not required, submenus can have icons as well.

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {% include 'icons/mark-cushield.svg' %}Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__cta masthead__cta--white u-hide-s c-menupopup c-menupopup--right">
                    <a class="u-icon" href="https://github.com/ravendesignsystem">{% include 'icons/mark-github.svg' %} Github</a>
                    <ul class="menupopup__menu" aria-label="menupopup" aria-expanded="false">
                        <li>
                            <a class="u-icon" href="https://github.com/ravendesignsystem/rds/releases">{% include 'icons/code.svg' %}
                                Releases
                            </a>
                        </li>
                        <li>
                            <a class="u-icon" href="https://github.com/ravendesignsystem/rds">{% include 'icons/code.svg' %}
                                RDS
                            </a>
                        </li>
                        <li>
                            <a class="u-icon" href="https://github.com/ravendesignsystem/design">{% include 'icons/eye.svg' %}
                                Design
                            </a>
                        </li>
                        <li>
                            <a class="u-icon" href="https://github.com/ravendesignsystem/content">{% include 'icons/pencil.svg' %}
                                Content
                            </a>
                        </li>
                        <li>
                            <a class="u-icon" href="https://github.com/ravendesignsystem/accessibility">{% include 'icons/accessibility.svg' %}
                                Accessibility
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="masthead__login">
                    <button class="u-icon u-btn-reset">
                        {% include 'icons/lock.svg' %}
                        <span class="u-hide-s">Login</span>
                    </button>
                </li>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {% include "icons/search.svg" %}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--full">
    <div class="b-masthead">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%}Raven Design System
                </a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__cta masthead__cta--white u-hide-s c-menupopup c-menupopup--right">
                    <a class="u-icon" href="https://github.com/ravendesignsystem">{%filter escape%}{% include 'icons/mark-github.svg' %} {%endfilter%}Github</a>
                    <ul class="menupopup__menu" aria-label="menupopup" aria-expanded="false">
                        <li>
                            <a class="u-icon" href="https://github.com/ravendesignsystem/rds/releases">{%filter escape%}{% include 'icons/code.svg' %}{%endfilter%}
                                Releases
                            </a>
                        </li>
                        <li>
                            <a class="u-icon" href="https://github.com/ravendesignsystem/rds">{%filter escape%}{% include 'icons/code.svg' %}{%endfilter%}
                                RDS
                            </a>
                        </li>
                        <li>
                            <a class="u-icon" href="https://github.com/ravendesignsystem/design">{%filter escape%}{% include 'icons/eye.svg' %}{%endfilter%}
                                Design
                            </a>
                        </li>
                        <li>
                            <a class="u-icon" href="https://github.com/ravendesignsystem/content">{%filter escape%}{% include 'icons/pencil.svg' %}{%endfilter%}
                                Content
                            </a>
                        </li>
                        <li>
                            <a class="u-icon" href="https://github.com/ravendesignsystem/accessibility">{%filter escape%}{% include 'icons/accessibility.svg' %}{%endfilter%}
                                Accessibility
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="masthead__login">
                    <button class="u-icon u-btn-reset">
                        {%filter escape%}{% include 'icons/lock.svg' %}{%endfilter%}
                        <span class="u-hide-s">Login</span>
                    </button>
                </li>
                <li>
                    <button aria-label="Open Search" class="masthead__searchbtn u-icon">
                        {%filter escape%}{% include "icons/search.svg" %}{%endfilter%}<span class="u-hide-s">Search</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
```

**Note** how the `<li>` use the class `c-menupopup--right` to align the submenu on the right. View the {'component': 'Menu Popup'} %} docs for using this component.

### Adding the overlay mobile menu

The three horizontal line mobile (hamburger) menu  <button aria-label="Open Menu" title="Open site-wide menu" class="c-hamburger c-hamburger--spin" type="button">
<span class="c-hamburger__box">
<span class="c-hamburger__inner"></span>
</span>
</button> is a common control to activate navigation that is hidden to start. The most common use case is on small/mobile screens where space is a premium. We call it the overlay mobile menu because when clicked it opens the [overlay layout](#).This control icon should be the last item (far right) of your masthead and can be added to the actions section with :

```html
<li class="masthead__hamburger {% if page.subsite == 'dev' and page.menu != 'dev' %}{% else %}u-hide-l{% endif %}">
    <button aria-label="Open Menu" title="Open site-wide menu" class="c-hamburger c-hamburger--spin" type="button">
            <span class="c-hamburger__box">
                <span class="c-hamburger__inner"></span>
            </span>
    </button>
</li>
```
Below is a simple masthead with the overlay mobile menu button.

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">{% include 'icons/mark-cushield.svg' %} Raven Design System</a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__hamburger {% if page.subsite == 'dev' and page.menu != 'dev' %}{% else %}u-hide-l{% endif %}">
                    <button aria-label="Open Menu" title="Open site-wide menu" class="c-hamburger c-hamburger--spin" type="button">
                            <span class="c-hamburger__box">
                                <span class="c-hamburger__inner"></span>
                            </span>
                    </button>
            </li>
            </ul>
        </div>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">{%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%} Raven Design System</a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__hamburger">
                    <button aria-label="Open Menu" title="Open site-wide menu" class="c-hamburger c-hamburger--spin" type="button">
                        <span class="c-hamburger__box">
                            <span class="c-hamburger__inner"></span>
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>
```

#### Hiding the overlay mobile menu on large screens

Most of the time you only need the menu to appear on small screens. To hide the mobile menu on large screens add the utility class `u-hide-l`.

```html
<li class="masthead__hamburger u-hide-l">
```

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">{% include 'icons/mark-cushield.svg' %} Raven Design System</a>
            </h2>
        </div>
        <div class="masthead__actions" aria-label="Header actions and controls">
            <ul>
                <li class="masthead__hamburger u-hide-l">
                    <button aria-label="Open Menu" title="Open site-wide menu" class="c-hamburger c-hamburger--spin" type="button">
                            <span class="c-hamburger__box">
                                <span class="c-hamburger__inner"></span>
                            </span>
                    </button>
            </li>
            </ul>
        </div>
    </div>
</div>

{% include 'open' %}

<div class="c-alert c-alert--info c-alert--icon u-hide-s">{% include 'icons/info.svg' %}
<h2>Resize your screen</h2>
<p>Your screen is to large to see the mobile menu in the Masthead above because the button is wrapped in `u-hide-l`. Resize your screen to be smaller to see the button.</p>
</div>

<div class="c-alert c-alert--info c-alert--icon u-hide-l">{% include 'icons/info.svg' %}
<h2>Your on a small screen</h2>
<p>Your screen is small enough to see the mobile menu in the masthead above. If it was larger, like a desktop screen the menu would not show.</p>
</div>

#### Space considerations and utility classes

Like all RDS blocks, the Masthead is responsive to best make us of horizontal space on all screen sizes. However, there is always a limit to how much horizontal space is available. As you add elements to your Masthead, make sure to test on all screen sizes to ensure everything fits.

At times you are going to want to hide Masthead elements when on smaller screens and show certain elements only on large screens. You might have noticed in many of the examples above, the utility classes listed below are used to accomplish this:

- `u-hide-s` - elements are hidden on small screens.
- `u-hide-l` - elements are hidden on large screens.
- `u-show-l` - elements are only shown on large screens.

For example, both the search and login button labels are wrapped in <br>`<span class="u-hide-s">` this means the icons will display on small screen but the text labels will not, saving space.

```html
<li class="masthead__search">
    <button aria-label="Open Search" class="masthead__search-btn u-icon">
       <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>
       <span>Search</span>
    </button>
</li>
```

**Notice** how the CTA Github menu example uses `u-hide-s`, meaning this element won't show at all on small screens, as there is not enough room.

```html
<li class="masthead__cta masthead__cta--white u-hide-s c-menupopup c-menupopup--right">
```

To provide more space, this hides the search label on screens smaller then 1474px. To have the text label visible on all screen sizes, remove the `<span>`. Just make sure your have enough space on small screens for this extra text.

### Order for action buttons

When using multiple action buttons, they should always be presented in the following order from left to right:

[ CTA link/submnenu | Login | Search | Mobile menu ]

![Action button order](https://cu-rds.s3.amazonaws.com/docs/assets/masthead-but-order.png)

<div class="c-alert c-alert--info c-alert--icon u-hide-s">{% include 'icons/info.svg' %}
<h2>Search button dependencies</h2>
<p>Reminder: the search button and mobile menu button need to open the <a href="#">overlay layout</a>) and focus on the <a href="#">search component</a>, you will need to make sure both are are a part of your site-wide template.</p>
<p>   If you are using mobile menu button, you likely also need to have a <a href="#">Menu block</a> on your page. Please review this block's docs.</p>
</div>

## Adding navigation to the Masthead

 RDS has several options for handling navigation. In addition to this section, please review the [RDS navigation docs]({{site.url}}/dev/layouts/navigation/). Lets look at adding the Top Nav navigation.

The Masthead Top Nav displays right after the title/brand section and will grow to occupy as much horizontal space as possible.

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--responsivenav b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">{% include 'icons/mark-cushield.svg' %} Raven Design System</a>
            </h2>
        </div>
        <nav class="masthead__nav">
            <ul role="menu">
                <li><a href="{{ site.url }}about/">About RDS</a></li>
                <li><a class="u-active" href="{{ site.url }}dev/">Dev</a></li>
                <li><a  href="{{ site.url }}design/">Design</a></li>
                <li><a href="{{ site.url }}content/">content</a></li>
                <li><a href="{{ site.url }}accessibility/">Accessibility</a></li>
            </ul>
        </nav>
    </div>
</div>

{% include 'open' %}

```html
<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--responsivenav">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">
                    {%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%}
                    Raven Design System
                </a>
            </h2>
        </div>
        <nav class="masthead__nav">
            <ul role="menu">
                <li><a href="/about/">About RDS</a></li>
                <li><a class="u-active" href="/dev/">Dev</a></li>
                <li><a  href="/design/">Design</a></li>
                <li><a href="/content/">content</a></li>
                <li><a href="/accessibility/">Accessibility</a></li>
            </ul>
        </nav>
    </div>
</div>
```

**Notice**:

- how the `b-masthead--responsivenav` modifier was add to the `b-masthead` element.
- how the utilitiy class `u-active` can be used to highlight the current site section.

```html
<li><a class="u-active" href="/dev/">Dev</a></li>
```

### Limited horizontal space

As with any horizontal navigation, the width available for nav items is limited to the user's screen size. To avoid your navigation items from being hidden or broken:

- Limit the number of items in your primary navigation.
- Use the shortest titles as possible for you links.
- Prioritize your nav items, with the most important links coming first from left to right.

### 😎 Pro tip: Sliding Top Nav on Homepage

As seen on smaller screens at [apple.com](https://www.apple.com/mac/), if your Responsive Top Nav overflows on small screens, consider sliding out the navigation to remind users this is a scrollable area. To avoid this feature becoming redundant for users, it should probably only be enabled on your home page. For an example, [check this site's home page]({{site.url}}) on a small screen.

If you have an overflowing top nav below 640px, to use this feature:

- add a class of `homepage` to the `<body>` tag of your homepage.

```html
<!-- this would likely be done dynamically in some way -->
<body{% verbatim %}{% if page.homepage == true %} class="homepage"{% endif %}{% endverbatim %}>
```

![Example of sliding nav](http://cu-rds.s3.amazonaws.com/docs/assets/topnav-slide.gif)

### We check if your nav is too wide!

The Masthead navigation is responsive and will drop down to providing even more space when your navigation starts to wrap. However, if your navigation wraps again, after dropping, we provide an in your face warning.

{% include 'close' %}

<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--responsivenav b-masthead--shadow js-masthead-2biggie">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/">{% include 'icons/mark-cushield.svg' %} Raven Design System</a>
            </h2>
        </div>
        <nav class="masthead__nav">
            <ul role="menu">
                <li><a href="{{ site.url }}about/">About RDS</a></li>
                <li><a class="u-active" href="{{ site.url }}dev/">Dev</a></li>
                <li><a  href="{{ site.url }}design/">Design</a></li>
                <li><a href="{{ site.url }}content/">content</a></li>
                <li><a href="{{ site.url }}accessibility/">Accessibility</a></li>
                 <li><a href="{{ site.url }}about/">About RDS</a></li>
            </ul>
        </nav>
    </div>
</div>

{% include 'open' %}

You need to resize your browser to see it. So make sure to test and resize your nav so you don't ship with a navigation displaying the error above.

<div class="c-alert c-alert--info c-alert--icon">{% include 'icons/info.svg' %}
<h2>Are you serious?</h2>
<p>Yes. While this a bit heavy-handed 🙌 , it is just as important that you do not ship your RDS product with a navigation that breaks on some users screens. The responsive nav should provide more then enough room for your primary nav. If you still need more, use the b-menu vertical nav block.</p>
</div>

## Masthead with sub navigation

Masthead nav items can have submenus providing one extra level of navigation. Submenus are displayed using the {% include 'link' with {'component': 'Menu Popup'} %}.

![Masthead nav with submenu](http://cu-rds.s3.amazonaws.com/docs/assets/masthead-submenu.png)
```html
<div class="u-block u-block--full">
    <div class="b-masthead b-masthead--responsivenav b-masthead--shadow">
        <div class="masthead__brand">
            <h2>
                <a href="/docs/"> {%filter escape%}{% include 'icons/mark-cushield.svg' %}{%endfilter%}</a>
            </h2>
        </div>
        <nav class="masthead__nav">
            <ul role="menu">
                <li><a href="/about/">About RDS</a></li>
                <li class="c-menupopup"><a href="/docs/about/">With a Submenu</a>
                    <ul class="menupopup__menu" aria-label="menupopup" aria-expanded="false">
                        <li>
                            <a href="/docs/about/">Submenu item a</a>
                            <a href="/docs/about/">Submenu item b</a>
                            <a href="/docs/about/">Submenu item c</a>
                        </li>
                    </ul>
                </li>
                <li><a  href="/design/">Design</a></li>
                <li><a href="/content/">content</a></li>
                <li><a href="/accessibility/">Accessibility</a></li>
            </ul>
        </nav>
    </div>
</div>
```




## Masthead using buttons for sub-nav

If you have sub-navigation in your Masthead nav and do not want the parent to link off to another page, burt instead only open the submenu, replace the parent's `<a>` tag with `<button>`. This also changes the action displaying the submenu from a hover to a click.

The following will only open the submenu onclick and not link off:

```html
<li>
    <button class="c-menupopup">Nav item with submenu</button>
    <ul class="menupopup__menu" aria-label="menupopup">
        <li>
            <a href="#">Submenu link a</a>
        </li>
        <li>
            <a href="#">Submenu link b</a>
        </li>
         <li>
             <a href="#">Submenu link c</a>
         </li>
    </ul>
</li>
```

## Implementation Notes

- The masthead can only be used once on a page.

## Resource links

- Headings are allowed inside `<nav>` tags - [w3.org](https://www.w3.org/TR/html5/sections.html#the-nav-element)
- Your logo is an image not an H1 - [CSS Wizardry](https://csswizardry.com/2010/10/your-logo-is-an-image-not-a-h1/)
- Adding ARIA `role="navigation"` is advised, even on `<nav>` - [w3.org](https://www.w3.org/WAI/GL/wiki/Using_HTML5_nav_element)
- H2 can come before H1 before? Mind blown - https://www.w3.org/WAI/tutorials/page-structure/headings/
- http://www.a11ymatters.com/pattern/mobile-nav/
- https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/
- https://inclusive-components.design/menus-menu-buttons/
