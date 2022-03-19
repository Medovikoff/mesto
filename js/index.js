let openPop = document.querySelector('.profile__edit-button');
let closePop = document.querySelector('.pop-up__close');
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

let submitButton = document.querySelector('.pop-up__button');
console.log(submitButton)



//











 function addUser(evt) {
    evt.preventDefault ();
    
    profileName.textContent = userName.value;
    profileDiscription.textContent = description.value;
    popUp.classList.remove('active');
}

form.addEventListener('submit', addUser);

// submitButton.addEventListener('submit', addUser);