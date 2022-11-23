// Делаем выборку DOM элементов

// popups
const popupEditElement = document.querySelector('.popup-edit');
const popupAddElement = document.querySelector('.popup-add');
const popupShowCard = document.querySelector('.popup-show');

//popups open buttons
const popupButtonOpenEditElement = document.querySelector('.profile__edit-button');
const popupButtonOpenAddElement = document.querySelector('.profile__add-button');

//popup close buttons
const popupButtonCloseEditElement = popupEditElement.querySelector('.popup__button-close');
const popupButtonCloseAddElement = popupAddElement.querySelector('.popup__button-close');
const popupButtonCloseShowCard = popupShowCard.querySelector('.popup__show-button-close');

// popups контейнеры и формы
const formEditElement = popupEditElement.querySelector('.popup__container');
const formAddElement = popupAddElement.querySelector('.popup__container');
const editForm = formEditElement.querySelector('.popup__form');

// popups inputs
const nameInput = formEditElement.querySelector('.popup__input-profile-name');
const jobInput = formEditElement.querySelector('.popup__input-profile-about-yourself');
const nameCardInput = formAddElement.querySelector('.popup__input-name-card');
const linkImageInput = formAddElement.querySelector('.popup__input-link-image');

// profile container and elements
const profileElement = document.querySelector('.profile__info');
const nameProfile = profileElement.querySelector('.profile__name');
const jobProfile = profileElement.querySelector('.profile__about-yourself');

// popup submit button
const submitBottonEdit = popupEditElement.querySelector('.popup__button-submit');
const submitBottonAdd = popupAddElement.querySelector('.popup__button-submit');

//Функции open/close и редактирования/добавления данных
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupByClickOnEsc);
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByClickOnEsc);
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

function submitEditProfileForm(evt) {
    evt.preventDefault();
    changeName();
    changeAboutYourself();
    closePopup(popupEditElement);
}

//Функция закрытия overlay
const closePopupByClickOnOverlay = (event) => {
  const popupElement = Array.from(document.querySelectorAll('.popup'));

  popupElement.forEach(popupElement => {
    if (event.target === event.currentTarget) {
      closePopup(popupElement);
     };
  });
};

//Функция закрытия Esc
const closePopupByClickOnEsc = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

//Cлушатели событий для окон редактирования и добавления
popupButtonOpenEditElement.addEventListener('click', function() {
  openPopup(popupEditElement);
  disabledButtonState(submitBottonEdit);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  hideInputErrorOpeningPopup(popupEditElement);
});

popupButtonCloseEditElement.addEventListener('click', function() {
  closePopup(popupEditElement);
  editForm.reset();
});

formEditElement.addEventListener('submit', submitEditProfileForm);

popupButtonOpenAddElement.addEventListener('click', function() {
  openPopup(popupAddElement);
  disabledButtonState(submitBottonAdd);
  hideInputErrorOpeningPopup(popupAddElement);
});

popupButtonCloseAddElement.addEventListener('click', function() {
  closePopup(popupAddElement);
  newCardForm.reset();
});

//Слушатели попапов для закрытия overlay
popupEditElement.addEventListener('click', closePopupByClickOnOverlay);
popupAddElement.addEventListener('click', closePopupByClickOnOverlay);
popupShowCard.addEventListener('click', closePopupByClickOnOverlay);

// Добавление, удаление и просмотр карточек
const containerForCards = document.querySelector('.elements');
const newCardForm = popupAddElement.querySelector('.popup__form');
const cardTemplate = document.querySelector('.card-template');

const bigShowImageCard = popupShowCard.querySelector('.popup__show-image');
const showNameBigImage = popupShowCard.querySelector('.popup__show-name');
const showAltBigImage = popupShowCard.querySelector('.popup__show-image');

const createCard = (data) => {
  const cardElement = cardTemplate.content.cloneNode(true);
  const nameCard = cardElement.querySelector('.element__title').textContent = data.name;
  const linkImageCard = cardElement.querySelector('.element__image').src = data.link;
  const altImageCard = cardElement.querySelector('.element__image').alt = data.name;
  setEventListeners(cardElement);
  return cardElement;
};

//Функция удаления карточки
const deleteHandler = (event) => {
    const evtTarget = event.target;
    const currentElement = evtTarget.closest('.element');
    currentElement.remove();
};

//Функция лайка
const likeHandler = (event) => {
  const evtTarget = event.target;
  const currentElement = evtTarget.closest('.element');
  evtTarget.classList.toggle('element__like-button-active');
};

const setEventListeners = (cardElement) => {
  const deleteButtonCard = cardElement.querySelector('.element__trash-button');
  deleteButtonCard.addEventListener('click', deleteHandler);

  const likeButtonCard = cardElement.querySelector('.element__like-button');
  likeButtonCard.addEventListener('click', likeHandler);

  const showImageCard = cardElement.querySelector('.element__image');
  showImageCard.addEventListener('click', (event) => {
    const evtTarget = event.target;
    const currentElement = evtTarget.closest('.element');
    bigShowImageCard.src = evtTarget.src;
    showNameBigImage.textContent = currentElement.textContent;
    showAltBigImage.alt = evtTarget.alt;
    openPopup(popupShowCard);
  });
};

const renderCard = (data) => {
  const cardElement = createCard(data);
  containerForCards.prepend(cardElement);
};

initialCards.forEach(renderCard);

//Функция добавления новой карточки
const addNewCard = (event) => {
  event.preventDefault();
  const newData = {name: nameCardInput.value, link: linkImageInput.value};
  renderCard(newData);
  closePopup(popupAddElement)
  newCardForm.reset();
};

//слушатель добавления карточек
newCardForm.addEventListener('submit', addNewCard);

//слушатель закрытия просмотра карточек
popupButtonCloseShowCard.addEventListener('click', function(){
  closePopup(popupShowCard);
});

//Валидация форм
enableValidation(selectors);