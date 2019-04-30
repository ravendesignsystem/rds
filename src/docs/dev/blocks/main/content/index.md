---
layout: docs
subsite: dev
menu: dev
title: Content
section: Blocks
subsection: Main blocks
meta:
  version: 1.0.1
  status: ready
  handle: content
  type: Fixed-width
  section: Main
  path: main/content/
  theme: Core
  heading: n/a
dependencies:
    js: n/a
examples:
- name: test
  nicename: Testing various content types
wild: n/a
---
The Content block can only be used within the `<main>` section of a page. Intended for content that is directly related to or expands upon the central topic of a page, including text, images, multimedia and [content type components](#), this is the most commonly used block across RDS sites.


## Base block code

```html
<div class="u-block u-block--white u-block--s">
    <div class="b-content">
        <!-- Add your content here -->
    </div>
</div>
```

## Use proper HTML coding conventions

Content within this block should follow the <a href="#">RDS HTML coding conventions</a>, including:</p>

- keep your code tidy, clean and well-formed.
- use lowercase element and attribute names.
- close all HTML elements.

```html
<div class="u-block u-block--white u-block--s">
    <div class="b-content">
        <h3>Use proper HTML coding conventions</h3>
        <p>Content within this block should follow the <a href="#">RDS HTML coding conventions</a>, including:</p>
        <ul>
            <li>keep your code tidy, clean and well-formed.</li>
            <li>use lowercase element and attribute names.</li>
            <li>close all HTML elements.</li>
        </ul>
    </div>
</div>
```

## Content block components

The following components can be used within the content block:

- Accordion
- Form
- Heading
- Image caption
- Table
- Video

TODO link these up.


## Block settings

The content block settings include:

- **Block widths**: `u-block--s`
- **Block colours**: `u-block--grey`

**Note**: the `u-block--grey` setting can only be applied when using the [single column layout](#). If applied in a multi-column layout, such as this page, only the default settings of  `u-block--white` will be applied.


## Block guidelines

Content contributors should:

- follow the RDS content standards.
- follow any content guidelines specific for any components used within the Content block.
- consider following the RDS Writing Guidelines.
- make use of proper headings and document structure.
- should follow RDS accessibility guidelines.

## Implementation Notes

- This block must reside withing the `<main>` tag.

## When To Avoid

Avoid using the Content block if:

- your content isn't suitable for the `<main>` section. Instead, consider using a different block.

## QA: all content types

<h2>Header 2</h2>

<p>Lorem ipsum dolor sit amet, <a href="#">Mauris ac gravida</a> consectetur adipiscing elit. Ut quis nulla eu nulla tincidunt varius a fringilla justo. Integer elit leo, semper et lorem sit amet, feugiat congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>
<p>Lorem ipsum dolor sit amet, <a href="#">Mauris ac gravida</a> consectetur adipiscing elit. Ut quis nulla eu nulla tincidunt varius a fringilla justo. Integer elit leo, semper et lorem sit amet, feugiat congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>
<p>Lorem ipsum dolor sit amet, <a href="#">Mauris ac gravida</a> consectetur adipiscing elit. Ut quis nulla eu nulla tincidunt varius a fringilla justo. Integer elit leo, semper et lorem sit amet, feugiat congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>

<h3>Header 3</h3>

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<h4>Header 4</h4>

<p>Nam ligula purus, pretium eu erat finibus, varius consectetur augue. Phasellus ac nisi in lorem imperdiet tincidunt. Nullam quam odio, placerat in urna vitae, feugiat cursus mauris. Proin viverra felis tellus, vitae dapibus tortor posuere vitae. Integer vehicula leo a enim tempus venenatis. Aenean commodo rutrum neque, ut commodo velit egestas vitae. Vestibulum bibendum suscipit metus, sit amet tempor arcu tristique sit amet.</p>

<h1>Header 1</h1>

<h2>Header 2</h2>

<p>Vivamus non magna vitae est mollis aliquet. Sed pulvinar urna sit amet turpis semper, vehicula facilisis massa blandit. Vestibulum nec mollis lectus. Proin nec sagittis tortor. Sed fermentum nulla risus, eget facilisis erat pharetra vel. In elementum maximus tincidunt. Vestibulum ut accumsan tortor, et hendrerit odio. Quisque fringilla odio in risus aliquam, et dapibus nisl convallis. Praesent mollis elit non leo imperdiet, a semper tortor dictum.</p>

<h2>Header 2</h2>

<h3>Header 3</h3>

<p>Vivamus non magna vitae est mollis aliquet. Sed pulvinar urna sit amet turpis semper, vehicula facilisis massa blandit. Vestibulum nec mollis lectus. Proin nec sagittis tortor. Sed fermentum nulla risus, eget facilisis erat pharetra vel. In elementum maximus tincidunt. Vestibulum ut accumsan tortor, et hendrerit odio. Quisque fringilla odio in risus aliquam, et dapibus nisl convallis. Praesent mollis elit non leo imperdiet, a semper tortor dictum.</p>

<h3>Header 3</h3>

<h4>Header 4</h4>

<p>Praesent at velit a justo condimentum mattis. In mattis blandit mauris. Phasellus tristique ut erat non imperdiet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam egestas metus libero, vel volutpat urna tempor a. Suspendisse nec ante in diam dictum tempor nec accumsan tortor. Nulla sodales, libero at auctor volutpat, lacus nisi commodo enim, ut euismod nisi ligula non nisi. Nunc porta neque et libero finibus, non lacinia risus faucibus.</p>

<ul>
    <li>Fusce efficitur, nulla laoreet pellentesque bibendum, felis dolor lacinia quam, at pulvinar ex eros ac sapien.</li>
    <li>Suspendisse molestie quis dui at ullamcorper.
        <ul>
            <li>Sed finibus eleifend ultrices.</li>
            <li>Vestibulum non leo hendrerit massa blandit rhoncus non et elit.</li>
            <li>Curabitur eleifend metus justo, sed sollicitudin magna finibus sed.</li>
        </ul>
    </li>
    <li>Vestibulum luctus magna sed erat vestibulum hendrerit.</li>
    <li>Curabitur varius dignissim sem, non feugiat est ullamcorper ac.</li>
    <li>Phasellus porttitor tempor dui ut tincidunt. Ut ut porta felis.
        <ul>
            <li>Duis ornare interdum convallis.</li>
            <li>Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac arcu orci.</li>
            <li>Aenean vel lobortis lorem.</li>
        </ul>
    </li>
    <li>Duis pulvinar commodo arcu, non dignissim diam maximus non.</li>
    <li>Nam euismod, enim nec elementum tristique, nulla arcu.</li>
    <li>Cursus lacus, efficitur dapibus velit dui non lacus.</li>
</ul>

<p>Vivamus ut odio eu sapien posuere imperdiet nec et nisi. Praesent erat lacus, pulvinar ac odio sed, egestas elementum mi. Praesent elementum dapibus elit, in tincidunt urna ultrices sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ante vitae nibh viverra, et pulvinar metus aliquam.</p>

<ol>
    <li>Fusce efficitur, nulla laoreet pellentesque bibendum, felis dolor lacinia quam, at pulvinar ex eros ac sapien.</li>
    <li>Suspendisse molestie quis dui at ullamcorper.
        <ol>
            <li>Sed finibus eleifend ultrices.</li>
            <li>Vestibulum non leo hendrerit massa blandit rhoncus non et elit.</li>
            <li>Curabitur eleifend metus justo, sed sollicitudin magna finibus sed.</li>
        </ol>
    </li>
    <li>Vestibulum luctus magna sed erat vestibulum hendrerit.</li>
    <li>Curabitur varius dignissim sem, non feugiat est ullamcorper ac.</li>
    <li>Phasellus porttitor tempor dui ut tincidunt. Ut ut porta felis.
        <ol>
            <li>Duis ornare interdum convallis.</li>
            <li>Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac arcu orci.</li>
            <li>Aenean vel lobortis lorem.</li>
        </ol>
    </li>
    <li>Duis pulvinar commodo arcu, non dignissim diam maximus non.</li>
    <li>Nam euismod, enim nec elementum tristique, nulla arcu.</li>
    <li>Cursus lacus, efficitur dapibus velit dui non lacus.</li>
</ol>

<p>Nullam faucibus vehicula massa. Sed in ipsum elementum, porta sem id, scelerisque nibh. Sed sed eros eget ipsum vestibulum rhoncus. Mauris a odio ut leo malesuada facilisis. Ut quis lobortis ipsum. Donec maximus velit sit amet commodo sollicitudin. Etiam mattis metus non porttitor bibendum. Mauris pharetra dui ut pretium porttitor. In nisl erat, maximus eget iaculis nec, mollis in massa.</p>

<blockquote>
    <p>Cras cursus arcu eu magna tristique iaculis. Morbi elementum, ex sed dapibus fermentum, metus magna faucibus odio, ut euismod eros tellus sed risus. Nullam sagittis lacus sit amet nulla lacinia, ut facilisis leo imperdiet. Nunc ac dolor id elit consectetur tincidunt.</p>
</blockquote>

<p>Donec sodales commodo enim in varius. Maecenas accumsan dolor sed luctus venenatis. Fusce mi magna, lobortis ac iaculis quis, condimentum eu lorem. Sed elementum quam vitae eros sollicitudin, ac faucibus arcu vehicula. Curabitur molestie augue nibh, sit amet fermentum velit viverra nec.</p>

<table>
    <thead>
        <tr>
            <td>No wrapper</td>
            <td>And larger width</td>
            <td>Header</td>
            <td>Header</td>
            <td>Header</td>
            <td>Header</td>
            <td>Header</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Praesent dapibus iaculis</td>
            <td>Quisque</td>
            <td>Nam eget accumsan</td>
            <td>In scelerisque</td>
            <td><a href="#">Mauris ac gravida</a></td>
            <td>Tempor eu</td>
            <td>Pellentesque</td>
        </tr>
        <tr>
            <td>Pellentesque</td>
            <td>Mauris ac gravida</td>
            <td>In scelerisque</td>
            <td>Quisque</td>
            <td>Nam eget accumsan</td>
            <td>Praesent dapibus iaculis</td>
            <td>Tempor eu</td>
        </tr>
        <tr>
            <td>Nam eget accumsan</td>
            <td><a href="#">Mauris ac gravida</a></td>
            <td>Tempor eu</td>
            <td>Mauris ac gravida</td>
            <td>Pellentesque</td>
            <td>Quisque</td>
            <td>In scelerisque</td>
        </tr>
        <tr>
            <td>Tempor eu</td>
            <td>Nam eget accumsan</td>
            <td>Pellentesque</td>
            <td>Praesent dapibus iaculis</td>
            <td>In scelerisque</td>
            <td>Quisque</td>
            <td>Mauris ac gravida</td>
        </tr>
        <tr>
            <td>In scelerisque</td>
            <td>Quisque</td>
            <td>Mauris ac gravida</td>
            <td>Tempor eu</td>
            <td>Praesent dapibus iaculis</td>
            <td>Pellentesque</td>
            <td>Nam eget accumsan</td>
        </tr>
    </tbody>
</table>

<p>Praesent dapibus iaculis libero, non maximus dui lacinia quis. Pellentesque ullamcorper porta urna, in molestie tellus. Quisque interdum venenatis tristique. Nullam et finibus felis. Sed ut rutrum velit, dapibus molestie justo. Nam eget accumsan augue. Mauris vel nunc sit amet quam efficitur posuere non quis mauris.</p>

<table>
    <thead>
        <tr>
            <td>No wrapper</td>
            <td>And smaller width</td>
            <td>Header</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tempor eu</td>
            <td>Nam eget accumsan</td>
            <td>Pellentesque</td>
        </tr>
        <tr>
            <td>Tempor eu</td>
            <td>Nam eget accumsan</td>
            <td>Pellentesque</td>
        </tr>
        <tr>
            <td>
                <p>In scelerisque</p>
                <p>In scelerisque</p>
                <p>In scelerisque</p>
            </td>
            <td>
                <h2>Quisque</h2>
                <p>In scelerisque</p>
                <p>In scelerisque</p>
            </td>
            <td>
                <p>In scelerisque</p>
                <ul>
                    <li>Mauris ac gravida</li>
                    <li>Mauris ac gravida</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

<p>Praesent dapibus iaculis libero, non maximus dui lacinia quis. Pellentesque ullamcorper porta urna, in molestie tellus. Quisque interdum venenatis tristique. Nullam et finibus felis. Sed ut rutrum velit, dapibus molestie justo. Nam eget accumsan augue. Mauris vel nunc sit amet quam efficitur posuere non quis mauris.</p>

<div class="c-data-table">
    <table>
        <thead>
            <tr>
                <td>With wrapper</td>
                <td>And larger width</td>
                <td>Header</td>
                <td>Header</td>
                <td>Header</td>
                <td>Header</td>
                <td>Header</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Praesent dapibus iaculis</td>
                <td>Quisque</td>
                <td>Nam eget accumsan</td>
                <td>In scelerisque</td>
                <td><a href="#">Mauris ac gravida</a></td>
                <td>Tempor eu</td>
                <td>Pellentesque</td>
            </tr>
            <tr>
                <td>Pellentesque</td>
                <td>Mauris ac gravida</td>
                <td>In scelerisque</td>
                <td>Quisque</td>
                <td>Nam eget accumsan</td>
                <td>Praesent dapibus iaculis</td>
                <td>Tempor eu</td>
            </tr>
            <tr>
                <td>Nam eget accumsan</td>
                <td>Praesent dapibus iaculis</td>
                <td>Tempor eu</td>
                <td>&nbsp;Mauris ac gravida</td>
                <td>Pellentesque</td>
                <td>Quisque</td>
                <td>In scelerisque</td>
            </tr>
            <tr>
                <td>Tempor eu</td>
                <td>Nam eget accumsan</td>
                <td>Pellentesque</td>
                <td>Praesent dapibus iaculis</td>
                <td>In scelerisque</td>
                <td>Quisque</td>
                <td>Mauris ac gravida</td>
            </tr>
            <tr>
                <td>In scelerisque</td>
                <td>Quisque</td>
                <td>Mauris ac gravida</td>
                <td>Tempor eu</td>
                <td>Praesent dapibus iaculis</td>
                <td>Pellentesque</td>
                <td>Nam eget accumsan</td>
            </tr>
        </tbody>
    </table>
</div>

<p>Praesent dapibus iaculis libero, non maximus dui lacinia quis. Pellentesque ullamcorper porta urna, in molestie tellus. Quisque interdum venenatis tristique. Nullam et finibus felis. Sed ut rutrum velit, dapibus molestie justo. Nam eget accumsan augue. Mauris vel nunc sit amet quam efficitur posuere non quis mauris.</p>

<div class="c-data-table">
    <table>
        <thead>
            <tr>
                <td>With wrapper</td>
                <td>And smaller width</td>
                <td>Header</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tempor eu</td>
                <td>Nam eget accumsan</td>
                <td>Pellentesque</td>
            </tr>
            <tr>
                <td>Tempor eu</td>
                <td>Nam eget accumsan</td>
                <td>Pellentesque</td>
            </tr>
            <tr>
                <td>
                    <p>In scelerisque</p>
                    <p>In scelerisque</p>
                    <p>In scelerisque</p>
                </td>
                <td>
                    <h2>Quisque</h2>
                    <p>In scelerisque</p>
                    <p>In scelerisque</p>
                </td>
                <td>
                    <p>In scelerisque</p>
                    <ul>
                        <li>Mauris ac gravida</li>
                        <li>Mauris ac gravida</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<p>Praesent dapibus iaculis libero, non maximus dui lacinia quis. Pellentesque ullamcorper porta urna, in molestie tellus. Quisque interdum venenatis tristique. Nullam et finibus felis. Sed ut rutrum velit, dapibus molestie justo. Nam eget accumsan augue. Mauris vel nunc sit amet quam efficitur posuere non quis mauris.</p>

<h2>HTML5 Video Example</h2>

<video width="320" height="240" controls>
    <source src="https://cu-media.s3.amazonaws.com/videos/cu-flyby.mp4" type="video/mp4">
    <source src="https://cu-media.s3.amazonaws.com/videos/cu-flyby.ogv" type="video/ogg">
    Your browser does not support the video tag.
</video>

<p>Praesent dapibus iaculis libero, non maximus dui lacinia quis. Pellentesque ullamcorper porta urna, in molestie tellus. Quisque interdum venenatis tristique. Nullam et finibus felis. Sed ut rutrum velit, dapibus molestie justo. Nam eget accumsan augue. Mauris vel nunc sit amet quam efficitur posuere non quis mauris.</p>

<h2>YouTube Embed with Video Wrapper</h2>

<div class="c-video">
    <iframe width="500" height="281" src="https://www.youtube.com/embed/ngElkyQ6Rhs?feature=oembed&rel=0&showinfo=0" frameborder="0" allowfullscreen=""></iframe>
</div>

<p>Duis lobortis porta commodo. Proin rutrum sed magna egestas ultricies. In scelerisque libero quam, in condimentum est tempus ut. Vivamus dui arcu, pretium laoreet aliquet a, tempor eu tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pretium odio id ex luctus efficitur. Mauris ac gravida nulla.</p>
<p>Duis lobortis porta commodo. Proin rutrum sed magna egestas ultricies. In scelerisque libero quam, in condimentum est tempus ut. Vivamus dui arcu, pretium laoreet aliquet a, tempor eu tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pretium odio id ex luctus efficitur. Mauris ac gravida nulla.</p>

<h2>Audio Embed</h2>

<p>Audio with a single source file</p>

<audio src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/test.mp3" controls>
  Your browser does not support the <code>audio</code> element.
</audio>

<p>Audio with a multiple source files</p>

<audio controls>
    <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/test.mp3" type="audio/mpeg">
    <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/audio.ogg" type="audio/ogg">
    Your browser does not support HTML5 audio.
</audio>

<p>Lorem ipsum dolor sit amet, <a href="#">Mauris ac gravida</a> consectetur adipiscing elit. Ut quis nulla eu nulla tincidunt varius a fringilla justo. Integer elit leo, semper et lorem sit amet, feugiat congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>

<!-- Large Images Start -->

<h2>Large Images</h2>
<p>Curabitur cursus viverra neque et aliquam. Duis sit amet leo libero. Etiam non velit odio. Etiam ornare, felis ut congue viverra, nisl lectus commodo mi, vel scelerisque orci nisl nec ante. Nam posuere nisl id auctor posuere. Mauris porttitor tempus nisi et cursus. Duis a eleifend dolor, et molestie eros. Etiam dolor felis, tristique non lacus nec, dapibus semper dolor.</p>

<h3>No Alignment, No Caption, Wrapped in P tag</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p><img src="https://cu-raven.s3.amazonaws.com/assets/img/raven/img1.jpg" alt="" width="1200" height="625" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1.jpg 1200w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-360x188.jpg 360w" sizes="(max-width: 1200px) 100vw, 1200px"></p>

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<h3>No Alignment, No Caption, Not Wrapped in P tag</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1.jpg" alt="" width="1200" height="625" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1.jpg 1200w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-360x188.jpg 360w" sizes="(max-width: 1200px) 100vw, 1200px">

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<h3>Using HTML5 Figure &amp; Figcaption</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<figure class="c-imagecaption">
    <img src="http://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1.jpg" alt="" width="1200" height="625" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1.jpg 1200w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1-360x188.jpg 360w" sizes="(max-width: 1200px) 100vw, 1200px">
    <figcaption>In risus eros, auctor vel cursus a, ultricies vulputate massa. Sed sollicitudin augue id risus lacinia, placerat euismod sapien blandit.</figcaption>
</figure>

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<!-- Large Images End -->

<!-- Small Images No Alignment Start -->

<h2>Small Images: No Alignment</h2>
<p>Curabitur cursus viverra neque et aliquam. Duis sit amet leo libero. Etiam non velit odio. Etiam ornare, felis ut congue viverra, nisl lectus commodo mi, vel scelerisque orci nisl nec ante. Nam posuere nisl id auctor posuere. Mauris porttitor tempus nisi et cursus. Duis a eleifend dolor, et molestie eros. Etiam dolor felis, tristique non lacus nec, dapibus semper dolor.</p>

<h3>No Alignment, No Caption, Wrapped in P tag</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p><img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px"></p>

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<h3>No Alignment, No Caption, Not Wrapped in P tag</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<h3>Using HTML5 Figure &amp; Figcaption</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<figure class="c-imagecaption">
    <img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">
    <figcaption>In risus eros, auctor vel cursus a, ultricies vulputate massa. Sed sollicitudin augue id risus lacinia, placerat euismod sapien blandit.</figcaption>
</figure>

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<!-- Small Images No Alignment End -->

<!-- Small Images Left Alignment Start -->

<h2>Small Images: Left Align</h2>
<p>Curabitur cursus viverra neque et aliquam. Duis sit amet leo libero. Etiam non velit odio. Etiam ornare, felis ut congue viverra, nisl lectus commodo mi, vel scelerisque orci nisl nec ante. Nam posuere nisl id auctor posuere. Mauris porttitor tempus nisi et cursus. Duis a eleifend dolor, et molestie eros. Etiam dolor felis, tristique non lacus nec, dapibus semper dolor.</p>

<h3>Left Alignment, No Caption, Wrapped in P tag</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p><img class="u-img-left" src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px"></p>

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<h3>Left Alignment, No Caption, Not Wrapped in P tag</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<img class="u-img-left" src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<h3>Using HTML5 Figure &amp; Figcaption</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<figure class="c-imagecaption u-img-left">
    <img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">
    <figcaption>In risus eros, auctor vel cursus a, ultricies vulputate massa. Sed sollicitudin augue id risus lacinia, placerat euismod sapien blandit.</figcaption>
</figure>

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<!-- Small Images Left Alignment End -->

<!-- Small Images Right Alignment Start -->

<h2>Small Images: Right Align</h2>
<p>Curabitur cursus viverra neque et aliquam. Duis sit amet leo libero. Etiam non velit odio. Etiam ornare, felis ut congue viverra, nisl lectus commodo mi, vel scelerisque orci nisl nec ante. Nam posuere nisl id auctor posuere. Mauris porttitor tempus nisi et cursus. Duis a eleifend dolor, et molestie eros. Etiam dolor felis, tristique non lacus nec, dapibus semper dolor.</p>

<h3>Right Alignment, No Caption, Wrapped in P tag</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p><img class="u-img-right" src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px"></p>

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<h3>Right Alignment, No Caption, Not Wrapped in P tag</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<img class="u-img-right" src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<h3>Using HTML5 Figure &amp; Figcaption</h3>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

<figure class="c-imagecaption u-img-right">
    <img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">
    <figcaption>In risus eros, auctor vel cursus a, ultricies vulputate massa. Sed sollicitudin augue id risus lacinia, placerat euismod sapien blandit.</figcaption>
</figure>

<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
<p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

### QA code

```html
<div class="u-block u-block--s">
    <h2>Header 2</h2>
    <p>Lorem ipsum dolor sit amet, <a href="#">Mauris ac gravida</a> consectetur adipiscing elit. Ut quis nulla eu nulla tincidunt varius a fringilla justo. Integer elit leo, semper et lorem sit amet, feugiat congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>
    <p>Lorem ipsum dolor sit amet, <a href="#">Mauris ac gravida</a> consectetur adipiscing elit. Ut quis nulla eu nulla tincidunt varius a fringilla justo. Integer elit leo, semper et lorem sit amet, feugiat congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>
    <p>Lorem ipsum dolor sit amet, <a href="#">Mauris ac gravida</a> consectetur adipiscing elit. Ut quis nulla eu nulla tincidunt varius a fringilla justo. Integer elit leo, semper et lorem sit amet, feugiat congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>

    <h3>Header 3</h3>

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <h4>Header 4</h4>

    <p>Nam ligula purus, pretium eu erat finibus, varius consectetur augue. Phasellus ac nisi in lorem imperdiet tincidunt. Nullam quam odio, placerat in urna vitae, feugiat cursus mauris. Proin viverra felis tellus, vitae dapibus tortor posuere vitae. Integer vehicula leo a enim tempus venenatis. Aenean commodo rutrum neque, ut commodo velit egestas vitae. Vestibulum bibendum suscipit metus, sit amet tempor arcu tristique sit amet.</p>

    <h1>Header 1</h1>

    <h2>Header 2</h2>

    <p>Vivamus non magna vitae est mollis aliquet. Sed pulvinar urna sit amet turpis semper, vehicula facilisis massa blandit. Vestibulum nec mollis lectus. Proin nec sagittis tortor. Sed fermentum nulla risus, eget facilisis erat pharetra vel. In elementum maximus tincidunt. Vestibulum ut accumsan tortor, et hendrerit odio. Quisque fringilla odio in risus aliquam, et dapibus nisl convallis. Praesent mollis elit non leo imperdiet, a semper tortor dictum.</p>

    <h2>Header 2</h2>

    <h3>Header 3</h3>

    <p>Vivamus non magna vitae est mollis aliquet. Sed pulvinar urna sit amet turpis semper, vehicula facilisis massa blandit. Vestibulum nec mollis lectus. Proin nec sagittis tortor. Sed fermentum nulla risus, eget facilisis erat pharetra vel. In elementum maximus tincidunt. Vestibulum ut accumsan tortor, et hendrerit odio. Quisque fringilla odio in risus aliquam, et dapibus nisl convallis. Praesent mollis elit non leo imperdiet, a semper tortor dictum.</p>

    <h3>Header 3</h3>

    <h4>Header 4</h4>

    <p>Praesent at velit a justo condimentum mattis. In mattis blandit mauris. Phasellus tristique ut erat non imperdiet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam egestas metus libero, vel volutpat urna tempor a. Suspendisse nec ante in diam dictum tempor nec accumsan tortor. Nulla sodales, libero at auctor volutpat, lacus nisi commodo enim, ut euismod nisi ligula non nisi. Nunc porta neque et libero finibus, non lacinia risus faucibus.</p>

    <ul>
        <li>Fusce efficitur, nulla laoreet pellentesque bibendum, felis dolor lacinia quam, at pulvinar ex eros ac sapien.</li>
        <li>Suspendisse molestie quis dui at ullamcorper.
            <ul>
                <li>Sed finibus eleifend ultrices.</li>
                <li>Vestibulum non leo hendrerit massa blandit rhoncus non et elit.</li>
                <li>Curabitur eleifend metus justo, sed sollicitudin magna finibus sed.</li>
            </ul>
        </li>
        <li>Vestibulum luctus magna sed erat vestibulum hendrerit.</li>
        <li>Curabitur varius dignissim sem, non feugiat est ullamcorper ac.</li>
        <li>Phasellus porttitor tempor dui ut tincidunt. Ut ut porta felis.
            <ul>
                <li>Duis ornare interdum convallis.</li>
                <li>Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac arcu orci.</li>
                <li>Aenean vel lobortis lorem.</li>
            </ul>
        </li>
        <li>Duis pulvinar commodo arcu, non dignissim diam maximus non.</li>
        <li>Nam euismod, enim nec elementum tristique, nulla arcu.</li>
        <li>Cursus lacus, efficitur dapibus velit dui non lacus.</li>
    </ul>

    <p>Vivamus ut odio eu sapien posuere imperdiet nec et nisi. Praesent erat lacus, pulvinar ac odio sed, egestas elementum mi. Praesent elementum dapibus elit, in tincidunt urna ultrices sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ante vitae nibh viverra, et pulvinar metus aliquam.</p>

    <ol>
        <li>Fusce efficitur, nulla laoreet pellentesque bibendum, felis dolor lacinia quam, at pulvinar ex eros ac sapien.</li>
        <li>Suspendisse molestie quis dui at ullamcorper.
            <ol>
                <li>Sed finibus eleifend ultrices.</li>
                <li>Vestibulum non leo hendrerit massa blandit rhoncus non et elit.</li>
                <li>Curabitur eleifend metus justo, sed sollicitudin magna finibus sed.</li>
            </ol>
        </li>
        <li>Vestibulum luctus magna sed erat vestibulum hendrerit.</li>
        <li>Curabitur varius dignissim sem, non feugiat est ullamcorper ac.</li>
        <li>Phasellus porttitor tempor dui ut tincidunt. Ut ut porta felis.
            <ol>
                <li>Duis ornare interdum convallis.</li>
                <li>Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac arcu orci.</li>
                <li>Aenean vel lobortis lorem.</li>
            </ol>
        </li>
        <li>Duis pulvinar commodo arcu, non dignissim diam maximus non.</li>
        <li>Nam euismod, enim nec elementum tristique, nulla arcu.</li>
        <li>Cursus lacus, efficitur dapibus velit dui non lacus.</li>
    </ol>

    <p>Nullam faucibus vehicula massa. Sed in ipsum elementum, porta sem id, scelerisque nibh. Sed sed eros eget ipsum vestibulum rhoncus. Mauris a odio ut leo malesuada facilisis. Ut quis lobortis ipsum. Donec maximus velit sit amet commodo sollicitudin. Etiam mattis metus non porttitor bibendum. Mauris pharetra dui ut pretium porttitor. In nisl erat, maximus eget iaculis nec, mollis in massa.</p>

    <blockquote>
        <p>Cras cursus arcu eu magna tristique iaculis. Morbi elementum, ex sed dapibus fermentum, metus magna faucibus odio, ut euismod eros tellus sed risus. Nullam sagittis lacus sit amet nulla lacinia, ut facilisis leo imperdiet. Nunc ac dolor id elit consectetur tincidunt.</p>
    </blockquote>

    <p>Donec sodales commodo enim in varius. Maecenas accumsan dolor sed luctus venenatis. Fusce mi magna, lobortis ac iaculis quis, condimentum eu lorem. Sed elementum quam vitae eros sollicitudin, ac faucibus arcu vehicula. Curabitur molestie augue nibh, sit amet fermentum velit viverra nec.</p>

    <table>
        <thead>
            <tr>
                <td>No wrapper</td>
                <td>And larger width</td>
                <td>Header</td>
                <td>Header</td>
                <td>Header</td>
                <td>Header</td>
                <td>Header</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Praesent dapibus iaculis</td>
                <td>Quisque</td>
                <td>Nam eget accumsan</td>
                <td>In scelerisque</td>
                <td><a href="#">Mauris ac gravida</a></td>
                <td>Tempor eu</td>
                <td>Pellentesque</td>
            </tr>
            <tr>
                <td>Pellentesque</td>
                <td>Mauris ac gravida</td>
                <td>In scelerisque</td>
                <td>Quisque</td>
                <td>Nam eget accumsan</td>
                <td>Praesent dapibus iaculis</td>
                <td>Tempor eu</td>
            </tr>
            <tr>
                <td>Nam eget accumsan</td>
                <td><a href="#">Mauris ac gravida</a></td>
                <td>Tempor eu</td>
                <td>Mauris ac gravida</td>
                <td>Pellentesque</td>
                <td>Quisque</td>
                <td>In scelerisque</td>
            </tr>
            <tr>
                <td>Tempor eu</td>
                <td>Nam eget accumsan</td>
                <td>Pellentesque</td>
                <td>Praesent dapibus iaculis</td>
                <td>In scelerisque</td>
                <td>Quisque</td>
                <td>Mauris ac gravida</td>
            </tr>
            <tr>
                <td>In scelerisque</td>
                <td>Quisque</td>
                <td>Mauris ac gravida</td>
                <td>Tempor eu</td>
                <td>Praesent dapibus iaculis</td>
                <td>Pellentesque</td>
                <td>Nam eget accumsan</td>
            </tr>
        </tbody>
    </table>

    <p>Praesent dapibus iaculis libero, non maximus dui lacinia quis. Pellentesque ullamcorper porta urna, in molestie tellus. Quisque interdum venenatis tristique. Nullam et finibus felis. Sed ut rutrum velit, dapibus molestie justo. Nam eget accumsan augue. Mauris vel nunc sit amet quam efficitur posuere non quis mauris.</p>

    <table>
        <thead>
            <tr>
                <td>No wrapper</td>
                <td>And smaller width</td>
                <td>Header</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tempor eu</td>
                <td>Nam eget accumsan</td>
                <td>Pellentesque</td>
            </tr>
            <tr>
                <td>Tempor eu</td>
                <td>Nam eget accumsan</td>
                <td>Pellentesque</td>
            </tr>
            <tr>
                <td>
                    <p>In scelerisque</p>
                    <p>In scelerisque</p>
                    <p>In scelerisque</p>
                </td>
                <td>
                    <h2>Quisque</h2>
                    <p>In scelerisque</p>
                    <p>In scelerisque</p>
                </td>
                <td>
                    <p>In scelerisque</p>
                    <ul>
                        <li>Mauris ac gravida</li>
                        <li>Mauris ac gravida</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>

    <p>Praesent dapibus iaculis libero, non maximus dui lacinia quis. Pellentesque ullamcorper porta urna, in molestie tellus. Quisque interdum venenatis tristique. Nullam et finibus felis. Sed ut rutrum velit, dapibus molestie justo. Nam eget accumsan augue. Mauris vel nunc sit amet quam efficitur posuere non quis mauris.</p>

    <div class="c-data-table">
        <table>
            <thead>
                <tr>
                    <td>With wrapper</td>
                    <td>And larger width</td>
                    <td>Header</td>
                    <td>Header</td>
                    <td>Header</td>
                    <td>Header</td>
                    <td>Header</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Praesent dapibus iaculis</td>
                    <td>Quisque</td>
                    <td>Nam eget accumsan</td>
                    <td>In scelerisque</td>
                    <td><a href="#">Mauris ac gravida</a></td>
                    <td>Tempor eu</td>
                    <td>Pellentesque</td>
                </tr>
                <tr>
                    <td>Pellentesque</td>
                    <td>Mauris ac gravida</td>
                    <td>In scelerisque</td>
                    <td>Quisque</td>
                    <td>Nam eget accumsan</td>
                    <td>Praesent dapibus iaculis</td>
                    <td>Tempor eu</td>
                </tr>
                <tr>
                    <td>Nam eget accumsan</td>
                    <td>Praesent dapibus iaculis</td>
                    <td>Tempor eu</td>
                    <td>&nbsp;Mauris ac gravida</td>
                    <td>Pellentesque</td>
                    <td>Quisque</td>
                    <td>In scelerisque</td>
                </tr>
                <tr>
                    <td>Tempor eu</td>
                    <td>Nam eget accumsan</td>
                    <td>Pellentesque</td>
                    <td>Praesent dapibus iaculis</td>
                    <td>In scelerisque</td>
                    <td>Quisque</td>
                    <td>Mauris ac gravida</td>
                </tr>
                <tr>
                    <td>In scelerisque</td>
                    <td>Quisque</td>
                    <td>Mauris ac gravida</td>
                    <td>Tempor eu</td>
                    <td>Praesent dapibus iaculis</td>
                    <td>Pellentesque</td>
                    <td>Nam eget accumsan</td>
                </tr>
            </tbody>
        </table>
    </div>

    <p>Praesent dapibus iaculis libero, non maximus dui lacinia quis. Pellentesque ullamcorper porta urna, in molestie tellus. Quisque interdum venenatis tristique. Nullam et finibus felis. Sed ut rutrum velit, dapibus molestie justo. Nam eget accumsan augue. Mauris vel nunc sit amet quam efficitur posuere non quis mauris.</p>

    <div class="c-data-table">
        <table>
            <thead>
                <tr>
                    <td>With wrapper</td>
                    <td>And smaller width</td>
                    <td>Header</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tempor eu</td>
                    <td>Nam eget accumsan</td>
                    <td>Pellentesque</td>
                </tr>
                <tr>
                    <td>Tempor eu</td>
                    <td>Nam eget accumsan</td>
                    <td>Pellentesque</td>
                </tr>
                <tr>
                    <td>
                        <p>In scelerisque</p>
                        <p>In scelerisque</p>
                        <p>In scelerisque</p>
                    </td>
                    <td>
                        <h2>Quisque</h2>
                        <p>In scelerisque</p>
                        <p>In scelerisque</p>
                    </td>
                    <td>
                        <p>In scelerisque</p>
                        <ul>
                            <li>Mauris ac gravida</li>
                            <li>Mauris ac gravida</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <p>Praesent dapibus iaculis libero, non maximus dui lacinia quis. Pellentesque ullamcorper porta urna, in molestie tellus. Quisque interdum venenatis tristique. Nullam et finibus felis. Sed ut rutrum velit, dapibus molestie justo. Nam eget accumsan augue. Mauris vel nunc sit amet quam efficitur posuere non quis mauris.</p>

    <h2>HTML5 Video Example</h2>

    <video width="320" height="240" controls>
        <source src="https://cu-media.s3.amazonaws.com/videos/cu-flyby.mp4" type="video/mp4">
        <source src="https://cu-media.s3.amazonaws.com/videos/cu-flyby.ogv" type="video/ogg">
        Your browser does not support the video tag.
    </video>

    <p>Praesent dapibus iaculis libero, non maximus dui lacinia quis. Pellentesque ullamcorper porta urna, in molestie tellus. Quisque interdum venenatis tristique. Nullam et finibus felis. Sed ut rutrum velit, dapibus molestie justo. Nam eget accumsan augue. Mauris vel nunc sit amet quam efficitur posuere non quis mauris.</p>

    <h2>YouTube Embed with Video Wrapper</h2>

    <div class="c-video">
        <iframe width="500" height="281" src="https://www.youtube.com/embed/ngElkyQ6Rhs?feature=oembed&rel=0&showinfo=0" frameborder="0" allowfullscreen=""></iframe>
    </div>

    <p>Duis lobortis porta commodo. Proin rutrum sed magna egestas ultricies. In scelerisque libero quam, in condimentum est tempus ut. Vivamus dui arcu, pretium laoreet aliquet a, tempor eu tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pretium odio id ex luctus efficitur. Mauris ac gravida nulla.</p>
    <p>Duis lobortis porta commodo. Proin rutrum sed magna egestas ultricies. In scelerisque libero quam, in condimentum est tempus ut. Vivamus dui arcu, pretium laoreet aliquet a, tempor eu tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pretium odio id ex luctus efficitur. Mauris ac gravida nulla.</p>

    <h2>Audio Embed</h2>

    <p>Audio with a single source file</p>

    <audio src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/test.mp3" controls>
      Your browser does not support the <code>audio</code> element.
    </audio>

    <p>Audio with a multiple source files</p>

    <audio controls>
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/test.mp3" type="audio/mpeg">
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15309/audio.ogg" type="audio/ogg">
        Your browser does not support HTML5 audio.
    </audio>

    <p>Lorem ipsum dolor sit amet, <a href="#">Mauris ac gravida</a> consectetur adipiscing elit. Ut quis nulla eu nulla tincidunt varius a fringilla justo. Integer elit leo, semper et lorem sit amet, feugiat congue ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin gravida, ex sit amet pellentesque fermentum, purus massa facilisis dolor, et porta magna libero a velit.</p>

    <!-- Large Images Start -->

    <h2>Large Images</h2>
    <p>Curabitur cursus viverra neque et aliquam. Duis sit amet leo libero. Etiam non velit odio. Etiam ornare, felis ut congue viverra, nisl lectus commodo mi, vel scelerisque orci nisl nec ante. Nam posuere nisl id auctor posuere. Mauris porttitor tempus nisi et cursus. Duis a eleifend dolor, et molestie eros. Etiam dolor felis, tristique non lacus nec, dapibus semper dolor.</p>

    <h3>No Alignment, No Caption, Wrapped in P tag</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p><img src="https://cu-raven.s3.amazonaws.com/assets/img/raven/img1.jpg" alt="" width="1200" height="625" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1.jpg 1200w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-360x188.jpg 360w" sizes="(max-width: 1200px) 100vw, 1200px"></p>

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <h3>No Alignment, No Caption, Not Wrapped in P tag</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1.jpg" alt="" width="1200" height="625" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1.jpg 1200w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full1-360x188.jpg 360w" sizes="(max-width: 1200px) 100vw, 1200px">

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <h3>Using HTML5 Figure &amp; Figcaption</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <figure class="c-imagecaption">
        <img src="http://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1.jpg" alt="" width="1200" height="625" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1.jpg 1200w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-full-caption1-360x188.jpg 360w" sizes="(max-width: 1200px) 100vw, 1200px">
        <figcaption>In risus eros, auctor vel cursus a, ultricies vulputate massa. Sed sollicitudin augue id risus lacinia, placerat euismod sapien blandit.</figcaption>
    </figure>

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <!-- Large Images End -->

    <!-- Small Images No Alignment Start -->

    <h2>Small Images: No Alignment</h2>
    <p>Curabitur cursus viverra neque et aliquam. Duis sit amet leo libero. Etiam non velit odio. Etiam ornare, felis ut congue viverra, nisl lectus commodo mi, vel scelerisque orci nisl nec ante. Nam posuere nisl id auctor posuere. Mauris porttitor tempus nisi et cursus. Duis a eleifend dolor, et molestie eros. Etiam dolor felis, tristique non lacus nec, dapibus semper dolor.</p>

    <h3>No Alignment, No Caption, Wrapped in P tag</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p><img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px"></p>

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <h3>No Alignment, No Caption, Not Wrapped in P tag</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <h3>Using HTML5 Figure &amp; Figcaption</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <figure class="c-imagecaption">
        <img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">
        <figcaption>In risus eros, auctor vel cursus a, ultricies vulputate massa. Sed sollicitudin augue id risus lacinia, placerat euismod sapien blandit.</figcaption>
    </figure>

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <!-- Small Images No Alignment End -->

    <!-- Small Images Left Alignment Start -->

    <h2>Small Images: Left Align</h2>
    <p>Curabitur cursus viverra neque et aliquam. Duis sit amet leo libero. Etiam non velit odio. Etiam ornare, felis ut congue viverra, nisl lectus commodo mi, vel scelerisque orci nisl nec ante. Nam posuere nisl id auctor posuere. Mauris porttitor tempus nisi et cursus. Duis a eleifend dolor, et molestie eros. Etiam dolor felis, tristique non lacus nec, dapibus semper dolor.</p>

    <h3>Left Alignment, No Caption, Wrapped in P tag</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p><img class="u-img-left" src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px"></p>

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <h3>Left Alignment, No Caption, Not Wrapped in P tag</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <img class="u-img-left" src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <h3>Using HTML5 Figure &amp; Figcaption</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <figure class="c-imagecaption u-img-left">
        <img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" width="400" height="208" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">
        <figcaption>In risus eros, auctor vel cursus a, ultricies vulputate massa. Sed sollicitudin augue id risus lacinia, placerat euismod sapien blandit.</figcaption>
    </figure>

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <!-- Small Images Left Alignment End -->

    <!-- Small Images Right Alignment Start -->

    <h2>Small Images: Right Align</h2>
    <p>Curabitur cursus viverra neque et aliquam. Duis sit amet leo libero. Etiam non velit odio. Etiam ornare, felis ut congue viverra, nisl lectus commodo mi, vel scelerisque orci nisl nec ante. Nam posuere nisl id auctor posuere. Mauris porttitor tempus nisi et cursus. Duis a eleifend dolor, et molestie eros. Etiam dolor felis, tristique non lacus nec, dapibus semper dolor.</p>

    <h3>Right Alignment, No Caption, Wrapped in P tag</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p><img class="u-img-right" src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px"></p>

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <h3>Right Alignment, No Caption, Not Wrapped in P tag</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <img class="u-img-right" src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <h3>Using HTML5 Figure &amp; Figcaption</h3>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>

    <figure class="c-imagecaption u-img-right">
        <img src="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg" alt="" srcset="https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-400x208.jpg 400w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-160x83.jpg 160w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-240x125.jpg 240w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-768x400.jpg 768w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1-360x188.jpg 360w, https://devsite.carleton.ca/dev-cms/wp-content/uploads/delme-large1.jpg 1200w" sizes="(max-width: 400px) 100vw, 400px">
        <figcaption>In risus eros, auctor vel cursus a, ultricies vulputate massa. Sed sollicitudin augue id risus lacinia, placerat euismod sapien blandit.</figcaption>
    </figure>

    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
    <p>Cras mollis purus est, ut volutpat purus fermentum porttitor. Quisque nec ipsum facilisis, aliquet lacus aliquam, tincidunt est. Quisque nibh lectus, tempus in ipsum eget, venenatis congue elit. Morbi dictum sollicitudin elit quis pharetra. Sed suscipit dui est, eget tempus orci dictum at.</p>
</div>
```
