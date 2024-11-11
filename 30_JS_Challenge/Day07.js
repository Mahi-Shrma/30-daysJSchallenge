// Day 07 => Objects

//  Activity 1 => Object Creation and Access

// Task 1

let book = {
    Title : "The King that never dies",
    Author : "Mahi Sharma",
    Year : 2030
}
console.log(book);

// Task 2

console.log(book.Title);
console.log(book["Author"]);

//--------------------------------------------------------------------------------------------------------------------

// Activity 2 => Objects Methods

// Task 3 

book.addMethod = function (){
    let bookTitle = this.Title;
    let bookAuthor = this.Author;
    //return `The book name is "${bookTitle}" and its author name is "${bookAuthor}".`;
    return {bookAuthor,bookTitle};
    //return [bookTitle,bookAuthor];
}

console.log(book.addMethod());

// Task 4 

book.changeYear = function(year) {
    this.Year = year;
}
book.changeYear(2025);
console.log(book);

//---------------------------------------------------------------------------------------------------------------------------------

// Activity 3 => Neated Objects

//  Task 5

let Library ={
        name : "Maths",
        books : [
            {
               title:"Algorithms",
               author:" Vivek Raj"
            },
            {
               title:"Tricky questions",
               author:"K.M Seth"
            },
            {
               title:"Cubic roots",
               author:"Anand Raj"
            }
        ]
    }
console.log(Library);

//  Task 6 :

console.log(Library.name);
Library.books.forEach((book) => {
    console.log(book.title);
});
// console.log(Library.books[0].title);
// console.log(Library.books[1].title);
// console.log(Library.books[2].title);
    
//------------------------------------------------------------------------------------------------------------------------

//  Activity 4 => The this keyword

// Task 7 :

let book1 = {
    Title : "The End",
    Author : "Mahi Sharma",
    Year : 2027
}
book1.bookTitleYear = function(){
    //return [this.Title,this.Year];             //[ 'The End', 2027 ]
    //return `${this.Title} ${this.Year}`      //The End 2027
    return `${this.Title} (${this.Year})`    //The End (2027)
}
console.log(book1.bookTitleYear());

//-----------------------------------------------------------------------------------------------------------------------

// Activity 5 => Object Iteration

// Task 8

let book2 = {
    Title : "The End",
    Author : "Mahi Sharma",
    Year : 2027
}
for (const key in book2) {
    console.log(key,":",book2[key] );
}
// for (const key in book2) {
//     if (book2.hasOwnProperty.call(book2, key)) {
//         console.log(`${key} : ${book2[key]}`);
//     }
// }


// Task 9

// for (const key in Object) {
//     if (Object.hasOwnProperty.call(Object, key)) {
//         console.log(`${Object.keys} : ${Object.values}`);
//     }
// }
// The Object.keys(book) method returns an array of all the keys (property names) in the book object.
// The Object.values(book) method returns an array of all the values corresponding to those keys.

const book5 = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951
};
console.log(Object.keys(book5));
console.log(Object.values(book5));

// const keys = Object.keys(book5);
// const values = Object.values(book5);


// console.log("Keys:");
// keys.forEach(key => console.log(key));

// console.log("Values:");
// values.forEach(value => console.log(value));

//***********************************************DAY 07 TASK COMPLETED *******************************************************/
