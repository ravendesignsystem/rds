---
layout: docs
subsite: dev
menu: dev
title: Login Block
banner:
  breadcrumbs:
    parent: Docs
---
The login block can be used in one of two ways: as a stand alone block on a page, or [within an overlay]({{site.url}}dev/layouts/overlay/) that is triggered by an optional [login button in the masthead]({{site.url}}dev/blocks/header/masthead#masthead-with-login-button).

{% include 'inc' with {'block': 'login'} %}

```html
<div class="u-block u-block--grey u-block--s">
	<div class="b-login">

		<h1 class="login__heading">Form Title</h1>

		<form class="c-form" name="loginform" action="/" method="post" accept-charset="UTF-8">

			<label for="user_login">Username</label>
			<input type="text" id="user_login" name="log" class="login__field" value="" tabindex="1" autocapitalize="off" autocorrect="off" autofocus="autofocus" aria-required="true">

			<label for="user_pass">Password</label>
			<input type="password" name="pwd" id="user_pass" value="" class="form-control form-control input-block" tabindex="2" aria-required="true">

			<input type="submit" value="Login" tabindex="3" class="u-width-full">
		</form>
	</div>
</div>
```

## Important Notes

- This is the basic markup needed for the form. Items such as the action will need to be updated based on the intent of the form.
