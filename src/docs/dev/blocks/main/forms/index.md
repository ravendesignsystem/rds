---
layout: docs
subsite: dev
title: Form
menu: dev
section: Blocks
banner:
  breadcrumbs:
    grandparent: Blocks
---

Add some introductory information.

## Overview

All form fields are required to be wrapped with a form tag with a class of `b-form`.

```html
<form class="b-form" action="">
  {include form fields}
</form>
```

## Basic Inputs

Add description for:

- field types and their purposes (eg: email, url, etc)

Add live example

```html
Add code example
```

### Input Types

The following types are available to be used in a basic input, simple update `type="text"` to one of the following items:

- **text:** add description
- **email:** add description
- **number:** add description
- **tel:** add description
- **url:** add description

## Text Area

Add information about textarea.

Add live example

```html
Add code example
```

## Checkboxes

Each item in a checkbox requires an input and a label, and are linked together by matching their `for` and `id` attributes. All `name` attributes in a checkbox group are required to be the same, but unique per group in a form. The `value` for each item should relate to the label content. The `form description` is optional, while all other markup is required.

<div class="b-form">
  <div class="form__field form__field--checkbox">
      <fieldset>
          <legend>What faculty are you a part of?</legend>
          <p class="form__description">Please select all options that apply.</p>
          <div class="form__group">
              <input id="fass" type="checkbox" name="checkbox_name" value="fass"/>
              <label for="fass">Faculty of Arts and Social Sciences</label>
              <input id="fed" type="checkbox" name="checkbox_name" value="fed"/>
              <label for="fed">Faculty of Engineering and Design</label>
              <input id="fgpa" type="checkbox" name="checkbox_name" value="fgpa"/>
              <label for="fgpa">Faculty of Graduate and Postdoctoral Affairs</label>
              <input id="fpa" type="checkbox" name="checkbox_name" value="fpa"/>
              <label for="fpa">Faculty of Public Affairs</label>
              <input id="fs" type="checkbox" name="checkbox_name" value="fs"/>
              <label for="fs">Faculty of Science</label>
              <input id="ssb" type="checkbox" name="checkbox_name" value="ssb"/>
              <label for="ssb">Sprott School of Business</label>
          </div>
      </fieldset>
  </div>
</div>

```html
<div class="form__field form__field--checkbox">
    <fieldset>
        <legend>What faculty are you a part of?</legend>
        <p class="form__description">Please select all options that apply.</p>
        <div class="form__group">
            <input id="fass" type="checkbox" name="checkbox_name" value="fass"/>
            <label for="fass">Faculty of Arts and Social Sciences</label>
            <input id="fed" type="checkbox" name="checkbox_name" value="fed"/>
            <label for="fed">Faculty of Engineering and Design</label>
            <input id="fgpa" type="checkbox" name="checkbox_name" value="fgpa"/>
            <label for="fgpa">Faculty of Graduate and Postdoctoral Affairs</label>
            <input id="fpa" type="checkbox" name="checkbox_name" value="fpa"/>
            <label for="fpa">Faculty of Public Affairs</label>
            <input id="fs" type="checkbox" name="checkbox_name" value="fs"/>
            <label for="fs">Faculty of Science</label>
            <input id="ssb" type="checkbox" name="checkbox_name" value="ssb"/>
            <label for="ssb">Sprott School of Business</label>
        </div>
    </fieldset>
</div>
```

## Radio Buttons

Each item in a radio requires an input and a label, and are linked together by matching their `for` and `id` attributes. All `name` attributes in a radio group are required to be the same, but unique per group in a form. The `value` for each item should relate to the label content. The `form description` is optional, while all other markup is required.

<div class="b-form">
  <div class="form__field form__field--radio">
      <fieldset>
          <legend>What faculty are you a part of?</legend>
          <p class="form__description">Please select an option below.</p>
          <div class="form__group">
              <input id="fass" type="radio" name="radio_name" value="fass"/>
              <label for="fass">Faculty of Arts and Social Sciences</label>
              <input id="fed" type="radio" name="radio_name" value="fed"/>
              <label for="fed">Faculty of Engineering and Design</label>
              <input id="fgpa" type="radio" name="radio_name" value="fgpa"/>
              <label for="fgpa">Faculty of Graduate and Postdoctoral Affairs</label>
              <input id="fpa" type="radio" name="radio_name" value="fpa"/>
              <label for="fpa">Faculty of Public Affairs</label>
              <input id="fs" type="radio" name="radio_name" value="fs"/>
              <label for="fs">Faculty of Science</label>
              <input id="ssb" type="radio" name="radio_name" value="ssb"/>
              <label for="ssb">Sprott School of Business</label>
          </div>
      </fieldset>
  </div>
</div>

```html
<div class="form__field form__field--radio">
    <fieldset>
        <legend>What faculty are you a part of?</legend>
        <p class="form__description">Please select an option below.</p>
        <div class="form__group">
            <input id="fass" type="radio" name="radio_name" value="fass"/>
            <label for="fass">Faculty of Arts and Social Sciences</label>
            <input id="fed" type="radio" name="radio_name" value="fed"/>
            <label for="fed">Faculty of Engineering and Design</label>
            <input id="fgpa" type="radio" name="radio_name" value="fgpa"/>
            <label for="fgpa">Faculty of Graduate and Postdoctoral Affairs</label>
            <input id="fpa" type="radio" name="radio_name" value="fpa"/>
            <label for="fpa">Faculty of Public Affairs</label>
            <input id="fs" type="radio" name="radio_name" value="fs"/>
            <label for="fs">Faculty of Science</label>
            <input id="ssb" type="radio" name="radio_name" value="ssb"/>
            <label for="ssb">Sprott School of Business</label>
        </div>
    </fieldset>
</div>
```

