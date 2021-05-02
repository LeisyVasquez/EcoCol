const express = require('express');
const cors = require('cors');
const app = express();
//Routes
//Definir rutas aqui
//Erros middlewares
const handleErrors = require("./error/hanldeErrors");

//Middlewares
app.use(cors());
app.use(express.json());
require('dotenv').config();

//Routes
//Use routes here
//Errors
app.use(handleErrors);

//Assign port
app.set('port', 5001);

//Server
app.listen(app.get('port'), () => {
    console.log(`Running on port ${app.get('port')}!`);
});