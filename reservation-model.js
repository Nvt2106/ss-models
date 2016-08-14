'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('../tc-validator');
}


var ReservationModel = ReservationModel || {};

ReservationModel.validationRules = ReservationModel.validationRules || {};


var rules = [];
rules.push(new Validator.NumberRule('organization_id', 'Organization', true));
rules.push(new Validator.NumberRule('reservation_cost', 'Reservation Cost', false, 0, 1000000));
rules.push(new Validator.DateRule('arrival_date', 'Arrival Date', true));
rules.push(new Validator.DateRule('departure_date', 'Departure Date', true));
rules.push(new Validator.FunctionRule(function(params) {
	if (params.arrival_date && params.arrival_date.length > 0) {
		if (isPastDate(params.arrival_date))
			return 'Arrival Date must NOT be in the past.';
		if (params.departure_date && params.departure_date.length > 0 && isSmallerDate(params.departure_date, params.arrival_date))
        	return 'Departure Date must NOT be smaller than Arrival Date.';
	}
	return undefined;
}));
rules.push(new Validator.NumberRule('number_of_guests', 'Number Of Guests', false, 1, 1000));
rules.push(new Validator.FunctionRule(function(params) {
	var noOfGuests = params.number_of_guests;
    if (params.guests.length > 0)
    	noOfGuests = params.guests.length;
    if (noOfGuests == undefined || noOfGuests <= 0)
        return 'Guests is required.';
    return undefined;
}));
rules.push(new Validator.FunctionRule(function(params) {
	if (params.guests.length > 0
		&& params.number_of_guests != undefined && params.number_of_guests > 0
        && params.guests.length > params.number_of_guests) {

        return 'Number of guests must not be smaller than actual guests in list.';
    }
    return undefined;
}));
rules.push(new Validator.NumberRule('property_id', 'Property', true));

ReservationModel.validationRules.creatingObject = rules;



rules = [];
rules.push(new Validator.NumberRule('reservation_cost', 'Reservation Cost', false, 0, 1000000));
rules.push(new Validator.DateRule('arrival_date', 'Arrival Date', true));
rules.push(new Validator.DateRule('departure_date', 'Departure Date', true));
rules.push(new Validator.FunctionRule(function(params) {
	if (params.arrival_date && params.arrival_date.length > 0) {
		if (isPastDate(params.arrival_date))
			return 'Arrival Date must NOT be in the past.';
		if (params.departure_date && params.departure_date.length > 0 && isSmallerDate(params.departure_date, params.arrival_date))
        	return 'Departure Date must NOT be smaller than Arrival Date.';
	}
	return undefined;
}));
rules.push(new Validator.NumberRule('number_of_guests', 'Number Of Guests', false, 1, 1000));
rules.push(new Validator.FunctionRule(function(params) {
	var noOfGuests = params.number_of_guests;
    if (params.guests.length > 0)
    	noOfGuests = params.guests.length;
    if (noOfGuests == undefined || noOfGuests <= 0)
        return 'Guests is required.';
    return undefined;
}));
rules.push(new Validator.FunctionRule(function(params) {
	if (params.guests.length > 0
		&& params.number_of_guests != undefined && params.number_of_guests > 0
        && params.guests.length > params.number_of_guests) {

        return 'Number of guests must not be smaller than actual guests in list.';
    }
    return undefined;
}));
ReservationModel.validationRules.updatingObject = rules;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = ReservationModel;
else
    window.ReservationModel = ReservationModel;

