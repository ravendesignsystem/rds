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

## Missing

The following examples need to be documented

- required