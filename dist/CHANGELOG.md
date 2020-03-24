# RDS Change Log

All notable changes to the project will be documented here, in this file

## [v0.18.0](https://github.com/ravendesignsystem/rds/releases/tag/0.18.0) 2020-03-24

**Added**, **Changed**: Maintenance release with small patches and new blocks

- **Added**: Timeline block, including css, markup and documentation
- **Added**: Image tile block, including css, markup and documentation
- **Changed**: Updated b-listing--news to allow titles and excerpts to flow over 2 lines with a ellipsis if necessary

## [v0.17.3](https://github.com/ravendesignsystem/rds/releases/tag/0.17.3) 2020-03-03

**Fixed**: Maintenance release with small patches

- **Fixed**: Incorrectly copied icons, updated webpack to do this properly

## [v0.17.2](https://github.com/ravendesignsystem/rds/releases/tag/0.17.2) 2020-03-03

**Added**: Maintenance release with small patches

**Added**: svg icons now being included in npm package

## [v0.17.1](https://github.com/ravendesignsystem/rds/releases/tag/0.17.1) 2020-02-26

**Changed**: Maintenance release with small patches

**Changed**: updated b-listing and c-accordion styles to fixed issues that went unnoticed in v0.17.0

## [v0.17.0](https://github.com/ravendesignsystem/rds/releases/tag/0.17.0) 2020-02-25

**Added**, **Changed**: Maintenance release with small patches

**Added**: Table styles for tfoot and figcaption
**Changed**: b-listing styles to prevent conflicts when b-listing--accordion is used

## [v0.16.9](https://github.com/ravendesignsystem/rds/releases/tag/0.16.9) 2020-02-06

**Added**, **Changed**: Maintenance release with small patches

- **Changed**: Removed margin from main button components
- **Changed**: Added spacing to button components only when used inside banners
- **Changed**: Modifying list style type for ordered lists
- **Changed**: Updated banner styles to fix issue with c-searchform being responsive

## [v0.16.8](https://github.com/ravendesignsystem/rds/releases/tag/0.16.8) 2020-02-05

**Added**: Maintenance release with small patches

- **Added**: added shared classes to b-banner to be used for b-wideimage
- **Added**: added checks to multicol__sidebar for first of type to modify spacing

## [v0.16.7](https://github.com/ravendesignsystem/rds/releases/tag/0.16.7) 2020-01-13

**Added**, **Changed**: Maintenance release with small patches

- **Added**: spacing above c-searchform if used inside the banner
- **Changed**: updated max-width of banner content section to match the max width of the small breakpoint used by the main content area

## [v0.16.6](https://github.com/ravendesignsystem/rds/releases/tag/0.16.6) 2020-01-13

**Fixed**: Maintenance release with small patches

- **Fixed**: Added a check on c-form styles to prevent conflict with c-searchform

## [v0.16.5](https://github.com/ravendesignsystem/rds/releases/tag/0.16.5) 2020-01-13

**Removed**: Maintenance release

- **Removed**: Removed files for old form styles, and documentation

## [v0.16.4](https://github.com/ravendesignsystem/rds/releases/tag/0.16.4) 2020-01-13

**Changed**: Maintenance release with small patches

- **Changed**: Updated forms to include styles for several field types, updated documentation to display examples of all newly styles field types

## [v0.16.3](https://github.com/ravendesignsystem/rds/releases/tag/0.16.3) 2020-01-09

**Fixed**: Maintenance release with small patches

- **Fixed**: Updated masthead js to fix issues noted in GH-96

## [v0.16.2](https://github.com/ravendesignsystem/rds/releases/tag/0.16.2) 2020-01-08

**Changed**: Maintenance release with small patches

- **Changed**: Updated styles for masthead to allow for the proper creation of top level modifiers in the future

## [v0.16.1](https://github.com/ravendesignsystem/rds/releases/tag/0.16.1) 2020-01-07

**Added**, **Changed**: Maintenance release with small patches

- **Added**: Style for l-multicol that removes bottom padding if last child of main is u-block
- **Changed**: Updated documentation for l-multicol to reflect changes relating to switch to css grid

## [v0.16.0](https://github.com/ravendesignsystem/rds/releases/tag/0.16.0) 2020-01-07

**Changed**: Breaking changes.

- **Changed**: Refactored l-multicol and all layout types to use CSS Grid, with a flexbox fallback

## [v0.15.7](https://github.com/ravendesignsystem/rds/releases/tag/0.15.7) 2020-01-06

**Changed**: Maintenance release with small patches

- **Changed**: changed b-listing--events to b-listing--event to be singular like the rest of the listing and card modifiers

## [v0.15.6](https://github.com/ravendesignsystem/rds/releases/tag/0.15.6) 2019-12-30

**Changed**: Maintenance release with small patches

- **Changed**: minor content update to test prod release is properly functioning

## [v0.15.5](https://github.com/ravendesignsystem/rds/releases/tag/0.15.5) 2019-12-30

**Added**, **Fixed**: Maintenance release with small patches

- **Added**: Added base css for cite as a direct decendent of blockquote
- **Added**: New doc area outlining how to fully stop sculpin from running
- **Fixed**: Updated the command in readme relating to running the dev watch task

## [v0.15.4](https://github.com/ravendesignsystem/rds/releases/tag/0.15.4) 2019-12-29

**Fixed**, **Docs**: Maintenance release with small patches and docs updates*

- **Changed**: Improvements to the new Masthead block.
- **Docs**: Masthead block docs updated.

