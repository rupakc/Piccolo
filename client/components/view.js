import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

	Template.view.helpers({
	isPositive: function (sentiment) {
		return sentiment === "Positive"
	},

	isNegative: function (sentiment) {
		return sentiment === "Negative"
	},

	isNeutral: function (sentiment) {
		return sentiment === "Neutral"
	}

});
