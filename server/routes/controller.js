module.exports = {
    getMain: (req, res) => {
        res.status(200).send('<h1>Bienvenido al servidor de la aplicación EcoCol</h1>');
    }
}