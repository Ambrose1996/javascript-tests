//ordinary functions
function names(a, b, c) {
//this types are activated early
    console.log("adam")
}
names()
const names1 = function (a, b, c) {
    //this types are activate later
    console.log("vincent")
};
names1()
function mathmatics(a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    
}
mathmatics(50, 20)
function localScope() {
    let myVar = 10
    console.log(myVar)
}
localScope()
//test global variable
var classWebDev = "DYEN";
function webDev() {
    let classWebDev = "Dyen"
    console.log(classWebDev)
}
webDev(classWebDev)//returns local variables
console.log(classWebDev)//returns global variables
//returning function value
function returnFunction(x) {
    return x - 9
}
console.log(returnFunction(5))
//
function trueFalseTest(colour) {
    if (colour == "red") {
        return "true"
    }
    return "false"
}
console.log(trueFalseTest("blue"));

function testValue(value) {
    if (value == 12){
        return "true"
    }
    return "false"
}
console.log(testValue('12'));

function testValue2(value) {
    if (value === 12){
        return "true"
    }
    return "false"
}
console.log(testValue2('12'));

function toTestForAge(age) {
    if (age <= 12) {
        return "minor"
    } else if (age >= 13, age <=19){
        return "teenager"
    }
    else {
        return "adult"
    }
}
console.log(toTestForAge(20));

function weeks(day) {
    if (day > 1, day < 7) {
        return "week 1"
    }
   else if (day > 7, day < 14) {
    return "week 2"
    }
    else if (day > 14, day < 21) {
        return "week 3"
    }
    else if (day > 21, day < 28) {
        return "week 4"
    }
    else {return "week 5"}
}
console.log(weeks());

function switchTest(height) {
    let answer = "";
    switch (height) {
        case 1:
            case 2:
                case 3:
                    case 4:
            answer = "short";
            break;
        case 5:
            case 6:
            answer = "average";
            break;
        case 7:
            case 8:
                case 9:
            answer = "tallie";
            break;
        default:
            answer = "height test"
            break;
    }
    return answer;
}
console.log(switchTest());

