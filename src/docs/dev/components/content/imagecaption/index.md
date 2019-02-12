---
layout: base
subsite: dev
title: Image caption
content: true
banner:
  breadcrumbs:
    grandparent: Components
    parent: Content
meta:
    version: 1.0.0
    status: under review
    handle: img-caption
    type: Content
    path: imagecaption/
    theme: Core
---
Use this component to further explain,add commentary or provide context to your images contained in the `<figure>` element.

## Base example

{%include 'imagecaption/imagecaption'%}

```html
<figure aria-labelledby="figcaption_id_1" class="c-imagecaption">
	<img src="https://www.fillmurray.com/640/360" alt="Photo of Bill Murray">
	<figcaption class="imagecaption__text">In risus eros, auctor vel cursus a, ultricies vulputate massa. Sed sollicitudin augue id risus lacinia, placerat euismod sapien blandit.</figcaption>
</figure>
```
## Content guidelines

- Your captions should be different than your image's ALT text.

## References

- [Website Image Usability and SEO Best Practices](https://usabilitygeek.com/website-image-usability-and-seo-best-practices/)
