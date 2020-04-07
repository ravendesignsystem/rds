---
layout: docs
subsite: dev
title: Checkbox
menu: dev
section: Components
subsection: Form Components
banner:
  breadcrumbs:
    grandparent: Components
---

Add information about available form checkbox components.

## Group Items with Fieldset

The following checkbox examples are using aria for grouping options

### Basic Checkbox Field

Add a short description.

<div class="c-form">
  <div class="form__checkbox">
      <fieldset>
          <legend>Checkbox Label</legend>
          <div class="form__group">
              <input id="checkbox_5a" type="checkbox" name="checkbox_group_5" value="checkbox_5a"/>
              <label for="checkbox_5a">Checkbox Item One</label>
              <input id="checkbox_5b" type="checkbox" name="checkbox_group_5" value="checkbox_5b"/>
              <label for="checkbox_5b">Checkbox Item Two</label>
              <input id="checkbox_5c" type="checkbox" name="checkbox_group_5" value="checkbox_5c"/>
              <label for="checkbox_5c">Checkbox Item Three</label>
          </div>
      </fieldset>
  </div>
</div>

```html
<div class="form__checkbox">
    <fieldset>
        <legend>Checkbox Label</legend>
        <div class="form__group">
            <input id="checkbox_5a" type="checkbox" name="checkbox_group_5" value="checkbox_5a"/>
            <label for="checkbox_5a">Checkbox Item One</label>
            <input id="checkbox_5b" type="checkbox" name="checkbox_group_5" value="checkbox_5b"/>
            <label for="checkbox_5b">Checkbox Item Two</label>
            <input id="checkbox_5c" type="checkbox" name="checkbox_group_5" value="checkbox_5c"/>
            <label for="checkbox_5c">Checkbox Item Three</label>
        </div>
    </fieldset>
</div>
```

### Description Above Input

Add a short description.

<div class="c-form">
  <div class="form__checkbox">
      <fieldset>
          <legend>Checkbox Label</legend>
          <p class="form__description">This example has the description above the input field</p>
          <div class="form__group">
              <input id="checkbox_6a" type="checkbox" name="checkbox_group_6" value="checkbox_6a"/>
              <label for="checkbox_6a">Checkbox Item One</label>
              <input id="checkbox_6b" type="checkbox" name="checkbox_group_6" value="checkbox_6b"/>
              <label for="checkbox_6b">Checkbox Item Two</label>
              <input id="checkbox_6c" type="checkbox" name="checkbox_group_6" value="checkbox_6c"/>
              <label for="checkbox_6c">Checkbox Item Three</label>
          </div>
      </fieldset>
  </div>
</div>

```html
<div class="form__checkbox">
    <fieldset>
        <legend>Checkbox Label</legend>
        <p class="form__description">This example has the description above the input field</p>
        <div class="form__group">
            <input id="checkbox_6a" type="checkbox" name="checkbox_group_6" value="checkbox_6a"/>
            <label for="checkbox_6a">Checkbox Item One</label>
            <input id="checkbox_6b" type="checkbox" name="checkbox_group_6" value="checkbox_6b"/>
            <label for="checkbox_6b">Checkbox Item Two</label>
            <input id="checkbox_6c" type="checkbox" name="checkbox_group_6" value="checkbox_6c"/>
            <label for="checkbox_6c">Checkbox Item Three</label>
        </div>
    </fieldset>
</div>
```

### Description Below Input

Add a short description.

<div class="c-form">
  <div class="form__checkbox">
      <fieldset>
          <legend>Checkbox Label</legend>
          <div class="form__group">
              <input id="checkbox_7a" type="checkbox" name="checkbox_group_7" value="checkbox_7a"/>
              <label for="checkbox_7a">Checkbox Item One</label>
              <input id="checkbox_7b" type="checkbox" name="checkbox_group_7" value="checkbox_7b"/>
              <label for="checkbox_7b">Checkbox Item Two</label>
              <input id="checkbox_7c" type="checkbox" name="checkbox_group_7" value="checkbox_7c"/>
              <label for="checkbox_7c">Checkbox Item Three</label>
          </div>
          <p class="form__description">This example has the description below the input field</p>
      </fieldset>
  </div>
</div>

```html
<div class="form__checkbox">
    <fieldset>
        <legend>Checkbox Label</legend>
        <div class="form__group">
            <input id="checkbox_7a" type="checkbox" name="checkbox_group_7" value="checkbox_7a"/>
            <label for="checkbox_7a">Checkbox Item One</label>
            <input id="checkbox_7b" type="checkbox" name="checkbox_group_7" value="checkbox_7b"/>
            <label for="checkbox_7b">Checkbox Item Two</label>
            <input id="checkbox_7c" type="checkbox" name="checkbox_group_7" value="checkbox_7c"/>
            <label for="checkbox_7c">Checkbox Item Three</label>
        </div>
        <p class="form__description">This example has the description below the input field</p>
    </fieldset>
</div>
```

## Group Items with ARIA

The following checkbox examples are using fieldset for grouping options

