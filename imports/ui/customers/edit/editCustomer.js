import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Customers } from '../../../api/lib/collections/customers.js';

import './editCustomer.html';


Template.editCustomer.onCreated(() => {
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

Template.editCustomer.helpers({
    customer: () => {
        // let id = FlowRouter.getParam("id")
        // return Customers.find({_id: FlowRouter.getParam("id")});

        // Meteor.call('customers.getOne', FlowRouter.getParam("id"), (err, res) => {
        // if(err != null) {
        //     Bert.alert(err.reason, 'danger', 'growl-top-right');
        //     console.log(err);
        // } else {
        //     console.log(res);
        //     return res;
        // }
    // });
        return Session.get('customer');
    }
});

Template.editCustomer.onDestroyed(() => {
    delete Session.keys['customer'];
});
