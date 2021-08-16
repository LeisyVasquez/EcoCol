const { Router } = require('express');
const router = Router();
const {cnn_mysql} = require("../database/dbOracle.js"); 

//Obtener usuarios
router.get("/getUsers", (req, res) =>{
    cnn_mysql.query("SELECT * FROM user", (err, resultSet) =>{
        if(err){
            console.log(err);
            next(err);
        }else{
            return res.json(resultSet);
        }
    });
    console.log("Usuarios obtenidos correctamente")
});

//Agregar usuario
router.post('/addUser', async (req, res) =>{
    const {nombre, correo, contraseña, fecha_nacimiento} = req.body;
    const [rows, fields] = await cnn_mysql.promise().execute(`INSERT INTO user(name, email, password, typeUser, birthDay) VALUES (?,?,?,"viajero",?`,[nombre,correo, contraseña, fecha_nacimiento])

    if(rows.affectedRows > 0) {
        res.json({
            nombre: nombre, correo: correo, contraseña: contraseña, fecha_nacimiento: fecha_nacimiento
        });
    } else{
        res.json({});
    }
    console.log("Usuario agregado");
});


module.exports = router; 