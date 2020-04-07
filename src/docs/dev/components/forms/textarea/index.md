---
layout: docs
subsite: dev
title: Text Area
menu: dev
section: Components
subsection: Form Components
banner:
  breadcrumbs:
    grandparent: Components
---

Add information about available form text area components.

## Basic Text Area

Add a short description.

<div class="c-form">
  <div class="form__textarea">
      <label for="textarea_1">Text Area Label</label>
      <textarea id="textarea_1" name="textarea_1"></textarea>
  </div>
</div>

```html
<div class="form__textarea">
    <label for="textarea_1">Text Area Label</label>
    <textarea id="textarea_1" name="textarea_1"></textarea>
</div>
```

## Set Height with Rows

Add a short description.

<div class="c-form">
  <div class="form__textarea">
      <label for="textarea_2">Text Area Label</label>
      <textarea id="textarea_2" name="textarea_2" rows="8"></textarea>
  </div>
</div>

```html
<div class="form__textarea">
    <label for="textarea_2">Text Area Label</label>
    <textarea id="textarea_2" name="textarea_2" rows="8"></textarea>
</div>
```

## Description Above Input

Add a short description.

<div class="c-form">
  <div class="form__textarea">
      <label for="textarea_3">Text Area Label</label>
      <p class="form__description">This example has the description above the input field</p>
      <textarea id="textarea_3" name="textarea_3"></textarea>
  </div>
</div>

```html
<div class="form__textarea">
    <label for="textarea_3">Text Area Label</label>
    <p class="form__description">This example has the description above the input field</p>
    <textarea id="textarea_3" name="textarea_3"></textarea>
</div>
```

## Description Below Input

Add a short description.

<div class="c-form">
  <div class="form__textarea">
      <label for="textarea_4">Text Area Label</label>
      <textarea id="textarea_4" name="textarea_4"></textarea>
      <p class="form__description">This example has the description below the input field</p>
  </div>
</div>

```html
<div class="form__textarea">
    <label for="textarea_4">Text Area Label</label>
    <textarea id="textarea_4" name="textarea_4"></textarea>
    <p class="form__description">This example has the description below the input field</p>
</div>
```

## Add a Placeholder

Add a short description.

<div class="c-form">
  <div class="form__textarea">
      <label for="textarea_5">Text Area Label</label>
      <textarea id="textarea_5" name="textarea_5" placeholder="This field has a placeholder"></textarea>
  </div>
</div>

```html
<div class="form__textarea">
    <label for="textarea_5">Text Area Label</label>
    <textarea id="textarea_5" name="textarea_5" placeholder="This field has a placeholder"></textarea>
</div>
```

## Read Only Field

Add a short description.

<div class="c-form">
  <div class="form__textarea">
      <label for="textarea_6">Text Area Label</label>
      <textarea id="textarea_6" name="textarea_6" readonly>This field is read only</textarea>
  </div>
</div>

```html
<div class="form__textarea">
    <label for="textarea_6">Text Area Label</label>
    <textarea id="textarea_6" name="textarea_6" readonly>This field is read only</textarea>
</div>
```

## Disabled Field

Add a short description.

<div class="c-form">
  <div class="form__textarea">
      <label for="textarea_7">Text Area Label</label>
      <textarea id="textarea_7" name="textarea_7" disabled>This field is disabled</textarea>
  </div>
</div>

```html
<div class="form__textarea">
    <label for="textarea_7">Text Area Label</label>
    <textarea id="textarea_7" name="textarea_7" disabled>This field is disabled</textarea>
</div>
```

## Required Field

Add a short description.

<div class="c-form">
  <div class="form__textarea">
      <label for="textarea_8">
          Text Area Label
          <span class="form__required">*</span>
       </label>
      <textarea id="textarea_8" name="textarea_8" required></textarea>
  </div>
</div>

```html
<div class="form__textarea">
    <label for="textarea_8">
        Text Area Label
        <span class="form__required">*</span>
     </label>
    <textarea id="textarea_8" name="textarea_8" required></textarea>
</div>
```

## Validation Successful

Add a short description.

<div class="c-form">
  <div class="form__textarea form__success">
      <label for="textarea_9">
          Text Area Label
          <span class="form__required">*</span>
      </label>
      <textarea id="textarea_9" name="textarea_9" aria-describedby="text_9_success" aria-invalid="false" required></textarea>
      <span id="text_9_success" class="form__message">The input above is successful.</span>
  </div>
</div>

```html
<div class="form__textarea form__success">
    <label for="textarea_9">
        Text Area Label
        <span class="form__required">*</span>
     </label>
    <textarea id="textarea_9" name="textarea_9" aria-describedby="text_9_success" aria-invalid="false" required></textarea>
    <span id="text_9_success" class="form__message">The input above is successful.</span>
</div>
```

## Validation Error

Add a short description.

<div class="c-form">
  <div class="form__textarea form__error">
      <label for="textarea_10">
          Text Area Label
          <span class="form__required">*</span>
      </label>
      <textarea id="textarea_10" name="textarea_10" aria-describedby="text_10_error" aria-invalid="false" required></textarea>
      <span id="text_10_error" class="form__message">The input above is successful.</span>
  </div>
</div>

```html
<div class="form__textarea form__error">
    <label for="textarea_10">
        Text Area Label
        <span class="form__required">*</span>
    </label>
    <textarea id="textarea_10" name="textarea_10" aria-describedby="text_10_error" aria-invalid="false" required></textarea>
    <span id="text_10_error" class="form__message">The input above is successful.</span>
</div>
```