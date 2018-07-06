import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Orders } from '../../../api/lib/collections/orders.js';

import './showOrder.html';

if (! Meteor.userId()) {
    Bert.alert('Not-authorized', 'danger', 'growl-top-right');
}

Template.showOrder.onCreated(() => {
    Meteor.call('orders.getOne', FlowRouter.getParam("id"), (err, res) => {
        if(err != null) {
            Bert.alert(err.reason, 'danger', 'growl-top-right');
            console.log(err);
        } else {
            Session.set('order', res);
        }
    });
    
});

Template.showOrder.helpers({
    order: () => {
        return Session.get('order'); 
    },
    currentUrl: () => {
        return FlowRouter.current().path;
    }
});

Template.showOrder.onDestroyed(() => {
    delete Session.keys['order'];
});
