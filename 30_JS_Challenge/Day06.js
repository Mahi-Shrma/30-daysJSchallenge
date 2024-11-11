// DAY 6 : Arrays

// Activity 1 : Array Creation and Access

// Task 1

let arr1 = [1,2,3,4,5];
console.log(arr1);


//  Task 2
let arr2 = [15,92,23,34,58];
let first = arr2[0];
let last = arr2[arr2.length-1];
console.log(first+" "+last);

//--------------------------------------------------------------------------------------------------------------

// Activity 2 :Array Methods (Basic)

//  Task 3

let arr3 = [17,28,33,45,54];
arr3.push(78);
console.log(arr3);

// Task 4 

let arr4 = [17,28,33,45,54];
console.log(arr4.pop());
console.log(arr4);

// Task 5 

let arr5 = [17,28,33,45,54];
arr5.shift();
console.log(arr5);

// Task 6

let arr6 = [17,28,33,45,54];
arr6.unshift(10);
console.log(arr6);

//--------------------------------------------------------------------------------------------------------------

// Activity 3 => Array Methods (Intermediate)

// Task 7

let arr7 = [1,2,3,4,5]
console.log(arr7.map((el)=>el*2));

// Task 8

let arr8 = [1,2,3,4,5]
console.log(arr7.filter((el)=>el%2 == 0));

// Task 9 

let arr9 = [1,2,3,4,5]
console.log(arr9.reduce((el,cur)=>el+cur, 0));

//---------------------------------------------------------------------------------------------------------------------

// Activity 4 => Array Iteration

// Task 10

let arr10 = [1,2,3,4,5];
for (let i = 0; i < arr10.length; i++) {
    console.log(arr10[i]);
    
}

// Task 11

let arr11 =[24,28,5,14,67]
arr11.forEach(element => {
    console.log(element);
});

//----------------------------------------------------------------------------------------------------------------

// Activity 5 => Multi-dimensional Arrays

// Task 12 

let array2d = [3][3];
array2d=[[1,2,3],
        [4,5,6],
        [7,8,9]];
console.log(array2d);

// Task 13 

let Array2d = [3][3];
Array2d=[[1,2,3],
        [4,5,6],
        [7,8,9]];
console.log(Array2d[2][1]);

//**********************************************DAY 06 TASK COMPLETED*****************************************************/