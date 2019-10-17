---
name: Block/Component Review
about: Checklist for block and component reviews
title: ''
labels: ''
assignees: ''

---

Before a new block or component is merged into master they require a final review using the following lists. Any relevant notes about this review, whether it be suggestions, specific notes about changes made, or URL references to resources or additional supporting information, please add as a comment.

## Links

The RDS doc link is where you can find the item to be reviewed. The file path is the location in the repo where markdown, scss, js, and data files live.

- [RDS doc page](https://ravendesignsystem.github.io/ADDURL)
- [File path](https://ravendesignsystem.github.io/ADDURL)

## Stand Alone Template

For better accessibility testing and validation, a [template has been created](https://devsite.carleton.ca/rds-testing/ADDFILE.php) using the block that lives outside of the RDS Docs site. If changes are made to the block, this file should be updated and tested again in  tenon and w3c.

## Documentation

The first step is to read the related documentation in its entirety to understand the purpose of the item being reviewed and get a better understanding of its expected bahviour.

- [ ] Block is fully documented
- [ ] Markup examples are correct as per the written documentation
- [ ] Live examples have been checked and matches the expected behaviour
- [ ] Source code for live examples has been checked and matches the examples provided

## Browser Testing

- [ ] Fully tested in IE 11
- [ ] Fully tested in Edge
- [ ] Fully tested in Chrome
- [ ] Fully tested in Firefox
- [ ] Fully tested in Safari
- [ ] Fully tested in Safari on iOS
- [ ] Fully tested in Chrome on iOS
- [ ] Fully tested in Chrome on Android

## Accessibility and Markup

Accessibility should be the main focus of this review, with a minor secondary focus on markup review.

- [ ] Tested with the W3C validator and validates
- [ ] Using a service such as tenon.io, review item for accessibility