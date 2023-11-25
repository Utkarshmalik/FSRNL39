
// let div = document.createElement('div');
// div.id = "content";
// div.className = 'note';

// //innerHTML 
// div.innerHTML = '<p> We are learning DOM manipulation </p>';

// document.body.appendChild(div);



// let li = document.createElement('li');
// li.textContent = 'Products';


// const menu = document.querySelector("#menu");
// menu.appendChild(li);

let languages = ['JS', 'TypeScript', 'Elm', 'Dart','Scala'];



let fragment = new DocumentFragment();

let langEl = document.querySelector('#language')

languages.forEach((language) => {
    let li = document.createElement('li');
    li.innerHTML = language;
    fragment.appendChild(li);
})


langEl.appendChild(fragment);
