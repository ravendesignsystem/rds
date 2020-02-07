---
layout: docs
subsite: dev
title: RDS Developer Docs
menu: dev
content: none
banner:
  img:
    img_url: https://cu-raven.s3.amazonaws.com/assets/img/photos/nevermore.jpg
    img_url_s: https://cu-raven.s3.amazonaws.com/assets/img/photos/nevermore-s.jpg
    img_opacity: light
---
{% from 'listing/listing.twig' import listing %}
{{ listing (
    {
       blockColor: "white",
            blockHeading: "Getting started",
            items:
            [
                {
                    title: "Getting started",
                    url: site.url ~ "dev/getting-started/",
                }
            ]
    }
) }}

{% from 'listing/listing.twig' import listing %}
{{ listing (
    {
       blockColor: "white",
            blockHeading: "Main concepts",
            items:
            [
                {
                    title: "Main concepts",
                    url: site.url ~ "dev/main-concepts/"
                },
                {
                    title: "Blocks overview",
                    url: site.url ~ "dev/main-concepts/blocks-overview/"
                },
                {
                    title: "Components overview",
                    url: site.url ~ "dev/components"
                },
                {
                    title: "Layouts",
                    url: site.url ~ "dev/layouts/"
                },
                {
                    title: "Themes",
                    url: site.url ~ "dev/themes"
                }
            ]
    }
) }}


{% from 'listing/listing.twig' import listing %}
{{ listing (
    {
       blockColor: "white",
            blockHeading: "Blocks",
            h3: "Header blocks",
            items:
            [
                {
                    title: "Alert Header",
                    url: site.url ~ "dev/blocks/header/alertheader/"
                },
                {
                    title: "Banner",
                    url: site.url ~ "dev/blocks/header/banner/"
                },
                {
                    title: "Masthead",
                    url: site.url ~ "dev/blocks/header/masthead/"
                },
                {
                    title: "Search",
                    url: site.url ~ "dev/blocks/dialog/search/"
                }
            ]
    }
) }}

{% from 'listing/listing.twig' import listing %}
{{ listing (
    {
       blockColor: "white",
            h3: "Main blocks",
            items:
            [
                {
                    title: "Card Grid",
                    url: site.url ~ "dev/blocks/main/cardgrid/"
                },
                {
                    title: "Content",
                    url: site.url ~ "dev/blocks/main/content/"
                },
                {
                    title: "Details",
                    url: site.url ~ "dev/blocks/main/details/"
                },
                {
                    title: "Listing",
                    url: site.url ~ "dev/blocks/main/listing/"
                },
                {
                    title: "Text Image",
                    url: site.url ~ "dev/blocks/main/textimg/"
                }
            ]
    }
) }}

{% from 'listing/listing.twig' import listing %}
{{ listing (
    {
       blockColor: "white",
            h3: "Aside blocks",
            items:
            [
                {
                    title: "Alert Aside",
                    url: site.url ~ "dev/blocks/aside/alertaside/"
                },
                {
                    title: "Sidebar",
                    url: site.url ~ "dev/blocks/aside/sidebar/"
                }
            ]
    }
) }}

{% from 'listing/listing.twig' import listing %}
{{ listing (
    {
       blockColor: "white",
            h3: "Dialog blocks",
            items:
            [
                {
                    title: "Login",
                    url: site.url ~ "dev/blocks/dialog/login/"
                },
                {
                    title: "Search",
                    url: site.url ~ "dev/blocks/dialog/search/"
                }
            ]
    }
) }}

{{ listing (
    {
       blockColor: "white",
            h3: "Footer blocks",
            items:
            [
                {
                    title: "Footer Brand",
                    url: site.url ~ "dev/blocks/footer/footerbrand/"
                },
                {
                    title: "Footer Simple",
                    url: site.url ~ "dev/blocks/footer/footersimple/"
                },
                {
                    title: "Footer Sitemap",
                    url: site.url ~ "dev/blocks/footer/footersitemap/"
                }
            ]
    }
) }}

{% from 'listing/listing.twig' import listing %}
{{ listing (
    {
       blockColor: "white",
            blockHeading: "Components",
            items:
            [
                {
                    title: "Accordion",
                    url: site.url ~ "dev/components/content/accordion/"
                },
                {
                    title: "Alert",
                    url: site.url ~ "dev/components/alerts/alert/"
                },
                {
                    title: "Badge",
                    url: site.url ~ "dev/components/alerts/badge/"
                },
                {
                    title: "Button CTA",
                    url: site.url ~ "dev/components/buttons/buttoncta/"
                },
                {
                    title: "Button Social",
                    url: site.url ~ "dev/components/buttons/buttoncta/"
                },
                {
                    title: "Card",
                    url: site.url ~ "dev/components/cards/card/"
                },
                {
                    title: "Heading",
                    url: site.url ~ "dev/components/headings/heading/"
                },
                {
                    title: "Icons",
                    url: site.url ~ "dev/components/icons/"
                },
                {
                    title: "Image Caption",
                    url: site.url ~ "dev/components/content/imgcaption/"
                },
                {
                    title: "Menu Popup",
                    url: site.url ~ "dev/components/nav/menupopup"
                },
                {
                    title: "Search Form",
                    url: site.url ~ "dev/components/searchform/"
                },
                {
                    title: "Table",
                    url: site.url ~ "dev/components/content/table/"
                },
                {
                    title: "Video",
                    url: site.url ~ "dev/components/content/video/"
                }
            ]
    }
) }}

{% from 'listing/listing.twig' import listing %}
{{ listing (
    {
       blockColor: "white",
            blockHeading: "Theming",
            items:
            [
                {
                    title: "Icon System",
                    url: site.url ~ "dev/components/theming/icon-system/"
                },
                {
                    title: "Grid System",
                    url: site.url ~ "dev/components/theming/grid-system/"
                }
            ]
    }
) }}


{# 

- [Introduction]({{site.url}}dev/custom-theming/)
- [Installing RDS]({{site.url}}dev/custom-theming/installing-rds/)
- [SASS]({{site.url}}dev/custom-theming/sass/)
- [Creating custom blocks]({{site.url}}dev/custom-theming/installing-rds/)
- [Layouts]({{site.url}}dev/custom-theming/layouts/)
- [Icon system]({{site.url}}dev/custom-theming/icon-system/)
- [Grid system]({{site.url}}dev/custom-theming/working-with-grids/)

–– https://developers.google.com/style/abbreviations https://github.com/viljamis/vue-design-system/wiki ––> #}




