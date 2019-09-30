---
name: Version 1.0 Review
about: Checklist for block and component reviews
title: ''
labels: ''
assignees: ''

---

Before we can get RDS to version 1.0, blocks and components require on final review using the following lists. Any relevant notes about this review, whether it be suggestions, specific notes about changes made, or URL references to resources or additional supporting information, please add as a comment.

## Links

The RDS doc link is where you can find the item to be reviewed. The file path is the location in the repo where markdown, scss, js, and data files live.

- [RDS doc page](INSERTLINK)
- [File path](INSERTLINK)

## Documentation

The first step is to read the related documentation in its entirety to understand the purpose of the item being reviewed and get a better understanding of its expected bahviour.

- [ ] Block is fully documented
- [ ] Markup examples are correct as per the written documentation
- [ ] Live examples have been checked and matches the expected behaviour
- [ ] Source code for live examples has been checked and matches the examples provided

## Accessibility and Markup

Accessibility should be the main focus of this review, with a minor secondary focus on markup review.

- [ ] Tested with the W3C validator and validates
- [ ] All micro-data is applied, if applicable
- [ ] Using a service such as tenon.io, review item for accessibility

## Browser Testing

- [ ] Fully tested in IE 11
- [ ] Fully tested in Edge
- [ ] Fully tested in Chrome
- [ ] Fully tested in Firefox
- [ ] Fully tested in Safari
- [ ] Fully tested in Safari on iOS
- [ ] Fully tested in Chrome on iOS
- [ ] Fully tested in Chrome on Android