
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

zoo = function () {
  var welcome = function ( ){
    console.log( "Welcome to the Zoo and Friends App~!");
    var menu = ["A", "U", "V", "D"];
      console.log("Enter (A): ----> To Add a new animal to the Zoo!");
      console.log("");    
      console.log("Enter (U): ----> To Update information on an animal in the Zoo!");
      console.log("");
      console.log("Enter (V): ----> To Visit the animals in the Zoo!");
      console.log("");
      console.log("Enter (D): ----> To Quit and Exit Zoo!");
  }
  var add = function (input_scope) {
    currentScope = input_scope;
    console.log("To add an animal to the Zoo please fill out the following form for us!");
    prompt.get(["name", "type", "age"]), function (err, result){
      connection.query('INSERT INTO zoo_db (name, type, age) VALUES (?,?,?)', ["Jin", "Bear", "3"], function(err,result){
        if (err) throw err;
        menu;
      });
    }
  }
  var visit = function (){
    var menu = ["I", "N", "A", "C", "O", "Q"];
      console.log("Enter (I): ----> Do you know the animal by it's ID? We will visit that animal!");
      console.log("");    
      console.log("Enter (N): ----> Do you know the animal by it's name? We will visit that animal!");
      console.log("");
      console.log("Enter (A): ----> Here's a count for all animals in all locations!");
      console.log("");
      console.log("Enter (C): ----> Here's a count for all the animals in this one city!");
      console.log("");
      console.log("Enter (O): ----> Here's a count for all the animals in all locations byt the type you specified!");
      console.log("");
      console.log("Enter (Q): ----> Quits to the main menu!");
    currentScope.visit();
    currentScope.view(currentScope);
  }
  var view = function (){
    function add (input_scope){
      var currentScope = input_scope;
      console.log("Please choose what you like to visit!");
      prompt.get(["visit"]), function (err, results){
        if (result.visit == "Q"){
          currentScope.menu();
          else if (result.visit == "O") {
            currentScope.type(input_scope);
          };
          else if (result.type == "I") {
            currentScope.type(input_scope);
          };
          else if (result.animId =="N") {
            currentScope.name(input_scope);
          };
          else if (result.name == "A") {
            currentScope.all(input_scope);
          };
          else if (result.all == "C") {
            currentScope.care(input_scope);
          };
          else {
            console.log("Sorry didn't get that, come again?");
          }
        }
      }
      currentScope.visit();
      currentScope.view(currentScope);
    }
  }
  var type = function (input_scope){
    var currentScope = input_scope;
    console.log("Enter animal type to find how many animals we have of those type.");
    prompt.get(["animal", "type"]), function (err, results){
      connection.query('SELECT * FROM animals WHERE type=(results)') // this line needs revising at results
      if (err) throw err;
      currentScope.menu();
      currentScope.promptUser();
    }
  }
  var care = function (input_scope){
    var currentScope = input_scope;
    console.log("Enter city name NY / SF");
    prompt.get(["city_name"]), function (err, results){
      connection.query(" string in the form of a mySQL select the number of animals that all the caretakers from the specific user inputed city"); // add correct mySQL statement
      if (err) throw err;
      currentScope.visit();
      currentScope.view(currentScope);
    }
  }
  var animId = function (input_scope){
    currentScope = input_scope;
    console.log("Enter ID of the animal you want to visit");
    prompt.get(["animal_id"]), function (err, results){
      connection.query(" get the data for the particular animal of that id that the user typed in.");
      if (err) throw err;
      currentScope.visit();
      currentScope.view(currentScope);
    }
  }
  var name = function (input_scope){
    currentScope = input_scope;
    console.log("Enter Name of the animal you want to visit");
    prompt.get(["animal_name"]), function (err, results){
      connection.query(" get the data for the particular animal of that Name that the user typed in.");
      if (err) throw err;
      currentScope.visit();
      currentScope.view(currentScope);
    }
  }
  var all = function (input_scope){
    var currentScope = input_scope;
    console.log("Enter all to find how many animals we have.");
    prompt.get(["animal", "type"]), function (err, results){
      connection.query('SELECT * FROM animals') // this line needs revising at results
      if (err) throw err;
      currentScope.menu();
      currentScope.promptUser();
    }); // verify this line for other functions also
  }


  welcome();
  //add();
  //visit();
}


debugger;
zoo ();
//connection.end();