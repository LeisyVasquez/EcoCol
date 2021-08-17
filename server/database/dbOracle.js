var express = require("express");
var app = express();
var oracledb = require("oracledb");

const config = {
    user: 'admin',
    password: '123',
    connectString: 'DESKTOP-1B20QV7:1521/'
  }
  
  async function getEmployee (empId) {
    let conn
  
    try {
      conn = await oracledb.getConnection(config)
      const result = await conn.execute(
        "SELECT * FROM cities;",
        [empId]
      )
      console.log(result.rows[0])
    } catch (err) {
      console.log('Ouch!', err)
    } finally {
      if (conn) { // conn assignment worked, need to close
        await conn.close()
      }
    }
  }
  
  getEmployee(101)

  app.listen(4000, function () {
    console.log("Database running on Port 4000");
});