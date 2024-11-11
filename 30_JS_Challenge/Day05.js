// Day 5 : Functions

//  Activity 1 => Function Declaration

//  Task 1

function checkEvenOdd(num) {
    if(num% 2 == 0){
        console.log(`${num} is an even number.`);
    }else {
        console.log(`${num} is an odd number.`);
    }
}

checkEvenOdd(46);

//  Task 2 

function square(n){
    let sq = n;
    n*=n;
    console.log(`${n} is the square of ${sq}`);
}
square(25)

//----------------------------------------------------------------------------------------------------------------------------------------------------------

// Activity 2 => Function Expression

// Task 3

function max(a,b) {
    if(a>b){
        console.log(`${a} is greater than ${b}`);
    }else{
        console.log(`${b} is greater than ${a}`);
    }
}
max(68, 134)

//  Task 4

let firstName = "Priya";
let lastName = "Dubey";

function concatTwoStrings(str1,str2) {
       return str1+ " " +str2;
}
console.log(concatTwoStrings(firstName,lastName));

//----------------------------------------------------------------------------------------------------------------

// Acyivity 3 => Arrow Functions

//  Task 5

let sum = ((a,b)=>{
   return a+ b;
})
console.log(sum(50, 30));

// Task 6 

let Myname = "My name is Mahi Sharma"
let char = "The"
let check = ((Myname, char)=>{
   if (Myname.includes(char)) {
      return true;
   }
   else{
    return false;
   }
})
console.log(check(Myname, char));

//--------------------------------------------------------------------------------------------------------------------

//  Activity 4 => Function parameters and default values

//  Task 7 

function product(a,b=6){
 return a*b;
}
console.log(product(4));

// Task 8:

let name = "Mahi Sharma"
function Name(name, age = 25) {
    return `Welcome ${name}. Your age is ${age}.`
}
console.log(Name(name));

//-----------------------------------------------------------------------------------------------------------------------

//  Activity 5 => High-Order Function

//  Task 9:

function repeat(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
function greet() {
    console.log("Welcome!");
}

repeat(greet, 3);

//  Task 10:

function composeFunctions(fn1, fn2, value) {
    const intermediateResult = fn1(value);
    const finalResult = fn2(intermediateResult);
    return finalResult;
}

function double(x) {
    return x * 2;
}

function square(x) {
    return x ** 2;
}

const inputValue = 5;
const result = composeFunctions(double, square, inputValue);
console.log(result); 

//*********************************************DAY 05 TASK COMPLETED***********************************************************/