---
layout: base
subsite: dev
content: true
title: CMS Global Nav
banner:
  breadcrumbs:
    grandparent: Blocks
    parent: Header
meta:
    version: 1.0.0
    theme: CMS
    handle: globalnav
    type: Header block
    path: cms/blocks/header/globalnav/
    ff: Full
    widths: N/A - full
    heading: N/A
    status: Under review
    restricted: header section
dependencies:
    js: N/A
    selector: b-globalnav
    restricted: div
    maxwidth: n/a
wild: n/a
alternatives: n/a
---
The Global Nav block is a required include block that appears at the top of all CMS theme templates. This block provides global navigation for carleton.ca.

{%include 'rds/inc/close.twig'%}
{%include 'global-nav/global-nav.twig'%}
{%include 'rds/inc/open-b-content.twig'%}

```html
<div class="u-block u-block--full">
    <div class="b-globalnav">
        <ul class="globalnav__list">
            <li class="globalnav__item"><a class="globalnav__item-link" href="https://carleton.ca/">Carleton.ca</a></li>
            <li class="globalnav__item"><a class="globalnav__item-link" href="https://carleton.ca/about/">About</a></li>
            <li class="globalnav__item">
                <span class="globalnav__item-expand"><a href="https://carleton.ca/prospective/">Admissions</a></span>
                <ul class="globalnav__item-submenu">
                    <li><a href="https://admissions.carleton.ca/">Undergraduate</a></li>
                    <li><a href="https://graduate.carleton.ca/">Graduate</a></li>
                </ul>
            </li>
            <li class="globalnav__item"><a class="globalnav__item-link" href="https://carleton.ca/academics/">Academics</a></li>
            <li class="globalnav__item"><a class="globalnav__item-link" href="https://research.carleton.ca/">Research</a></li>
            <li class="globalnav__item globalnav__item--divider"><a class="globalnav__item-link" href="https://carleton.ca/campus/">Campus</a></li>
            <li class="globalnav__item">
                <span class="globalnav__item-expand"><a href="https://carleton.ca/prospective/">Future Students</a></span>
                <ul class="globalnav__item-submenu">
                    <li><a href="https://admissions.carleton.ca/">Undergraduate</a></li>
                    <li><a href="https://graduate.carleton.ca/">Graduate</a></li>
                </ul>
            </li>
            <li class="globalnav__item">
                <span class="globalnav__item-expand"><a href="https://students.carleton.ca/">Current Students</a></span>
                <ul class="globalnav__item-submenu">
                    <li><a href="https://students.carleton.ca/">Undergraduate</a></li>
                    <li><a href="https://gradstudents.carleton.ca/">Graduate</a></li>
                </ul>
            </li>
            <li class="globalnav__item"><a class="globalnav__item-link" href="https://carleton.ca/me/">Faculty/Staff</a></li>
            <li class="globalnav__item"><a class="globalnav__item-link" href="https://alumni.carleton.ca/">Alumni</a></li>
        </ul>
    </div>
</div>
```

## Implementation Notes

This block is included with the Carleton CMS skeleton template. To avoid broken links, make sure you are using the most recent version of this block - {{page.meta.version}}.

## When To Avoid

Never. Always use this block in Carleton CMS theme templates.


