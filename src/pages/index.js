import './index.css';

import Card from '../scripts/components/Card.js';
import { initialCards } from '../scripts/utils/cards.js';
import { popupEditElement, popupAddElement, popupUpdateAvatar, popupShowCard, popupWithSubmit, popupButtonOpenEditElement, popupButtonOpenAddElement, popupButtonOpenAvatarElement, editForm, newCardForm, UpdateAvatarForm, nameInput, jobInput, avatarInput, nameProfile, jobProfile, avatarPrifile, selectors } from '../scripts/utils/constants.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithSubmit from '../scripts/components/PopupWithSubmit.js';
import Api from '../scripts/components/Api.js';

// Создание новых классв
const userInfo = new UserInfo({ nameProfile: nameProfile, jobProfile: jobProfile });
const popupAdd = new PopupWithForm(popupAddElement, renderCard);
const popupEdit = new PopupWithForm(popupEditElement, submitEditProfileForm);
const popupAvatar = new PopupWithForm(popupUpdateAvatar, updateAvatar);
const popupShowImage = new PopupWithImage(popupShowCard);
const popupDeleteCard = new PopupWithSubmit (popupWithSubmit);

//Функция открытия окна редактирования данных
function openPopupEdit() {
  popupEdit.open();
  popupEdit.setEventListeners();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  validityEditForm.resetValidation();
  validityEditForm.disabledButtonState();
}

// Функция отправки данных из формы редактированния данных о себе
function submitEditProfileForm(data) {
  userInfo.setUserInfo(data);
}

// Функция клика по карточке
function handleCardClick (name, link) {
  popupShowImage.open(name, link);
  popupShowImage.setEventListeners();
}

// Функция клика по мусорке
function handleTrashClick() {
  popupDeleteCard.open();
  popupDeleteCard.setEventListeners();
}

// Функция создания карточки
function createCard (data) {
  const card = new Card(data, '.card-template', handleCardClick, handleTrashClick);
  return card.generateCard();
}

// Функция отрисовки карточки
function renderCard (data) {
  const cardElement = createCard(data);
  intialCardList.addItem(cardElement);
}

// Функция обновления аватара
function updateAvatar () {
  avatarPrifile.src = avatarInput.value;
}

//Слушатель открытия окна редактирования данных
popupButtonOpenEditElement.addEventListener('click', openPopupEdit);

//Слушатель открытия окна добавления карточек
popupButtonOpenAddElement.addEventListener('click', function() {
  popupAdd.open();
  popupAdd.setEventListeners();
  validityNewForm.resetValidation();
});

//Слушатель открытия окна обновления аватара
popupButtonOpenAvatarElement.addEventListener('click', function() {
  popupAvatar.open();
  popupAvatar.setEventListeners();
  validityUpdateAvatarForm.resetValidation();
  validityUpdateAvatarForm.disabledButtonState();
})

// Отрисовка карточек
const intialCardList = new Section ({
  items: initialCards,
  renderer: renderCard
},
'.elements'
);

intialCardList.renderItems();

//Валидация форм
const validityEditForm = new FormValidator(selectors, editForm);
validityEditForm.enableValidation();

const validityNewForm = new FormValidator(selectors, newCardForm);
validityNewForm.enableValidation();

const validityUpdateAvatarForm = new FormValidator(selectors, UpdateAvatarForm);
validityUpdateAvatarForm.enableValidation();

// Api

const apiUser = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-57/users/me',
  headers: {
    authorization: 'de2e08e4-c231-4ebe-acd8-a48ea50e7d8e',
    'content-type': 'application/json'
  }
});

const userDataInfo = apiUser.getInitialUserData();

userDataInfo
.then((data) => {
  // логика отображения
  console.log('user data');
})
.catch((err) => {
  console.log(err);
});

const apiCard = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-57/cards',
  headers: {
    authorization: 'de2e08e4-c231-4ebe-acd8-a48ea50e7d8e',
    'content-type': 'application/json'
  }
});

const cards = apiCard.getInitialCards();

cards
.then((data) => {
  // логика отрисовка карточек
  console.log('cards data');
})
.catch((err) => {
  console.log(err);
});

const newUserData = apiUser.changeUserData();

newUserData
.then((data) => {
  //метод обновления данных на странице
  console.log('New User Data');
})
.catch((err) => {
  console.log(err);
});