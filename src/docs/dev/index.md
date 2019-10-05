---
layout: docs
subsite: dev
title: RDS Developer Docs
menu: dev
banner:
  img:
    img_url: https://cu-raven.s3.amazonaws.com/assets/img/photos/nevermore.jpg
    img_url_s: https://cu-raven.s3.amazonaws.com/assets/img/photos/nevermore-s.jpg
    img_opacity: light
---
## Getting started

- [Get started]({{site.url}}dev/getting-started/)
- [Starter Packages - stub]({{site.url}}dev/getting-started/starter-packages/)
- [Recipes and Patterns - stub]({{site.url}}dev/getting-started/recipes-patterns/)


## Main concepts

- [Main concepts of RDS]({{site.url}}dev/main-concepts/)
- [Blocks overview]({{site.url}}dev/main-concepts/blocks-overview/)
- [Components overview]({{site.url}}dev/main-concepts/components)
- [Layouts]({{site.url}}dev/main-concepts/layouts/)
- [Themes]({{site.url}}dev/main-concepts/themes/)
- [Spacing]({{site.url}}dev/main-concepts/spacing/)

## Blocks

**Header Blocks**

- {%include "link" with {'block': 'Alert Header'} %}
- {%include "link" with {'block': 'Banner'} %}
- {%include "link" with {'block': 'Masthead'} %}

**Main Blocks**

- {%include "link" with {'block': 'Card Grid'} %}
- {%include "link" with {'block': 'Content'} %}
- {%include "link" with {'block': 'Details'} %}
- {%include "link" with {'block': 'Listing'} %}
- {%include "link" with {'block': 'Text Image'} %}

**Aside Blocks**

- {%include "link" with {'block': 'Sidebar'} %}

**Dialogue Blocks**

- {%include "link" with {'block': 'Login'} %}
- {%include "link" with {'block': 'Search'} %}

**Footer Blocks**

- {%include "link" with {'block': 'Footer Brand'} %}
- {%include "link" with {'block': 'Footer Simple'} %}
- {%include "link" with {'block': 'Footer Sitemap'} %}

## Components

**Content components**

Add content within the {%include "link" with {'block': 'Content', 'Block': true} %} block using the components below:

- [Accordion]({{site.url}}dev/components/accordion)
- [Form]({{site.url}}dev/components/form)
- [Image Caption]({{site.url}}dev/components/imgcaption)
- [Table]({{site.url}}dev/components/table)
- [Video]({{site.url}}dev/components/video)

**Block dev components**

Create DRY blocks using the components below:

- [Alert]({{site.url}}dev/components/alerts/alert/)
- [Badge]({{site.url}}dev/components/alerts/badge/)
- [Button CTA]({{site.url}}dev/components/buttons/buttoncta/)
- [Button Social]({{site.url}}dev/components/buttons/buttonsocial/)
- [Card]({{site.url}}dev/components/cards/card/)
- [Icons]({{site.url}}dev/components/icons/)
- [Search Field]({{site.url}}dev/components/searchfield/)
- {%include "link" with {'component': 'Menu Popup'} %}


## Custom theming

- [Introduction]({{site.url}}dev/custom-theming/)
- [Installing RDS]({{site.url}}dev/custom-theming/installing-rds/)
- [SASS]({{site.url}}dev/custom-theming/sass/)
- [Creating custom blocks]({{site.url}}dev/custom-theming/installing-rds/)
- [Layouts]({{site.url}}dev/custom-theming/layouts/)
- [Icon system]({{site.url}}dev/custom-theming/icon-system/)
- [Grid system]({{site.url}}dev/custom-theming/grid-system/)


## Examples

- [RDS examples on Codepen](https://codepen.io/cuweb/debug/mdbwyEd)

{% include 'close' %}
{% from 'listing/listing.twig' import listing %}
{{ listing (
    {
       blockColor: "white",
            blockHeading: "For review",
            items:
            [
                {
                    title: "Google Dev Docs: Abberviations",
                    url: "https://developers.google.com/style/abbreviations",
                },
                {
                    title: "Vue Design System Docs",
                    url: "https://github.com/viljamis/vue-design-system/wiki"
                }
            ]
    }
) }}



