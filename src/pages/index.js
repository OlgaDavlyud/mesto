import './index.css';

import Card from '../scripts/components/Card.js';
// import { initialCards } from '../scripts/utils/cards.js';
import { popupEditElement, popupAddElement, popupUpdateAvatar, popupShowCard, popupWithSubmit, popupButtonOpenEditElement, popupButtonOpenAddElement, popupButtonOpenAvatarElement, editForm, newCardForm, UpdateAvatarForm, nameInput, jobInput, avatarInput, nameProfile, jobProfile, avatarProfile, selectors } from '../scripts/utils/constants.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import Api from '../scripts/components/Api.js';

// Создание новых классв
const userInfo = new UserInfo({ nameProfile: nameProfile, jobProfile: jobProfile });
const popupAdd = new PopupWithForm(popupAddElement, renderCard);
const popupEdit = new PopupWithForm(popupEditElement, submitEditProfileForm);
const popupAvatar = new PopupWithForm(popupUpdateAvatar, updateAvatar);
const popupShowImage = new PopupWithImage(popupShowCard);
const popupDeleteCard = new PopupWithConfirmation (popupWithSubmit);

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

const intialCardList = new Section ({
  items: [],
  renderer: renderCard
},
'.elements'
);

// Функция обновления аватара
function updateAvatar () {
  avatarProfile.src = avatarInput.value;
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
// const intialCardList = new Section ({
//   items: initialCards,
//   renderer: renderCard
// },
// '.elements'
// );

// intialCardList.renderItems();

//Валидация форм
const validityEditForm = new FormValidator(selectors, editForm);
validityEditForm.enableValidation();

const validityNewForm = new FormValidator(selectors, newCardForm);
validityNewForm.enableValidation();

const validityUpdateAvatarForm = new FormValidator(selectors, UpdateAvatarForm);
validityUpdateAvatarForm.enableValidation();

// Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-57',
  headers: {
    authorization: 'de2e08e4-c231-4ebe-acd8-a48ea50e7d8e',
    'content-type': 'application/json'
  }
});

const userDataInfo = api.getInitialUserData();

userDataInfo
.then((data) => {
  nameProfile.textContent = data.name,
  jobProfile.textContent = data.about,
  avatarProfile.src  = data.avatar
})
.catch((err) => {
  console.log(err);
});

const cards = api.getInitialCards();

cards
.then((data) => {
  intialCardList.setItems(data.map(card => ({ name: card.name, link: card.link })))
  intialCardList.renderItems();
})
.catch((err) => {
  console.log(err);
});

const newUserData = api.changeUserData(data);

newUserData
.then((data) => {
  data.name = nameInput.textContent,
  data.about = jobInput.textContent
})
.catch((err) => {
  console.log(err);
});