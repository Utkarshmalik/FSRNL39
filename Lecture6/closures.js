


// function greeting(){

//     var message = "Hi";

//     function sayHi(){
//         console.log(message);
//     }

//     return sayHi;
// }

// var hi = greeting();
// hi();


// A closure is a function that 
// preserves the outer scope in its
//  inner scope.




var x = 10;

function foo() {
  var y = 20; 
  function bar() {
    var z = 15; 
    return x + y + z;
  }
  return bar;
}



let ans=foo()();
console.log(ans);
