// function download(url, callback) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Downloading ${url} ...`);
        
//         // process the picture once it is completed
//         callback(url);
//     },1000);
// }

// function process(picture) {
//       console.log(`Processing ${picture}`);
// }

// let url = 'https://www.javascript.net/pic.jpg';



// download(url, process);







function download(url, callback) {
  setTimeout(() => {
    console.log(`Downloading ${url} ...`);
    callback(url);
  }, 1000);
}

const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

download(url1, function (url) {
  console.log(`Processing ${url}`);
  download(url2, function (url) {
    console.log(`Processing ${url}`);
    download(url3, function (url) {
      console.log(`Processing ${url}`);
    });
  });
}); 




function getUsers(callback) {

  // delay 1 second (1000ms)
  setTimeout(() => {
    callback([
      { username: 'john', email: 'john@test.com' },
      { username: 'jane', email: 'jane@test.com' },
    ])
  }, 1000);
}

function findUser(username) {
    getUsers( (users)=>{
        const user = users.find((user) => user.username === username);
        console.log(user);
    });
}


findUser("john");