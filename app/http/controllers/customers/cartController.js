const { update } = require("immutable");

function cartController(){
    return{
        cart(req , res){
            res.render('customers/cart');
        },
        update(req , res){
            //for the first time creating cart
            if(!req.session.cart){
                req.session.cart = {
                    items:{},
                    totalqty:0,
                    totalPrice: 0
                }
            }
            let cart = req.session.cart
                //check if item doesnt exixsts in cart 
                if(!cart.items[req.body._id]){
                    cart.items[req.body._id] ={
                        item:req.body,
                        qty:1
                    }
                    cart.totalqty = cart.totalqty + 1
                    cart.totalPrice = cart.totalPrice + req.body.price
                }  else{
                    cart.items[req.body._id].qty++;
                    cart.totalqty++;
                    cart.totalPrice = cart.totalPrice + req.body.price
                }
            res.json({totalqty: req.session.cart.totalqty})
        }
    }
} 
module.exports = cartController