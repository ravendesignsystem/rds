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

All form fields are required to be wrapped with a form tag with a class of `b-form`.

```html
<form class="b-form" action="">
  {include form fields}
</form>
```

The following checklist are important items that applies to all form fields, with the exception of buttons. Any items that relate only to an individual field are noted with the examples below.

- Each field requires either a label or a legend
- All label use a `for` attribute, this much match the `id` attribute used on the input (or textarea and select fields)
- For fields that use a grouping of items (such as checkbox, radio), the `name` attribute of each item must be the same
- Form descriptions and placeholder are optional elements, while all other markup is required

## Basic Inputs

These are single-line input field for for a variety of purposes. See more about the available types below the code example.

<div class="b-form">
  <div class="form__field form__field--text">
      <label for="text">Text Label</label>
      <p class="form__description">This example has the description above the input field</p>
      <input id="text" type="text" name="text" placeholder="This field has a placeholder">
  </div>
</div>

```html
<div class="b-form">
  <div class="form__field form__field--text">
      <label for="text">Text Label</label>
      <p class="form__description">This example has the description above the input field</p>
      <input id="text" type="text" name="text" placeholder="This field has a placeholder">
  </div>
</div>
```

### Input Types

The following types are available to be used in a basic input, simple update `type="text"` to one of the following items:

- **text:** defines a single-line text input field
- **password:** defines a password field
- **number:** defines a numeric input field
- **email:** used for input fields that should contain an e-mail address
- **tel:** used for input fields that should contain a telephone number
- **url:** used for input fields that should contain a URL address


**Additional input attributes**

- **min:** add to a number input type to specify a minimum (eg: `min="2"`)
- **max:** add to a number input type to specify a maximum (eg: `max="8"`)

## Text Area

This element defines a multi-line input that can hold a varying amount of characters.

<div class="b-form">
  <div class="form__field form__field--textarea">
      <label for="textarea">Text Area Label</label>
      <p class="form__description">This example has the description above the input field</p>
      <textarea id="textarea" name="textarea" rows="8" placeholder="This field has a placeholder"></textarea>
  </div>
</div>

```html
<div class="b-form">
  <div class="form__field form__field--textarea">
      <label for="textarea">Text Area Label</label>
      <p class="form__description">This example has the description above the input field</p>
      <textarea id="textarea" name="textarea" rows="8" placeholder="This field has a placeholder"></textarea>
  </div>
</div>
```

**Additional textarea attributes**

- **rows:** specifies the visible number of lines in a text area (eg: `rows="12"`)
- **maxlength:** specifies the maximum number of characters allowed in the text area

## Checkboxes

This element defines a checkbox and are used to let a user select one or more options of a limited number of choices.

<div class="b-form">
  <div class="form__field form__field--checkbox">
      <fieldset>
          <legend>What faculty are you a part of?</legend>
          <p class="form__description">Please select all options that apply.</p>
          <div class="form__group">
              <input id="fass_1" type="checkbox" name="checkbox_name" value="fass"/>
              <label for="fass_1">Faculty of Arts and Social Sciences</label>
              <input id="fed_1" type="checkbox" name="checkbox_name" value="fed"/>
              <label for="fed_1">Faculty of Engineering and Design</label>
              <input id="fgpa_1" type="checkbox" name="checkbox_name" value="fgpa"/>
              <label for="fgpa_1">Faculty of Graduate and Postdoctoral Affairs</label>
              <input id="fpa_1" type="checkbox" name="checkbox_name" value="fpa"/>
              <label for="fpa_1">Faculty of Public Affairs</label>
              <input id="fs_1" type="checkbox" name="checkbox_name" value="fs"/>
              <label for="fs_1">Faculty of Science</label>
              <input id="ssb_1" type="checkbox" name="checkbox_name" value="ssb"/>
              <label for="ssb_1">Sprott School of Business</label>
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

This element defines a group of radio buttons allowing only one item to be selected at a time.

