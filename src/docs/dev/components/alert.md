---
layout: docs
subsite: dev
title: Alert
menu: dev
section: Components
banner:
  breadcrumbs:
    grandparent: Components
---
{% include 'inc' with {'component': 'alert-base'} %}

{% include 'inc' with {'component': 'alert-base', 'code': true} %}

Alert headings are recommended but not required.

{% include 'inc' with {'component': 'alert-noheading'} %}

There are four different contextual alerts: 

1. Error alerts
2. Information alerts
3. Success alerts
4. Warning alerts

### Error alert

Reserved for errors, malfunctions, as well as critical issues campus safety issues.

{% include 'inc' with {'component': 'alert-error'} %}

{% include 'inc' with {'component': 'alert-error', 'code': true} %}

### Information alert

Used to highlight informational content. Use when standard tags such as `<b>` and `<strong>`  or headers don't pull the message out enough. Try and avoid overusing this alert in lieu of standard content.

{% include 'inc' with {'component': 'alert-info'} %}

{% include 'inc' with {'component': 'alert-info', 'code': true} %}

### Success alert

Provide a success message after an action has been taken.

{% include 'inc' with {'component': 'alert-success'} %}

{% include 'inc' with {'component': 'alert-success', 'code': true} %}

### Warning alert

Used for messages that need the user attention and acknowledgment but might not cause errors. For example:

{% include 'inc' with {'component': 'alert-warning'} %}

{% include 'inc' with {'component': 'alert-warning', 'code': true} %}

## Found in

Alerts are currently used in the following blocks:

- 

## Usage guidelines




## Avoid

TODO ADD A DROP SHADOW WHEN DISMISSALE - maybe?

https://sparkdesignsystem.com/patterns/components/alerts

## References

- https://designsystem.digital.gov/components/alert/
- https://uxplanet.org/how-to-write-good-error-messages-858e4551cd4

Should fill the width of the viewport.
The content should be kept short and concise.
role="alert" is required so that assistive technology can inform users their attention is needed.
The data-id property is provided as a hook for automated tools. If you have multiple instances of the same variant of a component on the same page, make sure each instance has a unique data-id property ("alert-info-1", "alert-info-2", "alert-info-3", etc).

orm assistive technologies of a time-sensitive and important message. If the message is interactive, use the use the ARIA role="alertdialog" instead.
