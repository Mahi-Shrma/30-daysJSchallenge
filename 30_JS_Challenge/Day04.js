//  Activity 1 => For loop

//  Task 1

for(let i=1; i<=10;i++){
    console.log(i);
}

// Task 2

for(let i=1; i<=10;i++){
    console.log(`5 X ${i} = ${5*i}`);
}

// Activity 2 => While loop 

// Task 3

let n=1;
let sum =0;
while(n<=10){
    sum+=n;
    n++;
}
console.log(sum);

//  Task 4

let num =10
while(num>0){
    console.log(num);
    num--;
}

//------------------------------------------------------------------------------------------------------------------------------------------

// Activity 3 => Do.....While loop

// Task 5

let number = 1;

do {
    console.log(number);
    number++;
} while (number<6);

// Task 6

let fact = 10;
let mul = 1;
do {
    mul *= fact ;
    fact--;
} while (fact>0)

console.log(mul);

//---------------------------------------------------------------------------------------------------------------------------------------

// Activity 4 => Nested loops

// Task 7

for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= i; j++) {
       process.stdout.write("*");
    }
   console.log();
}

//----------------------------------------------------------------------------------------------------------------------------------------------

//  Activity 5 => Loop Control Statement

//  Task 8

for (let i = 1; i < 11; i++) {
    if(i == 5){
       continue;
    }
    console.log(i);
}

// Task 9

for (let i = 1; i < 11; i++) {
    if(i == 7){
        break;
    }
    console.log(i);
}

//*****************************************************DAY 04 TASK COMPLETED*********************************************************************************/