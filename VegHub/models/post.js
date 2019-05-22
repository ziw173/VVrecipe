var mongoose = require('mongoose');

var Post = mongoose.model('Post', {
    name: String,
    image: {
        data: String,
        contentType: String
    },
    body: String,
    date: String,
    tags: [],
    recipe: [],
    ingredients: [],
    likes: [],
    comments: []
});

module.exports.post = Post;