<div class="b-form">
  <div class="form__field form__field--radio">
      <fieldset>
          <legend>What faculty are you a part of?</legend>
          <p class="form__description">Please select an option below.</p>
          <div class="form__group">
              <input id="fass_2" type="radio" name="radio_name" value="fass"/>
              <label for="fass_2">Faculty of Arts and Social Sciences</label>
              <input id="fed_2" type="radio" name="radio_name" value="fed"/>
              <label for="fed_2">Faculty of Engineering and Design</label>
              <input id="fgpa_2" type="radio" name="radio_name" value="fgpa"/>
              <label for="fgpa_2">Faculty of Graduate and Postdoctoral Affairs</label>
              <input id="fpa_2" type="radio" name="radio_name" value="fpa"/>
              <label for="fpa_2">Faculty of Public Affairs</label>
              <input id="fs_2" type="radio" name="radio_name" value="fs"/>
              <label for="fs_2">Faculty of Science</label>
              <input id="ssb_2" type="radio" name="radio_name" value="ssb"/>
              <label for="ssb_2">Sprott School of Business</label>
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

This element is used to create a drop-down list, and the `<option>` tags inside the `<select>` element define the available options in the list. To specify the default selection, add `selected` to the option. If you wish to prevent an item from being selected, add `disabled` to the option.

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

## Multi-Select Lists

This element allows a user to select multiple options. A multi-select field only requires that you add `multiple="multiple"` to a select list. If you want to control how many options are visible in the field simply add `row="10"`. If the row attribute is not used, 5 options will be shown by default.

<div class="b-form">
  <div class="form__field form__field--select">
      <label for="select">What faculty are you a part of?</label>
      <p class="form__description">Please select an option below.</p>
      <select id="select" name="select" multiple="multiple" size="6">
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
    <select id="select" name="select" multiple="multiple" size="6">
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

This element defines a file-select field and a "Browse" button for file uploads. To define a file-select field that allows multiple files to be selected, add the `multiple` attribute.

<div class="b-form">
  <div class="form__field form__field--fileupload">
      <label for="file">Upload a File</label>
      <p class="form__description">Please select a file to be uploaded.</p>
      <div class="form__upload">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M452 432c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-84-20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm144-48v104c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V364c0-24.3 19.7-44 44-44h124v-99.3h-52.7c-35.6 0-53.4-43.1-28.3-68.3L227.7 11.7c15.6-15.6 40.9-15.6 56.6 0L425 152.4c25.2 25.2 7.3 68.3-28.3 68.3H344V320h124c24.3 0 44 19.7 44 44zM200 188.7V376c0 4.4 3.6 8 8 8h96c4.4 0 8-3.6 8-8V188.7h84.7c7.1 0 10.7-8.6 5.7-13.7L261.7 34.3c-3.1-3.1-8.2-3.1-11.3 0L109.7 175c-5 5-1.5 13.7 5.7 13.7H200zM480 364c0-6.6-5.4-12-12-12H344v24c0 22.1-17.9 40-40 40h-96c-22.1 0-40-17.9-40-40v-24H44c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V364z"/></svg>
          <input id="file" type="file" name="file">
      </div>
  </div>
</div>

```html
<div class="form__field form__field--fileupload">
    <label for="file">Upload a File</label>
    <div class="form__upload">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M452 432c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-84-20c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm144-48v104c0 24.3-19.7 44-44 44H44c-24.3 0-44-19.7-44-44V364c0-24.3 19.7-44 44-44h124v-99.3h-52.7c-35.6 0-53.4-43.1-28.3-68.3L227.7 11.7c15.6-15.6 40.9-15.6 56.6 0L425 152.4c25.2 25.2 7.3 68.3-28.3 68.3H344V320h124c24.3 0 44 19.7 44 44zM200 188.7V376c0 4.4 3.6 8 8 8h96c4.4 0 8-3.6 8-8V188.7h84.7c7.1 0 10.7-8.6 5.7-13.7L261.7 34.3c-3.1-3.1-8.2-3.1-11.3 0L109.7 175c-5 5-1.5 13.7 5.7 13.7H200zM480 364c0-6.6-5.4-12-12-12H344v24c0 22.1-17.9 40-40 40h-96c-22.1 0-40-17.9-40-40v-24H44c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V364z"/></svg>
        <input id="file" type="file" name="file">
    </div>
</div>
```

