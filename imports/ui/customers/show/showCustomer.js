import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Customers } from '../../../api/lib/collections/customers.js';

import './showCustomer.html';

Template.indexCustomer.onCreated(function bodyOnCreated(){
    Meteor.subscribe('customers');
});


Template.showCustomer.onCreated(() => {
    Meteor.call('customers.getOne', FlowRouter.getParam("id"), (err, res) => {
        if(err != null) {
            // Bert.alert(err.reason, 'danger', 'growl-top-right');
            console.log(err);
        } else {
            // console.log(res);
            Session.set('customer', res);
        }
    });
    
});

Template.showCustomer.helpers({
    customer: () => {
        return Session.get('customer'); 
    },
    currentUrl: () => {
        return FlowRouter.current().path;
    }
});

Template.showCustomer.onDestroyed(() => {
    delete Session.keys['customer'];
});
