const { cnn_mysql } = require('../database/db'); 

module.exports = {
    getMain: (req, res) => {
        res.status(200).send('<h1>Bienvenido al servidor de la aplicación EcoCol</h1>')
    }, 
    getAllPlaces: async (req, res) => {
        const response = await cnn_mysql.promise().execute('SELECT * FROM place');
        return res.json(response[0])
    }
}