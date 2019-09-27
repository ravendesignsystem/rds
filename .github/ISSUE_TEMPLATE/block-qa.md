---
name: Block QA
about: QA checklist for new RDS blocks.
title: ''
labels: ''
assignees: ''

---

# :sparkles: Block QA :sparkles:

Before a new block can be integrated into prod and versioned 1.0, all of the following items need to be checked and reviewed. If any of the following items are not applicable to what is being reivewed, please edit the issue description and strike out the list item, do not remove it.

**Reviewers**:
-- ADD NAME(S)

## Browser Testing

- [ ] Fully tested in IE 11 and last two versions of Firefox, Safari, Chrome, Edge.
- [ ] Fully tested in Safari iOS, Chrome iOS and  Chrome on Android.

## Documentation

- [ ] Block is fully documented. Make notes in comments if anything is unclear of missing.
- [ ] Markup examples in documentation are correct as per the written documentation.
- [ ] Live examples has been checked and matches the expected behaviour as described in docs.
- [ ] Source code for live examples has been checked and matches the examples provided in the docs.
- [ ] Block tested in common templates and layouts and integrated with many other RDS blocks.

## HTML

- [ ] Code is semantic and lean.
- [ ] All micro-data is applied, if necessary.
- [ ] Code reviewed for accessibility.
- [ ] Code Indentation and readability reviewed.
- [ ] Naming conventions and coding standards are followed.
- [ ] Code security review.
- [ ] Tested with the W3C validator and validates.
- [ ] Checked for broken links with W3C Link Checker, if necessary.

## SASS/CSS Review

- [ ] Review RDS CSS guidelines and naming have been followed, including JS prefixes.
- [ ] Styles are tested when minified and gzipped. 
- [ ] All unused CSS is removed. Be careful! Can use tools like [uncss-online.com](http://uncss-online.com) or coverage in browser tools.
- [ ] Run through RDS CSS linter and not just reviewed in CodePen.
- [ ] CSS has been run through the [CSS Validator](https://jigsaw.w3.org/css-validator/) and all errors corrected.

## JS

- [ ] Test JS after minification.
- [ ] JS security audit.
- [ ] JavaScript files are loaded asynchronously using async or deferred using defer attribute.
- [ ] No errors are flagged by ESLint.
