---
layout: docs
subsite: dev
menu: dev
section: Blocks
subsection: Dialog Blocks
title: Login
banner:
  breadcrumbs:
    parent: Docs
---
The login block can be used in one of two ways: as a stand alone block on a page, or [within an overlay]({{site.url}}dev/layouts/overlay/) that is triggered by an optional [login button in the masthead]({{site.url}}dev/blocks/header/masthead#masthead-with-login-button).

{% include 'inc' with {'block': 'login'} %}

```html
<div class="u-block u-block--grey">
    <div class="b-login">
        <h2>Login Title</h2>
        <form class="c-form" name="loginform" action="/" method="post" accept-charset="UTF-8">
            <label for="user_login">Username</label>
            <input type="text" id="user_login" name="log" class="login__field" value=""  autocapitalize="off" autocorrect="off" autofocus="autofocus" aria-required="true">
            <label for="user_pass">Password<a class="login__link" href="https://myone.carleton.ca/">Forgot password?</a></label>
            <input type="password" name="pwd" id="user_pass" value="" class="form-control form-control input-block"  aria-required="true">
            <input type="submit" value="Login"  >
        </form>
    </div>
</div>
```

## Block details

| {{ page.title }}  block meta   |  values
| --------------| :-------------------------------------:
| handle              | `login` 
| options examples    | n/a
| width options       | `u-block--s`, `u-block--l`     
| colour options      | `u-block--white`, `u-block--grey`  
| section use         | `<dialogue>`, `<main>`                 
| width type          | fixed                          
| has heading         | n/a
| theme(s)            | CU
| variants            | n/a
| Codepen             | [comingsoon](#)


## Important Notes

- This is the basic markup needed for the form. Items such as the action will need to be updated based on the intent of the form.
