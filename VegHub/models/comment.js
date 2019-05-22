var mongoose = require('mongoose');

var Comment = mongoose.model('Comment', {
    name: String,
    image: {
        data: String,
        contentType: String
    },
    body: String,
    date: String,
});

module.exports = Comment;