const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault()

    console.log(nameInput.value)
    console.log(emailInput.value)
    if(nameInput.value === '' || emailInput.value === ''){
        // alert("Please enter fields"); ok for testing purposes
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000)
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`User: ${nameInput.value} \n
 ${emailInput.value}`));
//The process of programmatically creating HTML elements with the DOM
 //need to append li to ul

 userList.appendChild(li);

// clear field
        nameInput.value = '';
        emailInput.value = '';
    }
}
//the targe method, allows for the event to "save" what is submitted in the input


//DOM notes, window object is the parent object of the DOM
//singe Element Selectors
// const form = document.getElementById("my-form");
// //alternativly use query selecotr

// //Multi-Element Selectors
// const ul = document.querySelector('.items');
// ul.innerHTML = '<li>Hello</li>'

// const btn = document.querySelector(".btn");
// //What is preventDefault()
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = 
//     '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items')
//     .lastElementChild.innerHTML = '<h1>Hello</h1>'
// })
// //MDN docs can show you all of the events