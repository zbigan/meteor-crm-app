import { Template } from 'meteor/templating';

FlowRouter.route('/', {
    name: 'rootPage',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'rootPage'});
    }
});

FlowRouter.route('/customers', {
    name: 'indexCustomer',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'indexCustomer'});
    }
});

FlowRouter.route('/customers/new', {
    name: 'newCustomer',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'newCustomer'});
    }
});

FlowRouter.route('/customers/:id', {
    name: 'showCustomer',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'showCustomer'});
    }
});

FlowRouter.route('/products', {
    name: 'indexProduct',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'indexProduct'});
    }
});

FlowRouter.route('/products/new', {
    name: 'newProduct',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'newProduct'});
    }
});