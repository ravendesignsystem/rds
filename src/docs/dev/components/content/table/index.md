---
layout: docs
subsite: dev
title: Table
menu: dev
section: Components
subsection: Content Components
banner:
  breadcrumbs:
    grandparent: Components
---
Use the table component to make information easier to compare and scan for users. 

RDS tables are responsive by default. All table styles are built into the core styles and no additional class is required.

| Header 1 | Header 2 | Header 3 | Header 4 | Header 5 | Header 6 | Header 7 | Header 8
| -------- | -------- | -------- | -------- | -------- | -------- | -------- | --------
| data     | data     | data     | data     | data     | data     | data     | data
| data     | data     | data     | data     | data     | data     | data     | data
| data     | data     | data     | data     | data     | data     | data     | data
| data     | data     | data     | data     | data     | data     | data     | data

```html
<table>
    <thead>
        <tr>
          <th>Table header item</th>
          <th>Table header item</th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>data</td>
          <td>data</td>
        </tr>
        <tr>
          <td>data</td>
          <td>data</td>
        </tr>
        <tr>
          <td>data</td>
          <td>data</td>
        </tr>
    </tbody>
</table>
```
## Found in

Badges are used in the following blocks:

- {%include "link" with {'block': 'Content'} %}

## References

- [https://design-system.service.gov.uk/components/table/](https://design-system.service.gov.uk/components/table/)
