import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Products } from '../../../api/lib/collections/products.js';

import './showProduct.html';


Template.showProduct.onCreated(() => {
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

Template.showProduct.helpers({
    product: () => {
        // let id = FlowRouter.getParam("id")
        // return Products.find({_id: FlowRouter.getParam("id")});

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
    },
    currentUrl: () => {
        return FlowRouter.current().path;
    }

});

Template.showProduct.onDestroyed(() => {
    delete Session.keys['product'];
});
