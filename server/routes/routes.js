const { Router } = require('express');
const handleErrors = require('../error/handleErrors');
const router = Router();

const {
    getMain, 
    getAllPlaces,
    insertUser
} = require('./controller'); 

//Rutas del backend
router.get('/', getMain);
router.get('/getAllPlaces', getAllPlaces);
router.post("/insertUser", insertUser);

module.exports = router;