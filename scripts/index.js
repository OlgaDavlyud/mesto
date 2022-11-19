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


// popups containers
const formEditElement = popupEditElement.querySelector('.popup__container');
const formAddElement = popupAddElement.querySelector('.popup__container');


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

//Создаем функции для открытия и закрытия окон редактирования и добавления
const openPopup = function (popup) {
  popup.classList.add('popup_opened');
}


const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
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
    closePopup(popupEditElement);
}


//Функция закрытия overlay
const closePopupByClickOnOverlay = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
    closePopup(popupEditElement);
    closePopup(popupAddElement);
    closePopup(popupShowCard);
};

//Слушатели попаповxs для закрытия overlay
popupEditElement.addEventListener('click', closePopupByClickOnOverlay);
popupAddElement.addEventListener('click', closePopupByClickOnOverlay);
popupShowCard.addEventListener('click', closePopupByClickOnOverlay);



//Cлушатели событий для окон редактирования и добавления
popupButtonOpenEditElement.addEventListener('click', function() {
  openPopup(popupEditElement);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  hideInputError(popupEditElement, nameInput);
  hideInputError(popupEditElement, jobInput);
});


popupButtonCloseEditElement.addEventListener('click', function() {
  closePopup(popupEditElement);
  nameInput.value = "";
  jobInput.value = "";
});


formEditElement.addEventListener('submit', submitForm);


popupButtonOpenAddElement.addEventListener('click', function() {
  openPopup(popupAddElement);
  hideInputError(popupAddElement, nameCardInput);
  hideInputError(popupAddElement, linkImageInput);
});


popupButtonCloseAddElement.addEventListener('click', function() {
  closePopup(popupAddElement);
  newCardForm.reset();
});


// Добавление и удаление карточек
const containerForCards = document.querySelector('.elements');
const newCardForm = popupAddElement.querySelector('.popup__form');
const cardTemplate = document.querySelector('.card-template');

let bigShowImageCard = popupShowCard.querySelector('.popup__show-image');
let showNameBigImage = popupShowCard.querySelector('.popup__show-name');
let showAltBigImage = popupShowCard.querySelector('.popup__show-image');

const createACard = (data) => {
  const cardElement = cardTemplate.content.cloneNode(true);
  const nameCard = cardElement.querySelector('.element__title').textContent = data.name;
  const linkImageCard = cardElement.querySelector('.element__image').src = data.link;
  const altImageCard = cardElement.querySelector('.element__image').alt = data.name;
  return cardElement;
}


const deleteHandler = (event) => {
    const evtTarget = event.target;
    const currentElement = evtTarget.closest('.element');
    currentElement.remove();
}


const likeHandler = (event) => {
  const evtTarget = event.target;
  const currentElement = evtTarget.closest('.element');
  evtTarget.classList.toggle('element__like-button-active');
}


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
}


const renderCards = (data) => {
  const cardElement = createACard(data);
  setEventListeners(cardElement);
  containerForCards.prepend(cardElement);
}


initialCards.forEach(renderCards);


const addNewCard = (event) => {
  event.preventDefault();
  const newData = {name: nameCardInput.value, link: linkImageInput.value};
  renderCards(newData);
  closePopup(popupAddElement)
  newCardForm.reset();
}

//слушатель событий добавления карточек
newCardForm.addEventListener('submit', addNewCard);

//слушатель закрытия просмотра карточек
popupButtonCloseShowCard.addEventListener('click', function(){
  closePopup(popupShowCard);
});

enableValidation(selectors);
