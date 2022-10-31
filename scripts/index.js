// Делаем выборку DOM элементов

// popups
const popupEditElement = document.querySelector('.popup__edit');
const popupAddElement = document.querySelector('.popup__add');


//popups open button
const popupButtonOpenEditElement = document.querySelector('.profile__edit-button');
const popupButtonOpenAddElement = document.querySelector('.profile__add-button');

//popup close button
const popupButtonCloseEditElement = popupEditElement.querySelector('.popup__button-close');
const popupButtonCloseAddElement = popupAddElement.querySelector('.popup__button-close');

// popups container
const formEditElement = popupEditElement.querySelector('.popup__container');
const formAddElement = popupAddElement.querySelector('.popup__container');

// popups input
const nameInput = formEditElement.querySelector('.popup__input-profile-name');
const jobInput = formEditElement.querySelector('.popup__input-profile-about-yourself');
//const nameCardInput = formAddElement.querySelector('.popup__input-name-card');
//const linkImageInput = formAddElement.querySelector('.popup__input-link-image');

// profile container and elements
const profileElement = document.querySelector('.profile__info');
let nameProfile = profileElement.querySelector('.profile__name');
let jobProfile = profileElement.querySelector('.profile__about-yourself');


//Создаем функции
const openPopupEdit = function() {
    popupEditElement.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

const closePopupEdit = function() {
    popupEditElement.classList.remove('popup_opened');
    nameInput.value = "";
    jobInput.value = "";
}

function changeName() {
    if (nameInput.value !== nameProfile.value) {
        nameProfile.textContent = nameInput.value;
    }
}

function changeAboutYourself() {
    if (jobInput.value !== jobProfile.value) {
        jobProfile.textContent = jobInput.value;
    }
}

function submitForm(evt) {
    evt.preventDefault();
    changeName();
    changeAboutYourself();
    closePopupEdit();
}

const openPopupAdd = function() {
  popupAddElement.classList.add('popup_opened');
}

const closePopupAdd = function() {
  popupAddElement.classList.remove('popup_opened');
}

//Cлушатели событий
popupButtonOpenEditElement.addEventListener('click', openPopupEdit);
popupButtonCloseEditElement.addEventListener('click', closePopupEdit);
formEditElement.addEventListener('submit', submitForm);
popupButtonOpenAddElement.addEventListener('click', openPopupAdd);
popupButtonCloseAddElement.addEventListener('click', closePopupAdd);


//  Массив карточек
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

// Карточки при открытии страницы
const containerForCards = document.querySelector('.elements');
const newCardForm = popupAddElement.querySelector('.popup__form');
const cardTemplate = document.querySelector('.card-template');

const createACard = (data) => {
  const cardElement = cardTemplate.content.cloneNode(true);

  const nameCard = cardElement.querySelector('.element__title');
  const linkImageCard = cardElement.querySelector('.element__image');

  nameCard.textContent = data;
  linkImageCard.textContent = data;

  return cardElement;
}

const renderCards = (data) => {
  const cardElement = createACard(data);
  containerForCards.prepend(cardElement);
}

initialCards.forEach(renderCards);

const addNewCard = (event) => {
  event.preventDefault();

  const nameCard = document.querySelector('.popup__input-name-card').value;
  const linkImageCard = document.querySelector('.popup__input-link-image').value;

  renderCards(nameCard);
};

newCardForm.addEventListener('submit', addNewCard);