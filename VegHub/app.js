const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const expressValidator = require('express-validator');
const index = require('./routes/index');
const recipe = require('./routes/recipe');
const register = require('./routes/register');
const profile = require('./routes/profile');
const singleRecipe = require('./routes/singleRecipe');
const URI = require('./keys/mongo');
const mongoose = require('mongoose');
const flash = require('connect-flash');


const app = express();

//template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//express-validator
app.use(expressValidator());

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//Express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

//Connect flash
app.use(flash());

app.use( (req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

//port
app.set('port', (process.env.PORT || 3000));

//Routes
app.use('/', index.router);
app.use('/recipe', recipe.router);
app.use('/register', register.router);
app.use('/profile', profile.router);
app.use('/singleRecipe', singleRecipe.router);
app.use('/register', register.router);

//Global variables
app.use((req, res, next) => {
    res.locals.user = res.locals.user || null;
    next();
});

//Connect DB
mongoose.connect(URI,
    {useNewUrlParser: true}, (err) => {
        if (err) throw err;
        console.log("The Mongoose connection is ready.");
});

//Start server
const server = app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'));
});