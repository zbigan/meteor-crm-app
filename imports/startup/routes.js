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

FlowRouter.route('/customers/:id/edit', {
    name: 'editCustomer',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'editCustomer'});
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

FlowRouter.route('/products/:id', {
    name: 'showProduct',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'showProduct'});
    }
});

FlowRouter.route('/products/:id/edit', {
    name: 'editProduct',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'editProduct'});
    }
});

FlowRouter.route('/orders/new', {
    name: 'newOrder',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'newOrder'});
    }
});

FlowRouter.route('/orders', {
    name: 'indexOrder',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'indexOrder'});
    }
});

FlowRouter.route('/orders/:id', {
    name: 'showOrder',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'showOrder'});
    }
});

FlowRouter.route('/orders/:id/edit', {
    name: 'editOrder',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {main: 'editOrder'});
    }
});