import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Products } from '../../../api/lib/collections/products.js';

import './editProduct.html';


Template.editProduct.onCreated(() => {
    Meteor.call('products.getOne', FlowRouter.getParam("id"), (err, res) => {
        if(err != null) {
            // Bert.alert(err.reason, 'danger', 'growl-top-right');
            console.log(err);
        } else {
            // console.log(res);
            Session.set('product', res);
        }
    });
    
});

Template.editProduct.helpers({
    product: () => {
        // let id = FlowRouter.getParam("id")
        // return products.find({_id: FlowRouter.getParam("id")});

        // Meteor.call('products.getOne', FlowRouter.getParam("id"), (err, res) => {
        // if(err != null) {
        //     Bert.alert(err.reason, 'danger', 'growl-top-right');
        //     console.log(err);
        // } else {
        //     console.log(res);
        //     return res;
        // }
    // });
        return Session.get('product');
    }
});

Template.editProduct.onDestroyed(() => {
    delete Session.keys['product'];
});