## [v0.15.3](https://github.com/ravendesignsystem/rds/releases/tag/0.15.3) 2019-11-21

**Fixed**: Maintenance release with small patches

- **Fixed**: JS issue relating to masthead action button not existing on page

## [v0.15.2](https://github.com/ravendesignsystem/rds/releases/tag/0.15.2) 2019-11-21

**Changed**: Maintenance release with small patches

- **Changed**: Replace custom built highlightjs with npm package, updated the imports for what hljs languages needed
- **Changed**: Update release proceedure for npm version release

## [v0.15.1](https://github.com/ravendesignsystem/rds/releases/tag/0.15.1) 2019-11-21

**Added**, **Fixed**: Maintenance release with small patches*

- **Added**: added display block to video and audio HTML5 tags in core reboot scss file
- **Changed**: Restructured webpack setup to create individual builds for doc specific dev/prod and an npm/cdn release

## [v0.15.0](https://github.com/ravendesignsystem/rds/releases/tag/0.15.0) 2019-11-20

**Added**, **Fixed**: Maintenance release with small patches*

- **Added**: css class to modify the default red masthead button to be white
- **Added**: checks in masthead js if cases when login or search buttons do not exits
- **Fixed**: fixed masthead JS errors relating to topnav/sidenav and how they appear in mobile menu


## [v0.14.1](https://github.com/ravendesignsystem/rds/releases/tag/0.14.1) 2019-11-19

**Added**, **Changed**, **Docs**: Breaking changes.

- **Changed**: Small CSS changes to the navmenu componeent
- **Docs**: redoing the menus to work with the updated menu changes.

## [v0.14.0](https://github.com/ravendesignsystem/rds/releases/tag/0.14.0) 2019-11-14

**Added**, **Changed**, **Docs**: Breaking changes.

- **Changed**: Refactored Masthead, Menu block and added Nav component.

## [v0.13.0](https://github.com/ravendesignsystem/rds/releases/tag/0.13.0) 2019-09-30

**Added**, **Changed**, **Docs**: Breaking changes.

- **Added**: Fixed: the sticky masthead no longer fires if the page is too short or does not have scroll - re. #34
- **Changed**: Fixed: issue with text-Img block where text was aligning incorrectly when a small amount of content was in place - re. #40
- **Changed**: Refactored the Csrd Grid block. See docs for full changes.
- **Docs**: redid the Card Grid docs

## [v0.12.2](https://github.com/ravendesignsystem/rds/releases/tag/0.12.2) 2019-09-24

**Added**, **Changed**, **Docs**: Maintenance release with small patches*

- **Added**: improved mobile view of figure for Details block. *SCSS only - no Markup changes.
- **Changed**: removed layout border line from small screens as per GH issue 37. *SCSS only - no Markup changes.
- **Changed**: Menu block spacing issue fixed as per GH issue 36. *SCSS only - NO markup changes.
- **Changed**: added padding to b-content blockquote as per GH issue #39. *ONLY SCSS changes - NO markup changes
- **Docs**: added menu to About section.

## [v0.12.1](https://github.com/ravendesignsystem/rds/releases/tag/0.12.1) 2019-09-23
 - **Changed**: Fixed Masthead JS issue.

## [v0.12.0](https://github.com/ravendesignsystem/rds/releases/tag/0.12.0) 2019-09-13 

**Added**, **Changed**, **Docs**: Breaking changes update required*

- **Changed**: Blocks no longer require a size utility. For eg. u-block-s. Refactored all blocks as such.
- **Added**: New single-col layout `.l-col-l` to make all block that apply large with the <main> 
- **Docs**: Added docs for the Alert component

## [v0.11.0](https://github.com/ravendesignsystem/rds/releases/tag/0.11.0) 2019-09-13 

**Added**, **Changed**, **Docs**: Breaking changes update required*

- **Changed**: Refactored all blocks and components to adhere to the new BTM CSS methodology reducing package CSS by 2k and simplifying all markup.
- **Added**: New Figure card block variant for fact numbers.
- **Docs**: New Listing block example for listing files.

## [v0.10.3](https://github.com/ravendesignsystem/rds/releases/tag/0.10.3) 2019-09-04 

**Added**, **Fixed**, **Docs**: update recommended

- **Added**: Masthead Top Nav slideout feature.
- **Docs**: updated Masthead docs to include Top Nav slideout feature.
- **Docs**: Improved Navigation documentation.
- **Fixed**: Re-added CSS require for two line Masthead titles
- **Fixed**: Cleaned up old unnecessary files.

## [v0.10.2](https://github.com/ravendesignsystem/rds/releases/tag/0.10.2) 2019-09-03 

**Added**, **Fixed**, **Docs**: update recommended

- **Added**: improved a11y for the Overlay layout replacing `is-hidden` with `u-visullay-hidden`.
- **Added**: feature for wrapping long site titles in the Masthead.
- **Docs**: updated Masthead docs to include how to wrap long titles.
- **Docs**: Improved Overlay layout documentation.
- **Fixed**: Fixed 4 column grid breaking too early.
- **Fixed**: JS error from dialog polyfill firing when no dialog exists.

## [v0.10.1](https://github.com/ravendesignsystem/rds/releases/tag/0.10.1) 2019-09-02 

**Fixed**, Update recommended

- **Fixed**: position issue with `<dialog>`.


## [v0.10.0](https://github.com/ravendesignsystem/rds/releases/tag/0.10.0) 2019-09-02 

**Initial release candidate**...going silver

- **Added**: Added HTML 5 `<dialog>` for mobile menu to improve a11y.


## [Unreleased]
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
### Upgraded
