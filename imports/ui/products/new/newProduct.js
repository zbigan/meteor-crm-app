import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Products } from '../../../api/lib/collections/products.js';

import './newProduct.html';

if (! Meteor.userId()) {
    Bert.alert('Not-authorized', 'danger', 'growl-top-right');
}
