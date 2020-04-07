---
layout: docs
subsite: dev
title: Text Input
menu: dev
section: Components
subsection: Form Components
banner:
  breadcrumbs:
    grandparent: Components
---

Add information about available form text input components.

## Basic Text Field

<div class="c-form">
  <div class="form__text">
      <label for="text_1">Input Label</label>
      <input id="text_1" type="text" name="text_1">
  </div>
</div>

```html
<div class="form__text">
    <label for="text_1">Input Label</label>
    <input id="text_1" type="text" name="text_1">
</div>
```

## Description Above Input

<div class="c-form">
  <div class="form__text">
      <label for="text_2">Input Label</label>
      <p class="form__description">This example has the description above the input field</p>
      <input id="text_2" type="text" name="text_2">
  </div>
</div>

```html
<div class="form__text">
    <label for="text_2">Text Field with Description</label>
    <p class="form__description">This example has the description above the input field</p>
    <input id="text_2" type="text" name="text_2">
</div>
```

## Description Below Input

<div class="c-form">
  <div class="form__text">
      <label for="text_3">Input Label</label>
      <input id="text_3" type="text" name="text_3">
      <p class="form__description">This example has the description below the input field</p>
  </div>
</div>

```html
<div class="form__text">
    <label for="text_3">Text Field with Description</label>
    <input id="text_3" type="text" name="text_3">
    <p class="form__description">This example has the description below the input field</p>
</div>
```

## Add a Placeholder

<div class="c-form">
  <div class="form__text">
      <label for="text_4">Input Label</label>
      <input id="text_4" type="text" name="text_4" placeholder="This field has a placeholder">
  </div>
</div>

```html
<div class="form__text">
    <label for="text_4">Text Field with Placeholder</label>
    <input id="text_4" type="text" name="text_4" placeholder="This field has a placeholder">
</div>
```

## Read Only Field

<div class="c-form">
  <div class="form__text">
      <label for="text_5">Input Label</label>
      <input id="text_5" type="text" name="text_5" value="This field is read only" readonly>
  </div>
</div>

```html
<div class="form__text">
    <label for="text_5">Input Label</label>
    <input id="text_5" type="text" name="text_5" value="This field is read only" readonly>
</div>
```

## Disabled Text Field

<div class="c-form">
  <div class="form__text">
      <label for="text_6">Input Label</label>
      <input id="text_6" type="text" name="text_6" value="This field is disabled" disabled>
  </div>
</div>

```html
<div class="form__text">
    <label for="text_6">Input Label</label>
    <input id="text_6" type="text" name="text_6" value="This field is disabled" disabled>
</div>
```

## Required Field

<div class="c-form">
  <div class="form__text">
      <label for="text_7">
          Input Label
          <span class="form__required">*</span>
      </label>
      <input id="text_7" type="text" name="text_7" required>
  </div>
</div>

```html
<div class="form__text">
    <label for="text_7">
        Input Label
        <span class="form__required">*</span>
    </label>
    <input id="text_7" type="text" name="text_7" required>
</div>
```

## Validation Successful

<div class="c-form">
  <div class="form__text form__success">
      <label for="text_8">
          Input Label
          <span class="form__required">*</span>
      </label>
      <input id="text_8" type="text" name="text_8" aria-describedby="text_8_success" required>
      <span id="text_8_success" class="form__message">The input above is successful.</span>
  </div>
</div>

```html
<div class="form__text form__success">
    <label for="text_8">
        Input Label
        <span class="form__required">*</span>
    </label>
    <input id="text_8" type="text" name="text_8" aria-describedby="text_8_success" required>
    <span id="text_8_success" class="form__message">The input above is successful.</span>
</div>
```

## Validation Error

<div class="c-form">
  <div class="form__text form__error">
      <label for="text_9">
          Input Label
          <span class="form__required">*</span>
      </label>
      <input id="text_9" type="text" name="text_9" aria-describedby="text_9_error" required>
      <span id="text_9_error" class="form__message">There was an error with the input above.</span>
  </div>
</div>

```html
<div class="form__text form__error">
    <label for="text_9">
        Input Label
        <span class="form__required">*</span>
    </label>
    <input id="text_9" type="text" name="text_9" aria-describedby="text_9_error" required>
    <span id="text_9_error" class="form__message">There was an error with the input above.</span>
</div>
```