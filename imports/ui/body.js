import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Customers } from '../api/customers.js';
import { Session } from 'meteor/session';

import './customer.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated(){
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

Template.body.helpers({
    customers(){
        //only show current users's leads
        return Customers.find({ username: Meteor.user().username }, { sort: { createdAt: -1 }, limit: Session.get("loadLimit")});
    },
});

Template.body.events({
    'submit .new-task'(event) {
        event.preventDefault();

        const target = event.target;
        const firstName = target.firstName.value;
        const lastName = target.lastName.value;
        const age = target.age.value;                
        const email = target.email.value;        

        Meteor.call('customers.insert', firstName, lastName, age, email);

        target.firstName.value = '';
        target.lastName.value = '';        
        target.age.value = '';        
        target.email.value = '';
        
    },

    'submit .form-inline'(event) {
        event.preventDefault();

        const target = event.target;
        const searchTerm = target.search.value;

        Meteor.call()
    }
    
});