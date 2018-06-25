import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Products = new Mongo.Collection('products');

if(Meteor.isServer) {
    Meteor.publish('products', function productsPublication() {
        return Products.find();
    });
}

Meteor.methods({
    'products.insert'(name, price) {
        check(name, String);
        check(price, String);

        if(! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Products.insert({
            name,
            price,
            sold: 0,
            cratedAt: new Date(),
        });
    },

    'products.remove'(productId) {
        check(productId, String);
        
        Products.remove(productId)
    },
});