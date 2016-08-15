'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('../tc-validator');
}


var ExternalGuestModel = ExternalGuestModel || {};

ExternalGuestModel.validationRules = ExternalGuestModel.validationRules || {};


var rules = [];
rules.push(new Validator.StringRule('first_name', 'Guest/First Name', true));
rules.push(new Validator.StringRule('last_name', 'Guest/Last Name', true));
rules.push(new Validator.StringRule(['address', 'address_line_1'], 'Guest Address/Line1', true));
rules.push(new Validator.NumberRule(['address', 'country_id'], 'Guest Address/Country', true));
ExternalGuestModel.validationRules.creatingObject = rules;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = ExternalGuestModel;
else
    window.ExternalGuestModel = ExternalGuestModel;