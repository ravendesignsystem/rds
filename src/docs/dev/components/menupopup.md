---
layout: docs
subsite: dev
title: Menu Popup
menu: dev
section: Components
banner:
  breadcrumbs:
    grandparent: Components
---

Toggleable contextual overlays for displaying lists of links in sub-menus. They can be toggled by clicking and hovering.

### Positioning

Working with Menu Popup components can be a bit tricky. They use absolute positioning. Therefore, your container div is going to need to have a `position:relative` style and a defined width on it. 

To provide a better understanding of this, we will inline some CSS styles used for the examples below.

### Example

To see the Menu Popup example, click the purple link below .

{%include "inc" with {'close': true} %}

<div class="u-block u-block--white">
    <div style="position:relative;width:220px">
        <button class="c-menupopup" style="color:purple;width:225px;" aria-label="Open Menu">Graduate Admission links</button>
        <ul class="menupopup__menu" aria-label="menupopup">
            <li class="menupopup__sep"><a href="https://graduate.carleton.ca">Graduate Admissions</a></li>
            <li><a href="https://graduate.carleton.ca/programs/">Graduate Programs</a></li>
            <li><a href="https://graduate.carleton.ca/apply-online/">Apply Online</a></li>
        </ul>
    </div>
</div>

{%include "inc" with {'open': true} %}

```html
<div class="u-block u-block--white">
    <div style="position:relative;width:220px">
        <button class="c-menupopup" style="color:purple;width:225px;" aria-label="Open Menu">Graduate Admission links</button>
        <ul class="menupopup__menu" aria-label="menupopup">
            <li class="menupopup__sep"><a href="https://graduate.carleton.ca">Graduate Admissions</a></li>
            <li><a href="https://graduate.carleton.ca/programs/">Graduate Programs</a></li>
            <li><a href="https://graduate.carleton.ca/apply-online/">Apply Online</a></li>
        </ul>
    </div>
</div>
```

Menu Popup components are `ul`s nested under another element with a class of <br>`.c-menupopup`. 

The parent elements are usually `<button>`s or other list `<li>`s when being used as a submenu. The `<ul class="menupopup__menu">` needs to reside directly after the parent `.c-menupopup` element.

### Right-side menu

Notice above how the default menu is aligned to the left and the top arrow positioned to the left. You can position both to the right using the `c-menupopup--right` modifier class.
Click on the orange link below to see the menu align to the right along with the top arrow.

{%include "inc" with {'close': true} %}

<div class="u-block u-block--white">
    <div style="position:relative;width:220px">
        <button class="c-menupopup c-menupopup--right" style="color:darkorange;width:225px;" aria-label="Open Menu">Graduate Admission links</button>
        <ul class="menupopup__menu" aria-label="menupopup">
            <li class="menupopup__sep"><a href="https://graduate.carleton.ca">Graduate Admissions</a></li>
            <li><a href="https://graduate.carleton.ca/programs/">Graduate Programs</a></li>
            <li><a href="https://graduate.carleton.ca/apply-online/">Apply Online</a></li>
        </ul>
    </div>
</div>

{%include "inc" with {'open': true} %}

```html
<div class="u-block u-block--white">
    <div style="position:relative;width:220px">
        <button class="c-menupopup c-menupopup--right" style="color:darkorange;width:225px;" aria-label="Open Menu">Graduate Admission links</button>
        <ul class="menupopup__menu" aria-label="menupopup">
            <li class="menupopup__sep"><a href="https://graduate.carleton.ca">Graduate Admissions</a></li>
            <li><a href="https://graduate.carleton.ca/programs/">Graduate Programs</a></li>
            <li><a href="https://graduate.carleton.ca/apply-online/">Apply Online</a></li>
        </ul>
    </div>
</div>
```

## Hover toggle

If your parent element is also a link redirecting to another page, you can use an `<a>`, instead of a `<button>`. As a result of this, the Menu Popup will appear on hover.
Hover over the green link below to see:

{%include "inc" with {'close': true} %}

<div class="u-block u-block--white">
    <div style="position:relative;width:210px">
        <a class="c-menupopup c-menupopup--right" style="color:darkgreen;display:block" aria-label="Open Menu">Graduate Admission links</a>
        <ul class="menupopup__menu" aria-label="menupopup">
            <li class="menupopup__sep"><a href="https://graduate.carleton.ca">Graduate Admissions</a></li>
            <li><a href="https://graduate.carleton.ca/programs/">Graduate Programs</a></li>
            <li><a href="https://graduate.carleton.ca/apply-online/">Apply Online</a></li>
        </ul>
    </div>
</div>

{%include "inc" with {'open': true} %}

```html
<div class="u-block u-block--white">
    <div style="position:relative;width:210px">
        <a class="c-menupopup c-menupopup--right" style="color:darkgreen;display:block" aria-label="Open Menu">Graduate Admission links</a>
        <ul class="menupopup__menu" aria-label="menupopup">
            <li class="menupopup__sep"><a href="https://graduate.carleton.ca">Graduate Admissions</a></li>
            <li><a href="https://graduate.carleton.ca/programs/">Graduate Programs</a></li>
            <li><a href="https://graduate.carleton.ca/apply-online/">Apply Online</a></li>
        </ul>
    </div>
</div>
```

