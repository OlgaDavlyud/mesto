import Card from './Card.js';
import { initialCards } from './cards.js';
import { popupEditElement, popupAddElement, popupShowCard, popupButtonOpenEditElement, popupButtonOpenAddElement, popupButtonCloseEditElement, popupButtonCloseAddElement, popupButtonCloseShowCard, formEditElement, editForm, newCardForm, nameInput, jobInput, nameProfile, jobProfile, containerForCards, nameCardInput, linkImageInput, selectors } from './constants.js';
import { openPopup, closePopup, submitEditProfileForm, closePopupByClickOnOverlay } from './utils.js';
import FormValidator from './FormValidator.js';

//Слушатель открытия окна редактирования данных
popupButtonOpenEditElement.addEventListener('click', function() {
  openPopup(popupEditElement);
  validityEditForm.disabledButtonState();
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  validityEditForm.hideInputErrorOpeningPopup();
});

//Слушатель закрытия окна редактирования данных
popupButtonCloseEditElement.addEventListener('click', function() {
  closePopup(popupEditElement);
});

//Слушатель сохранения отредактированных данных
formEditElement.addEventListener('submit', submitEditProfileForm);

//Слушатель открытия окна добавления карточек
popupButtonOpenAddElement.addEventListener('click', function() {
  openPopup(popupAddElement);
  validityNewForm.disabledButtonState();
  validityNewForm.hideInputErrorOpeningPopup()
  newCardForm.reset();
});

//Слушатель закрытия окна добавления карточек
popupButtonCloseAddElement.addEventListener('click', function() {
  closePopup(popupAddElement);
});

//Слушатели попапов для закрытия overlay
popupEditElement.addEventListener('click', closePopupByClickOnOverlay);
popupAddElement.addEventListener('click', closePopupByClickOnOverlay);
popupShowCard.addEventListener('click', closePopupByClickOnOverlay);

//Слушатель закрытия просмотра карточек
popupButtonCloseShowCard.addEventListener('click', function(){
 closePopup(popupShowCard);
});

// Отрисовка карточек
// function handleCardClick(name, link) {
//   link = this._link;
//   name = this._name;
//   openPopup(popup);
// }

const createCard = (data) => {
  const card = new Card(data, '.card-template', openPopup);
  return card.generateCard();
}

const renderCard = (data) => {
  const card = createCard(data);
  containerForCards.prepend(card);
}

initialCards.forEach(renderCard)

//Функция добавления новой карточки
const addNewCard = (event) => {
  event.preventDefault();
  const newData = {name: nameCardInput.value, link: linkImageInput.value};
  renderCard(newData)
  closePopup(popupAddElement)
  newCardForm.reset();
}

//Слушатель добавления новых карточек
newCardForm.addEventListener('submit', addNewCard);

//Валидация форм
const validityEditForm = new FormValidator(selectors, editForm);
validityEditForm.enableValidation();

const validityNewForm = new FormValidator(selectors, newCardForm);
validityNewForm.enableValidation();