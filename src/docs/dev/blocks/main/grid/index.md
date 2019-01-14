---
layout: base
subsite: dev
title: Grid block
banner:
  breadcrumbs:
    grandparent: Blocks
content: true
meta: 
    version: 1.0.0
    status: under review
    handle: grid
    type: Fixed-width
    section: Any
    path: listing/grid/
    theme: Core
    heading: "true"
dependencies:
    js: n/a
examples:
wild: n/a
alternatives: grid-list
data:
- name: inc*
  type: string
  desc: Card component inc path.
---
The Grid block uses RDS' [responsive grid](#) to list [Card components](#) in equal-width columns. **Note**: this block should not be used for general layout purposes.{%include "/rds/inc/close.twig"%}
<div class="u-block u-block--white u-block--s u-no-padding-bottom">
<h2>Base example</h2>
<div class="b-main-grid u-grid u-grid--3">
    <div><article class="c-cards-card" itemscope="" itemtype="http://schema.org/VideoObject">
             <a class="card__url" href="https://www.youtube.com/watch?v=lrYPm6DD44M" itemprop="url">
                 <figure class="card__figure u-overlay u-overlay--light" itemscope="" itemtype="http://schema.org/ImageObject">
                     <img class="card__img " src="http://cu-raven.s3.amazonaws.com/assets/img/raven/img-4.jpg" alt="Raven standing">
                     <span class="card__icon c-icon-play-button--white u-icon-bg u-icon-bg--overlay" title="Video" aria-hidden="true"></span>
                 </figure>
                 <div class="card__body">
                     <h4 class="card__title" itemprop="name">Amazing Raven intelligence</h4>
                 </div>
             </a>
         </article>
     </div>
    <div><article class="c-cards-card" itemscope="" itemtype="http://schema.org/VideoObject">
             <a class="card__url" href="https://www.youtube.com/watch?v=lrYPm6DD44M" itemprop="url">
                 <figure class="card__figure u-overlay u-overlay--light" itemscope="" itemtype="http://schema.org/ImageObject">
                     <img class="card__img " src="http://cu-raven.s3.amazonaws.com/assets/img/raven/img-4.jpg" alt="Raven standing">
                     <span class="card__icon c-icon-play-button--white u-icon-bg u-icon-bg--overlay" title="Video" aria-hidden="true"></span>
                 </figure>
                 <div class="card__body">
                     <h4 class="card__title" itemprop="name">Amazing Raven intelligence</h4>
                 </div>
             </a>
         </article>
     </div>
     <div><article class="c-cards-card" itemscope="" itemtype="http://schema.org/VideoObject">
              <a class="card__url" href="https://www.youtube.com/watch?v=lrYPm6DD44M" itemprop="url">
                  <figure class="card__figure u-overlay u-overlay--light" itemscope="" itemtype="http://schema.org/ImageObject">
                      <img class="card__img " src="http://cu-raven.s3.amazonaws.com/assets/img/raven/img-4.jpg" alt="Raven standing">
                      <span class="card__icon c-icon-play-button--white u-icon-bg u-icon-bg--overlay" title="Video" aria-hidden="true"></span>
                  </figure>
                  <div class="card__body">
                      <h4 class="card__title" itemprop="name">Amazing Raven intelligence</h4>
                  </div>
              </a>
          </article>
      </div>
</div>
</div>{%include "/rds/inc/open-b-content.twig"%}

```html
<div class="u-block u-block--white u-block--s">
    <div class="b-main-grid u-grid u-grid--3">
        <div>{include card component}</div>
        <div>{include card component}</div>
        <div>{include card component}</div>
    </div>
</div>
```

## Grid column settings

Four and three column grids are available. To control the number of columns, adjust the `u-grid` modifier to either `u-grid--3` or `u-grid--4`.

### Four column grid example

<div class="b-main-grid u-grid u-grid--4">
    <div>{%include "components/cards/card/data/card--base.twig"%}</div>
    <div>{%include "components/cards/card/data/card--base.twig"%}</div>
    <div>{%include "components/cards/card/data/card--base.twig"%}</div>
    <div>{%include "components/cards/card/data/card--base.twig"%}</div>
</div><br>


```html
<div class="u-block u-block--white u-block--s">
    <div class="b-main-grid u-grid u-grid--4">
        <div>{include card component}</div>
        <div>{include card component}</div>
        <div>{include card component}</div>
        <div>{include card component}</div>
    </div>
</div>
```
    
## Block settings

Control the block's width and background colour using the following [block settings](#) 

