'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('../tc-validator');
}


var OrganizationMemberModel = OrganizationMemberModel || {};

OrganizationMemberModel.validationRules = OrganizationMemberModel.validationRules || {};


var rules = [];
rules.push(new Validator.StringRule('first_name', 'First Name', true));
rules.push(new Validator.StringRule('last_name', 'Last Name', true));
rules.push(new Validator.StringRule('request_for_email', 'Email Address', true));
rules.push(new Validator.NumberRule('role_id', 'Member Role', true));
rules.push(new Validator.FunctionRule(function(params) {
	if (params.request_for_email && params.request_for_email.length > 0 && !params.requireActivation) {
		if (params.password == null || params.password.length == 0) {
			return { code: Validator.ErrorCodes.MANDATORY_FIELD, msg: 'Password is required.', field_name: 'password' };
		}
		if (params.confirmPassword == null || params.confirmPassword.length == 0) {
			return { code: Validator.ErrorCodes.MANDATORY_FIELD, msg: 'Confirm Password is required.', field_name: 'confirmPassword' };
		}
		if (params.password != params.confirmPassword) {
			return { code: Validator.ErrorCodes.UNKNOWN, msg: 'Confirm password must be the same admin password.' };
		}
	}
	return {};
}));
OrganizationMemberModel.validationRules.creatingObject = rules;


rules = [];
rules.push(new Validator.StringRule('first_name', 'First Name', true));
rules.push(new Validator.StringRule('last_name', 'Last Name', true));
rules.push(new Validator.StringRule('email_address', 'Email Address', true));
OrganizationMemberModel.validationRules.updatingObject = rules;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = OrganizationMemberModel;
else
    window.OrganizationMemberModel = OrganizationMemberModel;