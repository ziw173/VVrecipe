const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.render('register');
});

router.post('/register', function (req, res) {
    var username = req.body.username;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var password = req.body.password;
    var password2 = req.body.password2;

    //Validation
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);


    var e = req.validationErrors();
    if (e) {
        res.render('register', {
            errors: e,
        });
    } else {
        var newUser = new User( {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            image: String,
            bio: String,
            recipes: [],
            likes: [],
            saved: []
        });

        User.createUser(newUser, (err, user) => {
            if (err) throw err;
            console.log(user);
        });

        req.flash('success_msg', 'Thank you for registering!');
        res.locals.message = req.flash();
        res.redirect('/register');
    }
    
});

router.post('/login', (req, res) => {
    User.getUser(req.body.username, (err, user) => {
        if (err) throw err;

        if (!user) res.redirect('/');

        User.comparePassword(req.body.password, user.password, (err, matches) => {
            if (err) throw err;

            if (matches) {
                req.session.user = user;
                console.log('successfully logged in');
                res.redirect('/');
            } else {
                res.redirect('/register');
            };
        });
    });
});

module.exports = {
    router: router
}