import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Products } from '../../../api/lib/collections/products.js';

import './newProduct.html';

// Template.newCustomer.events({
//     'submit .new-task'(event) {
//         event.preventDefault();

//         const target = event.target;
//         const firstName = target.firstName.value;
//         const lastName = target.lastName.value;
//         const age = target.age.value;                
//         const email = target.email.value;        

//         Meteor.call('customers.insert', firstName, lastName, age, email);

//         target.firstName.value = '';
//         target.lastName.value = '';        
//         target.age.value = '';        
//         target.email.value = '';
        
//     },

//     'submit .form-inline'(event) {
//         event.preventDefault();

//         const target = event.target;
//         const searchTerm = target.search.value;

//         Meteor.call()
//     }
    
// });

