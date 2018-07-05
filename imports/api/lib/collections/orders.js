import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
import { Customers } from './customers.js';

export const Orders = new Mongo.Collection('orders');

if(Meteor.isServer) {
    Meteor.publish('orders', function ordersPublication() {
        return Orders.find();
    });
}

let customers = Customers.find({
    firstName: 1,
});

OrderSchema = new SimpleSchema({
    Customer_fullName: {
        type: String,
        allowedValues: customers,
        // autoform: {
        //     options: function () {
        //         return _.map(customers, function (c, i) {
        //             return {label: "Color " + i + ": " + c, value: c};
        //         });
        //     }
        // }
    }
});
// console.log(customers.fetch());

Orders.attachSchema(OrderSchema);
