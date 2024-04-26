// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// 3. Write a program to print numeric counting from 1 to 10.

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let tableNumber=+prompt("Enter a Table Number");
// let length=+prompt("Enter a Length");
// document.write(`<h2>Table of ${tableNumber}</h2>`)
// document.write(`<h2>Length ${length}</h2>`)
// for(let i=1; i <= length; i++){
//     document.write(`${length}  x ${i}= ${i*tableNumber}<br/>`)
// }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

let fruits = ["apple","banana","mango","orange","strawberry"];
 fruits=fruits.length
 document.write(`${fruits}<br/>`)
for(let i=0; i <fruits; i++){
    document.write(`Element at index${i} is ${fruits}<br/>`)
}