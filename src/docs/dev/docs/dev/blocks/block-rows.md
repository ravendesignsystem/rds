---
layout: base
title: Block Rows
content: true
---
Block rows wrap [fixed blocks](#) in a full width container with a unique background colour.

Here is an example of the Grid block **without a block row surrounding it**:{%include "/rds/templates/close.twig"%}

<div class="b-listing-grid u-block">
    <ul class="u-grid u-grid--3">
        <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
        <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
        <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
    </ul>
</div>{%include "/rds/templates/open-content.twig"%}

**Code**:

```html
<div class="b-listing-grid u-block">
    <ul class="u-grid u-grid--3">
        <li>{ code to include card component }</li> 
        <li>{ code to include card component }</li> 
        <li>{ code to include card component }</li> 
    </ul>
</div>

```

Note how the code is the same except it is wrapped in a div with the class `u-block-row-grey`.

Below is a [grid block](#) **with a grey block row surrounding it**.{%include "/rds/templates/close.twig"%}

<div class="u-block-row-grey">
    <div class="b-listing-grid u-block">
        <ul class="u-grid u-grid--3">
            <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
            <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
            <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
        </ul>
    </div>
</div>{%include "/rds/templates/open-content.twig"%}


**Code**:

```html
<div class="u-block-row-grey">
    <div class="b-listing-grid u-block">
        <ul class="u-grid u-grid--3">
            <li>{ code to include card component }</li> 
            <li>{ code to include card component }</li> 
            <li>{ code to include card component }</li>
        </ul>
    </div>
</div>
```

## Block row utility classes

Utility classes are responsible for creating block rows. There are three block row utility classes, each with a unique background colour:

1. White  -  `u-block-row`
2. Grey  -  `u-block-row-grey`
3. Black  -  `u-block-row-black`

Note: that each class has its own unique name. They are not modifiers of the default white 'u-block-row' class.

{%include "/rds/templates/close.twig"%}

<div class="u-block-row">
    <section class="u-block">
        <h3>White block row</h3>
        <div class="b-listing-grid">
            <ul class="u-grid u-grid--3">
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
            </ul>
        </div>
    </section>
</div>
<div class="u-block-row-grey">
    <section class="u-block">
        <h3>Grey block row</h3>
        <div class="b-listing-grid">
            <ul class="u-grid u-grid--3">
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
            </ul>
        </div>
    </section>
</div>
<div class="u-block-row-black">
    <section class="u-block">
        <h3>Black block row</h3>
        <div class="b-listing-grid">
            <ul class="u-grid u-grid--3">
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
            </ul>
        </div>
    </section>
</div>{%include "/rds/templates/open-content.twig"%}

## To make a block row:

1. Add a `<div>` tag with the appropraite block row utility class before the block.
2. Close the `</div>` after the block.

### White block row
```html
<div class="u-block-row">
    { block code }
</div>
```
### Grey block row
```html
<div class="u-block-row-grey">
    { block code }
</div>
```
### Black block row
```html
<div class="u-block-row-grey">
    { block code }
</div>
```
## Content guidelines

When working with block rows..
 
**you should avoid**:

- using black rows within the header or content areas. They are reserved for the footer. Go Ravens theme is the exception.
- separating similar content with different colour rows. Try and group the same types of content together.
- using rows all together if your theme layout does not support them. Currently, only theme Framework (FW) supports block rows.

**you should**:

- use block rows consistently across your site/app.
- try and use grey rows (`u-block-row-grey`) on grid lists displaying cards.
- help to define areas on the page and visually delineate clear sections by staggering rows of different background colours.

{%include "/rds/templates/close.twig"%}

<div class="u-block-row-grey">
    <section class="u-block">
        <h3>A section with a grey background</h3>
        <div class="b-listing-grid">
            <ul class="u-grid u-grid--3">
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
            </ul>
        </div>
    </section>
</div>
<div class="u-block-row">
    <section class="u-block">
        <h3>Followed by a white block row</h3>
        <div class="b-listing-grid">
            <ul class="u-grid u-grid--3">
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
            </ul>
        </div>
    </section>
</div>
<div class="u-block-row-grey">
    <section class="u-block">
        <h3>Switching colours helps delinate clear sections</h3>
        <div class="b-listing-grid">
            <ul class="u-grid u-grid--3">
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
            </ul>
        </div>
    </section>
</div>{%include "/rds/templates/close.twig"%}{%include "/rds/templates/open-content.twig"%}

## Automatic spacing

The RDS system automatically adjusted the spacing when rows of the same colour are stacked on top of each other. 

{%include "/rds/templates/close.twig"%}<div class="u-block-row-grey">
    <section class="u-block">
        <h3>A grey block row followed by a...</h3>
        <div class="b-listing-grid">
            <ul class="u-grid u-grid--3">
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
            </ul>
        </div>
    </section>
</div>
<div class="u-block-row-grey">
    <section class="u-block">
        <h3>...a grey block row automatically has its spacing adjusted</h3>
        <div class="b-listing-grid">
            <ul class="u-grid u-grid--3">
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li> 
                <li>{%include "/cards/card/data/card.twig" ignore missing%}</li>
            </ul>
        </div>
    </section>
</div>
{%include "/rds/templates/open-content.twig"%}

## Block rows storybook

Test these concepts on [Codepen](https://codepen.io/cuweb/pen/qYyVKQ)

<a class="c-buttons-button" href="https://codepen.io/cuweb/pen/qYyVKQ">Codepen demo</a>

<p data-height="402" data-theme-id="light" data-slug-hash="qYyVKQ" data-default-tab="result" data-user="cuweb" data-embed-version="2" data-pen-title="Storybook - block rows" data-editable="true" class="codepen">See the Pen <a href="https://codepen.io/cuweb/pen/qYyVKQ/">Storybook - block rows</a> by Carleton (<a href="https://codepen.io/cuweb">@cuweb</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

{%include "/rds/templates/close.twig"%}


