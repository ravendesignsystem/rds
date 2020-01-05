---
layout: docs
title: Typography
subsite: design
menu: design
---

## Typeface

RDS uses the webfont family [Gotham Narrow ScreenSmart](https://www.typography.com/fonts/gotham/styles/gothamnarrowscreensmart) from [Hoefler&Co](https://www.typography.com/).

<div style="margin-bottom: 25px;padding: 5%;background:#F3F3F3;font-size: 48px">Gotham Narrow
</div>

This is a paid font and cannot be distributed freely. If you are using RDS and publishing your site on the carleton.ca domain, Gotham is available and paid for by [ITS](https://carletonca/its).

To use the Gotham web font for other uses, you will need to inquire about usage, email [web@carleton.ca](mailto:web@carleton.ca).

## Type Scale

The type scale consists of 12 different font sizes. The default size applied to the body copy is 16px (Medium). Any new elements with text should use a font size from the scale below.

<p style="font-size: 54px;line-height: 1.25">54px - XXXXXL</p>
<p style="font-size: 48px;line-height: 1.25">48px - XXXXL</p>
<p style="font-size: 48px;line-height: 1.25">36px - XXXL</p>
<p style="font-size: 30px;line-height: 1.25">30px - XXL</p>
<p style="font-size: 28px;line-height: 1.25">28px - XL</p>
<p style="font-size: 24px;line-height: 1.25">24px - L</p>
<p style="font-size: 20px;line-height: 1.25">20px - ML</p>
<p style="font-size: 18px;line-height: 1.25">18px - M</p>
<p style="font-size: 16px;line-height: 1.25">16px - MS</p>
<p style="font-size: 14px;line-height: 1.25">14px - S</p>
<p style="font-size: 13px;line-height: 1.25">13px - XS</p>
<p style="font-size: 12px;line-height: 1.25">12px - XXS</p>

### SASS Variables

To help align with the type scale, the following SASS variables are available for setting font-sizes in SCSS files:

- $pixel12: 12px;
- $pixel13: 13px;
- $pixel14: 14px;
- $pixel16: 16px;
- $pixel18: 18px;
- $pixel20: 20px;
- $pixel24: 24px;
- $pixel28: 28px;
- $pixel30: 30px;
- $pixel36: 36px;
- $pixel48: 48px;
- $pixel54: 54px;

## Font Weights

Three font weights are used in RDS:
 
1. <span style="font-size: 24px;font-style: normal;font-weight: 300">Gotham Narrow ScreenSmart Light</span> 

```CSS
font-family: "Gotham Narrow SSm A", "Gotham Narrow SSm B";
font-style: normal;
font-weight: 300;
```
 
2. <span style="font-size: 24px;font-style: normal;font-weight: 400">Gotham Narrow ScreenSmart Book</span> 
 
```css
font-family: "Gotham Narrow SSm A", "Gotham Narrow SSm B";
font-style: normal;
font-weight: 400;
```

3. <span style="font-size: 24px;font-style: normal;font-weight: 500">Gotham Narrow ScreenSmart Medium</span> 
 
```css
font-family: "Gotham Narrow SSm A", "Gotham Narrow SSm B";
font-style: normal;
font-weight: 500;
```

## Text formatting

Text can be used in many different html tags — `<p>`, `<small>`, `<strong>`, `<time>`. While our CSS handles the visual aesthetics, always try and reach for the tag with the appropriate semantic meaning. 

### Bold vs Strong

**Use `<strong>`** to highlight a span of text with a tone that conveys importance. **`<bold>` does not convey any extra emphasis or importance** and will likely be used less frequently when a words typographic presentation is bold text; for example, a button or product names in a review.

<div class="c-alert c-alert--success">
    {% include "icons/verified.svg" %}
    <h2>Using strong correctly</h2>
    <p>
{% filter escape %}<p>... the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he begs: <strong>never feed him after midnight</strong>.</p>{% endfilter %}</p>
</div>

### Underline

Underline should never be used to call attention to text. It should only be used for [text links](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks).

<div class="c-alert c-alert--error">
    {% include "icons/alert.svg" %}
    <h2>Using underline incorrectly</h2>
    <p>
{% filter escape %}<p>... the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he begs: <underline>never feed him after midnight</underline>.</p>{% endfilter %}</p>
</div>

### Italics

Only use Italic for image captions and placeholders. 

