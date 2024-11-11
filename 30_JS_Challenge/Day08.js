// Day 08 : ES6+ Features

// Activity 1 => Template Literals

//  Task 1

let name = `Mahi Sharma`;
let age = `25`;
console.log(name);
console.log(age);

// Task 2

let str = `I'm a Web Developer.
I have good knowledge of HTML, CSS and JavaScript.`
console.log(str);

//------------------------------------------------------------------------------------------------------------------------------------

// Activity 2 => Destructuring

// Task 3 

let arr =[46,37,3,36,97];
let [first,second] = arr;
console.log(first);
console.log(second);

// Task 4 

let book = {
    Title : "The King that never dies",
    Author : "Mahi Sharma",
    Year : 2030
}
let {Title,Author} = book;
console.log(Title);
console.log(Author);

//----------------------------------------------------------------------------------------------------------------------------------

// Activity 3 => Spread and Rest Operator

// Task 5 

let array1 = [23,45,69]
let array2 = [12, 13,...array1, 78,90]
console.log(array2);

// Task 6 

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(40,10,20,20,10));
// Before Rest operator
// let a = array1[0];
// let b = array1.slice(1);
// console.log(b);

// After rest operator

// let [one,...rest]= array1;
// console.log(one);
// console.log(rest);

//--------------------------------------------------------------------------------------------------------------------------------------------

// Activity 4 => Default Parameters

// Task 7

function product(a,b=1){
    return a*b;
}
console.log(product(30));
console.log(product(30,10));

//-----------------------------------------------------------------------------------------------------------------------------------

// Activity 5 =>Enhanced Object Literals

// Task 8 

let greet = "Hello"
let object = {
    greet,
    print(){
        return `${this.greet}`
    }
}
console.log(object.print());


// Task 9

let a=10,b=20,c=30;
let obj ={
    a,
    b,
    c
}
console.log(obj);        //{ a: 10, b: 20, c: 30 }

//********************************************************DAY 08 TASK COMPLETED*****************************************************************/