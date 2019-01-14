The RDS design system is intented to help Carleton deliver a unified experience for its end users, across all digital products. This also means a cohesive internal experience as the design system is intended to unite teams across campus through a shared language, and help developers focus on experience over style.

https://medium.com/@broccolini/design-systems-at-github-c8e5378d2542

CSS by adding utilities for primitives like typography, color, and spacing, 
 consolidating patterns by reducing code repetition and removing unnecessary design variations; we made use of previously under-utilized Sass features by defining global variables for shared systems styles; and we introduced consistent and easy-to-internalize naming conventions.
 
 While improving the code we updated our documentation, starting with increasing the coverage for implementing patterns, followed by adding supporting documentation such as code style principles and accessibility guidelines.
 
RDS makes it easier to prototype and implement designs without writing a ton of new CSS

the source of truth for our design system thus far has been Sass. 
 
 single source of truth
 
 
 *** do 5his
 Communicate updates more widely through team posts: 
 Make the status of styles more obvious: with the refactor of many of our styles things were constantly changing, we needed to communicate that clearly so that people knew what was safe to use. 

This year we’ve been moving our UI Kits into Figma for designers to create mockups and prototypes with. Figma is built on web technology which means we can make use of tooling we use for other design systems workflows, and avoid having to work around software specific to macOS. Figma’s new Styles feature lets us map system primitives like colors and typography to components, similar to how we do in code. Figma’s API makes it easier for us to integrate with other parts of our workflow and automate tasks, such as checking components in Figma against our components in code.
