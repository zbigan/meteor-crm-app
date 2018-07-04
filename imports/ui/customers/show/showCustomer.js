import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'
import { Customers } from '../../../api/lib/collections/customers.js';

import './showCustomer.html';

// Template.indexProduct.onCreated(function bodyOnCreated(){
//     Meteor.subscribe('customers');
// });

Template.registerHelper('log', function(what) {
    // You can use `this` and/or `Template.instance()`
    // to get template data access
    console.log(what);
});

Template.showCustomer.helpers({
    customer(){ 
        async () => {
            let id = await FlowRouter.getParam("id")
            return Customers.find({_id: id}).fetch();
        }
        
    },
});