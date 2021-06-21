const { Router } = require('express');
const handleErrors = require('../error/handleErrors');
const router = Router(); 


const {
    getMain, 
    getAllPlaces
} = require('./controller'); 

//Rutas del backend
router.get('/', getMain); 
router.get('/getAllPlaces', getAllPlaces); 


module.exports = router; 