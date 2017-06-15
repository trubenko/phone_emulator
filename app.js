var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    faker = require('faker'),
    _ = require('lodash');

var webpackMW = require('webpack-dev-middleware'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config');

require('./src/enties');

let mongoose = require('mongoose');
const Contact = require('./Models/Contact');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/phone_test');
mongoose.connection
    .once('open', () => {
        console.log('Connected  successfully')
    })
    .on('error', (err) => {
            console.log(err);
        }
    );


var app = module.exports = express();
app.use(webpackMW(webpack(webpackConfig)));
app.set('port', process.env.PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public/dist')));
app.use(express.static(path.join(__dirname, 'public')));

/*
 // CUSTOMERS API

 app.route('/api/customers')
 .get(function(req, res) {
 Customer.findAll().then(function(customers) {
 res.json(customers);
 })
 })
 .post(function(req, res) {
 var customer = Customer.build(_.pick(req.body, ['name', 'address', 'phone']));
 customer.save().then(function(customer){
 res.json(customer);
 });
 });

 app.route('/api/customers/:customer_id')
 .get(function(req, res) {
 Customer.findById(req.params.customer_id).then(function(customer) {
 res.json(customer);
 });
 })
 .put(function(req, res) {
 Customer.findById(req.params.customer_id).then(function(customer) {
 customer.update(_.pick(req.body, ['name', 'address', 'phone'])).then(function(customer) {
 res.json(customer);
 });
 });
 })
 .delete(function(req, res) {
 Customer.findById(req.params.customer_id).then(function(customer) {
 customer.destroy().then(function(customer) {
 res.json(customer);
 });
 });
 });

 // PRODUCTS API

 app.route('/api/products')
 .get(function(req, res) {
 Product.findAll().then(function(products) {
 res.json(products);
 })
 })
 .post(function(req, res) {
 var product = Product.build(_.pick(req.body, ['name', 'price']));
 product.save().then(function(product){
 res.json(product);
 });
 });

 app.route('/api/products/:product_id')
 .get(function(req, res) {
 Product.findById(req.params.product_id).then(function(product) {
 res.json(product);
 });
 })
 .put(function(req, res) {
 Product.findById(req.params.product_id).then(function(product) {
 product.update(_.pick(req.body, ['name', 'price'])).then(function(product) {
 res.json(product);
 });
 });
 })
 .delete(function(req, res) {
 Product.findById(req.params.product_id).then(function(product) {
 product.destroy().then(function(product) {
 res.json(product);
 });
 });
 });


 // INVOICES API

 app.route('/api/invoices')
 .get(function(req, res) {
 Invoice.findAll().then(function(invoices) {
 res.json(invoices);
 })
 })
 .post(function(req, res) {
 var invoice = Invoice.build(_.pick(req.body, ['customer_id', 'discount', 'total']));
 invoice.save().then(function(invoice){
 res.json(invoice);
 });
 });

 app.route('/api/invoices/:invoice_id')
 .get(function(req, res) {
 Invoice.findById(req.params.invoice_id).then(function(invoice) {
 res.json(invoice);
 });
 })
 .put(function(req, res) {
 Invoice.findById(req.params.invoice_id).then(function(invoice) {
 invoice.update(_.pick(req.body, ['customer_id', 'discount', 'total'])).then(function(invoice) {
 res.json(invoice);
 });
 });
 })
 .delete(function(req, res) {
 Invoice.findById(req.params.invoice_id).then(function(invoice) {
 invoice.destroy().then(function(invoice) {
 res.json(invoice);
 });
 });
 });


 // INVOICE ITEMS API

 app.route('/api/invoices/:invoice_id/items')
 .get(function(req, res) {
 InvoiceItem.findAll({where: { invoice_id: req.params.invoice_id }}).then(function(invoice_items) {
 res.json(invoice_items);
 })
 })
 .post(function(req, res) {
 var invoice_item = InvoiceItem.build(_.pick(req.body, ['product_id', 'quantity']));
 invoice_item.set('invoice_id', req.params.invoice_id);
 invoice_item.save().then(function(invoice_item){
 res.json(invoice_item);
 });
 });

 app.route('/api/invoices/:invoice_id/items/:id')
 .get(function(req, res) {
 InvoiceItem.findById(req.params.id).then(function(invoice_item) {
 res.json(invoice_item);
 });
 })
 .put(function(req, res) {

 InvoiceItem.findById(req.params.id).then(function(invoice_item) {
 invoice_item.update(_.pick(req.body, ['product_id', 'quantity'])).then(function(invoice_item) {
 res.json(invoice_item);
 });
 });
 })
 .delete(function(req, res) {
 console.log(req.params);
 InvoiceItem.findById(req.params.id).then(function(invoice_item) {
 invoice_item.destroy().then(function(invoice_item) {
 res.json(invoice_item);
 });
 });
 });

 */





// Redirect all non api requests to the index
app.get('/', function (req, res) {
    res.send('Send')
})


app.route('/contacts')
    .get(function (req, res) {
        // res.sendFile(path.join(__dirname, 'public/dist', 'index.html'));
        Contact.find({})
            .sort({name: 1})
            .then((result) => {
                res.send(result)
            })

    })
    .post(function (req, res) {

        let contact = new Contact(req.body);
        contact.save()
            .then((contact) => res.json(contact))
    });

app.route('/contacts/:id')
    .get(function (req, res) {
        Contact.findById(req.params.id, function (err, contact) {

            res.json(contact);
        })

    })
    .put(function (req, res) {

        Contact.findByIdAndUpdate({_id: req.params.id}, req.body,
            function (err, updated) {
                res.json(updated);
            })
    })


// Starting express server
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});