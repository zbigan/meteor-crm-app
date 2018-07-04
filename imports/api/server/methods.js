import  Customers  from '../lib/collections/customers.js';
import { Products } from '../lib/collections/products.js';
import { check } from 'meteor/check';


// if(Meteor.isServer) {
//     Meteor.publish('customers', function customersPublication() {
//         return Customers.find();
//     });
// }

Meteor.methods({
    'customers.getOne' (id) {
        const customer = Customers.createQuery({
            $filters: {
                _id: id,
            },
            firstName: 1,
            lastName: 1,
            age: 1,
            email: 1
        });

        return customer.fetch();
    },

    'customers.insert'(firstName, lastName, age, email) {
        if(! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        let inserted = Customers.insert({
            firstName,
            lastName,            
            age,
            email
            // owner: Meteor.userId(),
            // username: Meteor.user().username,
        });

        return inserted;
    },

    'customers.remove'(customerId) {
        check(customerId, String);
        
        Customers.remove(customerId);
    },

    'products.insert'(name, price, type) {
        check(name, String);
        check(price, String);
        check(type, String);

        if(! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        let inserted = Products.insert({
            name,
            price,            
            type,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
        });

        return inserted;
    },

    'products.remove'(productId) {
        check(productId, String);
        
        let removed = Products.remove(productId);
        return removed;
    },
});