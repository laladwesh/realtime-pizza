const  Passport  = require("passport");
const  User  = require("../../models/user");
const bcrypt = require('bcrypt')
function authController(){
    const _getRedirectUrl = (req) => {
        return req.user.role === 'admin' ? '/admin/orders' : '/customer/orders'
    }
    return{
        login(req , res){
            res.render('auth/login')
        },
        postLogin(req , res, next){
            Passport.authenticate('local' , (err , user, info) => {
                if(err){
                    req.flash('error' , info.message)
                }
                if(!user){
                    req.flash('error' , info.message)
                    return res.redirect('/login')
                }
                req.logIn(user , (err) => {
                    if(err){
                        req.flash('error' , info.message)
                        return next(err)
                    }
                    return res.redirect(_getRedirectUrl(req))
                })
            })(req , res , next)
        },
        register(req , res){
            res.render('auth/register')
        },
        // async postRegister(req , res){
        //     const {name , email , password} = req.body;
        //     if(!name || !email || !password){
        //         req.flash('error' ,  'All fields are required')
        //         req.flash('name' ,  name)
        //         req.flash('email' ,  email)
        //         return res.redirect('/register')
        //     }
        //     User.exists({email: email} , (err,result) =>{
        //         if(result){
        //         req.flash('error' ,  'Email already taken')
        //         req.flash('name' ,  name)
        //         req.flash('email' ,  email)
        //         return res.redirect('/register')
        //         }
        //     })

        //     const hashedPassword = await bcrypt.hash(password , 10)

        //     const user = new User({
        //         name:name,
        //         email:email,
        //         password: hashedPassword
        //     })
        //     user.save().then((user) =>{
        //         return res.redirect('/')
        //     }).catch(err => {
        //         req.flash('error' ,  'Something Went Wrong')
        //         return res.redirect('/register')
        //     })
        // }
        async postRegister(req, res) {
            const { name, email, password } = req.body;
            
            // Validate required fields
            if (!name || !email || !password) {
                req.flash('error', 'All fields are required');
                req.flash('name', name);
                req.flash('email', email);
                return res.redirect('/register');
            }
    
            try {
                // Check if user already exists
                const existingUser = await User.exists({ email: email });
                if (existingUser) {
                    req.flash('error', 'Email already taken');
                    req.flash('name', name);
                    req.flash('email', email);
                    return res.redirect('/register');
                }
    
                // Hash password
                const hashedPassword = await bcrypt.hash(password, 10);
    
                // Create new user
                const user = new User({
                    name: name,
                    email: email,
                    password: hashedPassword
                });
    
                // Save the user
                await user.save();
                return res.redirect('/');
            } catch (err) {
                console.error(err); // Log the error for debugging
                req.flash('error', 'Something went wrong');
                return res.redirect('/register');
            }
        },
        logout(req, res, next) {
            req.logout((err) => {
                if (err) {
                    return next(err);  // Pass the error to the next middleware
                }
                return res.redirect('/login');
            });
        }
    }

} 
module.exports = authController