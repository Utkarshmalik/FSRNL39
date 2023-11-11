// Construtor functions : the new object/instance that is being created 
//Global Scope : This keyword points to a window oject
//in regular functions : This keyword  points to  the object who is invoking that function
//in arrow functions : This keyword is equal to the value of This Keyword outside that function



// var x=5;
// console.log(x);
// console.log(this.x);

// function add(a,b){
//     return a+b;
// }

// console.log(this.add(5,10));


// What is the value of this keyword in regular functions 


// The value of this keyword inside regular functions points to 
// the object who is invoking that function


// let counter = {
//     count:0,
//     increment : function(){
//         this.count+=1;
//     }
// }

// counter.increment();

// console.log(counter.count);




// function add(a,b){
//     console.log(this);
//     return a+b;
// }


// window.add(10,20);



var firstName = "Rahul"

let person = {
    firstName:"Jay",
    sayHello:function(){
        let message = "hello";
        console.log(this);

        return ()=>{
            console.log(this);
            return message + " from " + this.firstName; 
        }
    }
}


let sayHi=person.sayHello();
let output=sayHi();
console.log(output);



// function add(a,b){
//     return a+b;
// }

// var add = (a,b)=>{
//     return a+b;
// }