## Select Lists

A select list requires the the `for` and `id` attributes on the label and select tag match. The `for`, `id`, and `name` attributes are required to be unique for each select list used in a form. To specify the default selection, add `selected` to the option. If you wish to prevent an item from being selected, add `disabled` to the option. The `form description` is optional, while all other markup is required.

<div class="b-form">
  <div class="form__field form__field--select">
      <label for="select">What faculty are you a part of?</label>
      <p class="form__description">Please select an option below.</p>
      <select id="select" name="select">
          <option label="Select an Option" disabled selected>Select an Option</option>
          <option label="Faculty of Arts and Social Sciences" value="fass">Faculty of Arts and Social Sciences</option>
          <option label="Faculty of Engineering and Design" value="fed">Faculty of Engineering and Design</option>
          <option label="Faculty of Graduate and Postdoctoral Affairs" value="fgpa">Faculty of Graduate and Postdoctoral Affairs</option>
          <option label="Faculty of Public Affairs" value="fpa">Faculty of Public Affairs</option>
          <option label="Faculty of Science" value="fs">Faculty of Science</option>
          <option label="Sprott School of Business" value="ssb">Sprott School of Business</option>
      </select>
  </div>
</div>

```html
<div class="form__field form__field--select">
    <label for="select">What faculty are you a part of?</label>
    <p class="form__description">Please select an option below.</p>
    <select id="select" name="select">
        <option label="Select an Option" disabled selected>Select an Option</option>
        <option label="Faculty of Arts and Social Sciences" value="fass">Faculty of Arts and Social Sciences</option>
        <option label="Faculty of Engineering and Design" value="fed">Faculty of Engineering and Design</option>
        <option label="Faculty of Graduate and Postdoctoral Affairs" value="fgpa">Faculty of Graduate and Postdoctoral Affairs</option>
        <option label="Faculty of Public Affairs" value="fpa">Faculty of Public Affairs</option>
        <option label="Faculty of Science" value="fs">Faculty of Science</option>
        <option label="Sprott School of Business" value="ssb">Sprott School of Business</option>
    </select>
</div>
```

## File Uploads

A file upload field requires that the label `for` and the input `id` attributes match, and the input `name` be unique for each upload used in a form. The `form description` is optional, while all other markup is required.

<div class="b-form">
  <div class="form__field form__field--file">
      <label for="file">Upload a File</label>
      <p class="form__description">Please select a file to be uploaded.</p>
      <div class="form__upload">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M452 432c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-84-20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm144-48v104c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V364c0-24.3 19.7-44 44-44h124v-99.3h-52.7c-35.6 0-53.4-43.1-28.3-68.3L227.7 11.7c15.6-15.6 40.9-15.6 56.6 0L425 152.4c25.2 25.2 7.3 68.3-28.3 68.3H344V320h124c24.3 0 44 19.7 44 44zM200 188.7V376c0 4.4 3.6 8 8 8h96c4.4 0 8-3.6 8-8V188.7h84.7c7.1 0 10.7-8.6 5.7-13.7L261.7 34.3c-3.1-3.1-8.2-3.1-11.3 0L109.7 175c-5 5-1.5 13.7 5.7 13.7H200zM480 364c0-6.6-5.4-12-12-12H344v24c0 22.1-17.9 40-40 40h-96c-22.1 0-40-17.9-40-40v-24H44c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V364z"/></svg>
          <input id="file" type="file" name="file">
      </div>
  </div>
</div>

```html
<div class="form__field form__field--file">
    <label for="file">Upload a File</label>
    <div class="form__upload">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M452 432c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-84-20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm144-48v104c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V364c0-24.3 19.7-44 44-44h124v-99.3h-52.7c-35.6 0-53.4-43.1-28.3-68.3L227.7 11.7c15.6-15.6 40.9-15.6 56.6 0L425 152.4c25.2 25.2 7.3 68.3-28.3 68.3H344V320h124c24.3 0 44 19.7 44 44zM200 188.7V376c0 4.4 3.6 8 8 8h96c4.4 0 8-3.6 8-8V188.7h84.7c7.1 0 10.7-8.6 5.7-13.7L261.7 34.3c-3.1-3.1-8.2-3.1-11.3 0L109.7 175c-5 5-1.5 13.7 5.7 13.7H200zM480 364c0-6.6-5.4-12-12-12H344v24c0 22.1-17.9 40-40 40h-96c-22.1 0-40-17.9-40-40v-24H44c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V364z"/></svg>
        <input id="file" type="file" name="file">
    </div>
</div>
```

## Buttons

Each form requires a submit button and should be used as the last element inside the `b-form` wrapping div. The reset button is optional.

<form class="b-form">
  <div class="form__field form__field--button">
      <input type="submit" class="form__reset" value="Submit" onclick="" onkeypress="">
      <input type="reset" class="form__submit" value="Reset" onclick="" onkeypress="">
  </div>
</form>

```html
<div class="form__field form__field--button">
    <input type="submit" class="form__reset" value="Submit" onclick="" onkeypress="">
    <input type="reset" class="form__submit" value="Reset" onclick="" onkeypress="">
</div>
```

## Form Validation

Add information about validation, how to implement it, and more. Need to wait until testing is completed and js has been finalized.

## Missing from Documentation

The following examples need to be documented:

- required (checkboxes, radios, select lists, file upload)
- what is needed on a submit/reset button, onclick? onkeypress? what's needed for resetting fields?