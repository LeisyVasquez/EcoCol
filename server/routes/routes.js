const { Router } = require('express');
const handleErrors = require('../error/handleErrors');
const router = Router(); 


const {
    getMain
} = require('./controller'); 

//Rutas del backend
router.get('/', getMain); 


module.exports = router; 