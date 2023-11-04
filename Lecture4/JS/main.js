//weakly typed


// var message="hello how are you ";
// console.log(message);


// null
// undefined
// boolean
// number
// string
// symbol – available from ES2015
// bigint – available from ES2020


// let counter = 120; // counter is a number
// counter = false;   // counter is now a boolean
// counter = "foo";   // counter is now a string


// let counter = 120;
// console.log(typeof(counter)); // "number"

// counter = false; 
// console.log(typeof(counter)); // "boolean"

// counter = "Hi";
// console.log(typeof(counter)); // "string"


// let counter;
// console.log(counter);        // undefined
// console.log(typeof counter); // undefined


// let obj=null;
// console.log(typeof obj);





// sayHi();
// console.log(x);

// function sayHi(){
//     console.log("sayHii");
// }

// var x=5;



//functions are first class citizens in JS

// 1. Storing functions in variables


// let x=5;

// let add = function(a,b){
//     return a+b;
// }

// let add1=add;

// let result = add1(4,5);

// console.log(result);


// 2. Passing a function to another function


// function add(a, b) {
//     return a + b;
// }

// let sum = add;


// function average(a,b, fn){
//     return fn(a,b)/2;
// }


// let result = average(10,20,sum);

// console.log(result);


// 3. Returning functions from functions


// const add=function(a){
//     return function (b){
//         return a+b;
//     }
// }


// const result = add(5)(10);
// console.log(result);