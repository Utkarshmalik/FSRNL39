// call , apply and bind 


// const car = {
//     name:"Car",
//     speed: 0,
//     start:function(){
//         console.log("Start the " + this.name);
//         this.speed=10;
//     },
//      speedUp:function(value1, value2){
//         console.log("Speedup the " + this.name);
//         this.speed+=(value1+value2);
//     },
//      stop:function(){
//         console.log("Stop the " + this.name);
//         this.speed=0;
//     }
// }

// const airCraft = {
//     name:"Aircraft",
//     speed:0,
//     fly:function(){
//         console.log("Fly")
//     }
// }



// // start the aircraft 
// car.start.apply(airCraft);

// // speedUp the aircraft 
// car.speedUp.apply(airCraft, [10,20]);
// console.log(airCraft.speed);

// // Stop  the aircraft 
// car.stop.apply(airCraft);


// // start the aircraft 
// car.start.call(airCraft);

// // speedUp the aircraft 
// car.speedUp.call(airCraft, 10,20);
// console.log(airCraft.speed);

// // Stop  the aircraft 
// car.stop.call(airCraft);




// Function borrowing

// const computer = {
//     name: 'MacBook',
//     isOn: false,
//     turnOn() {
//         this.isOn = true;
//         return `The ${this.name} is On`;
//     },
//     turnOff() {
//         this.isOn = false;
//         return `The ${this.name} is Off`;
//     }
// };


// const server = {
//     name: 'Dell PowerEdge T30',
//     isOn: false
// };

// let result = computer.turnOn.apply(server);

// console.log(result);



// the apply() method to append an array to another

// let arr = [1, 2, 3];
// let numbers = [4, 5, 6];


// arr.push.apply(arr, numbers);
//  console.log(arr); 






// const car = {
//     name:"Car",
//     speed: 0,
//     start:function(){
//         console.log("Start the " + this.name);
//         this.speed=10;
//     },
//      speedUp:function(value1, value2){
//         console.log("Speedup the " + this.name);
//         this.speed+=(value1+value2);
//     },
//      stop:function(){
//         console.log("Stop the " + this.name);
//         this.speed=0;
//     }
// }

// const airCraft = {
//     name:"Aircraft",
//     speed:0,
//     fly:function(){
//         console.log("Fly")
//     }
// }


// let fn=car.start.bind(airCraft);


// /// 10000 lines lates 


// fn();




// let runner = {
//     name: 'Runner',
//     run: function(speed) {
//         console.log(this.name + ' runs at ' + speed + ' mph.');
//     }
// };



// let flyer = {
//     name: 'Flyer',
//     fly: function(speed) {
//         console.log(this.name + ' flies at ' + speed + ' mph.');
//     }
// };



// let run = runner.run.bind(flyer,20);

// run();



// Write poyfill for bind
 