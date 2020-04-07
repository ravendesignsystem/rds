---
layout: docs
subsite: dev
title: Form
menu: dev
section: Components
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
    <label for="success">Success Message</label>
    <input id="success" type="text" name="textfield" aria-describedby="success-text" aria-invalid="false">
    <span id="success-text">The input above is successful.</span>
    <label for="error">Error Message</label>
    <input id="error" type="text" name="textfield" aria-describedby="error-text" aria-invalid="true">
    <span id="error-text">There was an error with the input above.</span>
    <label for="read-only">Read Only</label>
    <input id="read-only" type="text" name="textfield" value="This field is read only" readonly>
    <label for="disabled">Disabled</label>
    <input id="disabled" type="text" name="textfield" value="This field is disabled" disabled>
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
    
    <label for="success">Success Message</label>
    <input id="success" type="text" name="textfield" aria-describedby="success-text" aria-invalid="false">
    <span id="success-text">The input above is successful.</span>
    
    <label for="error">Error Message</label>
    <input id="error" type="text" name="textfield" aria-describedby="error-text" aria-invalid="true">
    <span id="error-text">There was an error with the input above.</span>
    
    <label for="read-only">Read Only</label>
    <input id="read-only" type="text" name="textfield" value="This field is read only" readonly>
    
    <label for="disabled">Disabled</label>
    <input id="disabled" type="text" name="textfield" value="This field is disabled" disabled>
    
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

## Radio Buttons

### Option #1: Grouping with fieldsets

<form class="c-form">
    <fieldset>
        <legend>What is the best time of day?</legend>
        <div class="radio row">
        <input type="radio" name="day" id="morning" value="morning"/>
        <label for="morning">Morning</label>
        <input type="radio" name="day" id="night" value="night"/>
        <label for="night">Night</label>
        <input type="radio" name="day" id="coffee" value="coffee"/>
        <label for="coffee">Any time I'm drinking coffee</label>
        </div>
    </fieldset>
</form>

```html
<form class="c-form">
    <fieldset>
        <legend>What is the best time of day?</legend>
        <div class="radio row">
        <input type="radio" name="day" id="morning" value="morning"/>
        <label for="morning">Morning</label>
        <input type="radio" name="day" id="night" value="night"/>
        <label for="night">Night</label>
        <input type="radio" name="day" id="coffee" value="coffee"/>
        <label for="coffee">Any time I'm drinking coffee</label>
        </div>
    </fieldset>
</form>
```

### Option #2: Use ARIA to group options

<form class="c-form">
    <div role="group" aria-labelledby="zeppelin_head">
        <h4 id="zeppelin_head" class="bold">Who is the best member of Led Zeppelin?</h4>
        <div class="radio column">
        <input id="zeppelin_jimmy" type="radio" name="zeppelin" value="zeppelin_jimmy"/>
        <label for="zeppelin_jimmy">Jimmy Page</label>
        <input id="zeppelin_john_paul" type="radio" name="zeppelin" value="zeppelin_john_paul"/>
        <label for="zeppelin_john_paul">John Paul Jones</label>
        <input id="zeppelin_robert" type="radio" name="zeppelin" value="zeppelin_robert"/>
        <label for="zeppelin_robert">Robert Plant</label>
        <input id="zeppelin_john" type="radio" name="zeppelin" value="zeppelin_john"/>
        <label for="zeppelin_john">John Bonham</label>
        </div>
    </div>
</form>

```html
<form class="c-form">
    <div role="group" aria-labelledby="zeppelin_head">
        <h4 id="zeppelin_head" class="bold">Who is the best member of Led Zeppelin?</h4>
        <div class="radio column">
        <input id="zeppelin_jimmy" type="radio" name="zeppelin" value="zeppelin_jimmy"/>
        <label for="zeppelin_jimmy">Jimmy Page</label>
        <input id="zeppelin_john_paul" type="radio" name="zeppelin" value="zeppelin_john_paul"/>
        <label for="zeppelin_john_paul">John Paul Jones</label>
        <input id="zeppelin_robert" type="radio" name="zeppelin" value="zeppelin_robert"/>
        <label for="zeppelin_robert">Robert Plant</label>
        <input id="zeppelin_john" type="radio" name="zeppelin" value="zeppelin_john"/>
        <label for="zeppelin_john">John Bonham</label>
        </div>
    </div>
</form>
```

