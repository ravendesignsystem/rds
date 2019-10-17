---
layout: docs
subsite: dev
title: Search
section: Blocks
subsection: Dialogue blocks
banner:
  breadcrumbs:
    grandparent: Blocks
    parent: Header
---
The Search block provides a field for users to search for particular relevant pieces of content. Search can be used as the primary means of discovering content, or as a filter to aid the user in finding content.

The Search block can be used in the [header section](#) and the [overlay section](#). If you are using a search button in your [Masthead block](#), the Search block can be implemented in your overlay layout to handle search.

There is no actual search functionality associated with this block. This simply provides the HTML and CSS. How you hook up your search is up to you.

{% include 'inc' with {'block': 'search'} %}

```html
<div class="u-block u-block--grey">
    <div class="b-search">
        <form class="c-searchform" role="search" method="get" action="https://carleton.ca">
            <label for="searchform__input">Search</label>
            <input id="searchform__input" name="s" type="search" autocomplete="off" placeholder="Search">
            <button type="submit" title="Search">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.52 21.28l-6.096-6.128A9.488 9.488 0 0 0 19.2 9.6c0-5.296-4.304-9.6-9.6-9.6C4.304 0 0 4.304 0 9.6c0 5.296 4.304 9.6 9.6 9.6 2.08 0 3.968-.656 5.552-1.776l6.128 6.096c.304.32.72.48 1.12.48.4 0 .832-.144 1.12-.48a1.594 1.594 0 0 0 0-2.256v.016zM9.6 17.12c-4.144 0-7.52-3.376-7.52-7.52S5.456 2.08 9.6 2.08s7.52 3.376 7.52 7.52-3.376 7.52-7.52 7.52z"></path></svg>
                <span class="u-visually-hidden">Search button</span>
            </button>
        </form>
    </div>
</div>
```
