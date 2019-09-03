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

The overlay layout is hidden and needs to be activated by a user action, at which time, it displays as a non-modal, on top of all page content. Usually it is a Masthead action is used to display the Overlay.

![Example of the Overlay being opened](https://cu-rds.s3.amazonaws.com/docs/assets/overlay.gif)
 
 While not required, it is best to include the overlay layout as a global include immediately after the footer.

```html
<!-- Add after the last Footer block -->
<dialog class="l-overlay-modal">

    <div class="modal__search u-visually-hidden">
        <!-- If using, Search block goes here-->
    </div>

    <div class="modal__menu u-visually-hidden">
        <!-- If using, Menu block goes here-->
    </div>

    <div class="modal__login u-visually-hidden">
        <!-- If using, Login block goes here-->
    </div>

</dialog>
```

**Note**: you should comment out or remove any of the block specific areas not being used in your site so screen readers don't pick them up. For example, if your site doesn't use the Login or Search block, change your Overlay layout in your base template to:

```html
<dialog class="l-overlay-modal">
    <div class="modal__menu u-visually-hidden">
    </div>
</dialog>
```

For improved accessibility, the overlay uses the HTML 5 `<dialog>`. RDS includes polyfill for browsers not supporting the `<dialogp>` tag. 

## Available blocks

[Dialogue section blocks](#) can be used in the Overlay layout. These include:

- the [Menu block](#)

TODO add photo 

- {% include 'link' with {'block': 'Search', 'Block': true} %}

![img of search](http://cu-raven.s3.amazonaws.com/assets/img/docs/overlay-search.jpg)

- the [Login block](#)

![img of search](http://cu-raven.s3.amazonaws.com/assets/img/docs/overlay-login.jpg)

## References

- [W3C - Dialog](https://www.w3.org/TR/wai-aria-practices/#dialog_modal)
- [Mozilla - Dialog Elementg](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
