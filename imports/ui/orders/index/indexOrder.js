import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Orders } from '../../../api/lib/collections/orders.js';

import './indexOrder.html';

if (! Meteor.userId()) {
    Bert.alert('Not-authorized', 'danger', 'growl-top-right');
}

Template.indexOrder.onCreated(function bodyOnCreated(){
    Meteor.subscribe('orders');
});

//infinite scroll logic
if(Meteor.isClient) {
    
    Session.set("loadLimit", 4);

    lastScrollTop = 0;
 
    $(window).scroll(function(event){
        //test if we are near the bottom of the window
        if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
            //where we are in the page?
            const scrollTop = $(this).scrollTop();
            //test if we are going down
            if(scrollTop > lastScrollTop) {
                Session.set("loadLimit", Session.get("loadLimit") + 2);
            }
            lastScrollTop = scrollTop;
        }
    });
}

Template.indexOrder.events({
    'click .delete'() {
        Meteor.call('orders.remove', this._id);
    },
});


Template.indexOrder.helpers({
    orders(){
        return Orders.find({}, { 
            sort: { createdAt: -1 }, 
            // limit: Session.get("loadLimit")
        }
        );
    },
});

