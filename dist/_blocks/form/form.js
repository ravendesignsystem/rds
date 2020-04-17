/**
 * @name CU Form Validation
 * @desc validate form inputs utilizing functions from validator.js
 * @see https://github.com/validatorjs/validator.js
 * @author Michael Ieradi
 * @version 1.0.0
 *
 * @overview
 * @func handleValidateOnKeypress()
 * @description validate inputs, by attribute, on keypress
 *
 * @func handleValidateInputs()
 * @description validate inputs on submit
 *
 * @func handleIsRequiredAttribute()
 * @description handle inputs where isrequired is present
 *
 * @func handleKeyPress()
 * @description assign keyup listener to inputs within the target form
 *
 * @func handleValidate()
 * @description main validate function that runs both handleValidateOnKeypress or handleValidateInputs
 *
 * @func handleCreateErrorMessage()
 * @description Creates error message node
 *
 * @func handleShowErrorMessage()
 * @description applys neccesary classes to error nodes
 *
 * @func handleSubmit()
 * @description if valid, submits the form
 *
 */
import {
	isEmail,
	isHexColor,
	isInt,
	isPostalCode,
	isLength,
	isEmpty,
} from 'validator';

window.addEventListener('DOMContentLoaded', function () {
	// if no forms are found, return
	if (!document.getElementsByClassName('b-form')) return;

	const forms = document.getElementsByClassName('b-form');
	let validatorFunctions;
	let inputNodeClasslist;
	let errorElement;
	let isTarget;
	let isValid;
	let toValidate;
	let isrequired;
	let requiredElementsAreValid;
	let formIsValid;
	let globalVariables = {
		validatorFunctions,
		errorElement,
		inputNodeClasslist,
		isTarget,
		isValid,
		toValidate,
		isrequired,
		requiredElementsAreValid,
		formIsValid,
	};
	// iterate one of multiple forms with classname c-form
	return [...forms].map(function (form) {
		// add keyup event listener to each form
		handleKeyPress(form, globalVariables);
		//add submit event listener to each form
		handleSubmit(form, globalVariables);
	});
});

/**
 * @func handleValidateInputs()
 * @desc iterate over input belonging to the target form and determine validation
 * @param {object} input the target input
 * @param {object} globalVariables previously declared object of variables
 * @param {boolean} isrequired truthy falsy if the input has an isrequired attribute
 * @returns {boolean}
 */
function handleValidateInputs(input, globalVariables, isrequired) {
	const { value, name, min, max } = input;

	if (input === undefined || input.type === 'submit') return;
	// object lookup with validator.js functions
	globalVariables.validatorFunctions = {
		text: isLength(value || '', {
			min: parseInt(min) || undefined,
			max: parseInt(max) || undefined,
		}),
		email: isEmail(value || ''),
		color: isHexColor(value || ''),
		postalcode: isPostalCode(value || '', 'CA'),
		number: isInt(value || '', {
			min: parseInt(min) || undefined,
			max: parseInt(max) || undefined,
		}),
	};
	return globalVariables.validatorFunctions[name];
	//   console.log(globalVariables.validatorFunctions[name]);

	//   if (globalVariables.validatorFunctions[name] !== undefined) {
	//     return globalVariables.validatorFunctions[name];
	//   }
}
/**
 * @func handleSubmit()
 * @desc iterate over attributes belonging to the target input and determine validation
 * @param {object} form the target form
 * @param {object} globalVariables previously declared object of variables
 * @returns {boolean}
 */
function handleSubmit(form, globalVariables) {
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		let { isrequired } = globalVariables;
		const fieldsAreValid = [];

		[...form].map(function (input) {
			isrequired = input.hasAttribute('isrequired');
			if (isrequired) {
				fieldsAreValid.push(
					handleIsRequiredAttribute(input, isrequired, fieldsAreValid)
				);
			}
			fieldsAreValid.push(
				handleValidateInputs(input, globalVariables, isrequired)
			);
		});

		if (!fieldsAreValid.includes(false)) form.submit();
	});
}

/**
 * @func handleIsRequiredAttribute()
 * @desc if the required attribute is present, validate input with isEmpty
 * @param {object} input the target input
 * @param {boolean} isrequired isrequired boolean flag
 * @returns {boolean}
 */
