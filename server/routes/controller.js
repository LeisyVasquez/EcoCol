const { cnn_mysql } = require('../database/db')

const errorServer = (err) => {
    console.log(err)
    return res.status(500).json('Internal Server Error')
}

module.exports = {
    getMain: (req, res) => {
        res
            .status(200)
            .send('<h1>Bienvenido al servidor de la aplicación EcoCol</h1>')
    },
    getAllPlaces: async (req, res) => {
        const response = await cnn_mysql.promise().execute('SELECT * FROM place')
        return res.json(response[0])
    },
    updatePlace: async (req, res) => {
        try {
            const {
                name,
                codeCity,
                description,
                recommendations,
                address,
                hours,
                entryPrice,
                fauna,
                flora,
                id
            } = req.body
            await cnn_mysql
                .promise()
                .execute(
                    `UPDATE place SET name=?, codeCity=?, description=?, recommendations=?, address=?, hours=?, entryPrice=?, fauna=?, flora=?  WHERE id=?`,
                    [
                        name,
                        codeCity,
                        description,
                        recommendations,
                        address,
                        hours,
                        entryPrice,
                        fauna,
                        flora,
                        id
                    ]
                )
            return res.status(200).json('Place update successfully')
        } catch (err) {
            errorServer(err, res)
        }
    },
    deletePlace: async (req, res) => {
        console.log(req.body)
        try {
            const response = await cnn_mysql
                .promise()
                .execute(`DELETE FROM place WHERE id = ${req.body.id}`)
            if (response[0].affectedRows === 1)
                return res.status(200).json('Place delete successfully')
            else return res.status(209).json('Unexpected event on server')
        } catch (err) {
            errorServer(err, res)
        }
    },
    getAllCities: async (req, res) => {
        const response = await cnn_mysql.promise().execute(`SELECT * FROM city`)
        return res.json(response[0])
    },
    insertUser: async (req, res) => {
        const { name, email, password, typeUser, birthDate } = req.body
        try {
            const response = await cnn_mysql.promise().execute(
                'INSERT INTO user(name, email, password, typeUser, birthDate) VALUES (?,?,?,?,?)',
                [name, email, password, typeUser, birthDate],
            )
            if (response[0].affectedRows === 1)
                return res.status(200).json('User created successfully')
            else return res.status(209).json('Unexpected event on server')
        } catch (err) {
            errorServer(err, res)
        }
    },
    singIn: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await cnn_mysql.promise().execute('SELECT * FROM user WHERE email = ?', [email]);
            const dataUser = user[0][0];
            if(user[0].length === 0){
                return res.status(300).json('Bad email')
            } else if (dataUser.password === password) {
                return res.status(200).json({
                    id: dataUser.id,
                    name: dataUser.name,
                    typeUser: dataUser.typeUser
                })
            } else {
                return res.status(300).json('Bad password')
            }
        } catch (err) {
            errorServer(err, res); 
        }
    }
}
