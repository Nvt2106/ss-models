'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('../tc-validator');
}


var ExternalPropertyModel = ExternalPropertyModel || {};

ExternalPropertyModel.validationRules = ExternalPropertyModel.validationRules || {};


var rules = [];
rules.push(new Validator.StringRule('property_name', 'Property Name', true, 1, 256));
rules.push(new Validator.NumberRule('property_type', 'Property Type', true));
rules.push(new Validator.NumberRule('room_type', 'Room Type', true));
rules.push(new Validator.NumberRule('accommodates', 'Accommodates', true, 1, 1000));
rules.push(new Validator.NumberRule('bedrooms', 'Bedrooms', true, 1, 1000));
rules.push(new Validator.NumberRule('bathrooms', 'Bathrooms', true, 1, 1000));
rules.push(new Validator.NumberRule('beds', 'Beds', true, 1, 1000));
rules.push(new Validator.ObjectRule('address', 'Property Address', true));
rules.push(new Validator.StringRule(['address', 'address_line_1'], 'Property Address/Line1', true));
rules.push(new Validator.NumberRule(['address', 'country_id'], 'Property Address/Country', true));
ExternalPropertyModel.validationRules.creatingObject = rules;

ExternalPropertyModel.validationRules.updatingObject = ExternalPropertyModel.validationRules.creatingObject;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = ExternalPropertyModel;
else
    window.ExternalPropertyModel = ExternalPropertyModel;