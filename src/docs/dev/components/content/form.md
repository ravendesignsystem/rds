---
layout: docs
subsite: dev
title: Form
menu: dev
section: Components
subsection: Content Components
banner:
  breadcrumbs:
    grandparent: Components
---
The form component provides consistant UX for all form elements.

Form elements in RDS are styled based on their type attribute rather than a class. Simply add the class `c-form` to `<form>` tags.

## General Fields

<form class="c-form">
    <label for="first-name">First Name</label>
    <input id="first-name" type="text" name="textfield">
    <label for="last-name" class="required-field">Last Name</label>
    <input id="last-name" type="text" name="textfield" aria-describedby="required-message" required>
    <div id="required-message" class="u-visually-hidden">This field is required.</div>
    <label for="username">Username</label>
    <input id="username" type="text" name="textfield" aria-describedby="username-help-text" aria-invalid="true">
    <span id="username-help-text">There was an error with the input above.</span>
    <label for="city">City</label>
    <input id="city" type="text" name="textfield" aria-describedby="city-help-text" aria-invalid="false">
    <span id="city-help-text">The input above is successful.</span>
    <label for="address">Enter your street address</label>
    <textarea id="address" name="addresstext"></textarea>
</form>

```html
<form class="c-form">
    <label for="first-name">First Name</label>
    <input id="first-name" type="text" name="textfield">
    <label for="last-name" class="required-field">Last Name</label>
    <input id="last-name" type="text" name="textfield" aria-describedby="required-message" required>
    <div id="required-message" class="u-visually-hidden">This field is required.</div>
    <label for="username">Username</label>
    <input id="username" type="text" name="textfield" aria-describedby="username-help-text" aria-invalid="true">
    <span id="username-help-text">There was an error with the input above.</span>
    <label for="city">City</label>
    <input id="city" type="text" name="textfield" aria-describedby="city-help-text" aria-invalid="false">
    <span id="city-help-text">The input above is successful.</span>
    <label for="address">Enter your street address</label>
    <textarea id="address" name="addresstext"></textarea>
</form>
```

## Checkboxes

### Option #1: Grouping with fieldsets

<form class="c-form">
    <fieldset>
        <legend>Who is your favorite 19th century scientist</legend>
        <div class="checkbox column">
        <input id="bell" type="checkbox" name="scientist" value="bell"/>
        <label for="bell">Alexander Graham Bell</label>
        <input id="curry" type="checkbox" name="scientist" value="curry"/>
        <label for="curry">Marie Curie</label>
        <input id="lovelace" type="checkbox" name="scientist" value="lovelace"/>
        <label for="lovelace">Ada Lovelace</label>
        <input id="nobel" type="checkbox" name="scientist" value="nobel"/>
        <label for="nobel">Alfred Nobel</label>
        <input id="pasteur" type="checkbox" name="scientist" value="pasteur"/>
        <label for="pasteur">Louis Pasteur</label>
        <input id="tesla" type="checkbox" name="scientist" value="tesla"/>
        <label for="tesla">Nikola Tesla</label>
        </div>
    </fieldset>
</form>

```html
<form class="c-form">
    <fieldset>
        <legend>Who is your favorite 19th century scientist</legend>
        <div class="checkbox column">
        <input id="bell" type="checkbox" name="scientist" value="bell"/>
        <label for="bell">Alexander Graham Bell</label>
        <input id="curry" type="checkbox" name="scientist" value="curry"/>
        <label for="curry">Marie Curie</label>
        <input id="lovelace" type="checkbox" name="scientist" value="lovelace"/>
        <label for="lovelace">Ada Lovelace</label>
        <input id="nobel" type="checkbox" name="scientist" value="nobel"/>
        <label for="nobel">Alfred Nobel</label>
        <input id="pasteur" type="checkbox" name="scientist" value="pasteur"/>
        <label for="pasteur">Louis Pasteur</label>
        <input id="tesla" type="checkbox" name="scientist" value="tesla"/>
        <label for="tesla">Nikola Tesla</label>
        </div>
    </fieldset>
</form>
```

### Option #2: Use ARIA to group options

<form class="c-form">
    <div role="group" aria-labelledby="beatle_head">
        <h4 id="beatle_head" class="bold">Who is the best Beatle?</h4>
        <div class="checkbox row">
        <input id="beatle_john" type="checkbox" name="beatle" value="beatle_john"/>
        <label for="beatle_john">John Lennon</label>
        <input id="beatle_paul" type="checkbox" name="beatle" value="beatle_paul"/>
        <label for="beatle_paul">Paul McCartney</label>
        <input id="beatle_george" type="checkbox" name="beatle" value="beatle_george"/>
        <label for="beatle_george">George Harrison</label>
        <input id="beatle_ringo" type="checkbox" name="beatle" value="beatle_ringo"/>
        <label for="beatle_ringo">Ringo Starr</label>
    </div>
</form>

```html
<form class="c-form">
    <div role="group" aria-labelledby="beatle_head">
        <h4 id="beatle_head" class="bold">Who is the best Beatle?</h4>
        <div class="checkbox row">
        <input id="beatle_john" type="checkbox" name="beatle" value="beatle_john"/>
        <label for="beatle_john">John Lennon</label>
        <input id="beatle_paul" type="checkbox" name="beatle" value="beatle_paul"/>
        <label for="beatle_paul">Paul McCartney</label>
        <input id="beatle_george" type="checkbox" name="beatle" value="beatle_george"/>
        <label for="beatle_george">George Harrison</label>
        <input id="beatle_ringo" type="checkbox" name="beatle" value="beatle_ringo"/>
        <label for="beatle_ringo">Ringo Starr</label>
    </div>
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## HEADER

<form class="c-form">
</form>

```html
<form class="c-form">
</form>
```

## TODO

- Add all of the form elements here for testing.
- Add notes about accessibility requirements.

## Found in

Forms are used in the following blocks:

- {%include "link" with {'block': 'Content'} %}
