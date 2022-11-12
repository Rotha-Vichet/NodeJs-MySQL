var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rotha",
    database: 'students'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // Create table name 'student'
    var sql = "CREATE TABLE student (rollno INT(6), name VARCHAR(20), branch VARCHAR(20))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });

    // insertion
    var sql = "INSERT INTO student (rollno, name, branch, class) VALUES ('2', 'Thera', 'SE', '2')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

    // alter table 
    var sql = "ALTER TABLE student ADD class varchar(20)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("column added");
    });

    // Deleting a row
    var sql = "DELETE FROM student WHERE rollno = 2";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("data deleted");
    });

    // drop branch column
    var sql = "ALTER TABLE student DROP COLUMN branch";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("column dropped");
    });

    // Alter change data type to ((8))
    var sql = "ALTER TABLE student MODIFY rollno int(8)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("column changed datatype");
    });

    // Delete all data in the table
    var sql = "DELETE FROM student";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Deleted all data");
    });

    // delete Table
    var sql = "DROP TABLE student";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Dropped table");
    });

    // select
    con.query("SELECT * FROM student", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
    con.end(err=>{});
  }
);