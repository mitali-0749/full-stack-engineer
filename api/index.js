//const sql = require("mssql");
const sql = require("mssql/msnodesqlv8");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

app.use(bodyParser.json());
app.use(cors());

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

const config = {
  server: 'CYG614\\SQLEXPRESS',
  database: 'SecurityScans',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true, // For secure connections
  },
};


app.get("/api/v1/securityScans", function (req, res) {
  getEmployees();
});


const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();


poolConnect
  .then(() => {
    console.log("Connected to MSSQL");
      request
        .query("select * from security_scan")
        .then(function (resp) {
          console.log(resp);
        })
        
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));

/*

function getEmployees() {
  var dbConn = new sql.ConnectionPool(config);
  dbConn
    .connect()
    .then(function () {
      var request = new sql.Request(dbConn);
      request
        .query("select * from security_scan")
        .then(function (resp) {
          console.log(resp);
          dbConn.close();
        })
        .catch(function (err) {
          console.log(err);
          dbConn.close();
        });
    })
    .catch(function (err) {
      console.log(err);
    });
}

*/