import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
import { Session } from 'meteor/session'

export const Orders = new Mongo.Collection('orders');

if(Meteor.isServer) {
    Meteor.publish('orders', function ordersPublication() {
        return Orders.find();
    });
}

OrderSchema = new SimpleSchema({
    customer: {
        type: String,
        label: 'Select Customer',
        autoform: {
            type: 'select',
            options: 
                function () {
                    Meteor.call('customers.getFullNamesForSchema', (err, res)=>{
                        if(err){
                            console.log(err);
                        } else {
                            Session.set('fullNames', res);
                        }
                    });
                    return Session.get('fullNames');
                    // let fullNames = Session.get('fullNames');
                    // delete Session.keys['fullNames']
                    // return fullNames;
                }
        }
    }, 
    product: {
        type: String,
        label: 'Choose Product',
        autoform: {
            type: 'select',
            options: 
                function () {
                    Meteor.call('products.getProductNamesForSchema', (err, res)=>{
                        if(err){
                            console.log(err);
                        } else {
                            Session.set('productNames', res);
                        }
                    });
                    return Session.get('productNames');
                    // let fullNames = Session.get('productNames');
                    // delete Session.keys['productNames']
                    // return fullNames;
                }
        }
    },
    quantity: {
        type: Number,
    }
});

Orders.attachSchema(OrderSchema);
