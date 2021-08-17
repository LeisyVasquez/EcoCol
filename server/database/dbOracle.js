var express = require("express");
var app = express();
var oracledb = require("oracledb");

var connAttrs = {
    "user": "admin",
    "password": "123",
    "connectString": "(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS =(PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD = BASIC))))"
}

app.get("/places", function (req, res) {
    "use strict";

    oracledb.getConnection(connAttrs, function (err, connection) {
        if (err) {
            //Error al conectar a la BD
            res.set("Content-type", "application/json");
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }
        connection.execute("SELECT * FROM PLACES", {}, {
            outFormat: oracledb.OBJECT // Retorna el resultado como Objeto
        }, function (err, result) {
            if (err) {
                res.set("Content-Type", "application/json");
                res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the dba_tablespaces",
                    detailed_message: err.message
                }));
            } else {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Content-Type");
                res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
                res.contentType("aplication/json").status(200);
                res.send(JSON.stringify(result.rows));
            }
            // Conexión establecida
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("GET /PLACES : Connection release");
                    }
                });
        });
    });
});

app.listen(3000, function () {
    console.log("Database running on Port 3000");
});