**Note**: a carrot is created automatically beside menu popup components. For this to work best, your parent element should use `display:block`. Therefore, when using an inline `<a>`, you should use CSS to make it a block element.

## Separator line

Notice in the examples above how the first menu popup list item has a separator line after it? You can add this separation line to any list item by adding the class:

```html
<li class="menupopup__sep">
```

Separators are not required on the first item and can be removed.

## Icons

Add icons to your popmenu items using the `u-icon` utility class>

{%include "inc" with {'close': true} %}

<div class="u-block u-block--white">
    <div style="position:relative;width:210px">
        <a class="c-menupopup c-menupopup--right" style="color:darkgreen;display:block" aria-label="Open Menu">Menu popup ith Icons</a>
<ul class="menupopup__menu" aria-label="menupopup" aria-expanded="false">
						<li>
							<a class="u-icon" href="https://github.com/ravendesignsystem/rds/releases"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.286 3.5l-2.572 2.571 6 6-6 6 2.572 2.572L24 12.07 16.286 3.5zm-8.572 0L0 12.071l7.714 8.572 2.572-2.572-6-6 6-6L7.714 3.5z"></path></svg>
								Releases
							</a>
						</li>
						<li>
							<a class="u-icon" href="https://github.com/ravendesignsystem/rds"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.286 3.5l-2.572 2.571 6 6-6 6 2.572 2.572L24 12.07 16.286 3.5zm-8.572 0L0 12.071l7.714 8.572 2.572-2.572-6-6 6-6L7.714 3.5z"></path></svg>
								RDS
							</a>
						</li>
						<li>
							<a class="u-icon" href="https://github.com/ravendesignsystem/design"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.09 3C4.5 3 0 12 0 12s4.5 9 12.09 9C19.5 21 24 12 24 12s-4.5-9-11.91-9zM12 18c-3.3 0-6-2.67-6-6 0-3.3 2.7-6 6-6 3.33 0 6 2.7 6 6 0 3.33-2.67 6-6 6zm3-6c0 1.665-1.335 3-3 3a2.99 2.99 0 0 1-3-3c0-1.665 1.335-3 3-3s3 1.335 3 3z"></path></svg>
								Design
							</a>
						</li>
						<li>
							<a class="u-icon" href="https://github.com/ravendesignsystem/content"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 18.658v5.143h5.143l13.714-13.714-5.143-5.143L0 18.658zm5.143 3.429H1.714v-3.429H3.43v1.715h1.714v1.714zM22.8 6.144l-2.229 2.229L15.43 3.23 17.657 1a1.707 1.707 0 0 1 2.417 0L22.8 3.727a1.707 1.707 0 0 1 0 2.417z"></path></svg>
								Content
							</a>
						</li>
						<li>
							<a class="u-icon" href="https://github.com/ravendesignsystem/accessibility"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" fill-rule="evenodd"><path d="M16.87 9.645l-3.435.484a4.734 4.734 0 0 0-.024.07c-.122.365.164 2.794.281 3.731l1.294 3.92a.795.795 0 0 1-.567.965.795.795 0 0 1-.966-.567l-1.31-3.983s-.02-.14-.158-.14c-.131 0-.156.141-.156.141l-1.312 4.005a.796.796 0 0 1-.966.568.795.795 0 0 1-.568-.966l1.351-4.156c.128-1.048.368-3.178.255-3.517a4.734 4.734 0 0 0-.024-.071L7.13 9.645a.795.795 0 0 1-.674-.896.795.795 0 0 1 .895-.674l4.047.571.602.001h.602l4.047-.572a.795.795 0 0 1 .895.674.795.795 0 0 1-.674.896zM12 5.079a1.494 1.494 0 1 1 0 2.989 1.494 1.494 0 0 1 0-2.989zm0-2.38A9.3 9.3 0 1 0 12 21.3a9.3 9.3 0 0 0 0-18.6z" fill="#222"></path><path d="M12 22.787C6.052 22.787 1.213 17.948 1.213 12S6.052 1.213 12 1.213 22.787 6.052 22.787 12 17.948 22.787 12 22.787zM12 .022C5.385.022.022 5.385.022 12c0 6.615 5.363 11.978 11.978 11.978 6.615 0 11.978-5.363 11.978-11.978C23.978 5.385 18.615.022 12 .022z" fill="#373B3E"></path></g></svg>
								Accessibility
							</a>
						</li>
					</ul>
    </div>
</div>

{%include "inc" with {'open': true} %}

```html
<ul class="menupopup__menu" aria-label="menupopup" aria-expanded="false">
    <li>
        <a class="u-icon" href="dalink">
            { SVG include }
            Releases
        </a>
    </li>...
```

## Guidelines

- Place the most frequently used items at the top of the submenu.
- Use separators to group related menu items.
- Grey out any unavailable options.
- Avoid long sub-menu dropdowns.
- Keep the opening label in view when popup menu is showing. 

## Found in

{{page.title}} components are used in the following blocks:

- {%include "link" with {'block': 'Masthead'} %}

## References

- [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/ios/controls/context-menus/)
- [https://www.nngroup.com/articles/drop-down-menus/](https://www.nngroup.com/articles/drop-down-menus/)
