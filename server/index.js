//Import dependencies
const express = require('express');
const cors = require('cors');
//Import devs
const app = express();
const routes = require('./routes/routes');
//Error handdling
const handleErrors = require("./error/hanldeErrors");

//Middlewares
app.use(express.json());
app.use(cors());
require("dotenv").config();

//Routes
app.use('/', routes);

//Errors
app.use(handleErrors);

//Assign port
app.set('port', process.env.PORT || 5001);

//Server
app.listen(app.get('port'), () => {
    console.log(`Running on port ${app.get('port')}!`);
});