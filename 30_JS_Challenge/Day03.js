// Activity 1 => If-Else Statement

// Task 1
let a = -45;
if(a>0){
    console.log(`${a} is positive.`);
}
else if(a<0){
    console.log(`${a} is negative.`);
}
else{
    console.log(`${a} is zero.`);
}

//  Task 2

let age =56;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

//-------------------------------------------------------------------------------------------------------------------

// Activity 2 => Nested If-Else Statement

// Task 3

let num1 = 99;
let num2 = 95;
let num3 = 88;

if(num1>num2){
    if(num1>num3){
        console.log(`${num1} is the greatest`);
    }else{
        console.log(`${num3} is the greatest`);
    }
}
else{
    if(num2>num3){
        console.log(`${num2} is the greatest`);
    }else{
        console.log(`${num3} is the greatest`);
    }
}

//  Activity 3 => Switch Statement

//  Task 4

let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); 
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");    
        break;
    case 7:
        console.log("Saturday");    
        break;
    default:
        console.log("Invalid number");
}

// Task 5

let marks = 87;
 
switch(true){
    case(marks>=90) :
        console.log("Your grades is 'A'");
        break;

    case (marks>=80) :
        console.log("Your grades is 'B'");
        break;

    case (marks>=70) :
        console.log("Your grades is 'C'");
        break;

    case (marks>=60) :
        console.log("Your grades is 'D'");
        break;

    case (marks>=50) :
        console.log(`Your grades is 'E'`);
        break;   

    case (marks>=40) :
        console.log(`Your grades is 'F'`);
        break;
        
    default:
        console.log("Fail");
        break;
}

//--------------------------------------------------------------------------------------------------------------------

// Activity 4 => Conditional(Ternary) Operator

// Task 6

let number = 876;

console.log((number%2==0) ? `${number} is even` : `${number} is odd`);

//------------------------------------------------------------------------------------------------------------------

// Activity 5 => Combining Conditions

//  Task 7

let year = 2003;
if((year % 100 == 0 && year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)) {
    console.log("Leap Year");
}
else {
    console.log("Not a leap year");
}


//***********************************************DAY 03 TASK COMPLETED************************************************/
     