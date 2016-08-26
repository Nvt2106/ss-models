
var Validator = Validator || {};
if (typeof require !== 'undefined') {
	Validator = require('tc-validator');
}

var AssignedOrganizationPolicyModel = AssignedOrganizationPolicyModel || {};

AssignedOrganizationPolicyModel.validationRules = AssignedOrganizationPolicyModel.validationRules || {};

rules = [];
rules.push(new Validator.NumberRule('policy_id', 'Policy', true));
rules.push(new Validator.NumberRule('price', 'Policy Price', true, 0, 1000000));
rules.push(new Validator.NumberRule('extra_night_price', 'Extra Night Price', true, 0, 1000000));
AssignedOrganizationPolicyModel.validationRules.creatingObject = rules;


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = AssignedOrganizationPolicyModel;
else
    window.AssignedOrganizationPolicyModel = AssignedOrganizationPolicyModel;
