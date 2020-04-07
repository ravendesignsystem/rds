---
layout: docs
subsite: dev
title: Image Caption
menu: dev
section: Components
subsection: Content Components
banner:
  breadcrumbs:
    grandparent: Components
---
Use this component to further explain, add commentary or provide context to your images contained in the `<figure>` element.

## Base example

{%include 'imagecaption/imagecaption'%}

```html
{% spaceless %}{% filter escape %}{%include 'imagecaption/imagecaption'%}{% endfilter %}{% endspaceless %}
```
## Guidelines

- Your captions should be different than your image's ALT text.

## Found in

Badges are used in the following blocks:

- {%include "link" with {'block': 'Content'} %}

## References

- [Website Image Usability and SEO Best Practices](https://usabilitygeek.com/website-image-usability-and-seo-best-practices/)
