import { Customers }  from '../lib/collections/customers.js';
import { Products } from '../lib/collections/products.js';
import { Orders } from '../lib/collections/orders.js';
import { check } from 'meteor/check';



// if(Meteor.isServer) {
//     Meteor.publish('customers', function customersPublication() {
//         return Customers.find();
//     });
// }

Meteor.methods({
    'customers.getFullNamesForSchema' () {
        let customerFullName = Customers.createQuery({
            fullName: 1,
        });
        let fetched = customerFullName.fetch();
        let readyForSchema = [];
        fetched.forEach(element => {
            readyForSchema.push(
                {label: element.fullName, value: element.fullName}
            );
        });
        return readyForSchema;
    },

    'products.getProductNamesForSchema' () {
        let products = Products.createQuery({
            name: 1,
        });
        let fetched = products.fetch();
        let readyForSchema = [];
        fetched.forEach(element => {
            readyForSchema.push(
                {label: element.name, value: element.name}
            );
        });
        return readyForSchema;
    },

    'customers.getOne' (id) {
        let customer = Customers.createQuery({
            $filters: {_id: id},
            firstName: 1,
            lastName: 1,
            age: 1,
            email: 1
        });
        return customer.fetchOne();
    },

    'products.getOne' (id) {
        let product = Products.createQuery({
            $filters: {_id: id},
            name: 1,
            price: 1
        });
        return product.fetchOne();
    },

    'orders.getOne' (id) {
        let order = Orders.createQuery({
            $filters: {_id: id},
            customer: 1,
            product: 1,
            quantity: 1
        });
        return order.fetchOne();
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
        
        Products.remove(productId);
    },

    'orders.remove'(orderId) {
        check(orderId, String);
        
        Orders.remove(ordertId);
    },
});