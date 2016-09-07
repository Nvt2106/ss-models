'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('tc-validator');
}


var AddressModel = {};


AddressModel.creatingObject = [
	new Validator.StringRule('address_line_1', 'Address', true),
	new Validator.NumberRule('country_id', 'Country', true, 1, 1000)
];

AddressModel.updatingObject = AddressModel.creatingObject;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = AddressModel;
else
    window.AddressModel = AddressModel;