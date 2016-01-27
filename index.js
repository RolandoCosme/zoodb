
var mysql = require ('mysql');
var prompt = require ("prompt");
debugger;
prompt.start();
prompt.message = "" ;

var connection = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'zoo_db'
});

//console.log("works!");

connection.connect ( function (err){
  if (err) {
    console.error( 'err connection' + err.stack);
    return;
  } else {
    console.log("blah");
  }
});

zoo = function welcome () {
  console.log( "Welcome to the Zoo and Friends App~!");

}
zoo ();