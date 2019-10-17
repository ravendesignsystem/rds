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
 
{% include 'inc' with {'component': 'searchform'} %}

```html
<form class="c-searchform" role="search" method="get" action="https://carleton.ca">
    <label for="searchform__input">Search</label>
    <input id="searchform__input" name="s" type="search" autocomplete="off" placeholder="Search">
    <button type="submit" title="Search">
        {% filter escape %}{% include "icons/search.svg" %}{% endfilter %}
        <span class="u-visually-hidden">Search button</span>
    </button>
</form>
```

## Search action and functionality

How the search functions is not covered here. It is up to you how your search functionality operates. 

## Found in

The {{page.title}} component is used in the following blocks:

- {%include "link" with {'block': 'Search', 'Block': true} %}
