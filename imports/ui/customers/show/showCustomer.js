import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'
import { Customers } from '../../../api/lib/collections/customers.js';

import './showCustomer.html';

Template.registerHelper('log', function(what) {
  // You can use `this` and/or `Template.instance()`
  // to get template data access
  console.log(what);
});

Template.showCustomer.helpers({
    customer(){
        let id = FlowRouter.getParam("id")
        return Customers.find({_id: id});
    },
});