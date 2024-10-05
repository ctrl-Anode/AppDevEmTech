const info = require('../models/info');
const multer = require('multer');
const con = {
    index:(req, res)=>{
        res.render('index');   
    },
    signup:(req, res)=>{
        res.render('signup');
    },
    login:(req, res)=>{
        res.render('login');   
    },
    terms:(req, res)=>{
        res.render('terms');
    },
    dashboard:(req, res)=>{
        res.render('dashboard');   
    },
    upload:(req, res)=>{
        res.render('upload');   
    },
    usong:(req, res)=>{
        res.render('usong');   
    },
    save:(req, res)=>{
        const data = req.body;
        info.save(data, (err) =>{
            if (err) throw err;
            res.redirect('terms');
        })   
    },
    userlogin: (req, res) => {
        const { email, password } = req.body;
        info.findUserByEmail(email, (err, results) => {
            if (err) throw err;
            if (results.length && results[0].password === password) {
                res.redirect('dashboard');
            } else {
                res.send('Invalid email or password');
            }
        });
    }
};
module.exports = con;