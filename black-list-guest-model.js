'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('tc-validator');
}


var BlackListGuestModel = {};

BlackListGuestModel.validationRules = {};

var rules = [];
rules.push(new Validator.StringRule('first_name', 'First Name', true));
rules.push(new Validator.StringRule('last_name', 'Last Name', true));
rules.push(new Validator.DateRule('birth_date', 'Date Of Birth', true, '1900-01-01', Validator.Date.getTodayString()));
rules.push(new Validator.StringRule(['address', 'address_line_1'], 'Address', true));
rules.push(new Validator.NumberRule(['address', 'country_id'], 'Country', true));
BlackListGuestModel.validationRules.creatingObject = rules;

BlackListGuestModel.validationRules.updatingObject = rules;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = BlackListGuestModel;
else
    window.BlackListGuestModel = BlackListGuestModel;