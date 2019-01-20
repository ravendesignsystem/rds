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
{# endBlock #}