## Select Lists

### Option #1: Select with no grouping

<form class="c-form">
    <div class="select">
        <label for="section1" class="u-visually-hidden">Label for section 1</label>
        <select id="section1" name="section1">
        <option label="First select" value="1.0" disabled selected>First select</option>
        <option label="Option 1.1" value="1.1">Option 1.1</option>
        <option label="Option 1.2" value="1.2">Option 1.2</option>
        </select>
        <div class="select__arrow"></div>
    </div>
    <div class="select">
        <label for="section2" class="u-visually-hidden">Label for section 2</label>
        <select id="section2" name="section2">
        <option label="Second select" value="2.0" disabled selected>Second select</option>
        <option label="Option 2.1" value="2.1">Option 2.1</option>
        <option label="Option 2.2" value="2.2">Option 2.2</option>
        </select>
        <div class="select__arrow"></div>
    </div>
</form>

```html
<form class="c-form">
    <div class="select">
        <label for="section1" class="u-visually-hidden">Label for section 1</label>
        <select id="section1" name="section1">
        <option label="First select" value="1.0" disabled selected>First select</option>
        <option label="Option 1.1" value="1.1">Option 1.1</option>
        <option label="Option 1.2" value="1.2">Option 1.2</option>
        </select>
        <div class="select__arrow"></div>
    </div>
    <div class="select">
        <label for="section2" class="u-visually-hidden">Label for section 2</label>
        <select id="section2" name="section2">
        <option label="Second select" value="2.0" disabled selected>Second select</option>
        <option label="Option 2.1" value="2.1">Option 2.1</option>
        <option label="Option 2.2" value="2.2">Option 2.2</option>
        </select>
        <div class="select__arrow"></div>
    </div>
</form>
```

### Option #2: Select with grouping

<form class="c-form">
    <div class="select">
        <label for="lecture" class="u-visually-hidden">Choose a Lecture</label>
        <select id="lecture" name="lecture">
        <option label="Choose a Lecture" disabled selected>Choose a Lecture</option>
        <optgroup label="1.0 The History of the World: Part I">
            <option label="Lecture 1.1" value="1.1">Lecture 1.1: In the Beginning</option>
            <option label="Lecture 1.2" value="1.2">Lecture 1.2: Stuck in the Middle</option>
            <option label="Lecture 1.3" value="1.3">Lecture 1.3: At the End</option>
        </optgroup>
        <optgroup label="2.0 The History of the World: Part II">
            <option label="Lecture 2.2" value="2.1">Lecture 2.1: Wait! There's More</option>
        </optgroup>
        </select>
        <div class="select__arrow"></div>
    </div>
</form>

```html
<form class="c-form">
    <div class="select">
        <label for="lecture" class="u-visually-hidden">Choose a Lecture</label>
        <select id="lecture" name="lecture">
        <option label="Choose a Lecture" disabled selected>Choose a Lecture</option>
        <optgroup label="1.0 The History of the World: Part I">
            <option label="Lecture 1.1" value="1.1">Lecture 1.1: In the Beginning</option>
            <option label="Lecture 1.2" value="1.2">Lecture 1.2: Stuck in the Middle</option>
            <option label="Lecture 1.3" value="1.3">Lecture 1.3: At the End</option>
        </optgroup>
        <optgroup label="2.0 The History of the World: Part II">
            <option label="Lecture 2.2" value="2.1">Lecture 2.1: Wait! There's More</option>
        </optgroup>
        </select>
        <div class="select__arrow"></div>
    </div>
</form>
```

## References

- [A11Y Style Guide for Forms](https://a11y-style-guide.com/style-guide/section-forms.html)

## TODO

- Add all of the form elements here for testing.
- Add notes about accessibility requirements.

## Found in

Forms are used in the following blocks:

- {%include "link" with {'block': 'Content'} %}
