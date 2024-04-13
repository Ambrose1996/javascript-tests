// Operators in javascript (symbols used in js codes)
//these operators are used to perform operations on operands
//operands are values and variables
// (1) Arithmethic operators
// (a) addition 
let sum = 5 + 3;
console.log(sum);
//(b) subtraction
let x = 5 - 3;
console.log(x);
//(c) multiplication
let y = 5 * 3;
console.log(y);
// (d) division
let a = 15 / 3;
console.log(a);
//reminder/modulus operator
//this divde one number with another and output the reminder.
let m = 17 % 3;
console.log(m);
//Exponentiation
let s = 2 ** 5//2x2x2x2x2
console.log(s)

//(2)assignment operators


// if statements
//  var fan_on = true;
//  var light_off = 
//  console.log("we are in class!");
//  if(fan_on){
//     console.log("effective learning can commerce!");
//  }
 let age=20;
 if(age > 18){
   console.log("you are an adult");
 }
 
 else if (age <= 24){
  console.log("undefined");
 }

 else{
  console.log("you are too small");
 }

 //switch statments
 let value = [];
 switch (typeof value) {
  case "number":
      console.log("number")
    break;
  case "string":
      console.log("string")
    break;
  case "boolean":
      console.log("boolean")
    break;
 
  default:
    console.log("other");
    break;
 }
 //example2
 let dayName = 9;
 switch (dayName){
  case 1:
    dayName = "sunday";
    break;
 
  case 2:
    dayName = "monday";
    break;
 
  case 3:
    dayName = "tuesday";
    break;
 
  case 4:
    dayName = "wednesday";
    break;
 
  case 5:
    dayName = "thrusday";
    break;
 
  case 6:
    dayName = "friday";
    break;
 
  case 7:
    dayName = "saturday";
    break;
 
  default:
    dayName = "invalid"
    break;
 }
 console.log(dayName);

 //tenary Operators

 // condition ? valuye_if_true: value_if_false
 
 let size = 17;

 let mgs = (size >= 18) ? "you are an adult" : "you are a minor";
 console.log(mgs);
