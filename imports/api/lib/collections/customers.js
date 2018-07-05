import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

SimpleSchema.extendOptions(['autoform']);

export const Customers = new Mongo.Collection('customers');

if(Meteor.isServer) {
    Meteor.publish('customers', function customersPublication() {
        return Customers.find();
    });
}

CustomerSchema = new SimpleSchema({
    firstName: {
        type: String,
        label: "First Name"
    },
    lastName: {
        type: String,
        label: "Last Name"        
    },
    age: {
        type: String,
        label: "Age"        
    },
    email: {
        type: String,
        label: "E-mail"        
    },
    orders: {
        type: String,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    // createdAt: {
    //     type: Date,
    //     label: "Created At",
    //     optional: true,        
    //     // autovalue: () => {
    //     //     return new Date()
    //     // },
    //     autoform: {
    //         // type: "hidden"
    //         omit: true
    //     }
    // }
}
    // , { tracker: Tracker }
    // , { check }
);


// Customers.allow({
//     insert: function () { FlowRouter.go('/customers'); return true;},
//     update: function () { return true; },
//     remove: function () { return true; }
// });



Customers.attachSchema(CustomerSchema);