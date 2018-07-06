import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Orders } from '../../../api/lib/collections/orders.js';

import './editOrder.html';


if (! Meteor.userId()) {
    Bert.alert('Not-authorized', 'danger', 'growl-top-right');
}


Template.editOrder.onCreated(() => {
    Meteor.call('orders.getOne', FlowRouter.getParam("id"), (err, res) => {
        if(err != null) {
            Bert.alert(err.reason, 'danger', 'growl-top-right');
            console.log(err);
        } else {
            Session.set('order', res);
        }
    });
    
});

Template.editOrder.helpers({
    order: () => {
        return Session.get('order');
    }
});

Template.editOrder.onDestroyed(() => {
    delete Session.keys['order'];
});
