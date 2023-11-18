
// The name of a constructor function starts with a capital letter like Person, Document, etc.
// A constructor function should be called only with the new operator.

function Person(firstName, lastName) {
    // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;
}



Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };    


let person1 = new Person('John','Doe');
let person2 = new Person('James','Smith')


console.log(person1.__proto__ === Person.prototype);


console.log(person1);     // person1 
console.log(person1.__proto__ === Person.prototype);
console.log(person1.__proto__.__proto__ === Object.prototype); //
console.log(person1.__proto__.__proto__.__proto__ === null); //


console.log(person1.getFullName());
console.log(person2.getFullName());

