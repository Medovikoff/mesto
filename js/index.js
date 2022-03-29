const openPop = document.querySelector('.profile__edit-button');
const closePop = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');

 

openPop.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('pop-up_opened');
    userName.value = profileName.textContent;
    description.value = profileDiscription.textContent;
    
})
closePop.addEventListener('click', () => {
    popUp.classList.remove('pop-up_opened');
})

const profileName = document.querySelector('.profile__name');

const profileDiscription = document.querySelector('.profile__discription');

const form = document.querySelector('.pop-up__form');

const userName = form.querySelector('.pop-up__input_type_user');

const description = form.querySelector('.pop-up__input_type_descr');

const submitButton = document.querySelector('.pop-up__button');


 function addUser(evt) {
    evt.preventDefault ();
    
    profileName.textContent = userName.value;
    profileDiscription.textContent = description.value;
    popUp.classList.remove('pop-up_opened');
}

form.addEventListener('submit', addUser);

//adding places

const popOpenPlace = document.querySelector('.profile__add-button');

popOpenPlace.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('pop-up_opened')
});


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
