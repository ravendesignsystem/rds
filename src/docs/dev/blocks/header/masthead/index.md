---
layout: docs
subsite: dev
section: Blocks
title: Masthead
menu: dev
section: Blocks
subsection: Header Blocks
banner:
 breadcrumbs:
  grandparent: Blocks
  parent: Header
---
As the first block at the top of each page, the masthead is an essential toolbar that provides site-wide content and actions.

## Masthead sections

The masthead block contains three distinct sections.

<img src="https://cu-rds.s3.amazonaws.com/docs/assets/topnav-mh.png"  alt="Masthead sections">

1. **Branding and site title**:<br> required section to display Carleton's shield mark and the site title.
<br><br>
2. **Top Nav**:<br> optional, site-wide navigation area for primary/top level navigation.
<br><br>
3. **Action buttons**:<br> optional, CTA/UI buttons for common application controls, such as search and mobile navigation.

The Masthead block sections code scaffolding:

```html
<!-- required unique ID and u-block wrapper -->
<div id="id-masthead" class="u-block u-block--full">
    <!-- standard block class -->
    <div class="b-masthead">
        <!-- Branding and site title code goes here -->
    
        <nav>
            <div class="c-nav c-nav--topnav" role="presentation" aria-label="Main Navigation">
                <!-- Top Nav code goes here -->
            </div> 
        </nav>      

        <ul class="masthead__actions">
            <!-- Masthead buttons code goes here -->
        </ul>

    </div>
</div>

```

## Masthead anatomy

<img src="https://cu-rds.s3.amazonaws.com/docs/assets/masthead-anatomy.png"  alt="Masthead anatomy">

1. Carleton shield mark*
2. Site title and home page link*
3. Site-wide, top navigation
4. CTA links
5. Common site-wide action buttons
6. Overlay mobile menu (hidden by default on large screens)

<small>* = required</small>

## Masthead dependencies

