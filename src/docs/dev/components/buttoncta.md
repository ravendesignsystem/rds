---
layout: docs
subsite: dev
title: Button CTA
menu: dev
section: Components
banner:
  breadcrumbs:
    grandparent: Components
---
The CTA button prompts your visitors to take action by making common actions more visible and easy to perform with one click or tap. CTA buttons are labeled using text or text and an accompanying icon.

<a class="c-buttoncta" href="http://www.nooooooooooooooo.com">Join the darkside</a>

```html
<a class="c-buttoncta" href="http://www.nooooooooooooooo.com">Join the darkside</a>
```

## 👻 Ghost CTA button

For secondary or tertiary CTAs, consider using a use ghost button modifier.

<a class="c-buttoncta c-buttoncta--ghost" href="https://en.wikipedia.org/wiki/Stay_Puft_Marshmallow_Man">Stay Puft</a>

```html
<a class="c-buttoncta c-buttoncta--ghost" href="https://en.wikipedia.org/wiki/Stay_Puft_Marshmallow_Man"">Stay Puft</a>
```

## CTA button with icon

To make your CTA button easier to scan, consider adding an RDS icon. Position icons before (left of) the accompanying label.

<a class="c-buttoncta u-icon" href="#"><svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z"/></svg>Download our free ebook</a>
 
```html
<a class="c-buttoncta u-icon" href="#"><svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z"/></svg>Download our free ebook</a>
```

**Notice** the use of the `u-icon` class.

## Implementation Notes

### Links vs buttons

Most CTA button classes are designed to redirect off of the current page using the `<a>` element. If this is the case, do NOT use the `<button>` element for CTA buttons.

**😎 Cool**:

```html
<!-- Cool, like Fonzie -->
<a class="c-buttoncta" href="/contact">Visit our contact page</a>
```

**👎 Not cool**:

```html
<!-- Fonzie jumping a shark -->
<button class="c-buttoncta"><a href="/contact">Visit our contact page</a></button>
```

### Using `<button>`

You can use a `<button` element for a CTA, if you are performing actions such as:

- Opening a modal window
- Triggering a popup menu
- Toggling an interface
- Playing media content
- Inserting with JS if they only work with JS

The following code is okay to open a modal:

```html
<button class="c-buttoncta">View Terms</button>
```

**Important**: CTA button components should **NOT** be used to submit forms. Form buttons have a purposely distinctive style setup by default in RDS. As seen below:

**😎 Cool**:

<form>
<input type="submit">
</form><br>

```html
<form>
<input type="submit">
</form>
```

**👎 Not cool**:

```html
<!-- Fonzie jumping a shark -->
<form>
<input class="c-buttoncta" type="submit">
</form>

<!-- more shark jumping -->
<button class="c-buttoncta">Submit form</button>
```

### Full-width buttons

To provide more prominence, apply the modifier `c-buttoncta--full` and the button will stretch to fill 100% of the available width.

 <a class="c-buttoncta c-buttoncta--full c-buttoncta--ghost u-icon" href="#">{% include "icons/plus.svg" %} Add to calendar</a>
 
```html
 <a class="c-buttoncta c-buttoncta--full c-buttoncta--ghost" href="#">Add to calendar</a>
```

**Important**: in the example above the space is too wide to apply the full-width button modifier. It should only be used in small width layout areas, such as sidebars, 

### Centering
    
To center a button, add the modifier class c-buttoncta--center.

<a class="c-buttoncta c-buttoncta--center u-icon" href="#"><svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z"/></svg>
 Download our free ebook</a>
 
```html
<a class="c-buttoncta c-buttoncta--center u-icon" href="/ebook.pdf"><svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z"/></svg>
 Download our free ebook</a>
```

## Found in

Badges are used in the following blocks:

- {%include "link" with {'block': 'Banner'} %}
- {%include "link" with {'block': 'Card Grid'} %}

## Usage guidelines

### Ghost button usage

[Ghost buttons](https://www.smashingmagazine.com/2018/01/ghost-button-design/) have proven to be less effective then our default solid buttons. While Ghost Buttons have their place in web design, they should be used less frequently and in the right context.

Ghost buttons should:

- be used as secondary call-to-actions.

<a class="c-buttoncta" href="http://www.imdb.com/title/tt0087332/" role="button">Main action</a> <a class="c-buttoncta c-buttoncta--ghost" href="http://www.imdb.com/title/tt0087332/" role="button">Secondary action</a>

- Should only be used on solid white backgrounds. If placed over a busy image without sufficient contrast, it can be difficult for users to read the button's text.

<a class="c-buttoncta c-buttoncta--ghost" href="http://www.imdb.com/title/tt0087332/" role="button">Read Ghostbuster reviews</a>

### Further guidelines

CTA Buttons should:

- Begin with an action verb like “Start”, “Get” or “Download”
- Communicate the action that will occur when the user touches them.
- Be used as calls to action (cta).
- Be clearly and accurately labeled and start with strong, actionable verbs.
- Be brief: A couple of words is best, no more than five is ideal
- Be used for the most important actions on a page.
- Fall on their own line and have a good amount of white space surrounding them.

Examples of buttons with good calls to action:

<a class="c-buttoncta u-icon" href="https://central.wordcamp.org" role="button"> {% include "icons/arrow-down.svg" ignore missing %} Download our free e-book now</a>

<a class="c-buttoncta u-icon" href="https://central.wordcamp.org" role="button">Start a free trial</a>

<a class="c-buttoncta u-icon" href="https://central.wordcamp.org" role="button">{% include "icons/heart.svg" ignore missing %}Like this post</a>

<a class="c-buttoncta u-icon" href="https://central.wordcamp.org" role="button">{% include "icons/plus.svg" ignore missing %}Book an appointment</a>

<a class="c-buttoncta u-icon" href="https://central.wordcamp.org" role="button">Register for WordCamp Ottawa 2018</a>

## Avoid

- Don't use buttons for standard links within text [such as this](http://www.nooooooooooooooo.com).
- Avoid using Ghost buttons for main actions.

## References

- [Icons As Part Of A Great User Experience](https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/)
- [Where to Place Icons Next to Button Labels](http://uxmovement.com/buttons/where-to-place-icons-next-to-button-labels/)
- [Anatomy of...](https://medium.com/@aureliojota/the-anatomy-of-a-cta-button-in-2017-voice-tone-style-and-component-best-practices-1861c4d2167e)
- [CTA Guidelines](https://uxdesign.cc/7-cta-button-design-guidelines-4cdc21c2c85a)
