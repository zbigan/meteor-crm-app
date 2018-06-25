import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Customers = new Mongo.Collection('customers');

ProductSchema = new SimpleSchema({
    
});

CustomerSchema = new SimpleSchema({
    firstName: {
        type: String,
    },

    lastName: {
        type: String,
    },

    age: {
        type: String,
    },

    email: {
        type: String,
    },

    orders: {
        type: [ProductSchema],
    },

    createdAt: {
        type: Date,
    },

    owner: {
        type: String,
    },

    username: {
        type: String,
    },
});

if(Meteor.isServer) {
    Meteor.publish('customers', function customersPublication() {
        return Customers.find();
    });
}


Meteor.methods({
    'customers.insert'(firstName, lastName, age, email) {
        check(firstName, String);
        check(lastName, String);
        check(age, String);                
        check(email, String);

        if(! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Customers.insert({
            firstName,
            lastName,            
            age,
            email,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
        });
    },

    'customers.remove'(customerId) {
        check(customerId, String);
        
        Customers.remove(customerId)
    },
});