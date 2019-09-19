---
layout: docs
title: Details
subsite: dev
main: null
menu: dev
banner:
  breadcrumbs:
    grandparent: Blocks
section: Blocks
subsection: Main blocks
---
The Details block displays a list of grouped terms with paired descriptions/values. Common uses for this block are to display meta-like content when key-value relationships are needed. A few example use cases include: glossaries, event details, building details, and people profiles.

{% include 'inc' with {'block': 'details-base'} %} 

{% include 'inc' with {'block': 'details-base', 'code': true} %}

{% include 'inc' with {'block': 'details-figure'} %}

{% include 'inc' with {'block': 'details-figure', 'code': true} %}

{% include 'inc' with {'block': 'details-event'} %}

For events you can either use a feature image with the figure variant or use the event variant to highlight the event's date in the figure area.

{% include 'inc' with {'block': 'details-event', 'code': true} %}

<b>Notes</b>:
 
- it is important to always list the event date in the details area as the right-side visual highlighting the day and month is for decorative purposes and disappears on small screens.
- Two optional CTA buttons underneath the description list tag `<dl>` can be used on any variant of the Details block.

{% include 'inc' with {'block': 'details-eventpast'} %}

### For events that have already occurred: 
 
 - consider using an {% include 'link' with {'component': 'alert'} %} component to inform the user they are looking at a past event. 
 - replace the date with "Past Event" in the figure area
 - remove any `Register` or `Add to Calendar` buttons

{% include 'inc' with {'block': 'details-eventpast', 'code': true} %}

{% include 'inc' with {'block': 'details-profile'} %}

{% include 'inc' with {'block': 'details-profile', 'code': true} %}

## Block details

| {{ page.title }}  block meta   |  values
| --------------| :-------------------------------------:
| handle              | `listing`    
| colour options      | `u-block--white`,`u-block--grey`
| section use         | `<main>`                  
| width type          | fixed                         
| has heading         | true
| theme(s)            | CU
| variants            | events, icon, news, people, video
| Codepen             | coming soon


## Content guidelines

List Group items should:

- present objects of the same type.
- start with a capital letter.
- not use commas or semicolons at the end of each line.
- link to a page for the item with more information.
- have text labels be as short as possible.

## When To Avoid

- Don't use this block to replace default content ordered and unordered lists.
- Don't us this block if you are listing items that don't link anywhere.

## Dates and Times
Date and time format should always be CCYY-MM-DDThh:mm:ss as per [W3C](https://www.w3.org/TR/NOTE-datetime)

## References

- https://jasonneel.com/journal/using-html-description-lists
