import Card from './components/Card.js';
import { initialCards } from './utils/cards.js';
import { popupEditElement, popupAddElement, popupShowCard, popupButtonOpenEditElement, popupButtonOpenAddElement, editForm, newCardForm, nameInput, jobInput, nameProfile, jobProfile, selectors } from './utils/constants.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import PopupWithImage from './components/PopupWithImage.js';

// Создание новых классв
const userInfo = new UserInfo({ nameProfile: nameProfile, jobProfile: jobProfile });
const popupAdd = new PopupWithForm(popupAddElement, renderCard);
const popupEdit = new PopupWithForm(popupEditElement, submitEditProfileForm);
const popupShowImage = new PopupWithImage(popupShowCard);

//Функция открытия окна редактирования данных
function openPopupEdit() {
  popupEdit.open();
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