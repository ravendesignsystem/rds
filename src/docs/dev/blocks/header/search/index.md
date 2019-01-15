---
layout: base
subsite: dev
content: true
title: Search block
banner:
  breadcrumbs:
    grandparent: Blocks
    parent: Header
---
Add a desc.

{%include 'rds/inc/close.twig'%}
{%include 'blocks/search/search.twig'%}
{%include 'rds/inc/open-b-content.twig'%}

```html
<div class="u-block u-block--s u-block--grey">
    <div class="b-search">
    <form class="c-searchform u-width-s" role="search" method="get" action="https://carleton.ca">
    <label for="searchform__input">Search</label>
    <input class="searchform__input" id="searchform__input" name="s" type="search" autocomplete="off" placeholder="Search">
    <button class="searchform__button u-icon u-icon--s" type="submit" title="Search">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.52 21.28l-6.096-6.128A9.488 9.488 0 0 0 19.2 9.6c0-5.296-4.304-9.6-9.6-9.6C4.304 0 0 4.304 0 9.6c0 5.296 4.304 9.6 9.6 9.6 2.08 0 3.968-.656 5.552-1.776l6.128 6.096c.304.32.72.48 1.12.48.4 0 .832-.144 1.12-.48a1.594 1.594 0 0 0 0-2.256v.016zM9.6 17.12c-4.144 0-7.52-3.376-7.52-7.52S5.456 2.08 9.6 2.08s7.52 3.376 7.52 7.52-3.376 7.52-7.52 7.52z"></path></svg>
        <span>Search button</span>
    </button>
</form>
    </div>
</div>
```

## Implementation Notes



