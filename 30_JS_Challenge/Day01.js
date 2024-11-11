// Activity 1 => Variable declaration

// Task 1: Declare a variable using var, assign it a number , and log the value to the console.

var num = 6;
console.log(num);

//  Task 2 : Declare a variable using let, assign it a string , and log the value to the console.

let str= "Mahi";
console.log(str);

//______________________________________________________________________________________________________________________

// Activity 2 => Constant declaration

//  Task 3: Declare a variable using const, assign it a boolean value , and log the value to the console.

const bool = true;
console.log(bool);

//____________________________________________________________________________________________________________________

// Activity 3 => Data Types

// Task 4 : Create variables of different data types and log each variable's type usong typeof operator

let num1 = 45;
console.log(typeof num1);

let str1= "Prakash";
console.log(typeof str1);

let bool1 = false;
console.log(typeof bool1);

let arr = [12, 65, 89]
console.log(typeof arr);

let obj ={
    userName:"Sam",
    age:22
}
console.log(typeof obj);

//__________________________________________________________________________________________________________________

// Activity 4 => Reassigning variable

// Task 5 => declare variable using let, assign it an initial value, reassigning a new value, and log both value in the console

let username= "Mahi";
console.log(username);

username= "Swejal";
console.log(username);

//__________________________________________________________________________________________________________________________

// Activity 5 => Understanding const

// Task 6 : try reassigning a variable, declare with const and observe the error

// const user2= "Pranjal Singh"
// user2= "Harsh Sharma"

// console.log(user2);

// TypeError: Assignment to constant variable.

//___________________________________________________________________________________________________________________________________

// Feature Request


// Write a script that declare a variable of dfferent datatypes and log both the value and type of each variable to the console
let num2 = 45;
console.log(num2);
console.log(typeof num2);    //number

let str2= "Shalini";
console.log(str2);
console.log(typeof str2);    //string

let bool2 = false;
console.log(bool2);
console.log(typeof bool2);   // boolean

let a = null;
console.log(a);
console.log(typeof a);   //object

let b= undefined;
console.log(b);
console.log(typeof b);  // undefined

let id= Symbol('abc')
console.log(id);
console.log(typeof id);    //symbol

let num3 = BigInt(1234567678723656678888);
console.log(num3);
console.log(typeof num3);    //bigInt

//______________________________________________________________________________________________________________________________

// Create a script that demonstrate the difference in behavior between let and const when it come to reassignment

let str3 ="New course"
str3 = "Javascript challenge"
console.log(str3);

const str4 ="Frontend";
str4= "Backend"
console.log(str4);

// let: Allows reassignment of values after declaration.
// const: Does not allow reassignment of values after declaration. It creates a constant reference to a value.

//******************************************DAY 1 TASK COMPLETED*****************************************************************/