require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()
const expressLayout = require('express-ejs-layouts')
const initRoutes = require('./routes/web.js')
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require("express-flash")
const { collection } = require('./app/models/menu.js')
const MongoStore = require('connect-mongo');
const passport = require('passport')
const Emitter = require('events')
//database connections
mongoose.connect(process.env.MONGO_CONNECTION_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database Connected');
});
connection.on('error', (err) => {
    console.error('Connection Failed:', err);
});

//Session store 

let mongoStore = new MongoStore({
    mongoUrl:process.env.MONGO_CONNECTION_URL,
    collection: 'sessions'
})
//emitter
const eventEmitter = new Emitter()
app.set('eventEmitter' , eventEmitter)

//session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: {maxAge:1000*60*60*24}
}))
app.use(flash())
//passport config
const passportInit = require('./app/config/passport.js')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

//express set template engine 
app.use(expressLayout)
app.set('views' , path.join(__dirname , '/resources/views'))
app.set('view engine' , 'ejs')
//assests
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use((req , res , next) =>{
    res.locals.session = req.session
    res.locals.user = req.user 
    next()
})
//routes
initRoutes(app);

//error handling
app.use((req , res)=>{
    res.status(404).render('errors/404')
})


//express listening
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

//Socket.io
const { Server } = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
    socket.on('join', (orderId) => {
        socket.join(orderId)
      })
})

eventEmitter.on('orderUpdated', (data) => {
    io.to(`order_${data.id}`).emit('orderUpdated', data)
})
eventEmitter.on('orderPlaced', (data) => {
    io.to('adminRoom').emit('orderPlaced', data)
})