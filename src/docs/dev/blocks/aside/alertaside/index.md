---
layout: docs
title: Alert Aside
subsite: dev
menu: dev
section: Blocks
subsection: Aside blocks
sidebar: true
banner:
  breadcrumbs:
    parent: Docs
alertSidebar:
  heading: Alert Aside block example
  content: This is an example of an Alert Aside block. This block can use any variant of the Alert component.
---
## Alert Aside block

The Alert Aside block is used to inform users of important information through contextual messages from within an aside (sidebar). 

<p class="u-hide-s">
<strong>Note</strong>: the examples below exist within the <code>main</code> section only for documentation purposes. Proper use of this block is be to only use this block within <code>aside</code> section, as per the one example in the aside on the right-side of this page-->.
</p>

### Example

At a minimum, the Alert Aside block requires a heading and some content. 

<div class="u-block u-block--white">
    <div class="b-alertaside">
        <div class="c-alert c-alert--info" role="alert">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.8 8.074a1.615 1.615 0 0 1-.48-1.2c0-.48.154-.891.48-1.2.326-.308.72-.48 1.2-.48s.891.155 1.2.48c.309.326.48.72.48 1.2s-.154.892-.48 1.2a1.714 1.714 0 0 1-1.2.515c-.48 0-.891-.189-1.2-.515zm2.914 3.943a1.866 1.866 0 0 0-.531-1.183c-.343-.325-.72-.514-1.183-.531h-1.714c-.463.034-.823.223-1.183.531a1.748 1.748 0 0 0-.532 1.183h1.715v5.143c.034.463.188.857.531 1.183.343.343.72.531 1.183.531h1.714c.463 0 .823-.188 1.183-.531.343-.326.514-.72.532-1.183h-1.715V12v.017zM12 2.263c-5.383 0-9.771 4.354-9.771 9.737S6.617 21.771 12 21.771c5.383 0 9.771-4.371 9.771-9.771S17.383 2.246 12 2.246v.017zM12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.651 0 12 5.383 0 12 0z"></path></svg>
            <h2>Alert Aside block example</h2>
            <p>This is an example of an Alert Aside block. This block can use any variant of the Alert component.</p>
            <button aria-label="Close alert" type="button" data-close="">
                    <span class="u-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="title" lang="en">Close alert panel</title><path d="M15.396 12L24 20.604 20.604 24 12 15.396 3.396 24 0 20.604 8.604 12 0 3.396 3.396 0 12 8.604 20.604 0 24 3.396z"></path></svg>
                    </span>
            </button>
        </div>
    </div>
</div>

```html
<div class="u-block u-block--white">
    <div class="b-alertaside">
        <div class="c-alert c-alert--info" role="alert">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.8 8.074a1.615 1.615 0 0 1-.48-1.2c0-.48.154-.891.48-1.2.326-.308.72-.48 1.2-.48s.891.155 1.2.48c.309.326.48.72.48 1.2s-.154.892-.48 1.2a1.714 1.714 0 0 1-1.2.515c-.48 0-.891-.189-1.2-.515zm2.914 3.943a1.866 1.866 0 0 0-.531-1.183c-.343-.325-.72-.514-1.183-.531h-1.714c-.463.034-.823.223-1.183.531a1.748 1.748 0 0 0-.532 1.183h1.715v5.143c.034.463.188.857.531 1.183.343.343.72.531 1.183.531h1.714c.463 0 .823-.188 1.183-.531.343-.326.514-.72.532-1.183h-1.715V12v.017zM12 2.263c-5.383 0-9.771 4.354-9.771 9.737S6.617 21.771 12 21.771c5.383 0 9.771-4.371 9.771-9.771S17.383 2.246 12 2.246v.017zM12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.651 0 12 5.383 0 12 0z"></path></svg>
            <h2>Alert Aside block example</h2>
            <p>This is an example of an Alert Aside block. This block can use any variant of the Alert component.</p>
            <button aria-label="Close alert" type="button" data-close="">
                    <span class="u-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title id="title" lang="en">Close alert panel</title><path d="M15.396 12L24 20.604 20.604 24 12 15.396 3.396 24 0 20.604 8.604 12 0 3.396 3.396 0 12 8.604 20.604 0 24 3.396z"></path></svg>
                    </span>
            </button>
        </div>
    </div>
</div>
```

### Modfications

Modify this block by using any of the [Alert component]({{site.url}}/dev/components/alerts/alert/) variants and settings within it.

## Block details

| {{ page.title }}  block meta   |  values
| --------------| :-------------------------------------:
| handle              | `alertaside` 
| colour options      | `u-block--white`, `u-block--grey` 
| section use         | `<aside>`                  
| width type          | fixed                          
| has heading         | n/a
| theme(s)            | CU
| Codepen             | coming soon...
