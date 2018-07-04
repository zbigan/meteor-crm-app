import '../imports/startup/accounts-config.js';
import '../imports/startup/routes.js';

import '../imports/ui/customers/index/indexCustomer.js';
import '../imports/ui/customers/new/newCustomer.js';
import '../imports/ui/customers/show/showCustomer.js';

import '../imports/ui/products/index/indexProduct.js';
import '../imports/ui/products/new/newProduct.js';
// import '../imports/ui/products/show/showProduct.js';

import { Customers } from '../imports/api/lib/collections/customers.js';
window.Customers = Customers;

import { Products } from '../imports/api/lib/collections/products.js';
window.Products = Products;



// import SimpleSchema from 'simpl-schema';

// SimpleSchema.extendOptions(['autoform']);
