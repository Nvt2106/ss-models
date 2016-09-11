'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('tc-validator');
}

var PolicyModel = PolicyModel || {};

PolicyModel.validationRules = PolicyModel.validationRules || {};


var rules = [];
rules.push(new Validator.StringRule('policy_name', 'Policy Name', true));
rules.push(new Validator.NumberRule('currency_id', 'Currency', true));
rules.push(new Validator.NumberRule('range_nights_from', 'Number Of Nights From', true, 1, 365));
rules.push(new Validator.NumberRule('range_nights_to', 'Number Of Nights To', true, 1, 365));
rules.push(new Validator.NumberRangeRule('range_nights_from', 'range_nights_to', 'Number Of Nights Range'));
rules.push(new Validator.NumberRule('range_reservation_price_from', 'Reservation Price From', false, 0, 1000000));
rules.push(new Validator.NumberRule('range_reservation_price_to', 'Reservation Price To', false, 0, 1000000));
rules.push(new Validator.NumberRangeRule('range_reservation_price_from', 'range_reservation_price_to', 'Reservation Price Range'));
rules.push(new Validator.NumberRule('range_guests_from', 'Number Of Guests From', false, 1, 1000));
// rules.push(new Validator.NumberRule('no_of_bedrooms', 'Number Of Bedrooms', false, 1, 50));
rules.push(new Validator.NumberRule('range_guests_to', 'Number Of Guests To', false, 1, 1000));
rules.push(new Validator.NumberRangeRule('range_guests_from', 'range_guests_to', 'Number Of Guests Range'));
rules.push(new Validator.NumberRule('range_no_of_bedrooms_from', 'Number Of Bedrooms From', false, 1, 50));
rules.push(new Validator.NumberRule('range_no_of_bedrooms_to', 'Number Of Bedrooms To', false, 1, 50));
rules.push(new Validator.NumberRangeRule('range_no_of_bedrooms_from', 'range_no_of_bedrooms_to', 'Number Of Bedrooms Range'));
rules.push(new Validator.NumberRule('cost_to_ss', 'Cost To Safely Stay', true, 0, 1000000));
rules.push(new Validator.NumberRule('cost_to_ss_option_id', 'Cost To Safely Stay Option', true));
rules.push(new Validator.NumberRule('deductible', 'Deductible', true, 0, 1000000));
rules.push(new Validator.StringRule('underwriter', 'Underwriter', true));
rules.push(new Validator.NumberRule('damage_coverage', 'Damage Coverage', false, 0, 1000000));
rules.push(new Validator.NumberRule('liability_coverage', 'Liability Coverage', false, 0, 1000000));
rules.push(new Validator.NumberRule('dwelling_coverage', 'Dwelling Coverage', false, 0, 1000000));
rules.push(new Validator.BooleanRule('all_countries', 'Available For All Countries'));
PolicyModel.validationRules.creatingObject = rules;


PolicyModel.validationRules.updatingObject = PolicyModel.validationRules.creatingObject;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = PolicyModel;
else
    window.PolicyModel = PolicyModel;