### Basic Checkbox Field

Add a short description.

<div class="c-form">
    <div class="form__checkbox">
        <div role="group" aria-labelledby="checkbox_1">
            <p id="checkbox_1" class="form__heading">Basic Checkbox Field</p>
            <div class="form__group">
                <input id="checkbox_1a" type="checkbox" name="checkbox_group_1" value="checkbox_1a"/>
                <label for="checkbox_1a">Checkbox Item One</label>
                <input id="checkbox_1b" type="checkbox" name="checkbox_group_1" value="checkbox_1b"/>
                <label for="checkbox_1b">Checkbox Item Two</label>
                <input id="checkbox_1c" type="checkbox" name="checkbox_group_1" value="checkbox_1c"/>
                <label for="checkbox_1c">Checkbox Item Three</label>
            </div>
        </div>
    </div>
</div>

```html
<div class="form__checkbox">
    <div role="group" aria-labelledby="checkbox_1">
        <p id="checkbox_1" class="form__heading">Basic Checkbox Field</p>
        <div class="form__group">
            <input id="checkbox_1a" type="checkbox" name="checkbox_group_1" value="checkbox_1a"/>
            <label for="checkbox_1a">Checkbox Item One</label>
            <input id="checkbox_1b" type="checkbox" name="checkbox_group_1" value="checkbox_1b"/>
            <label for="checkbox_1b">Checkbox Item Two</label>
            <input id="checkbox_1c" type="checkbox" name="checkbox_group_1" value="checkbox_1c"/>
            <label for="checkbox_1c">Checkbox Item Three</label>
        </div>
    </div>
</div>
```

### Description Above Input

Add a short description.

<div class="c-form">
    <div class="form__checkbox">
        <div role="group" aria-labelledby="checkbox_2">
            <p id="checkbox_2" class="form__heading">Checkbox Field with Description</p>
            <p class="form__description">This example has the description above the input field</p>
            <div class="form__group">
                <input id="checkbox_2a" type="checkbox" name="checkbox_group_2" value="checkbox_2a"/>
                <label for="checkbox_2a">Checkbox Item One</label>
                <input id="checkbox_2b" type="checkbox" name="checkbox_group_2" value="checkbox_2b"/>
                <label for="checkbox_2b">Checkbox Item Two</label>
                <input id="checkbox_2c" type="checkbox" name="checkbox_group_2" value="checkbox_2c"/>
                <label for="checkbox_2c">Checkbox Item Three</label>
            </div>
        </div>
    </div>
</div>

```html
<div class="form__checkbox">
    <div role="group" aria-labelledby="checkbox_2">
        <p id="checkbox_2" class="form__heading">Checkbox Field with Description</p>
        <p class="form__description">This example has the description above the input field</p>
        <div class="form__group">
            <input id="checkbox_2a" type="checkbox" name="checkbox_group_2" value="checkbox_2a"/>
            <label for="checkbox_2a">Checkbox Item One</label>
            <input id="checkbox_2b" type="checkbox" name="checkbox_group_2" value="checkbox_2b"/>
            <label for="checkbox_2b">Checkbox Item Two</label>
            <input id="checkbox_2c" type="checkbox" name="checkbox_group_2" value="checkbox_2c"/>
            <label for="checkbox_2c">Checkbox Item Three</label>
        </div>
    </div>
</div>
```

### Description Below Input

Add a short description.

<div class="c-form">
    <div class="form__checkbox">
        <div role="group" aria-labelledby="checkbox_3">
            <p id="checkbox_3" class="form__heading">Checkbox Field with Description</p>
            <div class="form__group">
                <input id="checkbox_3a" type="checkbox" name="checkbox_group_3" value="checkbox_3a"/>
                <label for="checkbox_3a">Checkbox Item One</label>
                <input id="checkbox_3b" type="checkbox" name="checkbox_group_3" value="checkbox_3b"/>
                <label for="checkbox_3b">Checkbox Item Two</label>
                <input id="checkbox_3c" type="checkbox" name="checkbox_group_3" value="checkbox_3c"/>
                <label for="checkbox_3c">Checkbox Item Three</label>
            </div>
            <p class="form__description">This example has the description below the input field</p>
        </div>
    </div>
</div>

```html
<div class="form__checkbox">
    <div role="group" aria-labelledby="checkbox_3">
        <p id="checkbox_3" class="form__heading">Checkbox Field with Description</p>
        <div class="form__group">
            <input id="checkbox_3a" type="checkbox" name="checkbox_group_3" value="checkbox_3a"/>
            <label for="checkbox_3a">Checkbox Item One</label>
            <input id="checkbox_3b" type="checkbox" name="checkbox_group_3" value="checkbox_3b"/>
            <label for="checkbox_3b">Checkbox Item Two</label>
            <input id="checkbox_3c" type="checkbox" name="checkbox_group_3" value="checkbox_3c"/>
            <label for="checkbox_3c">Checkbox Item Three</label>
        </div>
        <p class="form__description">This example has the description below the input field</p>
    </div>
</div>
```