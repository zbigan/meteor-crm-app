import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './product.html';

Template.product.events({
    'click .delete'() {
        Meteor.call('products.remove', this._id);
    },
});