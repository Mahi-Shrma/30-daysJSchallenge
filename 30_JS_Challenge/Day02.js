//  Activity 1 => Arithmetic Operations

// Task 1

let a=10;
let b=20;
let sum= a+b;
console.log(sum);

// Task 2

let a1=10;
let b1=20;
let subtract= b1-a1;
console.log(subtract);

// Task 3

let a2=10;
let b2=20;
let multiply= a2*b2;
console.log(multiply);

// Task 4

let a3=10;
let b3=20;
let div= b3/a3;
console.log(div);

// Task 5

let a4=10;
let b4=20;
let rem= b4%a4;
console.log(rem);

//-----------------------------------------------------------------------------------------------------------------------

//  Activity 2 => Assignment operators

//  Task 6
let num1=25;
let add=40;
add+=num1;
console.log(add);

// Task 7 
let num2=125;
let sub=140;
sub -= num2;
console.log(sub);

//-----------------------------------------------------------------------------------------------------------------------------

//  Activity 3=> Comparison Operators

//  Task 8
let number1 = 468;
let number2 = 457;
console.log(number1>number2);
console.log(number1<number2);

// Task 9
let number3 = 48;
let number4 = 57;
console.log(number3>=number4);
console.log(number3<=number4);

//  Task 10
 let str1 = 34;
 let str2 = "34";
 console.log(str1 == str2 );     // it compares only the value
 console.log(str1 === str2 );   // it compares the data types also with the value

//----------------------------------------------------------------------------------------------------------------------

//  Activity 4 => Logical Operators

//  Task 11 
let n1 = 67;
let n2 = 99;
let n3 = 49;
let n4 = 49;
if(n1<=n2 && n3>=n4 ){         // true && true
    console.log("Entered inside if");
}else{
    console.log("Entered inside else");
}

// Task 12 
let n5 = 67;
let n6 = 99;
let n7 = 39;
let n8 = 49;
if(n5<=n6 || n3>=n4 ){          // true || false
    console.log("Entered inside if");
}else{
    console.log("Entered inside else");
}

// Task 13
 let name= "Mahi"
 let isAvailable= false;
 if(!isAvailable){
    console.log(`${name} is not available`);
 } else{
    console.log(`${name} is available`);
 }

//-------------------------------------------------------------------------------------------------------------------

// Ternary Operator

// Task 14

let num4 = -30;
console.log(num4<0 ? "The number is negative" : "The number is positive");

//-------------------------------------------------------------------------------------------------------------

//  Feature Request

// 1. Arithmetic Opeartion Script
 
let numberOne = 12;
let numberTwo = 78;

console.log(numberTwo+numberOne);
console.log(numberTwo-numberOne);
console.log(numberTwo*numberOne);
console.log(parseInt(numberTwo/numberOne));
console.log(numberTwo%numberOne);

//---------------------------------------------------------------------------------------------------------

let d1= 656;
let d2= 768;
let d3= 567;
let d4= 798;

if(d1>=d2 && d3!=d4 ){         // true && true
    console.log("condition fulfilled");
}else{
    console.log("condition failed");
}

if(d1<=d2 || d3>=d4 ){         // true && true
    console.log("condition fulfilled");
}else{
    console.log("condition failed");
}

