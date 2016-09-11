'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('tc-validator');
}


var AssignedPropertyPolicyModel = AssignedPropertyPolicyModel || {};

AssignedPropertyPolicyModel.validationRules = AssignedPropertyPolicyModel.validationRules || {};

rules = [];
rules.push(new Validator.NumberRule('policy_id', 'Policy', true));
rules.push(new Validator.NumberRule('price', 'Policy Price', true, 0, 1000000));
rules.push(new Validator.NumberRule('extra_night_price', 'Extra Night Price', true, 0, 1000000));
rules.push(new Validator.NumberRule('currency_id', 'Currency', true));
AssignedPropertyPolicyModel.validationRules.creatingObject = rules;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = AssignedPropertyPolicyModel;
else
    window.AssignedPropertyPolicyModel = AssignedPropertyPolicyModel;