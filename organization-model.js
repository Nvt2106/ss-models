'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('../tc-validator');
}

var OrganizationModel = OrganizationModel || {};

OrganizationModel.validationRules = OrganizationModel.validationRules || {};

var rules = [];
rules.push(new Validator.StringRule('organization_name', 'Organization Name', true));
rules.push(new Validator.StringRule('contact_first_name', 'Contact First Name', true));
rules.push(new Validator.StringRule('contact_last_name', 'Contact Last Name', true));
rules.push(new Validator.StringRule(['email', 'email_address'], 'Email Address', true));
rules.push(new Validator.StringRule(['phone', 'phone_number'], 'Phone Number', true));
rules.push(new Validator.StringRule('website', 'Website', true));
rules.push(new Validator.StringRule(['address', 'address_line_1'], 'Address/Line1', true));
rules.push(new Validator.NumberRule(['address', 'country_id'], 'Address/Country', true));
rules.push(new Validator.NumberRule('policy_billing_method_id', 'Policy Billing Method', true));
rules.push(new Validator.NumberRule('verification_billing_method_id', 'Verification Billing Method', true));
rules.push(new Validator.NumberRule('verification_monthly_price', 'Verification Monthly Price', false, 0, 1000000));
rules.push(new Validator.NumberRule('verification_annual_price', 'Verification Annual Price', false, 0, 1000000));
rules.push(new Validator.NumberRule('invoice_date', 'Invoice Date', false, 1, 31));
OrganizationModel.validationRules.creatingObject = rules;



rules = [];
rules.push(new Validator.StringRule('organization_name', 'Organization Name', true));
rules.push(new Validator.StringRule('contact_first_name', 'Contact First Name', true));
rules.push(new Validator.StringRule('contact_last_name', 'Contact Last Name', true));
rules.push(new Validator.StringRule('email_address', 'Email Address', true));
rules.push(new Validator.StringRule('phone_number', 'Phone Number', true));
rules.push(new Validator.StringRule('website', 'Website', true));
rules.push(new Validator.StringRule(['address', 'address_line_1'], 'Address/Line1', true));
rules.push(new Validator.NumberRule(['address', 'country_id'], 'Address/Country', true));
rules.push(new Validator.NumberRule('policy_billing_method_id', 'Policy Billing Method', true));
rules.push(new Validator.NumberRule('verification_billing_method_id', 'Verification Billing Method', true));
rules.push(new Validator.NumberRule('verification_monthly_price', 'Verification Monthly Price', false, 0, 1000000));
rules.push(new Validator.NumberRule('verification_annual_price', 'Verification Annual Price', false, 0, 1000000));
rules.push(new Validator.NumberRule('invoice_date', 'Invoice Date', false, 1, 31));
OrganizationModel.validationRules.updatingObject = rules;


rules = [];
rules.push(new Validator.StringRule('organization_name', 'Organization Name', true));
rules.push(new Validator.StringRule('contact_first_name', 'Contact First Name', true));
rules.push(new Validator.StringRule('contact_last_name', 'Contact Last Name', true));
rules.push(new Validator.StringRule(['email', 'email_address'], 'Email Address', true));
rules.push(new Validator.StringRule(['phone', 'phone_number'], 'Phone Number', true));
rules.push(new Validator.StringRule('website', 'Website', true));
rules.push(new Validator.StringRule(['address', 'address_line_1'], 'Address/Line1', true));
rules.push(new Validator.NumberRule(['address', 'country_id'], 'Address/Country', true));
OrganizationModel.validationRules.registeringObject = rules;


rules = [];
rules.push(new Validator.StringRule('password', 'Password', true));
rules.push(new Validator.StringRule('confirm_password', 'Confirm Password', true));
rules.push(new Validator.FunctionRule(function(params) {
	if (params.confirm_password != params.password)
		return { code: Validator.ErrorCodes.GENERIC, msg: 'Confirm password must be the same admin password.' };
	return {};
}));
OrganizationModel.validationRules.confirmRegistrationingObject = rules;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = OrganizationModel;
else
    window.OrganizationModel = OrganizationModel;

