---
layout: docs
title: Block utility class cheat sheet
---
## Utility classes on blocks

1. Is your block designed to stretch the full-width of the screen **without any padding** around its content?

- **Yes**: use `u-block-full` and you are done. Go build your amazing block!
- **No**: use `u-block` and see the next question on this page.

2. Does your block width need to be bigger then the default 768pxCHECK size, also referred to as small?

- **Yes**: add either `u-block--m` or `u-block--l` to meet your need and see the next question on this page.
- **No**: see the next question on this page

3. Do you want to delineate a clear section for your block by giving it a full-width background colour?
- **No**: You are done. Go build your amazing block!
- **Yes**: add either `u-block--grey` or `u-block--black` to meet your needs.

## Block examples

### u-block-full

```HTML
<div class="u-block--full">
    <img src="https://cu-raven.s3.amazonaws.com/assets/img/photos/nevermore.jpg"/>
</div>
```
{%include "inc" with {'close': 'true'} %}

<div class="u-block--full">
    <img src="https://cu-raven.s3.amazonaws.com/assets/img/photos/nevermore.jpg"/>
</div>

{%include "inc" with {'open': 'true'} %}

## u-block
```HTML
<div class="u-block">
     <p>A simple block</p>
</div>
```
{%include "inc" with {'close': 'true'} %}

<div class="u-block">
     <p>A simple block</p>
</div>

{%include "inc" with {'open': 'true'} %}

## u-block--m
```HTML
<div class="u-block u-block--m">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nunc a felis facilisis facilisis quis et sem. Proin libero nunc, pulvinar id scelerisque in, feugiat at quam.</p>
</div>
```
{%include "inc" with {'close': 'true'} %}

<div class="u-block u-block--m">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nunc a felis facilisis facilisis quis et sem. Proin libero nunc, pulvinar id scelerisque in, feugiat at quam.</p>
      </div>

{%include "inc" with {'open': 'true'} %}

## u-block--grey
```HTML
<div class="u-block u-block--grey">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nunc a felis facilisis facilisis quis et sem. Proin libero nunc, pulvinar id scelerisque in, feugiat at quam. </p>
</div>
```
{%include "inc" with {'close': 'true'} %}

<div class="u-block u-block--grey">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nunc a felis facilisis facilisis quis et sem. Proin libero nunc, pulvinar id scelerisque in, feugiat at quam. </p>
</div>

{%include "inc" with {'close': 'open'} %}

## u-block-m & u-block--grey
```HTML
<div class="u-block u-block--l u-block--grey">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nunc a felis facilisis facilisis quis et sem. Proin libero nunc, pulvinar id scelerisque in, feugiat at quam. </p>
</div>
```
{%include "inc" with {'close': 'true'} %}

<div class="u-block u-block--l u-block--grey">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel nunc a felis facilisis facilisis quis et sem. Proin libero nunc, pulvinar id scelerisque in, feugiat at quam.</p>
</div>

{%include "inc" with {'close': 'open'} %}

## Important Note

The first child element after the u-block class can not have an inline display style. It needs to have a block or flex display.

For example, you can't use the following code with success:

```HTML
<div class="u-block">
     <span>Lorem ipsum dolor sit amet</span>
</div>
```













