const express = require('express');
const app = express();

const morgan = require('morgan');
const cors = require('cors');
const body = require('body-parser');
// const moongose = require('mongoose');

app.use(morgan('dev'));
app.use(cors());
app.use(body.urlencoded({ extended: false}));
app.use(body.json());

const route = require('./route')
// Routing
app.use('/res', route);

module.exports = app;