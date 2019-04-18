---
layout: base
subsite: dev
title: Overlays
banner:
  breadcrumbs:
    parent: Docs
content: true
---

Overlays are layouts that get superimposed on top of the webpage and provide specific functionality. Currently, RDS offer two types of overlays, search and mobile menu.

## Main Overlay Markup

The main wrapper for the overlays should be placed immediately after the `footer` tag. One or more overlay types would be placed inside of the main wrapper.

```html
<div class="l-overlay-modal is-hidden">
	{Add one or more overlay types as noted below}
</div>
```

## Overlay Type: Search

Linked up from the search button in the [masthead block]({{site.url}}dev/blocks/header/masthead/), this overlay put the entire focus on the search block and can be pair with auto suggestive searches, allowing users to find what they want with very little distraction.

![img of search](http://cu-raven.s3.amazonaws.com/assets/img/docs/overlay-search.jpg)
Click here to <a href="http://cu-raven.s3.amazonaws.com/assets/img/docs/overlay-search.jpg" target="_blank">view a larger version</a> of this image

Be sure to grab the most up-to-date [search block markup]({{site.url}}dev/blocks/header/search/) to use in the example above.

```html
<div class="modal__search is-hidden">
	{Add search block markup from the link above}
</div>
```

## Overlay Type: Mobile Menu

TODO: update when proper mobile nav doc page is done

Short desc

```html
<div class="modal__menu is-hidden">
	{Add mobile nav block markup from the link above}
</div>
```

## Overlay Type: Login

The masthead makes a [login button]({{site.url}}dev/blocks/header/masthead#masthead-with-login-button) available that put the focus on a simple login form.

![img of search](http://cu-raven.s3.amazonaws.com/assets/img/docs/overlay-login.jpg)
Click here to <a href="http://cu-raven.s3.amazonaws.com/assets/img/docs/overlay-login.jpg" target="_blank">view a larger version</a> of this image

Be sure to grab the most up-to-date [login block markup]({{site.url}}dev/blocks/header/login/) to use in the example above.

```html
<div class="modal__login is-hidden">
	{Add login block markup from the link above}
</div>
```

## Important Notes

- Anything noted as a `Header Block` on [the dev overview page] is required to be placed inside of the `<header></header>` tag as shown in the markup example. There is key functionality relating to masthead items that will not function correctly if these elements live outside of header.
- Footer branding is a required elements and no build should be created without it.
