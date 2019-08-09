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
        <input type="radio" name="favorite_pet" value="Cats">Cats<br>
        <input type="radio" name="favorite_pet" value="Dogs">Dogs<br>
        <input type="radio" name="favorite_pet" value="Birds">Birds<br>
        <input type="submit" value="Submit now">
    </fieldset>
</form>

```html
<form class="c-form">
    <fieldset>
        <legend>What is Your Favorite Pet?</legend>
        <input type="radio" name="favorite_pet" value="Cats">Cats<br>
        <input type="radio" name="favorite_pet" value="Dogs">Dogs<br>
        <input type="radio" name="favorite_pet" value="Birds">Birds<br>
        <input type="submit" value="Submit now">
    </fieldset>
</form>
```

## TODO

Add all of the form elements here for testing.

## Found in

Forms are used in the following blocks:

- {%include "link" with {'block': 'Content'} %}
