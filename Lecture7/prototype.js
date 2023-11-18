let obj = {'name' : 'John'};

// console.log(Object.prototype.__proto__);


// console.log(Object);

// new Object();


console.log(obj.__proto__ === Object.prototype);
console.log(obj.name);
console.log(obj.toString());

//  let arr1= new Array(1,2,3,4,5);
let arr = [1,2,3,4,5];
let newArr = arr.map((x)=>x*2);


console.log(arr);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ === null);
console.log(Array.prototype.__proto__ === Object.prototype);



// console.log(typeof arr);


// console.log(typeof Array);
//  console.log(arr1);


// console.log(arr1);