function handleIsRequiredAttribute(input, isrequired) {
	const errorChildElement = input.parentNode.querySelector('#required-error');
	// skip over submit button and undefined inputs
	if (input === undefined || input.type === 'submit') return;
	// if error already exists, return false
	if (errorChildElement) return false;
	if (!errorChildElement && isrequired && isEmpty(input.value)) {
		// create error message
		handleCreateErrorMessage(input);
		return false;
	} else return true;
}
/**
 * @func handleCreateErrorMessage()
 * @desc creates a new error message node
 * @param {object} input the target input
 */
function handleCreateErrorMessage(input) {
	const referenceNode = input;
	const errorNode = document.createElement('span');
	// add class to node
	errorNode.classList.add('red');
	errorNode.setAttribute('id', 'required-error');
	// create message
	const errorNodeContent = document.createTextNode('This field cannot be blank');
	// append error node
	errorNode.appendChild(errorNodeContent);
	// insert error node
	referenceNode.parentNode.insertBefore(errorNode, referenceNode.nextSibling);
}
/**
 * @func handleKeyPress()
 * @desc iterate over attributes belonging to the target input and determine validation
 * @param {object} form the target form
 * @param {object} globalVariables previously declared object of variables
 * @returns {boolean}
 */
function handleKeyPress(form, globalVariables) {
	form.addEventListener('keyup', function (e) {
		[...form].map(function (input) {
			// if submit button, return
			if (e.target.type === 'submit') return;
			//handle validation
			handleValidateOnKeypress(e, globalVariables, input);
		});
	});
}

/**
 * @func handleValidateOnKeypress()
 * @desc iterate over attributes belonging to the target input and determine validation
 * @param {object} input the target input
 * @param {object} globalVariables previously declared object of variables
 * @returns {boolean}
 */
function handleValidateOnKeypress(e, globalVariables, input = 0) {
	const { parentNode, attributes } = e.target;
	const errorChildElement = input.parentNode.querySelector('#required-error');
	let { errorElement, inputNodeClasslist, isTarget, isValid } = globalVariables;
	if (input.value !== '' && errorChildElement) {
		input.parentNode.removeChild(errorChildElement);
	}
	if (input.value === '') isValid = true;
	// iterate all targets attributes
	return [...attributes].map((attribute) => {
		errorElement = parentNode.querySelector('span.error');
		inputNodeClasslist = parentNode.classList;
		isTarget = errorElement !== null && errorElement !== undefined;

		// create object lookup containing all necessary validator functions
		// field is valid if empty. isrequired will handle required isEmpty
		isValid = handleValidate(e, globalVariables, input, attribute);
		// show error message
		handleShowErrorMessage(
			e,
			errorElement,
			inputNodeClasslist,
			isTarget,
			isValid
		);
	});
}
/**
 * @func handleValidate()
 * @desc validate by input or attribute with validator.js
 * @param {object} e event object
 * @param {object} globalVariables object of pre declared variables
 * @param {object} input optional parameter containing the input object
 * @param {object} attribute optional parameter containing the attribute object
 * @returns {boolean} returns truthy or falsy
 */

function handleValidate(e, globalVariables, input = 0, attribute = 0) {
	let { min, max } = e.target;
	let value = e.target.value || input.value;
	let { toValidate, validatorFunctions } = globalVariables;
	// assign the target to validate based on available parameters
	toValidate = input.name || attribute.value;
	// object lookup for validator functions
	validatorFunctions = {
		text: isLength(value, {
			min: parseInt(min) || undefined,
			max: parseInt(max) || undefined,
		}),
		email: isEmail(value),
		color: isHexColor(value),
		postalcode: isPostalCode(value, 'CA'),
		number: isInt(value, {
			min: parseInt(min) || undefined,
			max: parseInt(max) || undefined,
		}),
	};

	return validatorFunctions[toValidate];
}
/**
 * @func handleShowErrorMessage()
 * @desc apply error classes based on validation result
 * @param {object} attribute the target inputs attribute
 * @param {htmlElement} errorElement the targets parent node classList
 * @param {boolean} isTarget truthy falsy value determining wether the target inputs parent node exists
 * @param {object} validatorFunctions object of functions from validator.js
 */
function handleShowErrorMessage(
	e,
	errorElement,
	inputNodeClasslist,
	isTarget,
	isValid
) {
	// if function is undefined, return
	if (isValid === undefined) return;
	// remove class if true
	if (isTarget && isValid) {
		errorElement.classList.remove('show');
		inputNodeClasslist.remove('form__field--error');
		return true;
	}
	// add class if false
	if (!isValid && isTarget) {
		errorElement.classList.add('show');
		inputNodeClasslist.add('form__field--error');
		return false;
	}
}
