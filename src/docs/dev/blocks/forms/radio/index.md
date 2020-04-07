---
layout: docs
subsite: dev
title: Radio
menu: dev
section: Blocks
subsection: Form Blocks
banner:
  breadcrumbs:
    grandparent: Blocks
---

Add information about available form checkbox components.

## Group Items with Fieldset

The following checkbox examples are using aria for grouping options

### Basic Checkbox Field

Add a short description.

<div class="b-form">
  <div class="form__field form__field--radio">
      <fieldset>
          <legend>Basic Radio Buttons</legend>
          <div class="form__group">
              <input id="radio_5a" type="radio" name="radio_group_5" value="radio_5a"/>
              <label for="radio_5a">Radio Item One</label>
              <input id="radio_5b" type="radio" name="radio_group_5" value="radio_5b"/>
              <label for="radio_5b">Radio Item Two</label>
              <input id="radio_5c" type="radio" name="radio_group_5" value="radio_5c"/>
              <label for="radio_5c">Radio Item Three</label>
          </div>
      </fieldset>
  </div>
</div>

```html
<div class="form__field form__field--radio">
    <fieldset>
        <legend>Basic Radio Buttons</legend>
        <div class="form__group">
            <input id="radio_5a" type="radio" name="radio_group_5" value="radio_5a"/>
            <label for="radio_5a">Radio Item One</label>
            <input id="radio_5b" type="radio" name="radio_group_5" value="radio_5b"/>
            <label for="radio_5b">Radio Item Two</label>
            <input id="radio_5c" type="radio" name="radio_group_5" value="radio_5c"/>
            <label for="radio_5c">Radio Item Three</label>
        </div>
    </fieldset>
</div>
```

### Description Above Input

Add a short description.

<div class="b-form">
  <div class="form__field form__field--radio">
      <fieldset>
          <legend>Radio Buttons with Description</legend>
          <p class="form__description">This example has the description above the input field</p>
          <div class="form__group">
              <input id="radio_6a" type="radio" name="radio_group_6" value="radio_6a"/>
              <label for="radio_6a">Radio Item One</label>
              <input id="radio_6b" type="radio" name="radio_group_6" value="radio_6b"/>
              <label for="radio_6b">Radio Item Two</label>
              <input id="radio_6c" type="radio" name="radio_group_6" value="radio_6c"/>
              <label for="radio_6c">Radio Item Three</label>
          </div>
      </fieldset>
  </div>
</div>

```html
<div class="form__field form__field--radio">
    <fieldset>
        <legend>Radio Buttons with Description</legend>
        <p class="form__description">This example has the description above the input field</p>
        <div class="form__group">
            <input id="radio_6a" type="radio" name="radio_group_6" value="radio_6a"/>
            <label for="radio_6a">Radio Item One</label>
            <input id="radio_6b" type="radio" name="radio_group_6" value="radio_6b"/>
            <label for="radio_6b">Radio Item Two</label>
            <input id="radio_6c" type="radio" name="radio_group_6" value="radio_6c"/>
            <label for="radio_6c">Radio Item Three</label>
        </div>
    </fieldset>
</div>
```

### Description Below Input

Add a short description.

<div class="b-form">
  <div class="form__field form__field--radio">
      <fieldset>
          <legend>Radio Buttons with Description</legend>
          <div class="form__group">
              <input id="radio_7a" type="radio" name="radio_group_7" value="radio_7a"/>
              <label for="radio_7a">Radio Item One</label>
              <input id="radio_7b" type="radio" name="radio_group_7" value="radio_7b"/>
              <label for="radio_7b">Radio Item Two</label>
              <input id="radio_7c" type="radio" name="radio_group_7" value="radio_7c"/>
              <label for="radio_7c">Radio Item Three</label>
          </div>
          <p class="form__description">This example has the description below the input field</p>
      </fieldset>
  </div>
</div>

```html
<div class="form__field form__field--radio">
    <fieldset>
        <legend>Radio Buttons with Description</legend>
        <div class="form__group">
            <input id="radio_7a" type="radio" name="radio_group_7" value="radio_7a"/>
            <label for="radio_7a">Radio Item One</label>
            <input id="radio_7b" type="radio" name="radio_group_7" value="radio_7b"/>
            <label for="radio_7b">Radio Item Two</label>
            <input id="radio_7c" type="radio" name="radio_group_7" value="radio_7c"/>
            <label for="radio_7c">Radio Item Three</label>
        </div>
        <p class="form__description">This example has the description below the input field</p>
    </fieldset>
</div>
```

## Group Items with ARIA

