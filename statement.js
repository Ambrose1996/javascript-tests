//conditional statement
for (const x of ['a', 'b', 'c']){
    console.log(x)
    
if (x === 'b') break;{
    console.log('---')
}
}



let b = 3
let c = 7
let d = 2
for (const a of [b+2, c-5, d*3])
// 3+2 =5, 7-5=2, 2*3=6
{
    console.log(a)
}

const lines = [
    'normal line',
    '# Comment',
    'Another normal lines',
];
for (const line of lines) {
    if (line.startsWith('#')) continue;
    console.log(line);
}

let namesOfBoys = ['james', 'adam', 'prince']
let namesOfGirls = ['favour', 'katry', 'princess']
let namesOfStreet = ['mofor', 'udu', 'okpaka']
console.log(namesOfBoys)
console.log(namesOfGirls)
console.log(namesOfStreet)
let name = [namesOfBoys, namesOfGirls, namesOfStreet]
//console.log(name)
let test = name[1]

let q=0
let w=0
let r=0
let y = q+w+r
let u = q-w-r
if (y>5) {
    console.log('if statement')
}
else if (y<5){
console.log('else if statement')}
else (y=0);{
    console.log('else statement')
    
}
let time = '08.00am';
switch (time) {
    case '08.00am':
        console.log('eat breakfast');
        break;
    case '10.00':
        console.log('say good morning');
        break;
    case '12.00':
        console.log('say good afternoon');
        break;
    case '02.00':
        console.log('eat lunch');
        break;
    case '06.00':
        console.log('say good evening')
        break;
    case '08.00pm':
        console.log('eat dinner');
        break;

    default:
        console.log('this my daily note')
        break;
}
//for loop
for (let h = 1; h <= 10; h++){

console.log(h);}
//while loop

