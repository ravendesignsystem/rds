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

Above, the Page Alert is being used  on this page as an example. The code for this example:

```html
{% include 'inc' with {'block': 'alertpage-base', 'code': true} %}
```

## Properties

| Props        | Desc                   | Type  | Default
| -------------| :---------------------:| -----:| -------:|
| blockSize     | Block width, options: `s`, `l`  | string | s
| message *     | Content of Page Alert         | string | -
| link.href     | Redirect url             | string | -
| link.text     | Link text to display     | string | Learn more
| dismissible *    | Whether Page Alert can be dismissed  | boolean | true

## Template

Example of a possible twig or nunjuck template:

```twig
{% verbatim %}<div class="u-block {% if blockSize %}u-block--{{ blockSize }}{% else %}u-block--s{% endif %} u-block--alert">
    <div class="b-alertpage">{% include 'icons/alert.svg' %}
        <p>{{ message }}{% if data.link.href %} <a href="{{ link.href }}">{% if link.text %}{{ link.text }}{% else %}Learn more{% endif %}</a>{% endif %}</p>
{% if dismissible != false %}
        <button class="alert__dismiss" aria-label="Close alert" type="button" data-close>
            <span aria-hidden="true">&times;</span>
        </button>
{% endif %}
    </div>
</div>{% endverbatim %}
```

## Cookies

For dismissible Page Alert blocks, you will likely want to set a cookie to avoid users from continually seeing dismissed messages.
We do not cover that here at this time.

![cookie!](https://i2.wp.com/hypebeast.com/image/2017/03/cookie-monster-100-years-of-cookie-history-video-0.gif?w=960)

## Usage

Page Alerts are intended for important errors, warnings or messaging. Usually, these would would run site-wide.

For user contextual user interface feedback, check out [Alert components](#)
