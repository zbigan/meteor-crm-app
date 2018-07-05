import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './indexProduct.html';


Template.indexProduct.onCreated(function bodyOnCreated(){
    Meteor.subscribe('products');
});

//infinite scroll logic
// if(Meteor.isClient) {
    
//     Session.set("loadLimit", 4);

//     lastScrollTop = 0;
 
//     $(window).scroll(function(event){
//         //test if we are near the bottom of the window
//         if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
//             //where we are in the page?
//             const scrollTop = $(this).scrollTop();
//             //test if we are going down
//             if(scrollTop > lastScrollTop) {
//                 Session.set("loadLimit", Session.get("loadLimit") + 2);
//             }
//             lastScrollTop = scrollTop;
//         }
//     });
// }

Template.indexProduct.events({
    'click .delete'() {
        Meteor.call('products.remove', this._id);
    },
});


Template.indexProduct.helpers({
    products(){
        return Products.find({}, { 
            sort: { createdAt: -1 }, 
            // limit: Session.get("loadLimit")
        }
        );
    },
});

