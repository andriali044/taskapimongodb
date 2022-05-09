const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

app.get('/posts', (req, res) => {
    res.send('we are on posts');
});

//connect to db
mongoose.connect('mongodb://127.0.0.1:27017/andri', { useNewUrlParser: true}, () => {
    console.log('connect to db')
});


app.listen(3000);