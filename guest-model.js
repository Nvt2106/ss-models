'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('../tc-validator');
}


var GuestModel = GuestModel || {};

GuestModel.validationRules = GuestModel.validationRules || {};

rules = [];
rules.push(new Validator.StringRule('first_name', 'First Name', true));
rules.push(new Validator.StringRule('last_name', 'Last Name', true));
rules.push(new Validator.StringRule(['address', 'address_line_1'], 'Address/Line1', true));
rules.push(new Validator.NumberRule(['address', 'country_id'], 'Address/Country', true));
GuestModel.validationRules.creatingObject = rules;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = GuestModel;
else
    window.GuestModel = GuestModel;