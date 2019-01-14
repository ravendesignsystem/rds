---
layout: l-rdsdocs-markdown
title: Layouts
---
Layouts are used to arrange content [blocks](#) within sections of page templates. Layouts, generally, setup columns and act as containers to control blocks in a responsive manner across all screen sizes.

Certain layouts can only be used in certain template sections. For example, a body layout must be used in the body section of a template and can not be used in a page header.

In general, flexbox and CSS Grid are the tools of choice for building layouts, although you can use whatever you need to solve layout needs.


![img of template sections ](http://cu-raven.s3.amazonaws.com/assets/img/docs/layout2.png)

No Header or Footer layouts exist at this time, however, RDS ships with a default body layout with several options. See examples below.

## Layout namespacing

Layout names should use the following pattern:

`<div class="prefix-section prefix-section--tagname-tagname">`

**Where the**:

- prefix is 'l' for layout.

- section refers to the template section the layout belongs to. For example, `body`.

- tagname refers to the HTML 5 tag name assigned to each layout column. 

For example, if you had a two column layout with a sidebar on the left and the main content on the right, the wrapper class name would be:
 
```css
l-body l-body--aside-main
```
and the HTML would be:

```html
<div class="l-body l-body--aside-main">	
    <aside>Sidebar content</aside>
    <main>Main content</main>
</div>
```
![img of layout ](http://cu-raven.s3.amazonaws.com/assets/img/docs/layout-aside-main.jpg)

**Note**: for this layout to work, it is important to use the HTML 5 `<main>` and `<aside>` tags.

### Three column example

If you wanted three columns, with a left sidebar, middle content area and then right sidebar area, your code would look like

```html
<div class="l-body l-body--aside-main-aside">	
    <aside>Left sidebar content</aside>
    <main>Main content</main>
    <aside>Right sidebar content</aside>
</div>
```
![img of 3 col layout ](http://cu-raven.s3.amazonaws.com/assets/img/docs/layout-am-a.jpg)

## RDS Body Layouts

While layouts are generally setup within individual themes, RDS does ship with a base body layout that affords several options. In fact, it can accomodate all of the body layouts needs for both the CMS and Framework themes.

**Reminder**: if you just need a one column body layout for all screen sizes, you don't need a layout. Simply add blocks and control their width with the `u-block` utility class.

### Setting up the layout

The entire layout needs to be wrapped in a div with the class `l-body` on it and then the modifier corresponding to the layout you need. For example, if you need a two column layout with an aside on the left and the main content on the right, the class is `<div class="l-body l-body--aside-main">`.

## Two column body layout - aside/main

```HTML
<div class="l-body l-body--aside-main">
	<aside>
		<!-- Aside content goes here-->
	</aside>
	<main>
		<div>
			<!-- Main content goes here-->
		</div>
	</main>
</div>
```
![img of 2 col layout ](http://cu-raven.s3.amazonaws.com/assets/img/docs/layout-a-m.png)

## Two column body layout - main/aside

```HTML
<div class="l-body l-body--main-aside">
	<main>
		<div>
			<!-- Main content goes here-->
		</div>
	</main>
	<aside>
		<!-- Aside content goes here-->
	</aside>
</div>
```
![img of 3 col layout ](http://cu-raven.s3.amazonaws.com/assets/img/docs/l-m-a.png)

**Note**: as a function of this layout right-side asides (sidebars) drop beneath the content area when the screen is smaller then the large breakpoint.

![img of 3 col layout ](http://cu-raven.s3.amazonaws.com/assets/img/docs/aside-bot.png)

### Keep right aside above content

**To have the aside stay on top** at the breakpoint, add the modifier `l-body--main-aside-top`

```html
<div class="l-body l-body--main-aside l-body--main-aside-top">
```

## Large right asides

For a larger right aside column, add the class `body__aside-large` to the right aside tag.

```HTML
<aside class="body__aside-large">
   <!-- aside content -->
</aside>
```
![img of 3 col layout ](http://cu-raven.s3.amazonaws.com/assets/img/docs/large.png)

## Three column body layout - aside/main/aside

```HTML
<div class="l-body l-body--aside-main-aside">
	<aside>
		<!-- Aside content goes here-->
	</aside>
	<main>
		<div>
			<!-- Main content goes here-->
		</div>
	</main>
    <aside>
        <!-- Aside content goes here-->
    </aside>
</div>
```
![img of 2 col layout ](http://cu-raven.s3.amazonaws.com/assets/img/docs/layout-am-a.jpg)

## Reminders

- Blocks are set to handle the padding. Layout columns should avoid using padding.