## Buttons

Each form requires a submit button and should be used as the last element inside the `b-form` wrapper.

**TODO:** what is needed on a submit button, onclick? onkeypress? what's needed for resetting fields?

<form class="b-form">
  <div class="form__field form__field--button">
      <input type="submit" class="form__reset" value="Submit" onclick="" onkeypress="">
  </div>
</form>

```html
<div class="form__field form__field--button">
    <input type="submit" class="form__submit" value="Submit" onclick="" onkeypress="">
</div>
```

## Additional Form Elements

### Required fields

To indicate that a field is require, a few things need to be added to a form element:

- Add a span with a class of `form__required` inside the label/legend to provide the user a visual that the field is required
- Add `isrequired` to the input
- Add a span with a class of `form_message` immediately after the input, and customize the error message that will be displayed

<div class="b-form">
  <div class="form__field form__field--text">
      <label for="text">
            Required Field Label
            <span class="form__required">*</span>
        </label>
      <input id="text" type="text" name="text" isrequired>
      <span class="form__message">Customize the error message</span>
  </div>
</div>

```html
<div class="form__field form__field--text">
    <label for="text">
        Required Field Label
        <span class="form__required">*</span>
    </label>
    <input id="text" type="text" name="text" isrequired>
    <span class="form__message">Customize the error message</span>
</div>
```

### Read only fields

To make a field read only add `readonly` to the input, like the following example.

- **TODO:** add a list of fields that support this

<div class="b-form">
    <div class="form__field form__field--text">
        <label for="text_5">Read Only Text Field</label>
        <input id="text_5" type="text" name="text_5" value="This field is read only" readonly>
    </div>
</div>

```html
<div class="form__field form__field--text">
    <label for="text_5">Read Only Text Field</label>
    <input id="text_5" type="text" name="text_5" value="This field is read only" readonly>
</div>
```

### Disabled fields

To disable a field add `disabled` to the input, like the following example.

- **TODO:** add a list of fields that support this

<div class="b-form">
    <div class="form__field form__field--text">
        <label for="text_6">Disabled Text Field</label>
        <input id="text_6" type="text" name="text_6" value="This field is disabled" disabled>
    </div>
</div>

```html
<div class="form__field form__field--text">
    <label for="text_6">Disabled Text Field</label>
    <input id="text_6" type="text" name="text_6" value="This field is disabled" disabled>
</div>
```

## Grouping Fields

There are time when you may want to group a series of inputs together, such as an address. The following example can be followed to create a grouping of basic inputs.

<div class="b-form">
    <div class="form__field form__field--address">
        <fieldset>
            <legend>Address Field Legend</legend>
            <label for="address">Street Address</label>
            <input id="address"><br />
            <label for="address2">Address Line 2</label>
            <input id="address2"><br />
            <label for="city">City:</label>
            <input id="city"><br />
            <label for="state">State / Province / Region:</label>
            <input id="state"><br />
            <label for="postalcode">Zip / Postal Code:</label>
            <input id="postalcode"><br />
            <label for="country">Country:</label>
            <input id="country"><br />
        </fieldset>
    </div>
</div>

```html
<div class="form__field form__field--address">
    <fieldset>
        <legend>Address Field Legend</legend>
        <label for="address">Street Address</label>
        <input id="address"><br />
        <label for="address2">Address Line 2</label>
        <input id="address2"><br />
        <label for="city">City:</label>
        <input id="city"><br />
        <label for="state">State / Province / Region:</label>
        <input id="state"><br />
        <label for="postalcode">Zip / Postal Code:</label>
        <input id="postalcode"><br />
        <label for="country">Country:</label>
        <input id="country"><br />
    </fieldset>
</div>
```

## Form Validation

Add information about validation, how to implement it, and more. Need to wait until testing is completed and js has been finalized.

## Missing from Documentation

The following examples need to be documented:

- required (checkboxes, radios, select lists, file upload)
