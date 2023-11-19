//a promise is an object that encapsulates the result of an asynchronous operation.


// A promise object has a state that can be one of the following:

// Pending
// Fulfilled with a value
// Rejected for a reason



// Creating a Promise 

//exectuor : typically performs an asynchronous operation
// pass two callback functions with the name resolve and reject.
// 

// const promise = new Promise((resolve,reject)=>{

// })


// function getUsers() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ]);
//     }, 1000);
//   });
// }

// const promise = getUsers();

// promise.then((users) => {
//   console.log(users);
// });




let success = false;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}

const promise = getUsers();

// promise.then(onFulfilled, onRejected);
//promise.then(onFulfilled).catch(onRejected)