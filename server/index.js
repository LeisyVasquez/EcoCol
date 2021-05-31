const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const routes = require('./routes/routes');
require('dotenv').config({ path: '../.env' });
//Erros middlewares
const handleErrors = require("./error/hanldeErrors");

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Rutas
app.use('/api', routes);

//Errors
app.use(handleErrors);

//Assign port
app.set('port', process.env.SERVER_PORT|| 5001);

//Server
app.listen(app.get('port'), () => {
    console.log(`Running on port ${app.get('port')}!`);
});