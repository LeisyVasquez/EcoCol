const { Router } = require('express');
const handleErrors = require('../error/handleErrors');
const router = Router();

const {
    getMain, 
    getAllPlaces,
    insertUser, 
    deletePlace, 
    getAllCities,
    updatePlace
} = require('./controller'); 

//Rutas del backend
router.get('/', getMain);
router.get('/getAllPlaces', getAllPlaces);
router.delete('/deletePlace', deletePlace); 
router.get('/getAllCities', getAllCities); 
router.put('/updatePlace',updatePlace); 

router.post("/insertUser", insertUser);

module.exports = router;