---
layout: docs
subsite: dev
title: Alert, Page
menu: dev
section: Blocks
subsection: Header blocks
banner:
  breadcrumbs:
    parent: Docs
alertpage:
  size: l
  message: Page Alerts should be used for important messages only. For example: Exams have been rescheduled due to expected inclement weather. Make sure to confirm your new exam times.
  link:
    href: https://carleton.ca/ses/exam-schedule/
---
The Page Alert block is used to convey important information to the user through a prominent header block. 

## Example

Check out the Page Alert block in use directly above the Banner on this page.

```html
{% include 'inc' with {'block': 'alertpage-base', 'code': true} %}
```

## Properties


| Props        | Desc              | Type  | Default 
| --------------| :-----------------------------------:| ------:| -:|
| blockSize     | Block width, options: `s`, `l`       | string | s |
| message *     | Content of Page Alert                | string | - | 
| linkHref      | Redirect url                         | string | -
| linkText      | Link text to display                 | string | Learn more
| dismissible * | Whether Page Alert can be dismissed  | boolean | true

```twig
{% verbatim %}<div class="u-block u-block--{{ blockSize }} u-block--alert">
    <div class="b-alertpage">{% include 'icons/alert.svg' %}
        <p>{{ message }} <a href="{{ linkHref }}">{{ linkText }}</a></p>
{% if dismissible != false %}
        <button class="alert__dismiss" aria-label="Close alert" type="button" data-close>
            <span aria-hidden="true">&times;</span>
        </button>
{% endif %}
    </div>
</div>{% endverbatim %}
```

## Usage

Page Alerts are intended for important errors, warnings or messaging. Usually, these would would run site-wide until a user dismiss them.

For user contextual user interface feedback, check out [Alert components](#)

## Cookies

For dismissible Page Alert blocks, if you display the block site-wide until dismissed, you will likely want to set a cookie to avoid users from continually seeing dismissed messages.
We do not cover that here at this time.

![cookie!](https://i2.wp.com/hypebeast.com/image/2017/03/cookie-monster-100-years-of-cookie-history-video-0.gif?w=960)
