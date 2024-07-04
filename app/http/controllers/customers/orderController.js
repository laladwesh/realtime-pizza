// const Order = require("../../../models/order");
// const moment = require('moment')
// function orderController() {
//     return {
//         store(req, res) {
//             const { phone, address } = req.body;

//             // Check if phone and address are provided
//             if (!phone || !address) {
//                 req.flash('error', 'All fields are required');
//                 return res.redirect('/cart');
//             }

//             // Create a new order
//             const order = new Order({
//                 customerId: req.user._id,
//                 items: req.session.cart.items,
//                 phone: phone,
//                 address: address,
//             });

//             // Save the order to the database
//             order.save()
//                 .then(result => {
//                     Order.populate(result, { path: 'customerId' }, (err, placedOrder) => {
//                         req.flash('success', 'Order placed successfully');
//                     delete req.session.cart;
//                     //Emit
//                     const eventEmitter = req.app.get('eventEmitter')
//                 eventEmitter.emit('orderPlaced' , result)
//                     return res.redirect('/customer/orders');
//                     })
                    
//                 })
//                 .catch(err => {
//                     console.error("Error saving order: ", err); // Log the error for debugging
//                     req.flash('error', 'Something went wrong');
//                     return res.redirect('/cart');
//                 });
//         },
//         async index(req ,res){
//             const orders = await Order.find({customerId:req.user._id} , null , {sort : {'createdAt' : -1}})
//             res.header('Cache-Control', 'no-store')
//             res.render('customers/orders' , {orders:orders , moment})
//         },
//         async show(req , res){
//             const order = await Order.findById(req.params.id)
//             if(req.user._id.toString() === order.customerId.toString()){
//                 res.render('customers/singleOrder' , {order:order})
//             } else{
//                 res.redirect('/')
//             }
//         }
//     }
// }

// module.exports = orderController;
const Order = require("../../../models/order");
const moment = require('moment');

function orderController() {
    return {
        store(req, res) {
            const { phone, address } = req.body;

            // Check if phone and address are provided
            if (!phone || !address) {
                req.flash('error', 'All fields are required');
                return res.redirect('/cart');
            }

            // Create a new order
            const order = new Order({
                customerId: req.user._id,
                items: req.session.cart.items,
                phone: phone,
                address: address,
            });

            // Save the order to the database
            order.save()
                .then(result => {
                    return Order.populate(result, { path: 'customerId' });
                })
                .then(placedOrder => {
                    req.flash('success', 'Order placed successfully');
                    delete req.session.cart;

                    // Emit event
                    const eventEmitter = req.app.get('eventEmitter');
                    eventEmitter.emit('orderPlaced', placedOrder);

                    return res.redirect('/customer/orders');
                })
                .catch(err => {
                    console.error("Error saving order: ", err); // Log the error for debugging
                    req.flash('error', 'Something went wrong');
                    return res.redirect('/cart');
                });
        },
        async index(req, res) {
            const orders = await Order.find({ customerId: req.user._id }, null, { sort: { 'createdAt': -1 } });
            res.header('Cache-Control', 'no-store');
            res.render('customers/orders', { orders: orders, moment });
        },
        async show(req, res) {
            const order = await Order.findById(req.params.id);
            if (req.user._id.toString() === order.customerId.toString()) {
                res.render('customers/singleOrder', { order: order });
            } else {
                res.redirect('/');
            }
        }
    };
}

module.exports = orderController;