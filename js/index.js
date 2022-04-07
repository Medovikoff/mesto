

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

const openPop = document.querySelector('.profile__edit-button');
const closePop = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');


// const togglePopup = popup => () => popup.classList.toggle("popup_opened");

// const showProfileInfo = () => {
//   popupProfileName.value = profileName.textContent;
//   popupProfileStatus.value = profileStatus.textContent;
// }

// cbfghfghf);
// editProfileInfoBtn.addEventListener("click", () => togglePopup(profilePopup));

// showProfileInfo;

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

const popImage = document.querySelector('.pop-up-image');

const popImageClose = popImage.querySelector('.pop-up__close');

const submitImage = popImage.querySelector('.pop-up__form');

// создать эл pop
// get element image

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

  popImage.classList.add('pop-up_opened');
 
  
})
popImageClose.addEventListener('click', () => {
  popImage.classList.remove('pop-up_opened');
})



const elementsTemplate = document.querySelector('.elements').content;

const onPage = document.querySelector('.onPage');

const inputImageTitle = popImage.querySelector('.pop-up__input_type_user'); 
const inputLinkImage = popImage.querySelector('.pop-up__input_type_descr');

function addCard (evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = inputImageTitle.value;
  newCard.link = inputLinkImage.value;
  const newElement = createCard(newCard);
  renderCard(cardElement);
}

submitImage.addEventListener('submit', addCard); 

const newElement = createCard(newCard);

function openPicturePopUP(card) {
  //Image.src , image.alt 
  //text.textContent
  //openPopup(popUp) 
}

const createCard =(card) => {
  
  const element = elementsTemplate.querySelector('.elements__envelop').cloneNode(true);
  const elementImage = element.querySelector('.elements__image');
  const elementName = element.querySelector('.elements__title');
  elementImage.src = card.link;
  elementName.textContent = card.name;
  elementImage.addEventListener('click', () => { 
    openPicturePopUP(card)
  } )
  return element;
  
}

const renderCard = card => onPage.prepend(card);


initialCards.forEach(card => renderCard(createCard(card)));

