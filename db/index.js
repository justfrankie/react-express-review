var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ToDoListDB",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL DB!!");
});


module.exports = con;
