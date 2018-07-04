import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

SimpleSchema.extendOptions(['autoform', 'autovalue']);


export const Products = new Mongo.Collection('products');

if(Meteor.isServer) {
    Meteor.publish('products', function productsPublication() {
        return Products.find();
    });
}

ProductSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Product Name"
    },
    price: {
        type: String,
        label: "Price"        
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autovalue: () => {
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    },
    ordered_by: {
        type: String,
        optional: true,
        autoform: {
            type: "hidden"
        }
    }
}
    , { check }
);


Products.allow({
    insert: function () { FlowRouter.go('/products'); return true;},
    update: function () { return true; },
    remove: function () { return true; }
});



Products.attachSchema(ProductSchema);