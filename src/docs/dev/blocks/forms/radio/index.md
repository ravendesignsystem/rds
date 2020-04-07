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

Add information about available form radio components.

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