---
layout: docs
subsite: dev
title: Search Form
menu: dev
section: Components
banner:
  breadcrumbs:
    grandparent: Components
---
Ready-made form component with search and button inputs.
 
<form class="c-searchform" role="search" method="get" action="https://carleton.ca">
    <label for="searchform__input">Search</label>
    <input class="searchform__input" id="searchform__input" name="s" type="search"
           autocomplete="off"
           placeholder="Search">
    <button class="searchform__button u-icon" type="submit"
            title="Search">
        {% include "icons/search.svg" %}
        <span class="u-visually-hidden">Search button</span>
    </button>
</form><br>

```html
<form class="c-searchform" role="search" method="get" action="AddYourAction">
    <label for="searchform__input">Search</label>
    <input class="searchform__input" id="searchform__input" name="s" type="search"
           autocomplete="off"
           placeholder="Search">
    <button class="searchform__button u-icon" type="submit"
            title="Search">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.52 21.28l-6.096-6.128A9.488 9.488 0 0 0 19.2 9.6c0-5.296-4.304-9.6-9.6-9.6C4.304 0 0 4.304 0 9.6c0 5.296 4.304 9.6 9.6 9.6 2.08 0 3.968-.656 5.552-1.776l6.128 6.096c.304.32.72.48 1.12.48.4 0 .832-.144 1.12-.48a1.594 1.594 0 0 0 0-2.256v.016zM9.6 17.12c-4.144 0-7.52-3.376-7.52-7.52S5.456 2.08 9.6 2.08s7.52 3.376 7.52 7.52-3.376 7.52-7.52 7.52z"></path></svg>
        <span class="u-visually-hidden">Search button</span>
    </button>
</form>
```

### Icon include

The example above include the full SVG for the loop search button. You can also include it if you are building with the npm package:

```html
<form class="c-searchform" role="search" method="get" action="AddYourAction">
    <label for="searchform__input">Search</label>
    <input class="searchform__input" id="searchform__input" name="s" type="search"
           autocomplete="off"
           placeholder="Search">
    <button class="searchform__button u-icon" type="submit"
            title="Search">
        {%verbatim %}{% include "pathtoicons/search.svg" %}{%endverbatim %}
        <span class="u-visually-hidden">Search button</span>
    </button>
</form>
```

## Search action and functionality

How the search functions is not covered here. It is up to you how your search functionality operates. 

## Found in

The {{page.title}} component is used in the following blocks:

- {%include "link" with {'block': 'Search'} %}
