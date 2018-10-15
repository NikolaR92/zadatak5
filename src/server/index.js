const express = require('express');

const logger = require('morgan');

const bodyParser = require('body-parser');


// This will be our application entry. We'll setup our server here.

const http = require('http');

// Set up the express app

const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');

	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

	next();
});

// Log requests to the console.
// console.log(path.join(__dirname,'../client'));
// app.use(express.static(path.join(__dirname,'../client')));
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// models
const models = require('./models');

models.sequelize.sync().then(() => {
	console.log('Database looks fine');
}).catch((err) => {
	console.log(err, 'Something went wrong with Database');
});

// Setup a default catch-all route that sends back a welcome messagt.
require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({
	message: 'Welcome to the server',
}));

const port = parseInt(process.env.PORT, 10) || 3001;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

module.exports = app;
