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
        <!-- Required - Branding and site title -->
        <h1>
            <a href="/">
                <svg height="24" width="24" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none"><g fill="#fff"><path d="M20.313 16.273a11.136 11.136 0 0 0 .718-4.081s-.008-7.822-.033-10.575c-.23-.066-.462-.128-.695-.186a12.856 12.856 0 0 0-.706-.168C17.354.767 14.752.5 12.56.434l.005.011a13.569 13.569 0 0 0-.686.006l.015-.03c-2.496-.01-5.525.41-7.95 1.058a4.433 4.433 0 0 0-.494.138c-.005.565-.01 1.343-.014 2.222-.018 3.836-.019 8.352-.019 8.352-.014 1.758.347 3.406 1.08 4.901.055.116.114.231.174.345.018.032.032.066.05.098l.001-.004c.083.154.17.306.264.458l.004.007a10.56 10.56 0 0 0 .82 1.142c.074.09.15.179.226.267l.07.083c1.41 1.607 3.107 2.787 4.983 3.624l.212.105.15.052c.17.071.38.133.57.193l.203.068c.226-.084.543-.165.776-.262l.151-.051c.145-.068.286-.137.426-.204a14.99 14.99 0 0 0 2.47-1.442l.042-.03c.066-.048.131-.095.196-.144a13.08 13.08 0 0 0 2.65-2.636 10.016 10.016 0 0 0 1.365-2.454z"/><path d="M12.23 23.975l-.437-.144c-.164-.051-.335-.104-.487-.167a1.343 1.343 0 0 1-.189-.07l-.211-.103c-2.01-.897-3.733-2.152-5.111-3.724l-.073-.085a11.481 11.481 0 0 1-.825-1.063l-.017.07-.523-.95a1.375 1.375 0 0 1-.036-.07l-.016-.032a9.905 9.905 0 0 1-.184-.36c-.758-1.55-1.136-3.263-1.12-5.09 0-.041 0-4.557.019-8.35.003-.88.007-1.66.013-2.224l.002-.288.268-.102a4.57 4.57 0 0 1 .547-.153C6.313.41 9.362 0 11.794 0l.773.003-.005.01h.01c2.436.073 5.03.378 7.114.839.27.057.514.115.725.172.234.059.472.122.702.189l.299.087.003.313c.025 2.723.032 10.5.032 10.577a11.567 11.567 0 0 1-.744 4.233l-.017.041c-.34.895-.804 1.73-1.417 2.55a13.433 13.433 0 0 1-2.911 2.85l-.07.05a15.467 15.467 0 0 1-2.537 1.48c-.134.066-.277.135-.423.204l-.044.017-.138.047c-.15.062-.32.115-.482.166a6.39 6.39 0 0 0-.297.097l-.137.05zm-.766-1.146l.12.04.025.01c.122.05.279.1.43.147l.182.06.196-.063c.15-.047.306-.095.425-.145l.155-.053.398-.191c.846-.391 1.654-.862 2.41-1.406l.066-.047.164-.122a12.644 12.644 0 0 0 2.571-2.555 9.593 9.593 0 0 0 1.305-2.348l.398.129-.39-.15a10.755 10.755 0 0 0 .695-3.94c0-.079-.007-7.298-.03-10.257l-.382-.1c-.23-.06-.459-.115-.69-.163-1.95-.43-4.353-.723-6.645-.81h-.308a12.347 12.347 0 0 0-.247-.002h-.086a14.61 14.61 0 0 0-.333.008l-.698.021.021-.043a32.778 32.778 0 0 0-7.165 1.038c-.063.014-.125.03-.187.046a2064.763 2064.763 0 0 0-.03 10.258c-.014 1.697.334 3.282 1.036 4.715.06.125.122.248.187.37l.03.052c.089.164.172.307.253.438l.015.025a10.018 10.018 0 0 0 .986 1.326l.078.093c1.298 1.48 2.926 2.663 4.838 3.517z"/><path d="M12.224 23.53l.927-.313c2.535-1.189 4.244-2.437 5.784-4.456 1.46-1.954 2.022-3.951 2.095-6.57 0 0-.035-8.457-.05-10.518-.899-.518-6.303-1.252-8.758-1.23"/><path d="M12.355 23.93l-.264-.8.906-.305c2.558-1.202 4.183-2.455 5.608-4.32 1.333-1.785 1.934-3.677 2.009-6.326 0-.066-.033-7.795-.049-10.23-1.22-.435-5.936-1.113-8.34-1.085L12.22.022c2.463-.023 7.962.705 8.968 1.286l.208.12.002.242c.015 1.988.05 10.483.05 10.52-.08 2.85-.73 4.887-2.178 6.825-1.52 1.99-3.24 3.317-5.942 4.584l-.044.017z"/><g><path d="M12.223.443C9.595.466 4.3 1.294 3.45 1.617c-.033 4.024-.033 10.574-.033 10.574.064 2.5.636 4.618 2.095 6.57 1.542 2.021 3.38 3.291 5.79 4.456.021.01.921.312.921.312"/><path d="M12.092 23.93c-.925-.311-.94-.318-.97-.333-2.717-1.314-4.493-2.683-5.94-4.578-1.42-1.9-2.111-4.066-2.181-6.817 0-.077 0-6.61.032-10.588l.002-.29.268-.1C4.279.853 9.629.044 12.219.021l.007.842c-2.35.021-7.02.722-8.361 1.067-.03 3.995-.03 10.197-.03 10.26.065 2.591.685 4.543 2.01 6.317 1.374 1.8 3.004 3.054 5.618 4.32.098.035.589.2.892.302l-.262.8z"/></g></g><path d="M18.05 12.265l-.221-.073-.048-.235-.382-.15c-1.036-.364-2.1-.657-3.198-.763-.706-.068-1.422-.015-1.965.338-.542-.353-1.257-.406-1.964-.338-1.099.106-2.163.4-3.202.763l-.38.15-.05.235-.222.073-1.242 5.24a49.072 49.072 0 0 1 2.943-.425 18.917 18.917 0 0 1 2.965-.116c-.005.045-.018.083.01.128.13.126.392.114.602.133.217.009.314.012.528.014.214.001.312-.005.53-.014.208-.019.47-.007.601-.133.028-.045.016-.083.01-.128.99-.04 1.982 0 2.965.116.8.084 2.241.295 2.941.426zm-5.964 3.945c-.579-.313-1.3-.36-2.003-.32-1.5.097-2.85.43-4.264.917l1.082-4.74c1.085-.418 2.225-.75 3.405-.85.773-.048 1.437.05 1.82.328zm2.285-.32c-.703-.04-1.424.007-2.004.32l-.021-4.664c.383-.278 1.049-.376 1.821-.329 1.18.101 2.318.432 3.403.85l1.061 4.74c-1.411-.486-2.76-.82-4.26-.917z" fill="#282828"/><path d="M12.56.434l1.232 2.503.004.008c.005.011.021.045.066.123l.12-.05c.056-.03 2.065-1.185 2.065-1.185L15.07 6.68l1.993-2.118.838 1.611.218-.037-.108.018 2.45-.68-.779 2.778-.015.023.002.001-.01.032.007-.011-.092.284-.047.147 1.255.653-2.606 2.334.028.136.214.071 1.307 5.613c.887-1.61 1.32-3.412 1.305-5.345 0 0-.007-7.822-.033-10.574C18.502.892 15.227.513 12.56.434m-.337 23.096c.231-.085.559-.168.793-.269 2.287-.96 4.325-2.41 5.92-4.5.186-.249.361-.507.525-.772l-.269-.05a49.18 49.18 0 0 0-2.91-.421c-.177-.02-.353-.039-.53-.055h-.003a17.9 17.9 0 0 0-2.078-.067l-.015.015c-.221.214-.53.232-.755.245l-.126.01-.127.005-.428.009-.542-.014-.13-.01c-.226-.013-.535-.03-.756-.246l-.014-.014a18.57 18.57 0 0 0-1.648.033l-.005.002-.149.01h-.01l-.145.012a.48.48 0 0 0-.024.003l-.135.011-.043.004-.118.011-.076.008-.09.01-.171.018c-.974.112-1.943.252-2.909.42l-.269.05c.164.266.34.524.526.773 1.595 2.09 3.632 3.54 5.919 4.5.234.1.561.184.792.269M11.894.42C9.226.41 5.948.891 3.451 1.617c-.028 2.753-.034 10.574-.034 10.574-.017 1.933.417 3.734 1.303 5.344l1.33-5.612.216-.071.025-.119-2.626-2.35 1.254-.655-.052-.165-.07-.215a.23.23 0 0 0-.008-.01l-.803-2.863 2.45.68-.106-.018.217.037.838-1.611L9.378 6.68 8.4 1.833l2.065 1.186.12.05.066-.121.003-.01L11.75.713l.144-.292" fill="#282828"/><path d="M5.467 8.816c-.01.131-.13.28-.201.333l-.672.35 2.18 1.953.146-.058.007-.003c1.255-.44 2.305-.69 3.304-.786.82-.079 1.48.012 2.005.275.527-.263 1.186-.354 2.007-.275.998.096 2.047.346 3.3.786l.008.004.13.05L19.853 9.5l-.672-.351c-.07-.052-.192-.202-.2-.333-.003-.04-.007-.035-.011-.023l.001-.011c.014-.078 0-.062.07-.272-.005.005.129-.4.132-.403l.523-1.866-1.544.43c-.085.005-.163.035-.246.047-.145.02-.262.04-.348-.056l-.62-1.191-1.763 1.874-.14.14c-.297.228-.717-.018-.534-.665l.795-3.942-1.082.622a4.946 4.946 0 0 1-.471.175c-.067.021-.133-.022-.178-.065a6.143 6.143 0 0 1-.25-.443L12.224.95l-1.091 2.216a5.942 5.942 0 0 1-.251.443c-.045.042-.111.086-.177.065a4.924 4.924 0 0 1-.472-.175l-1.082-.622.794 3.941c.183.648-.236.894-.533.666l-.14-.14L7.51 5.471l-.62 1.19c-.088.097-.204.077-.348.057-.084-.012-.161-.042-.246-.048l-1.545-.428.523 1.865c.004.003.138.409.131.403.07.21.058.194.07.271l.002.01c-.003-.01-.008-.011-.01.025z" fill="#bf112b"/><path d="M11.491 12.704c-.616-.265-1.332-.184-1.984-.07-.77.135-1.128.233-1.975.52l.047-.213s1.068-.42 2.51-.59c0 0 .829-.107 1.402.15v.202zm0 .942c-.616-.264-1.332-.183-1.984-.069-.77.135-1.322.221-2.195.515l.048-.213s1.287-.416 2.729-.586c0 0 .829-.106 1.402.15zm0 .956c-.616-.264-1.332-.183-1.984-.069-.77.135-1.552.343-2.436.642l.048-.213s1.528-.543 2.97-.714c0 0 .829-.105 1.402.15zm1.443-1.898c.616-.265 1.333-.184 1.984-.07.77.135 1.128.233 1.975.52l-.047-.213s-1.068-.42-2.51-.59c0 0-.828-.107-1.402.15v.202zm0 .942c.616-.264 1.333-.183 1.984-.069.77.135 1.322.221 2.195.515l-.048-.213s-1.287-.416-2.729-.586c0 0-.829-.106-1.402.15v.203zm0 .956c.616-.264 1.333-.183 1.984-.069.77.135 1.552.343 2.436.642l-.047-.213s-1.53-.543-2.97-.714c0 0-.83-.105-1.403.15z" fill="#282828"/></g></svg>
                Raven Design System
            </a>
        </h1>
        <!-- Optional - Top Nav -->
        <nav>
            <div class="c-nav c-nav--topnav" role="presentation" aria-label="Main Navigation">
                <!-- Top Nav code goes here -->
            </div> 
        </nav>      
        <!-- Optional - Masthead Buttons -->
        <ul class="masthead__actions">
            <!-- buttons code goes here -->
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
