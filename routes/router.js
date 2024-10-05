const express = require('express');
const router = express.Router();
const con = require('../controller/HpCotroller'); 

router.get('/', con.index);
router.get('/signup', con.signup);
router.get('/login', con.login);
router.post('/login', con.userlogin);
router.get('/terms', con.terms);
router.get('/dashboard', con.dashboard);
router.get('/upload', con.upload);
router.get('/usong', con.usong);

router.post('/save', con.save);


module.exports = router;