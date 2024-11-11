// Day 12 => Error Handling

// Activity 1 => Basic Error Handling with Try-Catch

// Task 1
function basic(){
    return `Basic error handling`;
}
try {
    const res =basic();
    console.log(res);
} catch (er) {
    console.log("Some error occured");
}

// Task 2
function divide(a,b){
    if(b==0){
        throw new Error("Cannot divide with zero")      //Error: Cannot divide with zero
    }
    else{
        return a/b;
    }
}
try {
    console.log(divide(10,0));
} catch (error) {
    console.error(error);
}

//---------------------------------------------------------------------------------------------------------------------------------------

// Activity 2 => Finally Block

//  Task 3
function multiply(){
    return 10*a;
}

try {
    console.log("Result : ",multiply());
} catch (error) {
    console.log("Error : ",error);
} finally{
    console.log("It will always execute");
}

//---------------------------------------------------------------------------------------------------------------------------------

// Activity 3 => Custom Error Objects

//  Task 4 

// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
// 

class customError extends Error{
    constructor(msg){
         super(msg);
         this.message = 'New ERROR occurred';
    }
}
function myError(){
try {
    throw new customError('Something went wrong!');
} catch (error) {
    console.log(`Caught custom exception: ${error.message}`);
}
}
myError();

//  Task 5 

// class EmptyStringError extends Error {
//     constructor(message) {
//         super(message); // Call the parent constructor
//         this.name = 'EmptyStringError'; // Set the custom error name
//     }
// }

// function validateInput(userInput) {
//     try {
//         if (!userInput.trim()) { // Check if the input is empty or contains only whitespace
//             throw new EmptyStringError('Input cannot be empty.');
//         }
//     } catch (error) {
//         console.error(`Custom error: ${error.message}`);
//         // Handle the exception here (e.g., log, recover, etc.)
//     }
// }

// // Example usage
// try {
//     const userInput = prompt('Enter a non-empty string:');
//     validateInput(userInput);
// } catch (error) {
//     console.error(`An unexpected error occurred: ${error}`); //An unexpected error occurred: ReferenceError: prompt is not defined
// } // this error will give the real error statement that node will show
