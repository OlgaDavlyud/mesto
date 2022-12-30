import './index.css';

import Card from '../scripts/components/Card.js';
import { initialCards } from '../scripts/utils/cards.js';
import { popupEditElement, popupAddElement, popupShowCard, popupButtonOpenEditElement, popupButtonOpenAddElement, editForm, newCardForm, nameInput, jobInput, nameProfile, jobProfile, selectors } from '../scripts/utils/constants.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';

// Создание новых классв
const userInfo = new UserInfo({ nameProfile: nameProfile, jobProfile: jobProfile });
const popupAdd = new PopupWithForm(popupAddElement, renderCard);
const popupEdit = new PopupWithForm(popupEditElement, submitEditProfileForm);
const popupShowImage = new PopupWithImage(popupShowCard);

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

// Функция создания карточки
function createCard (data) {
  const card = new Card(data, '.card-template', handleCardClick);
  return card.generateCard();
}

// Функция отрисовки карточки
function renderCard (data) {
  const cardElement = createCard(data);
  intialCardList.addItem(cardElement);
}

//Слушатель открытия окна редактирования данных
popupButtonOpenEditElement.addEventListener('click', openPopupEdit);

//Слушатель открытия окна добавления карточек
popupButtonOpenAddElement.addEventListener('click', function() {
  popupAdd.open();
  popupAdd.setEventListeners();
  validityNewForm.resetValidation();
});

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