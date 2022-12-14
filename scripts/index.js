import Card from './Card.js';
import { initialCards } from './cards.js';
import { popups, popupEditElement, popupAddElement, popupShowCard, popupButtonOpenEditElement, popupButtonOpenAddElement, formEditElement, editForm, newCardForm, nameInput, jobInput, nameProfile, jobProfile, containerForCards, nameCardInput, linkImageInput, bigShowImageCard, showNameBigImage, selectors } from './constants.js';
import { openPopup, closePopup, submitEditProfileForm } from './utils.js';
import FormValidator from './FormValidator.js';

//Слушатель открытия окна редактирования данных
popupButtonOpenEditElement.addEventListener('click', function() {
  openPopup(popupEditElement);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  validityEditForm.resetValidation();
  validityEditForm.disabledButtonState();
});

//Слушатель сохранения отредактированных данных
formEditElement.addEventListener('submit', submitEditProfileForm);

//Слушатель открытия окна добавления карточек
popupButtonOpenAddElement.addEventListener('click', function() {
  openPopup(popupAddElement);
  validityNewForm.resetValidation();
  newCardForm.reset();
});

//Закрытие попапов нажатием на кнопку и overlay
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
        }
        if (evt.target.classList.contains('popup__button-close')) {
          closePopup(popup)
        }
    })
})

// Отрисовка карточек
const createCard = (data) => {
  const card = new Card(data, '.card-template', handleCardClick);
  return card.generateCard();
}

const renderCard = (data) => {
  const card = createCard(data);
  containerForCards.prepend(card);
}

initialCards.forEach(renderCard)

// Функция открытия карточки
function handleCardClick (name, link) {
  bigShowImageCard.src = link;
  bigShowImageCard.alt = name;
  showNameBigImage.textContent = name;
  openPopup(popupShowCard)
}

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