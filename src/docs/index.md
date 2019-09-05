---
layout: docs
title: Raven Design System (RDS)
content: none
masthead: nostick
banner: none
homepage: true
---
{% from "textimg/textimg.twig" import textimg %}
{{ textimg (
    {
        blockColor: 'black',
        blockSize: 'l',
        content: '<p>RDS, Carleton University\’s design system, is a living digital organism uniting campus wide teams around a common visual language. <a href="dev/">Learn more…</a></p>',
        heading: 'Raven Design System',
        img: 'https://via.placeholder.com/640x480',
        imgAlt: '',
        modifier: 'b-docs-textimg'
    }
) }}

{% include 'inc' with {'theme': 'docs', 'block': 'gridhome'} %}