1. **Javascript Required**: the masthead block requires the use of RDS' [core JavaScript file](#) to function.
2. **Overlay layout required**: when using the action and mobile menu buttons, the hidden [overlay layout](#) is required on your page.

Make sure your page template accommodates all of the [required elements](/docs/dev/getting-started).

## Base Masthead

The masthead block has many options and configurations. At it's simplest, the masthead provides your application's title and Carleton's brand.

<img src="http://cu-rds.s3.amazonaws.com/docs/assets/base-matshead.png" alt="Masthead base">

```html
{% filter escape %}
{% include 'masthead/stories/base' %}
{% endfilter %}
```

{% include 'masthead/stories/base' %}

<a class="c-buttoncta" href="stories/base/">View base example story</a>

<div class="c-alert c-alert--info c-alert--icon">{% include 'icons/info.svg' %}
<h2>Header tag required</h2>
<p>Reminder: the masthead block needs to be in the page header section. Don't forget to have and insert your Masthead code in your layout's primary <code>< header ></code> tag.</p>
</div>

**Notes**:

- this is the only required section of the Masthead.
- the site title should always link back to the home page, even when on the home page.
- the site title length becomes more of a factor on small screens

<br>
<div class="c-alert c-alert--info c-alert--icon">{% include 'icons/info.svg' %}
<h2>Server-side includes for SVGs</h2>
<p>If you are using RDS via NPM, for cleaner code and up to date icons, you should consider including the shield and other Masthead SVGs with server-side includes. <br>For eg: `{%verbatim%}{% include '../node_modules/rds/components/icons/mark-cushield.svg' %}{%endverbatim%}` </p>
<p>For those without this ability, we are including all required SVG code on the code examples below.</p>
</div>

## Dealing with long site titles

Long titles impact the amount of horizontal space available in the Masthead. To help with this, you can wrap long titles on to two lines.

**To wrap a title**:

1. Wrap all of your title text in a `<span>`.
2. Wrap the text you want to drop in another `<span>`.

<img src="http://cu-rds.s3.amazonaws.com/docs/assets/long-title.png" alt="Masthead long-title example">

```html
{% filter escape %}
{% include 'masthead/stories/long-title' %}
{% endfilter %}
```

<a class="c-buttoncta" href="stories/long-title/" target="_blank">View long title example story</a>

**Important**: the maximum number of lines a title can wrap on to is two. If your title is still too long, consider shortening it with acronyms or removing nonessential text
For examples, instead of using "The Department of History at Carleton University", go with "Department of History" as should know its a Carleton website via pathways and branding .


## Scrolling behaviour - stick on scroll

Upon scrolling down, the Masthead disappears.

By adding `js-masthead-stick` to the `b-masthead` element, scrolling upward reveals the Masthead for easy access at any point on the page. Try it out by scrolling back up on this page.

TODO NEEDS UPDATING !!!!##!*

**Notes**:

- this behaviour is forced on small screens.

## Adding action buttons

Action buttons can be added to the right side of the Masthead blocks.

### Masthead with search button

<img src="http://cu-rds.s3.amazonaws.com/docs/assets/mh-search.png" alt="Masthead example with search button">

```html
{% filter escape %}
{% include 'masthead/stories/search' %}
{% endfilter %}
```

<a class="c-buttoncta" href="stories/search/">View search button example story</a>

**Notes**:

- Since the Search button opens the default modal, the hidden by default Close modal button - `<li class="masthead__close-modals u-visually-hidden">` needs to be included as the final button.

### With login button

<img src="http://cu-rds.s3.amazonaws.com/docs/assets/mh-login.png" alt="Masthead example with search button" target="_blank">

```html
{% filter escape %}
{% include 'masthead/stories/login' %}
{% endfilter %}
```

<a class="c-buttoncta" href="stories/login/" target="_blank">View login button example story</a>

**Notes**:

- Since the Login button opens the default modal, the hidden by default Close modal button - `<li class="masthead__close-modals u-visually-hidden">` needs to be included as the final button.
- The [required modal login code](#) is required on the page

<div class="c-alert c-alert--info c-alert--icon">{% include 'icons/info.svg' %}
<h2>Reminder</h2>
<p>Remember for the Search and Login buttons outlined above, you need to include the Close modal button, which displays as hidden until the modal is open.</p>
</div>

```html
 <li class="masthead__close-modals u-visually-hidden">
    <button aria-label="Close Modals" class="masthead__closebtn u-icon u-icon--notext">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15.396 12L24 20.604 20.604 24 12 15.396 3.396 24 0 20.604 8.604 12 0 3.396 3.396 0 12 8.604 20.604 0 24 3.396z"></path></svg>
    </button>
</li>
```

### With CTA button

<img src="http://cu-rds.s3.amazonaws.com/docs/assets/mh-cta.png" alt="Masthead example with CTA button">

```html
{% filter escape %}
{% include 'masthead/stories/cta' %}
{% endfilter %}
```
<br>
<a class="c-buttoncta" href="stories/cta/" target="_blank">View CTA button example story</a>

### With white CTA button

The red background added to the default CTA Masthead button adds significant visual emphasis to the element. If you want to balance the focus between your CTA and other Masthead elements, add the modifier class `masthead__cta--white` to the `masthead__cta` element for a less emphasized, white background.

<img src="http://cu-rds.s3.amazonaws.com/docs/assets/mh-cta-white.png" alt="Masthead example with CTA button">

```html
{% filter escape %}
{% include 'masthead/stories/cta-white' %}
{% endfilter %}
```
<br>
<a class="c-buttoncta" href="stories/cta-white/" target="_blank">View white CTA button example story</a>

### With CTA with submenu

**Rule**: Since the masthead block has limited space, it should only contain one CTA element in the action buttons section. However, you can add more by adding a submenu to group them under the one displayed.

<img src="http://cu-rds.s3.amazonaws.com/docs/assets/mh-cta-dropdown.png" alt="Masthead example with search button">

```html
{% filter escape %}
{% include 'masthead/stories/cta-dropdown' %}
{% endfilter %}
```

<a class="c-buttoncta" href="stories/cta-dropdown/" target="_blank">View CTA with dropdown example story</a>

**Note** how the `<li>` use the class `c-menupopup--right` to align the submenu on the right. View the {'component': 'Menu Popup'} %} docs for using this component.

### Masthead with top nav

<img src="http://cu-rds.s3.amazonaws.com/docs/assets/mh-top-nav.png" alt="Masthead example with top nav">

```html
{% filter escape %}
{% include 'masthead/stories/top-nav' %}
{% endfilter %}
```
<br>
<a class="c-buttoncta" href="stories/top-nav/" target="_blank">View top nav example story</a>

**Notes**:

- Reminder both the hidden mobile menu and overlay close buttons need to be included

### Masthead with top nav with submenu

The Masthead's top nav items can contain submenus.

<img src="http://cu-rds.s3.amazonaws.com/docs/assets/mh-sub.png" alt="Masthead example with top nav">

```html
{% filter escape %}
{% include 'masthead/stories/top-nav-sub' %}
{% endfilter %}
```
<br>
<a class="c-buttoncta" href="stories/top-nav-sub/" target="_blank">View top nav with submenu example story</a>

**Notes**:

- Notice how the menu item with a submenu uses a `<button>` tag instead of an`<a>`.
- Note how the submenu can have hierarchy. In the example above All Programs is the parent and the nested items are the child.

### Masthead with everything (Kitchen Sink)

<img src="http://cu-rds.s3.amazonaws.com/docs/assets/mh-sub.png" alt="Masthead example with top nav">

```html
{% filter escape %}
{% include 'masthead/stories/top-nav-sub' %}
{% endfilter %}
```
<br>
<a class="c-buttoncta" href="stories/ks/" target="_blank">View kitchen sink example story</a>

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


### Space considerations and utility classes

As with all RDS blocks, the Masthead uses responsive design. However, there is always a limit to how much horizontal space is available. As you add elements to your Masthead, make sure to test on all screen sizes to ensure everything fits.

By default, if you run out of space for your top nav, it is hidden and the mobile menu button is displayed. While this is a nice feature, as a best practise, if possible the menu should be visible on large screens that have the affordable space. If you on a large screen and only the mobile menu button is visible, you should consider using the vertical, left menu.

At times you are going to want to hide Masthead elements to accommodate space on smaller screens or only show certain elements only on large screens. You might have noticed in many of the examples above, the utility classes listed below are used to accomplish this:

- `u-hide-s` - elements are hidden on small screens.
- `u-hide-l` - elements are hidden on large screens.
- `u-show-l` - elements are only shown on large screens.

For example, both the search and login button labels are wrapped in <br>`<span class="u-hide-s">`. so only the icons will display on small screens to save space.

```html
<li class="masthead__search">
    <button aria-label="Open Search" class="masthead__search-btn u-icon">
       <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>
       <span>Search</span>
    </button>
</li>
```

### Order for action buttons

When using multiple action buttons, they should always be presented in the following order from left to right:

[ CTA link/submnenu | Login | Search | Mobile menu ]

![Action button order](https://cu-rds.s3.amazonaws.com/docs/assets/masthead-but-order.png)

<div class="c-alert c-alert--info c-alert--icon u-hide-s">{% include 'icons/info.svg' %}
<h2>Search button dependencies</h2>
<p>Reminder: the search button and mobile menu button need to open the <a href="#">overlay layout</a>) and focus on the <a href="#">search component</a>, you will need to make sure both are are a part of your site-wide template.</p>
</div>

## Masthead Stories

For the Masthead block, independent test cases have been set up as stories. Each story represents a single, possible visual state of the masthead block. View the source on these pages to see everything required on the page for each masthead story example.

- [Base - Title and branding](stories/base/) 
- [Base - Long title and branding](stories/long-title/)

### Buttons

- [Base with search button](stories/search/)
- [Base with login button](stories/login/)
- [Base with CTA button](stories/cta/)
- [Base with CTA white button](stories/cta-white/)
- [Base with CTA with dropdown](stories/cta-dropdown/)
- [Base with CTA with dropdown with icons](stories/cta-dropdown-icons/)
- [Base with ALL buttons](stories/all-buttons/)

### Top Nav

- [Base with Top Nav](stories/top-nav/)

### Side Nav

- [Base with Side Nav](stories/side-nav/)
- [Base with Side Nav and all CTA](stories/side-nav-cta/)

## Implementation Notes

- The masthead can only be used once on a page.
- All text in the Masthead should be title case.

## Components used

- Nav Menu
- Menu Popup

## Resource links

- Headings are allowed inside `<nav>` tags - [w3.org](https://www.w3.org/TR/html5/sections.html#the-nav-element)
- Your logo is an image not an H1 - [CSS Wizardry](https://csswizardry.com/2010/10/your-logo-is-an-image-not-a-h1/)
- Adding ARIA `role="navigation"` is advised, even on `<nav>` - [w3.org](https://www.w3.org/WAI/GL/wiki/Using_HTML5_nav_element)
- H2 can come before H1 before? Mind blown - https://www.w3.org/WAI/tutorials/page-structure/headings/
- http://www.a11ymatters.com/pattern/mobile-nav/
- https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/
- https://inclusive-components.design/menus-menu-buttons/
