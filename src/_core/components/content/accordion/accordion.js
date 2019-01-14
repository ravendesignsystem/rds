"use strict";

// Switch aria items for accordions on click for accessilibity
var accordionLabelIndex = 0,
  accordionTriggerClass = document.getElementsByClassName(
    "c-accordion__toggle"
  ),
  accordionToggleAria = function() {
    var _this = this,
      expandedState = _this.getAttribute("aria-expanded"),
      previousElement = this.previousElementSibling,
      singleInput = document.getElementsByClassName(
        "c-accordion__input--single"
      );

    // This switches all aria back to default on accordion items when being unchecked
    Array.prototype.forEach.call(singleInput, function(el) {
      el.nextElementSibling.setAttribute("aria-expanded", "false");
      el.nextElementSibling.nextElementSibling.setAttribute(
        "aria-hidden",
        "true"
      );
    });

    if (expandedState === "true") {
      this.setAttribute("aria-expanded", "false");
      this.nextElementSibling.setAttribute("aria-hidden", "true");
    } else {
      this.setAttribute("aria-expanded", "true");
      this.nextElementSibling.setAttribute("aria-hidden", "false");
    }
  };

// Assignment of click event to switch aria-hidden attribute
for (
  accordionLabelIndex;
  accordionLabelIndex < accordionTriggerClass.length;
  accordionLabelIndex++
) {
  accordionTriggerClass[accordionLabelIndex].addEventListener(
    "click",
    accordionToggleAria,
    false
  );
}

// Switch check / unchecked on accordion items with a modifier

var accordionInputIndex = 0,
  accordionInputClass = document.getElementsByClassName("c-accordion__input"),
  accordionInputUncheck = function() {
    var _this = this,
      instate = _this.checked,
      checkbox = document.getElementsByClassName("c-accordion__input--single");

    for (var i = 0; i < checkbox.length; i++) {
      checkbox[i].checked = false;
    }

    if (instate) {
      _this.checked = true;
    }
  };

// Assignment of click event to switch aria-hidden attribute
for (
  accordionInputIndex;
  accordionInputIndex < accordionInputClass.length;
  accordionInputIndex++
) {
  accordionInputClass[accordionInputIndex].addEventListener(
    "change",
    accordionInputUncheck,
    false
  );
}