The following checkbox examples are using fieldset for grouping options

### Basic Checkbox Field

Add a short description.

<div class="b-form">
  <div class="form__field form__field--radio">
      <div role="group" aria-labelledby="radio_1">
          <p id="radio_1" class="form__heading">Basic Radio Field</p>
          <div class="form__group">
              <input id="radio_1a" type="radio" name="radio_group_1" value="radio_1a"/>
              <label for="radio_1a">Radio Item One</label>
              <input id="radio_1b" type="radio" name="radio_group_1" value="radio_1b"/>
              <label for="radio_1b">Radio Item Two</label>
              <input id="radio_1c" type="radio" name="radio_group_1" value="radio_1c"/>
              <label for="radio_1c">Radio Item Three</label>
          </div>
      </div>
  </div>
</div>

```html
<div class="form__field form__field--radio">
    <div role="group" aria-labelledby="radio_1">
        <p id="radio_1" class="form__heading">Basic Radio Field</p>
        <div class="form__group">
            <input id="radio_1a" type="radio" name="radio_group_1" value="radio_1a"/>
            <label for="radio_1a">Radio Item One</label>
            <input id="radio_1b" type="radio" name="radio_group_1" value="radio_1b"/>
            <label for="radio_1b">Radio Item Two</label>
            <input id="radio_1c" type="radio" name="radio_group_1" value="radio_1c"/>
            <label for="radio_1c">Radio Item Three</label>
        </div>
    </div>
</div>
```

### Description Above Input

Add a short description.

<div class="b-form">
  <div class="form__field form__field--radio">
      <div role="group" aria-labelledby="radio_2">
          <p id="radio_2" class="form__heading">Checkbox Field with Description</p>
          <p class="form__description">This example has the description above the input field</p>
          <div class="form__group">
              <input id="radio_2a" type="radio" name="radio_group_2" value="radio_2a"/>
              <label for="radio_2a">Radio Item One</label>
              <input id="radio_2b" type="radio" name="radio_group_2" value="radio_2b"/>
              <label for="radio_2b">Radio Item Two</label>
              <input id="radio_2c" type="radio" name="radio_group_2" value="radio_2c"/>
              <label for="radio_2c">Radio Item Three</label>
          </div>
      </div>
  </div>
</div>

```html
<div class="form__field form__field--radio">
    <div role="group" aria-labelledby="radio_2">
        <p id="radio_2" class="form__heading">Checkbox Field with Description</p>
        <p class="form__description">This example has the description above the input field</p>
        <div class="form__group">
            <input id="radio_2a" type="radio" name="radio_group_2" value="radio_2a"/>
            <label for="radio_2a">Radio Item One</label>
            <input id="radio_2b" type="radio" name="radio_group_2" value="radio_2b"/>
            <label for="radio_2b">Radio Item Two</label>
            <input id="radio_2c" type="radio" name="radio_group_2" value="radio_2c"/>
            <label for="radio_2c">Radio Item Three</label>
        </div>
    </div>
</div>
```

### Description Below Input

Add a short description.

<div class="b-form">
<div class="form__field form__field--radio">
    <div role="group" aria-labelledby="radio_3">
        <p id="radio_3" class="form__heading">Checkbox Field with Description</p>
        <div class="form__group">
            <input id="radio_3a" type="radio" name="radio_group_3" value="radio_3a"/>
            <label for="radio_3a">Radio Item One</label>
            <input id="radio_3b" type="radio" name="radio_group_3" value="radio_3b"/>
            <label for="radio_3b">Radio Item Two</label>
            <input id="radio_3c" type="radio" name="radio_group_3" value="radio_3c"/>
            <label for="radio_3c">Radio Item Three</label>
        </div>
        <p class="form__description">This example has the description below the input field</p>
    </div>
</div>
</div>

```html
<div class="form__field form__field--radio">
    <div role="group" aria-labelledby="radio_3">
        <p id="radio_3" class="form__heading">Checkbox Field with Description</p>
        <div class="form__group">
            <input id="radio_3a" type="radio" name="radio_group_3" value="radio_3a"/>
            <label for="radio_3a">Radio Item One</label>
            <input id="radio_3b" type="radio" name="radio_group_3" value="radio_3b"/>
            <label for="radio_3b">Radio Item Two</label>
            <input id="radio_3c" type="radio" name="radio_group_3" value="radio_3c"/>
            <label for="radio_3c">Radio Item Three</label>
        </div>
        <p class="form__description">This example has the description below the input field</p>
    </div>
</div>
```

## Missing

The following examples need to be documented for both cases

- required