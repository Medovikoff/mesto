let openPop = document.querySelector('.profile__edit-button');
let closePop = document.querySelector('.pop-up_close');
let popUp = document.querySelector('.pop-up');
// let profileName = document.querySelector('.profile__name');
// let profileDescription = document.querySelector('.profile__discription');
// let popUpButton = document.querySelector('.pop-up__button');



openPop.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})
closePop.addEventListener('click', () => {
    popUp.classList.remove('active');
})

// //  function addUser(evt) {
// //     evt.preventDefault
    
   
    


// // }
// // openPop.addEventListener('click', addUser);


// let profileName = document.querySelector('.profile__name');
// let profileDescription = document.querySelector('.profile__discription');
// let popUpButton = document.querySelector('.pop-up__button');



// function addInfo(evt) {
//     evt.preventDefault 

//     let form = document.querySelector('.pop-up__form');
//     let userName = form.querySelector('.pop-up__input_type_user');

//     let description = form.querySelector('.pop-up__input_type_descr');

//     console.log(form, userName, description)
//     // let userName = document.querySelector('.pop-up__input_type_user');

//     // let description = document.querySelector('.pop-up__input_type_descr');
    
//     userName.value = profileName.textContent;
//     description.value = description.textContent;


// }
// popUpButton.addEventListener('submit', addInfo);

// var displayBox = document.querySelector('.update-card-body>p');
// var input = document.querySelector('.get-text');
// input.addEventListener('keyup', function() {
//   displayBox.textContent = input.value;  
// });


let profileName = document.querySelector('.profile__name');
console.log(profileName)
let profileDiscription = document.querySelector('.profile__discription');
console.log(profileDiscription)
let form = document.querySelector('.pop-up__form');
console.log(form)
let userName = form.querySelector('.pop-up__input_type_user');
console.log(userName)
let description = form.querySelector('.pop-up__input_type_descr');
console.log(description)
// let nameInput = document.querySelector('.pop-up__input_type_user');
// console.log(nameInput)
// let descriptionInput = document.querySelector('.pop-up__input_type_descr');
// console.log(descriptionInput)
let submitButton = document.querySelector('.pop-up__button');
console.log(submitButton)
// console.log(submitButton);

userName.addEventListener('submit', function() {
    profileName.textContent = userName.value;
});

// function addUser(evt) {
//     evt.preventDefault 
    
//     // profileName.innerHTML = `<h1 class="profile__name">${nameInput.value}</h1> `
// }

// submitButton.addEventListener('submit', addUser);