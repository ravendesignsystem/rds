---
layout: docs
subsite: dev
title: Badge
menu: dev
section: Components
banner:
  breadcrumbs:
    grandparent: Components
---

Badges are small, inline count and labeling components.

<span class="c-badge">5</span>

```html
<span class="c-badge">5</span>
```

<span class="c-badge">New</span>

```html
<span class="c-badge">New</span>
```

## Guidelines

- Keep strings used in badges short by limiting text or numbers to no more then 5 characters. Character counts exceeding this will be truncated and display an ellipsis.
- When it makes sense, abbreviate words to keep them short.

**👎 Not cool**:
<span class="c-badge">Maximum</span>

```html
<!-- Fonzie jumping a shark -->
<span class="c-badge">Maximum</span>
```

**😎 Cool**:

<span class="c-badge">Max</span>

```html
<!-- Cool, like Fonzie -->
<span class="c-badge">Max</span>
```

## Found in

Badges are used in the following blocks:

- {%include "link" with {'block': 'Listing'} %}