- **Block widths**: `u-block--s`*, `u-block--m`, `u-block--l`
- **Block colours**: `u-block--white`*, `u-block--grey`

**Notes**: * = default

**Important**: if you are using the [CMS theme](#), only the default settings can be used.
{%include "/rds/inc/close.twig"%}
<section class="u-block u-block--grey u-block--m">
<h2>Grid block with medium width and white background settings</h2>
<div class="b-main-grid u-grid u-grid--4">
    <div><article class="c-cards-card" itemscope="" itemtype="http://schema.org/VideoObject">
             <a class="card__url" href="https://www.youtube.com/watch?v=lrYPm6DD44M" itemprop="url">
                 <figure class="card__figure u-overlay u-overlay--light" itemscope="" itemtype="http://schema.org/ImageObject">
                     <img class="card__img " src="http://cu-raven.s3.amazonaws.com/assets/img/raven/img-4.jpg" alt="Raven standing">
                     <span class="card__icon c-icon-play-button--white u-icon-bg u-icon-bg--overlay" title="Video" aria-hidden="true"></span>
                 </figure>
                 <div class="card__body">
                     <h4 class="card__title" itemprop="name">Amazing Raven intelligence</h4>
                 </div>
             </a>
         </article>
     </div>
    <div><article class="c-cards-card" itemscope="" itemtype="http://schema.org/VideoObject">
             <a class="card__url" href="https://www.youtube.com/watch?v=lrYPm6DD44M" itemprop="url">
                 <figure class="card__figure u-overlay u-overlay--light" itemscope="" itemtype="http://schema.org/ImageObject">
                     <img class="card__img " src="http://cu-raven.s3.amazonaws.com/assets/img/raven/img-4.jpg" alt="Raven standing">
                     <span class="card__icon c-icon-play-button--white u-icon-bg u-icon-bg--overlay" title="Video" aria-hidden="true"></span>
                 </figure>
                 <div class="card__body">
                     <h4 class="card__title" itemprop="name">Amazing Raven intelligence</h4>
                 </div>
             </a>
         </article>
     </div>
     <div><article class="c-cards-card" itemscope="" itemtype="http://schema.org/VideoObject">
              <a class="card__url" href="https://www.youtube.com/watch?v=lrYPm6DD44M" itemprop="url">
                  <figure class="card__figure u-overlay u-overlay--light" itemscope="" itemtype="http://schema.org/ImageObject">
                      <img class="card__img " src="http://cu-raven.s3.amazonaws.com/assets/img/raven/img-4.jpg" alt="Raven standing">
                      <span class="card__icon c-icon-play-button--white u-icon-bg u-icon-bg--overlay" title="Video" aria-hidden="true"></span>
                  </figure>
                  <div class="card__body">
                      <h4 class="card__title" itemprop="name">Amazing Raven intelligence</h4>
                  </div>
              </a>
          </article>
      </div>
      <div>
        <article class="c-cards-card" itemscope="" itemtype="http://schema.org/VideoObject">
            <a class="card__url" href="https://www.youtube.com/watch?v=lrYPm6DD44M" itemprop="url">
                <figure class="card__figure u-overlay u-overlay--light" itemscope="" itemtype="http://schema.org/ImageObject">
                    <img class="card__img " src="http://cu-raven.s3.amazonaws.com/assets/img/raven/img-4.jpg" alt="Raven standing">
                    <span class="card__icon c-icon-play-button--white u-icon-bg u-icon-bg--overlay" title="Video" aria-hidden="true"></span>
                </figure>
                <div class="card__body">
                    <h4 class="card__title" itemprop="name">Amazing Raven intelligence</h4>
                </div>
            </a>
        </article>
       </div>
</div>
</section>
{%include "/rds/inc/open-b-content.twig"%}

```html
<div class="u-block u-block--grey u-block--m">
    <div class="b-main-grid u-grid u-grid--4">
        <div>{include card component}</div>
        <div>{include card component}</div>
        <div>{include card component}</div>
        <div>{include card component}</div>
    </div>
</div>
```

##Content guidelines

Grid block cards should:

- Present objects of the same content and type.
- Images should have a similar tone and treatment to visually unify the panel.

##Implementation Notes

-  If you are building pages with Grid blocks but without [Content blocks](#), use the four column grid and the medium-size width setting `u-block--m`. 

##When To Avoid

- Don't use this block inside of a content block. If you need a grid within a content block, use the `u-grid` modifier. Remember, blocks can never be nested.


