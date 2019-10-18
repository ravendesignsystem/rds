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

<form class="c-form">
    <fieldset>
        <legend>What is Your Favorite Pet?</legend>
        <label for="cats">Cats</label>
        <input type="radio" name="favorite_pet" id="cats" value="Cats">Cats<br>
        <label for="dogs">Dogs</label>
        <input type="radio" name="favorite_pet" id="dogs" value="Dogs">Dogs<br>
        <label for="birds">Birds</label>
        <input type="radio" name="favorite_pet" id="birds" value="Birds">Birds<br>
        <input type="submit" value="Submit now">
    </fieldset>
</form>

```html
<form class="c-form">
    <fieldset>
        <legend>What is Your Favorite Pet?</legend>
        <label for="cats">Cats</label>
        <input type="radio" name="favorite_pet" id="cats" value="Cats">Cats<br>
        <label for="dogs">Dogs</label>
        <input type="radio" name="favorite_pet" id="dogs" value="Dogs">Dogs<br>
        <label for="birds">Birds</label>
        <input type="radio" name="favorite_pet" id="birds" value="Birds">Birds<br>
        <input type="submit" value="Submit now">
    </fieldset>
</form>
```

## TODO

- Add all of the form elements here for testing.
- Add notes about accessibility requirements.

## Found in

Forms are used in the following blocks:

- {%include "link" with {'block': 'Content'} %}
