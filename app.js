const mongoose = require('mongoose');
require('./db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/home', (req, res) =>{
	res.render('home');
});

app.listen(3000);