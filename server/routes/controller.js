const { cnn_mysql } = require("../database/db");


module.exports = {
    getMain: (req, res) => {
        res.status(200).send("<h1>Bienvenido al servidor de la aplicación EcoCol</h1>");
    },
    getAllPlaces: async (req, res) => {
        const response = await cnn_mysql.promise().execute("SELECT * FROM place");
        return res.json(response[0]);
    },
    deletePlace: async (req, res) => {
        console.log(req.body); 
        try {
            const response = await cnn_mysql.promise().execute(`DELETE FROM place WHERE id = ${req.body.id}`);
            if (response[0].affectedRows === 1) return res.status(200).json("Place delete successfully")
            else return res.status(209).json("Unexpected event on server")
        } catch (err) {
            console.log(err)
            return res.status(500).json('Internal Server Error');
        }
    },
    getAllCities: async (req, res) => {
        const response = await cnn_mysql.promise().execute(`SELECT * FROM city`);
        return res.json(response[0]);
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
            } = req.body;
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
                );
            return res.status(200).json('Place update successfully');
        } catch (err) {
            console.log(err)
            return res.status(500).json('Internal Server Error');
        }
    },

    insertUser: async (req, res) => {
        const sql =
            "INSERT INTO user(name, email, password, typeUser, birthDay) VALUES (?,?,?,'editor',CURRENT_DATE())";
        cnn_mysql.query(sql, [nameUser, email, password], (err, result) => { });
    },
};
