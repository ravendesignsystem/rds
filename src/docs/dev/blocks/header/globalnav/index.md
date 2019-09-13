---
layout: docs
subsite: dev
title: Global Nav
banner:
  breadcrumbs:
    grandparent: Blocks
    parent: Header
---
The Global Nav block provides global navigation for carleton.ca.
{% include 'inc' with {'block': 'globalnav'} %}
```html
<div class="u-block u-block--full">
    <div class="b-globalnav">
        <ul>
            <li><a href="https://carleton.ca/">Carleton.ca</a></li>
            <li><a href="https://carleton.ca/about/">About</a></li>
            <li><a href="https://carleton.ca/prospective/">Admissions</a>
                <ul>
                    <li><a href="https://admissions.carleton.ca/">Undergraduate</a></li>
                    <li><a href="https://graduate.carleton.ca/">Graduate</a></li>
                </ul>
            </li>
            <li><a class="globalnav__item-link" href="https://carleton.ca/academics/">Academics</a></li>
            <li><a class="globalnav__item-link" href="https://research.carleton.ca/">Research</a></li>
            <li><a class="globalnav__item-link" href="https://carleton.ca/campus/">Campus</a></li>
            <li><a href="https://carleton.ca/prospective/">Future Students</a>
                <ul>
                    <li><a href="https://admissions.carleton.ca/">Undergraduate</a></li>
                    <li><a href="https://graduate.carleton.ca/">Graduate</a></li>
                </ul>
            </li>
            <li><a href="https://students.carleton.ca/">Current Students</a>
                <ul>
                    <li><a href="https://students.carleton.ca/">Undergraduate</a></li>
                    <li><a href="https://gradstudents.carleton.ca/">Graduate</a></li>
                </ul>
            </li>
            <li><a href="https://carleton.ca/me/">Faculty/Staff</a></li>
            <li><a href="https://alumni.carleton.ca/">Alumni</a></li>
        </ul>
    </div>
</div>
```

## Implementation Notes

This block does not have data props and should be implemented as a global include.

This block should be used when the primary navigation used for your site is the left aside vertical nav.
