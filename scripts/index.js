// Делаем выборку DOM элементов

// popups
const popupEditElement = document.querySelector('.popup__edit');
const popupAddElement = document.querySelector('.popup__add');
const popupShowCard = document.querySelector('.popup__show');


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
let nameProfile = profileElement.querySelector('.profile__name');
let jobProfile = profileElement.querySelector('.profile__about-yourself');


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


//Cлушатели событий для окон редактирования и добавления
popupButtonOpenEditElement.addEventListener('click', function() {
  openPopup(popupEditElement);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});


popupButtonCloseEditElement.addEventListener('click', function() {
  closePopup(popupEditElement);
  nameInput.value = "";
  jobInput.value = "";
});


formEditElement.addEventListener('submit', submitForm);


popupButtonOpenAddElement.addEventListener('click', function() {
  openPopup(popupAddElement);
});


popupButtonCloseAddElement.addEventListener('click', function() {
  closePopup(popupAddElement);
  newCardForm.reset();
});


//  Массив карточек
const initialCards = [
  {
    name: 'Дубай',
    link: 'https://images.unsplash.com/photo-1642369455174-9a3b9f89becd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80'
  },
  {
    name: 'Стамбул',
    link: 'https://images.unsplash.com/photo-1644989856434-641dd6036bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1632937412284-475db917c92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Париж',
    link: 'https://images.unsplash.com/photo-1591685909937-9a53ffd85f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
  },
  {
    name: 'Венеция',
    link: 'https://images.unsplash.com/photo-1592803103769-f83dba4b7cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80'
  },
  {
    name: 'Прага',
    link: 'https://images.unsplash.com/photo-1656943460077-0fe6f61e19f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  }
];


// Добавление и удаление карточек
const containerForCards = document.querySelector('.elements');
const newCardForm = popupAddElement.querySelector('.popup__form');
const cardTemplate = document.querySelector('.card-template');

let bigShowImageCard = popupShowCard.querySelector('.popup__show-image');
let showNameBigImage = popupShowCard.querySelector('.popup__show-name');
let showAltBigImage = popupShowCard.querySelector('.popup__show-image');

const createACard = (data) => {
  const cardElement = cardTemplate.content.cloneNode(true).children[0];
  const nameCard = cardElement.querySelector('.element__title').textContent = data.name;
  const linkImageCard = cardElement.querySelector('.element__image').src = data.link;
  const altImageCard = cardElement.querySelector('.element__image').alt = data.name;
  return cardElement;
};


const deleteHandler = (event) => {
    const evtTarget = event.target;
    const currentElement = evtTarget.closest('.element');
    currentElement.remove();
};


const setEventListeners = (cardElement) => {
  const deleteButtonCard = cardElement.querySelector('.element__trash-button');
  deleteButtonCard.addEventListener('click', deleteHandler);

  const likeButtonCard = cardElement.querySelector('.element__like-button');
  likeButtonCard.addEventListener('click', (event) => {
    const evtTarget = event.target;
    const currentElement = evtTarget.closest('.element');
    likeButtonCard.classList.toggle('element__like-button-active');
  });

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


const renderCards = (data) => {
  const cardElement = createACard(data);
  setEventListeners(cardElement);
  containerForCards.prepend(cardElement);
};


initialCards.forEach(renderCards);


const addNewCard = (event) => {
  event.preventDefault();
  const newData = {name: nameCardInput.value, link: linkImageInput.value};
  renderCards(newData);
  closePopup(popupAddElement)
  nameCardInput.value = "";
  linkImageInput.value = "";
};

//слушатель событий добавления карточек
newCardForm.addEventListener('submit', addNewCard);

//слушатель закрытия просмотра карточек
popupButtonCloseShowCard.addEventListener('click', function(){
  closePopup(popupShowCard);
});