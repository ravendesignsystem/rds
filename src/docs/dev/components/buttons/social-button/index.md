---
layout: docs
subsite: dev
title: Social button
content: true
banner:
  breadcrumbs:
    grandparent: Components
    parent: Buttons
---

Linking to social media services can be an important part of building community and keeping in touch with users. All you need to do is add any of the following icons to your site, and update the URL to your social media service.

## Social buttons

### Facebook

{% include 'buttonsocial/data/buttonsocial--facebook' %}

```html
{% filter escape %}{% include 'buttonsocial/data/buttonsocial--facebook' %}{% endfilter %}
```

### Instagram

{% include 'buttonsocial/data/buttonsocial--instagram' %}

```html
{% filter escape %}{% include 'buttonsocial/data/buttonsocial--instagram' %}{% endfilter %}
```

### Linkedin

{% include 'buttonsocial/data/buttonsocial--linkedin' %}

```html
{% filter escape %}{% include 'buttonsocial/data/buttonsocial--linkedin' %}{% endfilter %}
```

### Pinterest

{% include 'buttonsocial/data/buttonsocial--pinterest' %}

```html
{% filter escape %}{% include 'buttonsocial/data/buttonsocial--pinterest' %}{% endfilter %}
</a>
```

### Twitter

{% include 'buttonsocial/data/buttonsocial--twitter' %}

```html
{% filter escape %}{% include 'buttonsocial/data/buttonsocial--twitter' %}{% endfilter %}
```

### Youtube

{% include 'buttonsocial/data/buttonsocial--youtube' %}

```html
{% filter escape %}{% include 'buttonsocial/data/buttonsocial--youtube' %}{% endfilter %}
```
##Implementation Notes

Social buttons are inline blocks so they can easily be aligned together by including each component one beside each other.

{% include 'buttonsocial/data/buttonsocial--instagram' %} {% include 'buttonsocial/data/buttonsocial--facebook' %} {% include 'buttonsocial/data/buttonsocial--twitter' %} {% include 'buttonsocial/data/buttonsocial--youtube' %} {% include 'buttonsocial/data/buttonsocial--linkedin' %} {% include 'buttonsocial/data/buttonsocial--pinterest' %}

```twig
{% verbatim %}{% include 'buttonsocial/data/buttonsocial--instagram' %} {% include 'buttonsocial/data/buttonsocial--facebook' %} {% include 'buttonsocial/data/buttonsocial--twitter' %} {% include 'buttonsocial/data/buttonsocial--youtube' %} {% include 'buttonsocial/data/buttonsocial--linkedin' %} {% include 'buttonsocial/data/buttonsocial--pinterest' %}{% endverbatim %}
```

## Block availability

Social button components should only be used within the following blocks:

- [Content](#)
- [Menu](#)
- [Simple footer](#)
- [Sitemap footer](#)
