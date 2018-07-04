import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Customers } from '../../../api/lib/collections/customers.js';

import './indexCustomer.html';


Template.indexCustomer.onCreated(function bodyOnCreated(){
    Meteor.subscribe('customers');
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

Template.indexCustomer.events({
    'click .delete'() {
        Meteor.call('customers.remove', this._id);
    },
});


Template.indexCustomer.helpers({
    customers(){
        return Customers.find({}, { 
            sort: { createdAt: -1 }, 
            // limit: Session.get("loadLimit")
        }
        );
    },
});

