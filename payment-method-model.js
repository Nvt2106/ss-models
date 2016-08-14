'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('../node_modules/tc-validator');
}


var PaymentMethodModel = PaymentMethodModel || {};

PaymentMethodModel.validationRules = PaymentMethodModel.validationRules || {};


rules = [];
rules.push(new Validator.StringRule('holder_name', 'Holder Name', true));
rules.push(new Validator.CreditCardNumberRule('card_number', 'Card Number', true));
rules.push(new Validator.NumberRule('cvc_check', 'CVC', true, 0, 999));
rules.push(new Validator.NumberRule('expired_month', 'Expired Month', true, 1, 12));
rules.push(new Validator.NumberRule('expired_year', 'Expired Year', true, 1, 2016));
rules.push(new Validator.StringRule('card_name', 'Card Name', true));
rules.push(new Validator.StringRule('address_line_1', 'Address Line 1', true));
rules.push(new Validator.NumberRule('country_id', 'Country', true));
PaymentMethodModel.validationRules.creatingObject = rules;


rules = [];
rules.push(new Validator.StringRule('holder_name', 'Holder Name', true));
rules.push(new Validator.NumberRule('expired_month', 'Expired Month', true, 1, 12));
rules.push(new Validator.NumberRule('expired_year', 'Expired Year', true, 1, 2016));
rules.push(new Validator.StringRule('card_name', 'Card Name', true));
rules.push(new Validator.StringRule('address_line_1', 'Address Line 1', true));
rules.push(new Validator.NumberRule('country_id', 'Country', true));
PaymentMethodModel.validationRules.updatingObject = rules;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = PaymentMethodModel;
else
    window.PaymentMethodModel = PaymentMethodModel;