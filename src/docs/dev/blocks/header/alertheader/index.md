---
layout: docs
title: Alert Header
subsite: dev
menu: dev
section: Blocks
subsection: Header Blocks
banner:
  breadcrumbs:
    parent: Docs
alertheader:
  dismissible : true
  heading: University closure, January 28, 2021!
  message: Due to inclement weather, the university will be closed January 28, 2019. Please see the <a href="https://carleton.ca/ses/exam-schedule/">updated exam schedule</a>
  link: https://carleton.ca/ses/exam-schedule/
---
The Page Alert block is used to convey important information to the user through a prominent header block. 

## Example

Check out the Page Alert block in use directly above the Banner on this page.

{% include 'inc' with {'block': 'alertheader-base', 'code': true} %}

**Note**: this is a rare block with a unique block utility modifier `u-block--alert`.

## Block details

| {{ page.title }}  block meta   |  values
| --------------| :-------------------------------------:
| handle              | `alertheader`   
| colour options      | n/a  
| section use         | `<header>`                  
| width type          | fixed                          
| has heading         | n/a
| theme(s)            | CU
| variants            | n/a
| Codepen             | [https://codepen.io/cuweb/pen/jgLVzB](https://codepen.io/cuweb/pen/jgLVzB?editors=1000)

## Properties

| Props        | Desc              | Type  | Default 
| --------------| :-------------------------------------:| -------:| -:|
| heading *     | Page Alert heading                     | string  | - |
| message *     | Content of alert, can include `<a>` tags | HTML  | - | 
| dismissible * | Whether Alert Header can be dismissed    | boolean | true

<small>`*` = required.</small>

### Nunjucks/Twig macro example
```twig
{% verbatim %}{% macro alertheader(data) %}
    <div class="u-block u-block--alert">
      <div class="b-alertheader">
          {% include 'icons/alert.svg' %}
          <h2>{{ data.heading }}</h2>
          <p>{{ data.message }}{% if data.url %} <a href="{{ data.link }}">{% if data.linkText %}{{ data.linkText }}{% else %}Learn more{% endif %}</a>{% endif %}</p>
      </div>
    {% if data.dismissible != false %}
      <button class="alertheader__dismiss" aria-label="Close alert" type="button" data-close>
          <span class="u-icon" aria-hidden="true">
              {% include 'icons/x.svg'%}
          </span>
      </button>
    {% endif %}
    </div>
{% endmacro %}{% endverbatim %}
```

## Usage

Page Alerts are intended for important errors, warnings or messaging. Usually, these would would run site-wide until a user dismiss them.

For user contextual interface feedback, check out [Alert components](#)

## Cookies

For dismissible Page Alert blocks displayed site-wide, you will likely want to set a cookie to avoid users from continually seeing dismissed messages.
We do not cover that here at this time.

![cookie!](https://i2.wp.com/hypebeast.com/image/2017/03/cookie-monster-100-years-of-cookie-history-video-0.gif?w=960)
