'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('tc-validator');
}


var InsuranceClaimModel = InsuranceClaimModel || {};

InsuranceClaimModel.validationRules = InsuranceClaimModel.validationRules || {};

var rules = [];
rules.push(new Validator.NumberRule('reservation_id', 'Reservation for claim', true));
rules.push(new Validator.NumberRule('cause_id', 'Claim Cause', true));
rules.push(new Validator.DateRule('loss_date', 'Lost Date', true, null, Validator.Date.getTodayString()));
rules.push(new Validator.StringRule(['police_station_address', 'address_line_1'], 'Address/Line1', true));
rules.push(new Validator.NumberRule(['police_station_address', 'country_id'], 'Address/Country', true));
InsuranceClaimModel.validationRules.creatingObject = rules;


InsuranceClaimModel.validationRules.updatingObject = InsuranceClaimModel.validationRules.creatingObject;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = InsuranceClaimModel;
else
    window.InsuranceClaimModel = InsuranceClaimModel;