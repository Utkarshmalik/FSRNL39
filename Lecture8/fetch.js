// fetch(url)
//     .then(response => {
//         // handle the response
//     })
//     .catch(error => {
//         // handle the error
//     });





// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     console.log("Response:",res);
//     res.json()
//     .then((data=>{
//         console.log(data);
//     }))
// })
// .catch((err)=>{
//     console.log("Error:",err);
// });



// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     console.log("Response:",res);
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log("Error:",err);
// });



let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});