---
layout: docs
subsite: dev
title: Select
menu: dev
section: Blocks
subsection: Form Blocks
banner:
  breadcrumbs:
    grandparent: Blocks
---

Add information about available form select list components.

## Basic Select List

Add a short description.

<div class="b-form">
  <div class="form__field form__field--select">
      <label for="select_1">Select List Label</label>
      <select id="select_1" name="select_1">
          <option label="Select an Option" disabled selected>Select an Option</option>
          <option label="Option 1.1">Option 1.1</option>
          <option label="Option 1.2">Option 1.2</option>
          <option label="Option 1.3">Option 1.3</option>
      </select>
  </div>
</div>

```html
<div class="form__field form__field--select">
    <label for="select_1">Select List Label</label>
    <select id="select_1" name="select_1">
        <option label="Select an Option" disabled selected>Select an Option</option>
        <option label="Option 1.1">Option 1.1</option>
        <option label="Option 1.2">Option 1.2</option>
        <option label="Option 1.3">Option 1.3</option>
    </select>
</div>
```

## Description Above Input

Add a short description.

<div class="b-form">
  <div class="form__field form__field--select">
      <label for="select_2">Select List Label</label>
      <p class="form__description">This example has the description above the input field</p>
      <select id="select_2" name="select_2">
          <option label="Select an Option" disabled selected>Select an Option</option>
          <option label="Option 2.1">Option 2.1</option>
          <option label="Option 2.2">Option 2.2</option>
          <option label="Option 2.3">Option 2.3</option>
      </select>
  </div>
</div>

```html
<div class="form__field form__field--select">
    <label for="select_2">Select List Label</label>
    <p class="form__description">This example has the description above the input field</p>
    <select id="select_2" name="select_2">
        <option label="Select an Option" disabled selected>Select an Option</option>
        <option label="Option 2.1">Option 2.1</option>
        <option label="Option 2.2">Option 2.2</option>
        <option label="Option 2.3">Option 2.3</option>
    </select>
</div>
```

## Description Below Input

Add a short description.

<div class="b-form">
  <div class="form__field form__field--select">
      <label for="select_3">Select List Label</label>
      <select id="select_3" name="select_3">
          <option label="Select an Option" disabled selected>Select an Option</option>
          <option label="Option 3.1">Option 3.1</option>
          <option label="Option 3.2">Option 3.2</option>
          <option label="Option 3.3">Option 3.3</option>
      </select>
      <p class="form__description">This example has the description above the input field</p>
  </div>
</div>

```html
<div class="form__field form__field--select">
    <label for="select_3">Select List Label</label>
    <select id="select_3" name="select_3">
        <option label="Select an Option" disabled selected>Select an Option</option>
        <option label="Option 3.1">Option 3.1</option>
        <option label="Option 3.2">Option 3.2</option>
        <option label="Option 3.3">Option 3.3</option>
    </select>
    <p class="form__description">This example has the description above the input field</p>
</div>
```

## Missing

The following examples need to be documented

- required