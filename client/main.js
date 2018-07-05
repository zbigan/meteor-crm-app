import '../imports/startup/accounts-config.js';
import '../imports/startup/routes.js';

import '../imports/ui/customers/index/indexCustomer.js';
import '../imports/ui/customers/new/newCustomer.js';
import '../imports/ui/customers/show/showCustomer.js';
import '../imports/ui/customers/edit/editCustomer.js';

import '../imports/ui/products/index/indexProduct.js';
import '../imports/ui/products/new/newProduct.js';
import '../imports/ui/products/show/showProduct.js';
import '../imports/ui/products/edit/editProduct.js';

import '../imports/ui/orders/new/newOrder.js';


import '../imports/ui/root-page/rootPage.js';

import { Customers } from '../imports/api/lib/collections/customers.js';
window.Customers = Customers;

import { Products } from '../imports/api/lib/collections/products.js';
window.Products = Products;

import { Orders } from '../imports/api/lib/collections/orders.js';
window.Orders = Orders;

