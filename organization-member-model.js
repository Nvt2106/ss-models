'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('../node_modules/tc-validator');
}


var OrganizationMemberModel = OrganizationMemberModel || {};

OrganizationMemberModel.validationRules = OrganizationMemberModel.validationRules || {};


rules = [];
rules.push(new Validator.StringRule('first_name', 'First Name', true));
rules.push(new Validator.StringRule('last_name', 'Last Name', true));
rules.push(new Validator.StringRule('request_for_email', 'Email Address', true));
rules.push(new Validator.NumberRule('role_id', 'Member Role', true));
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