---
layout: t-docs
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
<a class="c-buttonsocial c-buttonsocial--facebook u-icon u-icon--circle" href="https://www.facebook.com/carletonuniversity">
    {% verbatim %}{% include iconPath ~ 'facebook.svg' %}{% endverbatim %}
    <span class="u-visually-hidden">Like us on Facebook</span>
</a>
```

### Instagram

{% include 'buttonsocial/data/buttonsocial--instagram' %}

```html
<a class="c-buttonsocial c-buttonsocial--instagram u-icon u-icon--circle" href="https://www.instagram.com/carleton_u">
    {% verbatim %}{% include iconPath ~ 'instagram.svg' %}{% endverbatim %}
    <span class="u-visually-hidden">Follow us on Instagram</span>
</a>
```

### Linkedin

{% include 'buttonsocial/data/buttonsocial--linkedin' %}

```html
<a class="c-buttonsocial c-buttonsocial--linkedin u-icon u-icon--circle" href="https://www.linkedin.com/school/carleton-university">
    {% verbatim %}{% include iconPath ~ 'linkedin.svg' %}{% endverbatim %}
    <span class="u-visually-hidden">View us on Linkedin</span>
</a>
```

### Pinterest

{% include 'buttonsocial/data/buttonsocial--pinterest' %}

```html
<a class="c-buttonsocial c-buttonsocial--pinterest u-icon u-icon--circle" href="https://www.pinterest.ca/carletonu">
    {% verbatim %}{% include iconPath ~ 'pinterest.svg' %}{% endverbatim %}
    <span class="u-visually-hidden">Check us out on Pinterest</span>
</a>
```

### Twitter

{% include 'buttonsocial/data/buttonsocial--twitter' %}

```html
<a class="c-buttonsocial c-buttonsocial--twitter u-icon u-icon--circle" href="https://twitter.com/@Carleton_U">
    {% verbatim %}{% include iconPath ~ 'twitter.svg' %}{% endverbatim %}
    <span class="u-visually-hidden">Follow us on Twitter</span>
</a>
```

### Youtube

{% include 'buttonsocial/data/buttonsocial--youtube' %}

```html
<a class="c-buttonsocial c-buttonsocial--youtube u-icon u-icon--circle" href="https://www.youtube.com/user/carletonuvideos">
    {% verbatim %}{% include iconPath ~ 'youtube.svg' %}{% endverbatim %}
    <span class="u-visually-hidden">Subscribe to our Youtube channel</span>
</a>
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
