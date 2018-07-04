import { Customers } from './collections/customers.js';
import { Products } from './collections/products.js';

Customers.addLinks({
    'orders': {
        type: 'many',
        collection: Products,
        field: '_id'
    }
});

Products.addLinks({
    'ordered_by': {
        collection: Customers,
        inversedBy: 'orders'
    }
})
