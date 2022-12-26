import Card from './components/Card.js';
import { initialCards } from './utils/cards.js';
import { popups, popupEditElement, popupAddElement, popupShowCard, popupButtonOpenEditElement, popupButtonOpenAddElement, formEditElement, editForm, newCardForm, nameInput, jobInput, nameProfile, jobProfile, selectors } from './utils/constants.js';
// import { openPopup, closePopup, handleCardClick } from './utils/utils.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import PopupWithImage from './components/PopupWithImage.js';

//const popupTest = new PopupWithForm(popupEditElement, submitFormTest);

// function submitForm () {
//   renderCard(data);
// }

const userInfo = new UserInfo({ nameProfile: nameProfile, jobProfile: jobProfile });

const popupTestAdd = new PopupWithForm(popupAddElement, renderCard);

const popupTestEdit = new PopupWithForm(popupEditElement, submitEditProfileForm);

function openPopupEdit() {
  popupTestEdit.open();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  validityEditForm.resetValidation();
  validityEditForm.disabledButtonState();
}

function submitEditProfileForm(data) {
  userInfo.setUserInfo(data);
}

function handleCardClick (name, link) {
  popupShowCardTest.open(name, link);
}

//Слушатель открытия окна редактирования данных
popupButtonOpenEditElement.addEventListener('click', openPopupEdit);

// //Слушатель сохранения отредактированных данных
// formEditElement.addEventListener('submit', submitEditProfileForm);

//Слушатель открытия окна добавления карточек
popupButtonOpenAddElement.addEventListener('click', function() {
  popupTestAdd.open();
  validityNewForm.resetValidation();
});

function createCard (data) {
  const card = new Card(data, '.card-template', handleCardClick);
  return card.generateCard();
}

function renderCard (data) {
  const cardElement = createCard(data);
  intialCardList.addItem(cardElement);
}

// Отрисовка карточек
const intialCardList = new Section ({
  items: initialCards,
  renderer: renderCard
},
'.elements'
);

intialCardList.renderItems();

const popupShowCardTest = new PopupWithImage(popupShowCard);


//Валидация форм
const validityEditForm = new FormValidator(selectors, editForm);
validityEditForm.enableValidation();

const validityNewForm = new FormValidator(selectors, newCardForm);
validityNewForm.enableValidation();