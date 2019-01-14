---
layout: l-rdsdocs-markdown
maxwidth: tablet
title: The Naming of Things
---

There are only two hard things in Computer Science: cache invalidation and naming things. https://quotesondesign.com/phil-karlton/

An important part of system design is naming conventions. The systems naming conventions should be used in all designs, specs and communication, and are reflected in the naming of text styles, symbols and libraries in Sketch. The ultimate goal is for the code (React and CSS) to also use the same names, so everyone is speaking the same language.


Never mash word together use hyphen. 


js
Variable naming is one of the most important and complex skills in programming. Please spend some time thinking about the right name for a variable before declaring it.
Some good-to-follow rules are:

Use human-readable names like userName or shoppingCart.
Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
Make the name maximally descriptive and concise. Examples of bad names are data and value. Such a name says nothing. It is only ok to use them if it’s exceptionally obvious from the context which data or value is meant.
Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables like currentUser or newUser, but not currentVisitor or a newManInTown.
