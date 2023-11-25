// Suppose that you need to perform three asynchronous operations in the following sequence:

// Select a user from the database.
// Get services of the user from an API.
// Calculate the service cost based on the services from the server. 


// function getUser(userId, callback) {
//     console.log('Get user from the database.');
//     setTimeout(() => {
//         callback({
//             userId: userId,
//             username: 'john'
//         });
//     }, 1000);
// }

// function getServices(user, callback) {
//     console.log(`Get services of  ${user.username} from the API.`);
//     setTimeout(() => {
//         callback(['Email', 'VPN', 'CDN']);
//     }, 2 * 1000);
// }

// function getServiceCost(services, callback) {
//     console.log(`Calculate service costs of ${services}.`);
//     setTimeout(() => {
//         callback(services.length * 100);
//     }, 3 * 1000);
// }

// getUser(100, (user) => {
//     getServices(user, (services) => {
//         getServiceCost(services, (cost) => {
//             console.log(`The service cost is ${cost}`);
//         });
//     });
// });




function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Get user from the database.');
        setTimeout(() => {
            // resolve({
            //     userId: userId,
            //     username: 'john'
            // });
            reject("DB is down");
        }, 1000);
    })
}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 2 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}


// getUser(100)
//     .then((user)=>getServices(user))
//     .then((services)=>getServiceCost(services))
//     .then((cost)=>console.log(cost));



// If a function returns a Promise, you can place the await keyword in front of the function call, like this:

// let result = await f();






async function showServiceCost(){

    try{
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
    }
    catch(err){
        console.log("ERROR ",err)
    }

}


showServiceCost();