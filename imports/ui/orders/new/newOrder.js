import { Orders } from '../../../api/lib/collections/orders.js';
import './newOrder.html';

if (! Meteor.userId()) {
    Bert.alert('Not-authorized', 'danger', 'growl-top-right');
}