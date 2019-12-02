var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "hcm4e9frmbwfez47.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "zbrfwbj9lxgtfrij",
  password: "hr8jg8np58p64i5s",
  database: "jxs72cljefh4uc4k"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
