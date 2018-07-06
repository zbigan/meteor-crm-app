import { Meteor } from 'meteor/meteor';
import { Customers } from '../../../api/lib/collections/customers.js';


import './newCustomer.html';


if (! Meteor.userId()) {
    Bert.alert('Not-authorized', 'danger', 'growl-top-right');
}

