import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './customer.html';

Template.customer.events({
    'click .delete'() {
        Meteor.call('customers.remove', this._id);
    },
});