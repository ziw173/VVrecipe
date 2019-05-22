var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    if (req.session.user) {
        res.render('profile', {
            user: req.session.user.username
        });
    } else {
        res.render('profile');
    }
});

router.get('/logout', (req, res) => {
    req.session.user = null;
    res.redirect('/');
});

module.exports = {
    router: router
}