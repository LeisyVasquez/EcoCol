const oracledb = require('oracledb')
const { connAttrs } = require('../database/dbOracle')

const errorServer = (err, res) => {
  console.log(err)
  return res
    .status(500)
    .json('Error connecting to DB o error getting the dba_tablespaces')
}

module.exports = {
  getMain: (req, res) => {
    res
      .status(200)
      .send(
        '<h1>Bienvenido al servidor con OracleDB de la aplicación EcoCol</h1>'
      )
  },

  getAllPlaces: async (req, res) => {
    oracledb.getConnection(connAttrs, function (err, connection) {
      if (err) errorServer(err)
      connection.execute(
        'SELECT * FROM places',
        {},
        {
          outFormat: oracledb.OBJECT // Return the result as Object
        },
        function (err, result) {
          if (err) errorServer(err)
          else res.status(200).send(JSON.stringify(result.rows))
        }
      )
    })
  },

  //No funciona :( 
  updatePlace: async (req, res) => {
    const {
      name,
      hashCodeQR,
      codeLocation,
      description,
      recommendations,
      address,
      hours,
      entryPrice,
      fauna,
      flora,
      id
    } = req.body
    let codeCity = req.body.codeCity; 
    console.log(req.body)
    codeCity = parseInt(codeCity);
    oracledb.getConnection(connAttrs, async function (err, connection) {
      if (err) errorServer(err, res)
      await connection.execute(
        'UPDATE places SET name = :1, codeCity = :2, hashCodeQR = :3, codeLocation = :4 description = :5, recommendations = :6, address = :7, hours = :8, entryPrice = :9, fauna = :10, flora = :11  WHERE id = :12',
        [
          name,
          codeCity,
          hashCodeQR,
          codeLocation,
          description,
          recommendations,
          address,
          hours,
          entryPrice,
          fauna,
          flora,
          id
        ],
        {},
        {
          outFormat: oracledb.Ob // Return the result as Object
        },
        function (err, result) {
          if (err) errorServer(err, res)
          else res.status(200).send(JSON.stringify(result.rows))
        }
      )
    })
  },
  
  //No funciona
  deletePlace: async (req, res) => {
    oracledb.getConnection(connAttrs, async function (err, connection) {
      if (err) errorServer(err, res)
      const id = req.body.id
      await connection.execute(
        `DELETE FROM place WHERE id = :1`,
        [
          id
        ],
        {},
        {
          outFormat: oracledb.OBJECT // Return the result as Object
        },
        function (err, result) {
          if (err) errorServer(err, res)
          else res.status(200).send(JSON.stringify(result.rows))
        }
      )
    })
  },
  getAllCities: async (req, res) => {
    oracledb.getConnection(connAttrs, function (err, connection) {
      if (err) {
        console.log(err)
        return res.status(500).json('Error connecting to DB')
      }
      connection.execute(
        'SELECT * FROM cities',
        {},
        {
          outFormat: oracledb.OBJECT // Return the result as Object
        },
        function (err, result) {
          if (err) {
            console.log(err)
            return res.status(500).json('Error getting the dba_tablespaces')
          } else {
            res.status(200).send(JSON.stringify(result.rows))
          }
          // Release the connection
          connection.release(function (err) {
            if (err) {
              console.error(err.message)
            } else {
              console.log('GET /sendTablespace : Connection released')
            }
          })
        }
      )
    })
  },
  insertUser: '',
  singIn: '',
  insertPlaces: async (req, res) => {
        const { data } = req.body;
        oracledb.getConnection(connAttrs, async function (err, connection) {
            if (err) errorServer(err, res)
            await connection.executeMany(
              `INSERT INTO places VALUES (:1, :2, :3, :4, :5, :6, :7, :8, :9, :10:, 11, :12)`,
              data,
              {},
              {
                outFormat: oracledb.OBJECT // Return the result as Object
              },
              function (err, result) {
                if (err) errorServer(err, res)
                else res.status(200).send(JSON.stringify(result.rows))
              }
            )
          })
        
},
  sendImg: ''
}
