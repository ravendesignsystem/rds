---
layout: hp-google
title: Raven Design System (RDS)
banner: none
---
[//]: # (Page blocks)

{% import 'textimg/textimg' as hero %}

[//]: # (Block: Hero header)
{% set settings = {color: 'black'} %}
{% set fields = {
    title: 'Raven Design System',
    img: {
            alt: "",
            url: ""
    },
    content: '<p>RDS, Carleton University’s design system, is a living digital organism uniting campus wide teams around a common visual language. 
              <a href="#">Learn more…</a></p>'
    } 
%}
{% set docs = {modifier: 'b-docs-textimg'} %}
{{ hero.textimg(settings, fields, docs) }}

<div class="u-block u-block--m u-block--black">
    <div class="b-docs-gridhome u-grid u-grid--2 u-grid--s1">
        <a href="dev/">
            <div class="docs-gridhome__panel docs-gridhome__panel--dev">
                <h2>For developers</h2>
                {% include "docs/assets/img/laptop.svg" %}
            </div>
        </a>
        <div class="docs-gridhome__colright">
            <a href="content/">
                <div class="docs-gridhome__panel docs-gridhome__panel--content">
                    <h2>For content creators</h2>
                    {% include "docs/assets/img/keyboard.svg" %}
                </div>
            </a>
            <div class="docs-gridhome__botrow">
                <a href="design/">
                    <div class="docs-gridhome__panel docs-gridhome__panel--design">
                        <h2>Design & brand</h2>
                        {% include "docs/assets/img/design.svg" %}
                    </div>
                </a>
                <a href="a11y/">
                    <div class="docs-gridhome__panel docs-gridhome__panel--a11y">
                    <h2>Accessibility</h2>
                    {% include "icons/accessibility.svg" %}
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
