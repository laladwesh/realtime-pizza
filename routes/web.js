const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const orderController = require("../app/http/controllers/customers/orderController");
const homeController = require("../app/http/controllers/homeController");
const adminOrderController = require("../app/http/controllers/admin/orderController");
const statusController = require("../app/http/controllers/admin/statusController");

//middlewares
const guest = require('../app/http/middleware/guest')
const auth = require('../app/http/middleware/auth')
const admin = require('../app/http/middleware/admin');

const initRoutes = (app) => {
    app.get('/' , homeController().index)
    app.get('/login' ,guest ,  authController().login)
    app.post('/login' , authController().postLogin)
    app.get('/register' , guest,  authController().register)
    app.post('/register' , authController().postRegister)
    app.post('/logout' , authController().logout)
    app.get('/cart' , cartController().cart)
    app.post('/update-cart' , cartController().update)

    //customer routes 
    app.post('/orders' , auth ,orderController().store)
    app.get('/customer/orders' , auth ,  orderController().index)
    app.get('/customer/orders/:id' , auth ,  orderController().show)

    //admin routes
    app.get('/admin/orders' , admin ,  adminOrderController().index)

    app.post('/admin/order/status' , admin ,  statusController().update)
}

module.exports = initRoutes