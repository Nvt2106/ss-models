'use strict';

var Validator = Validator || {};
if (typeof require !== 'undefined') {
    Validator = require('tc-validator');
}


var ReservationModel = ReservationModel || {};

ReservationModel.validationRules = ReservationModel.validationRules || {};


var rules = [];
rules.push(new Validator.NumberRule('organization_id', 'Organization', true));
rules.push(new Validator.NumberRule('reservation_cost', 'Reservation Cost', false, 0, 1000000));
rules.push(new Validator.NumberRule('reservation_currency_id', 'Reservation Currency', true));
rules.push(new Validator.DateRule('arrival_date', 'Arrival Date', true, Validator.Date.getTodayString()));
rules.push(new Validator.DateRule('departure_date', 'Departure Date', true));
rules.push(new Validator.DateRangeRule('arrival_date', 'departure_date', 'Departure Date cannot be before Arrival Date.'));
// rules.push(new Validator.NumberRule('package_currency_id', 'Policy/Verification Currency', true));
rules.push(new Validator.NumberRule('number_of_guests', 'Number Of Guests', false, 1, 1000));
rules.push(new Validator.FunctionRule(function(params) {
    var noOfGuests = params.number_of_guests;
    if (params.guests.length > 0)
        noOfGuests = params.guests.length;
    if (noOfGuests == undefined || noOfGuests <= 0)
        return { code: Validator.ErrorCodes.MANDATORY_FIELD, msg: 'Guest is required' };
    return {};
}));
rules.push(new Validator.FunctionRule(function(params) {
    if (params.guests.length > 0
        && params.number_of_guests != undefined && params.number_of_guests > 0
        && params.guests.length > params.number_of_guests) {

        return { code: Validator.ErrorCodes.MIN_VALUE_VIOLATED,
            msg: 'Number of guests must not be smaller than ' + params.guests.length + ' (actual #guests in list).',
            field_name: 'number_of_guests' };
    }
    return {};
}));
rules.push(new Validator.NumberRule('property_id', 'Property', true));

ReservationModel.validationRules.creatingObject = rules;



rules = [];
rules.push(new Validator.NumberRule('reservation_cost', 'Reservation Cost', false, 0, 1000000));
rules.push(new Validator.DateRule('arrival_date', 'Arrival Date', true, Validator.Date.getTodayString()));
rules.push(new Validator.DateRule('departure_date', 'Departure Date', true));
rules.push(new Validator.DateRangeRule('arrival_date', 'departure_date', 'Departure Date cannot be before Arrival Date.'));
rules.push(new Validator.NumberRule('number_of_guests', 'Number Of Guests', false, 1, 1000));
rules.push(new Validator.FunctionRule(function(params) {
    var noOfGuests = params.number_of_guests;
    if (params.guests.length > 0)
        noOfGuests = params.guests.length;
    if (noOfGuests == undefined || noOfGuests <= 0)
        return { code: Validator.ErrorCodes.MANDATORY_FIELD, msg: 'Guest is required' };
    return {};
}));
rules.push(new Validator.FunctionRule(function(params) {
    if (params.guests.length > 0
        && params.number_of_guests != undefined && params.number_of_guests > 0
        && params.guests.length > params.number_of_guests) {

        return { code: Validator.ErrorCodes.MIN_VALUE_VIOLATED,
            msg: 'Number of guests must not be smaller than ' + params.guests.length + ' (actual #guests in list).',
            field_name: 'number_of_guests' };
    }
    return {};
}));
ReservationModel.validationRules.updatingObject = rules;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = ReservationModel;
else
    window.ReservationModel = ReservationModel;

