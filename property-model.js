'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('tc-validator');
}


var PropertyModel = PropertyModel || {};

PropertyModel.validationRules = PropertyModel.validationRules || {};

var rules = [];
rules.push(new Validator.NumberRule('organization_id', 'Organization', true));
rules.push(new Validator.StringRule('property_name', 'Property Name', true, 1, 256));
rules.push(new Validator.NumberRule('property_type_id', 'Property Type', true));
rules.push(new Validator.NumberRule('room_type_id', 'Room Type', true));
rules.push(new Validator.NumberRule('accommodates', 'Accommodates', false, 1, 1000));
rules.push(new Validator.NumberRule('bedrooms', 'Bedrooms', false, 1, 1000));
rules.push(new Validator.NumberRule('bathrooms', 'Bathrooms', false, 1, 1000));
rules.push(new Validator.NumberRule('beds', 'Beds', false, 1, 1000));
// rules.push(new Validator.StringRule(['address', 'address_line_1'], 'Address/Line1', true));
// rules.push(new Validator.NumberRule(['address', 'country_id'], 'Address/Country', true));
PropertyModel.validationRules.creatingObject = rules;

PropertyModel.validationRules.updatingObject = PropertyModel.validationRules.creatingObject;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = PropertyModel;
else
    window.PropertyModel = PropertyModel;