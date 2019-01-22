---
layout: base
title: Raven Design System (RDS)
banner: none
---
{# Page blocks #}
{% import 'textimg/textimg.twig' as hero %}

{# Block: Hero header.#}
{% set settings = {color: 'black'} %}
{% set data = {
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
{{ hero.textimg(settings, data, docs) }}
<div class="u-block u-block--m u-block--black">
    <div class="b-docs-gridhome u-grid u-grid--2">
        <a href="dev/">
            <div class="b-docs-gridhome__panel b-docs-gridhome__panel--dev">
                <h2>For developers</h2>
                {% include "rds/assets/img/laptop.svg" %}
            </div>
        </a>
        <div style="display: flex;flex-direction: column;min-height: 420px;">
            <a href="content/">
                <div class="b-docs-gridhome__panel b-docs-gridhome__panel--content">
                    <h2>For content creators</h2>
                    {% include "rds/assets/img/keyboard.svg" %}
                </div>
            </a>
            <div style="flex: 1;display: flex" class="b-docs-">
                <a style="display: flex" href="design/">
                    <div class="b-docs-gridhome__panel b-docs-gridhome__panel--design" style="flex: 1;margin-right: 30px;" >
                        <h2>Design & brand</h2>
                        {% include "rds/assets/img/design.svg" %}
                    </div>
                </a>
                <a style="display: flex"  href="a11y/">
                <div class="b-docs-gridhome__panel b-docs-gridhome__panel--a11y">
                <h2>Accessibility</h2>
                  {% include "icons/accessibility.svg" %}
                  </div>
                  </a>
            </div>
        </div>
    </div>
</div>





