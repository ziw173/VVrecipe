var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const User = mongoose.model('User', {
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    image: String,
    bio: String,
    recipes: [],
    likes: [],
    saved: []
});

module.exports = User;

module.exports.createUser = (user, cb) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            user.save(cb);
        });
    });
}

module.exports.getUser = (username, cb) => {
    var query = {username: username};
    User.findOne(query, cb);
};

module.exports.getUserById = (id, cb) => {
    User.findById(id, cb);
};

module.exports.comparePassword = (password, hash, cb) => {
    bcrypt.compare(password, hash, (err, matches) => {
        if (err) throw err;
        cb(null, matches);
    });
};

