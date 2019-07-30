---
layout: docs
subsite: dev
menu: dev
section: Layouts
title: Overlay
banner:
  breadcrumbs:
    parent: Docs
content: true
---

The overlay layout is hidden and needs to be activated by a user action, at which time, it displays on top of all page content. The Overlay layout should be included in all RDS templates.

The overlay is wrapped in a `<dialogue>` tag placed immediately after the page's  `footer` tag. 

```html
<dialog class="l-overlay-modal is-hidden">

    <div class="modal__search is-hidden">
        <!-- If using, Search block goes here-->
    </div>

    <div class="modal__menu is-hidden">
        <!-- If using, Menu block goes here-->
    </div>

    <div class="modal__login is-hidden">
        <!-- If using, Login block goes here-->
    </div>

</dialog>
```

**Note**: while there is no harm in keeping them, you can comment out or remove any the block specific areas not being used in your site. For example, if your site doesn't use the Login or Search block, you can edit your Overlay layout in your base template to simply:

```html
<dialog class="l-overlay-modal is-hidden">
    <div class="modal__menu is-hidden">
        <!-- If using, Menu block goes here-->
    </div>
</dialog>
```

## Available blocks

[Dialogue section blocks](#) can be used in the Overlay layout. These include:

- the [Menu block](#)

TODO add photo 

- the [Search block](#)

![img of search](http://cu-raven.s3.amazonaws.com/assets/img/docs/overlay-search.jpg)

- the [Login block](#)

![img of search](http://cu-raven.s3.amazonaws.com/assets/img/docs/overlay-login.jpg)
