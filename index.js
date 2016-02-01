
var mysql = require ('mysql');
var prompt = require ("prompt");

prompt.start();
prompt.message = "" ;

var connection = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'zoo_db'
});

connection.connect ( function (err){
  if (err) {
    console.error( 'err connection' + err.stack);
    return;
  } 
  // else {
  //   console.log("Connected to Zoo Database");
  // }
});

var zoo = function welcome () {
  console.log( "Welcome to the Zoo and Friends App~!");
  var menu = ["A", "U", "V", "D"];
    console.log("Enter (A): ----> To Add a new animal to the Zoo!");
    console.log("");    
    console.log("Enter (U): ----> To Update information on an animal in the Zoo!");
    console.log("");
    console.log("Enter (V): ----> To Visit the animals in the Zoo!");
    console.log("");
    console.log("Enter (D): ----> To Quit and Exit Zoo!");
    var addAnimals = function () {
      currentScope = input_scope;
      console.log("To add an animal to the Zoo please fill out the following form for us!");
      prompt.get(["name", "type", "age"]), function (err, result){
        connection.query('INSERT INTO zoo_db (name, type, age) VALUES (?,?,?)', ["Jin", "Bear", "3"], function(err,result){
          if (err) throw err;
          menu;
      });
    }
    var visit = function ()
  }
}


debugger;
zoo ();
connection.end();