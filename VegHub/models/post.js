var mongoose = require('mongoose');

var Post = mongoose.model('Post', {
    user: String,
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

module.exports = Post;

