---
layout: docs
title: Accordion component
subsite: dev
menu: dev
section: Components
banner:
  breadcrumbs:
    grandparent: Components
    parent: Content
meta:
    version: 0.1.0
    status: under review
    handle: accordion
    type: Fixed-width
    path: accordion/
    theme: Core
---
The Accordion block is a vertically stacked list of items with content sections collapsed by default. Each item's content can be expanded and then collapsed by clicking the title allowing users to expose content in a progressive manner. Accordions minimize scrolling on long pages and display critical information first.

## Base example

{%include "accordion/data/accordion.twig"%}<br>

```html
<div class="c-accordion">
    <input id="accordion-id-1" class="accordion__input" name="accordion-checkbox" type="checkbox">
    <label for="accordion-id-1" aria-controls="accordion-aria-control-1" aria-expanded="false" id="accordion-labelledby-1" class="accordion__toggle" role="heading">White-necked Raven</label>
    <div id="accordion-aria-control-1" class="accordion__content" role="region" aria-labelledby="accordion-labelledby-1" aria-hidden="true">
        <div class="accordion__spacing">
            <p>The <strong>white-necked raven</strong> has a much shorter tail than the common raven, as well as a deeper bill with a white tip that is almost as strongly arched as that of the thick-billed raven.</p>
        </div>
    </div>
</div>
<div class="c-accordion">
    <input id="accordion-id-2" class="accordion__input" name="accordion-checkbox" type="checkbox">
    <label for="accordion-id-2" aria-controls="accordion-aria-control-2" aria-expanded="false" id="accordion-labelledby-2" class="accordion__toggle" role="heading">Common raven</label>
    <div id="accordion-aria-control-2" class="accordion__content" role="region" aria-labelledby="accordion-labelledby-2" aria-hidden="true">
        <div class="accordion__spacing">
            <p>The <strong>common raven</strong> (Corvus corax), also known as the northern raven, is a large all-black passerine bird. Found across the Northern Hemisphere, it is the most widely distributed of all corvids.</p>
        </div>
    </div>
</div>
<div class="c-accordion">
    <input id="accordion-id-3" class="accordion__input" name="accordion-checkbox" type="checkbox">
    <label for="accordion-id-3" aria-controls="accordion-aria-control-3" aria-expanded="false" id="accordion-labelledby-3" class="accordion__toggle" role="heading">Australian raven</label>
    <div id="accordion-aria-control-3" class="accordion__content" role="region" aria-labelledby="accordion-labelledby-3" aria-hidden="true">
        <div class="accordion__spacing">
            <p>The <strong>Australian raven</strong> (Corvus coronoides) is a passerine bird in the genus Corvus native to much of southern and northeastern Australia. Measuring 46–53 centimetres (18–21 in) in length, it has all-black plumage, beak and mouth, as well as strong grey-black legs and feet.</p>
        </div>
    </div>
</div>
<div class="c-accordion">
    <input id="accordion-id-4" class="accordion__input" name="accordion-checkbox" type="checkbox">
    <label for="accordion-id-4" aria-controls="accordion-aria-control-4" aria-expanded="false" id="accordion-labelledby-4" class="accordion__toggle" role="heading">Thick-billed raven</label>
    <div id="accordion-aria-control-4" class="accordion__content" role="region" aria-labelledby="accordion-labelledby-4" aria-hidden="true">
        <div class="accordion__spacing">
            <p>The <strong>thick-billed raven</strong> (Corvus crassirostris), a corvid from the Horn of Africa, shares with the common raven the distinction of being the largest bird in the corvid family, and indeed the largest of the most diverse bird order with well over 5,000 identified species, the passerines. </p>
        </div>
    </div>
</div>
```

## Accordion - single variant

Only one section is open at any given time.

{%include 'accordion/data/accordion--single.twig' ignore missing%}<br>

```html
<div class="c-accordion">
    <input id="accordion-id-1" class="accordion__input" name="accordion-checkbox" type="checkbox">
    <label for="accordion-id-1" aria-controls="accordion-aria-control-1" aria-expanded="false" id="accordion-labelledby-1" class="accordion__toggle" role="heading">White-necked Raven</label>
    <div id="accordion-aria-control-1" class="accordion__content" role="region" aria-labelledby="accordion-labelledby-1" aria-hidden="true">
        <div class="accordion__spacing">
            <p>The <strong>white-necked raven</strong> has a much shorter tail than the common raven, as well as a deeper bill with a white tip that is almost as strongly arched as that of the thick-billed raven.</p>
        </div>
    </div>
</div>
<div class="c-accordion">
    <input id="accordion-id-2" class="accordion__input" name="accordion-checkbox" type="checkbox">
    <label for="accordion-id-2" aria-controls="accordion-aria-control-2" aria-expanded="false" id="accordion-labelledby-2" class="accordion__toggle" role="heading">Common raven</label>
    <div id="accordion-aria-control-2" class="accordion__content" role="region" aria-labelledby="accordion-labelledby-2" aria-hidden="true">
        <div class="accordion__spacing">
            <p>The <strong>common raven</strong> (Corvus corax), also known as the northern raven, is a large all-black passerine bird. Found across the Northern Hemisphere, it is the most widely distributed of all corvids.</p>
        </div>
    </div>
</div>
<div class="c-accordion">
    <input id="accordion-id-3" class="accordion__input" name="accordion-checkbox" type="checkbox">
    <label for="accordion-id-3" aria-controls="accordion-aria-control-3" aria-expanded="false" id="accordion-labelledby-3" class="accordion__toggle" role="heading">Australian raven</label>
    <div id="accordion-aria-control-3" class="accordion__content" role="region" aria-labelledby="accordion-labelledby-3" aria-hidden="true">
        <div class="accordion__spacing">
            <p>The <strong>Australian raven</strong> (Corvus coronoides) is a passerine bird in the genus Corvus native to much of southern and northeastern Australia. Measuring 46–53 centimetres (18–21 in) in length, it has all-black plumage, beak and mouth, as well as strong grey-black legs and feet.</p>
        </div>
    </div>
</div>
<div class="c-accordion">
    <input id="accordion-id-4" class="accordion__input" name="accordion-checkbox" type="checkbox">
    <label for="accordion-id-4" aria-controls="accordion-aria-control-4" aria-expanded="false" id="accordion-labelledby-4" class="accordion__toggle" role="heading">Thick-billed raven</label>
    <div id="accordion-aria-control-4" class="accordion__content" role="region" aria-labelledby="accordion-labelledby-4" aria-hidden="true">
        <div class="accordion__spacing">
            <p>The <strong>thick-billed raven</strong> (Corvus crassirostris), a corvid from the Horn of Africa, shares with the common raven the distinction of being the largest bird in the corvid family, and indeed the largest of the most diverse bird order with well over 5,000 identified species, the passerines. </p>
        </div>
    </div>
</div>
```

##Implementation Notes

...


##Content guidelines

Accordions should:

- ...
