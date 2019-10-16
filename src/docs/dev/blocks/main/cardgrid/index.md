---
layout: docs
subsite: dev
title: Card Grid
section: Blocks
subsection: Main blocks
---
The Card Grid block uses RDS' [responsive grid](#) to list related [Card components]({{site.url}}/dev/components/cards/card/) in equal-width columns.

**Note**: this block should only be used to list cards and should not be used for general layout purposes. In the examples on this page, we often list the same card over and over. In production sites each card's data would be different.

{%include "inc" with {'block': 'cardgrid-base', 'close': false} %}

**Note**: you will likely use some sort of include for you card components. If not, replace the includes below with the HTML you need for your [card components]({{site.url}}/dev/components/cards/card/).

```html
<section class="u-block u-block--grey">
    <h2>Base example</h2>
    <div class="b-cardgrid u-grid u-grid--3">
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
    </div>
</section>
```

**Note**: in our base example we use the grey block colour. If it fits with your page design, this is the preferred use-case as the white cards stand out more on the grey background.

## Block details

| {{ page.title }}  block meta |                                                      values                                                       |
| ---------------------------- | :---------------------------------------------------------------------------------------------------------------: |
| handle                       |                                                    `cardgrid`                                                     |
| options examples             | <a href="#small-screen-stack-modifier">stack mod</a>, <a href="#card-grid-with-cta-link-or-button">CTA button</a> |
| block colour options         |                                         `u-block--white`, `u-block--grey`                                         |
| section use                  |                                                     `<main>`                                                      |
| width type                   |                                                       fixed                                                       |
| has heading                  |                                                       true                                                        |
| theme(s)                     |                                                        CU                                                         |
| variants                     |                       [3 column](#grid-column-settings), [4 column](#grid-column-settings)                        |
| Codepen                      |                  [https://codepen.io/cuweb/live/mdbwyEd](https://codepen.io/cuweb/live/mdbwyEd)                   |


## Card Grid columns

The number of columns available for Card Grids differs from small screens and large screens.

### Large screen Card Grid Options

On large screens, above RDS' small breakpoint of 768px, Card Grids rely on either three or four column grids. These are set by adding the respective grid modifier of either:

 - `u-grid--3` or
 - `u-grid--4`.

![Showing 3 and 4 grid column options](http://cu-rds.s3.amazonaws.com/docs/assets/cardgrid-cols.png)

#### Three column grid code example
```html
<section class="u-block u-block--grey">
    <h2>Base example</h2>
    <div class="b-cardgrid u-grid u-grid--3">
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
    </div>
</section>
```

#### Four column grid code example
```html
<section class="u-block u-block--grey">
    <h2>Base example</h2>
    <div class="b-cardgrid u-grid u-grid--4">
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
    </div>
</section>
```

**Note**: reminder

### Small screen Card Grid: 1 or 2 columns

#### Single column default

Regardless of the modifier used to set your columns on large screens, on small screens the block defaults to one column. For an improved small screen experience, the look of the cards change from a vertical orientation to horizontal.

![Showing the Card Grid on mobile](http://cu-rds.s3.amazonaws.com/docs/assets/card-grid-mobile.png)

#### Two column mobile view

Two column views are available on small screens. When used, the cards get reverted back to their default vertical orientation.

![Showing the Card Grid on mobile in 2 column view](http://cu-rds.s3.amazonaws.com/docs/assets/card-grid-2col.png)

For a two column view on small screens, apply the block modfier `.b-cardgrid--s2col`. Where `s` = small and `2col` = two columns.

The code below will display a two column card grid on small screens and a four column grid on large screens.

```html
<section class="u-block u-block--grey">
    <h2>Base example</h2>
    <div class="b-cardgrid b-cardgrid--s2col u-grid u-grid--4">
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
    </div>
</section>
```

{% from "alert/alert.twig" import alert %}
{{ alert (
    {
        heading: "Important! Avoid grid item widows when using two columns on small screens",
        message: "When setting two column grids for small screens, make sure your total number sof cards is an even number. For example, 4,6,8 or 12. Read the section below for more best practices in this area.",
        type: "info"
    }
) }}

## Card Grid rows and items

You can include as many card items as you want in Card Grid blocks. However, consider limiting the amount of cards in a single grid to 12. Beyond that, for a faster page load it is best to use some sort or ajax `load more` button for the user to request more cards. Lastly, for better performance make sure to include `loading="lazy"` on you Card images as all modern browsers will soon support [native lazy loading](https://web.dev/native-lazy-loading).

### Filling grid rows

**It is important to try and avoid leftover grid cards** and fill each row in the grid. To avoid grid item widows and orphans:

 - for three column grids insure your grid items total multiples of 3, for example:

- 3, 6, 9, 12

<div style="width: 40px;margin-bottom: 15px;">{% include 'icons/fail.svg' %}</div>

![Showing how a 5 card grid is wrong](http://cu-rds.s3.amazonaws.com/docs/assets/grid-fail.png)

<div style="width: 40px;margin-bottom: 15px;">{% include 'icons/pass.svg' %}</div>

![Showing how a 6 card grid is correct](http://cu-rds.s3.amazonaws.com/docs/assets/grid-pass.png)

For **four column** grids insure your number of cards total to multiples of 4, for example:

- 4, 8, 12

<div style="width: 40px;margin-bottom: 15px;">{% include 'icons/fail.svg' %}</div>

![Showing how a 7 card grid is wrong for 4 cols](http://cu-rds.s3.amazonaws.com/docs/assets/grid4-fail.png)

<div style="width: 40px;margin-bottom: 15px;">{% include 'icons/pass.svg' %}</div>

![Showing how a 8 card grid is correct for 4 cols](http://cu-rds.s3.amazonaws.com/docs/assets/grid4-pass.png)


**Remember**, if you are setting two column grids on small screens, you need to have an even number of grid items.

### Card grid with CTA link or button

If you need a 'Load more' button under the card grid add it within the `u-block` tag but outside of the `b-cardgrid` tag.

{%include "inc" with {'close': 'true'} %}

<div class="u-block u-block--white">
	<div class="b-cardgrid u-grid u-grid--4">
		{%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
	</div>
	<button class="c-buttoncta c-buttoncta--center" href="#">Load more</a>
</div>

{%include "inc" with {'open': 'true'} %}

```
<div class="u-block u-block--white">
	<div class="b-cardgrid u-grid u-grid--4">
		{% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
	</div>
	<button class="c-buttoncta c-buttoncta--center" href="#">Load more</a>
</div>
```

Or, if you want to use a CTA to link off to an archive or another page.

{%include "inc" with {'close': 'true'} %}

<div class="u-block u-block--white">
	<div class="b-cardgrid u-grid u-grid--4">
		{%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
        {%include "card/data/card--base"%}
	</div>
	<a class="c-buttoncta c-buttoncta--center" href="#">Visit archive page</a>
</div>

{%include "inc" with {'open': 'true'} %}

```
<div class="u-block u-block--white">
	<div class="b-cardgrid u-grid u-grid--4">
		{% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
        {% verbatim %}{%include "card/data/card--base"%}{% endverbatim %}
	</div>
	<a class="c-buttoncta c-buttoncta--center" href="#">Visit archive page</a>
</div>
```

## Related card content

The Card Grid block is intended for listing related content and in almost all cases the same card variants.

<div style="width: 40px;margin-bottom: 15px;">{% include 'icons/fail.svg' %}</div>

![Showing incorrect use of displaying different card types together](http://cu-rds.s3.amazonaws.com/docs/assets/difcards.png)

Avoid mixing different card variants as in the example above.
