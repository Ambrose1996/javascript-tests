//console.log("Hello World");

let name = "Ambrose";
let age = "28";
var size = "40kg"

console.log (name);
console.log (age);
console.log (size);

let firstName = "Aliu" , lastName = "Ambrose";
console.log (firstName, lastName);

let middleName = "Aliu"; 
let secondName = "Ambrose";
console.log (middleName, secondName);

//js primitive types/value types
let surname = "Aliu"; //string literal/string
let mass = 30; //Number literal
let skinColor = "true";
let color = undefined;
let select = null;
console.log (color)
console.log(select)

console.log (surname,mass,skinColor, "am a nigerian");

//dynamic typing:
//typeof is a reserve keyword
//REFERENCE TYPE
//OBJECT

let parentName = "Ambrose";
let childName = "Happy";

let person = {
    parentName: "Ambrose",
    childName: "Happy"}; // example of object
 console.log (person);
 //dot notation
 person.name = "Katerine";
 console.log(person.name);
 //bracket notation (square bracket is used)
 person["name"] = "Favour";
 console.log(person.name);

 let selection = "name";
 person[selection] = "Anita";
 console.log(person.name);

 //arrays: the store list datas
  let selectColors = ["white", "black", "green", "yellow"];
  selectColors[4] = 50 ; // adding itens to arrays
  console.log(selectColors[2]);// selecting specific array items
  console.log(selectColors [4],[2],[0]);
  console.log(selectColors);

  //functions:
  //function to perform a task
  function greet(name) {
    console.log("hello" + " " + name + " " + childName);
  }
  greet("Aliu")
  //calculating function
  //example1
  function square(number){
    return number * number;
  }
  let number = square(15);
  console.log(number)
  //example2
  function square(number){
    return number * number;
  }
console.log(square(6))