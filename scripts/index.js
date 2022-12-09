import Card from "./Card.js";
import { initialCards } from './cards.js';
import { popupEditElement, popupAddElement, popupShowCard, popupButtonOpenEditElement, popupButtonOpenAddElement, popupButtonCloseEditElement, popupButtonCloseAddElement, formEditElement, editForm, newCardForm, nameInput, jobInput, nameProfile, jobProfile, submitBottonEdit, submitBottonAdd } from './constants.js';
import { openPopup, closePopup, submitEditProfileForm, closePopupByClickOnOverlay} from './utils.js';

//Cлушатели событий для окон редактирования данных и добавления карточек

//Слушатель открытия окна редактирования данных
popupButtonOpenEditElement.addEventListener('click', function() {
  openPopup(popupEditElement);
  disabledButtonState(submitBottonEdit);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  hideInputErrorOpeningPopup(popupEditElement);
});

//Слушатель закрытия окна редактирования данных
popupButtonCloseEditElement.addEventListener('click', function() {
  closePopup(popupEditElement);
  editForm.reset();
});

//Слушатель сохранения отредактированных данных
formEditElement.addEventListener('submit', submitEditProfileForm);

//Слушатель открытия окна добавления карточек
popupButtonOpenAddElement.addEventListener('click', function() {
  openPopup(popupAddElement);
  disabledButtonState(submitBottonAdd);
  hideInputErrorOpeningPopup(popupAddElement);
});

//Слушатель закрытия окна добавления карточек
popupButtonCloseAddElement.addEventListener('click', function() {
  closePopup(popupAddElement);
  newCardForm.reset();
});

//Слушатель добавления новых карточек
//newCardForm.addEventListener('submit', this._addNewCard);

//Слушатели попапов для закрытия overlay
popupEditElement.addEventListener('click', closePopupByClickOnOverlay);
popupAddElement.addEventListener('click', closePopupByClickOnOverlay);
popupShowCard.addEventListener('click', closePopupByClickOnOverlay);

//Отрисовка карточек
initialCards.forEach((item) => {
  const card = new Card(item, '.card-template', openPopup);
  const cardElement = card.generateCard();

  document.querySelector('.elements').prepend(cardElement);
});

//Валидация форм
//enableValidation(selectors);