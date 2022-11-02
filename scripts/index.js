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


//Создаем функции
const openPopupEdit = function() {
    popupEditElement.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

const closePopupEdit = function() {
    popupEditElement.classList.remove('popup_opened');
    nameInput.value = "";
    jobInput.value = "";
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
    closePopupEdit();
}

const openPopupAdd = function() {
  popupAddElement.classList.add('popup_opened');
}

const closePopupAdd = function() {
  popupAddElement.classList.remove('popup_opened');
  newCardForm.reset();
}


//Cлушатели событий
popupButtonOpenEditElement.addEventListener('click', openPopupEdit);
popupButtonCloseEditElement.addEventListener('click', closePopupEdit);
formEditElement.addEventListener('submit', submitForm);

popupButtonOpenAddElement.addEventListener('click', openPopupAdd);
popupButtonCloseAddElement.addEventListener('click', closePopupAdd);



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

// Создаем функциональность добавления и удаления карточек
const containerForCards = document.querySelector('.elements');
const newCardForm = popupAddElement.querySelector('.popup__form');
const cardTemplate = document.querySelector('.card-template');

const createACard = (data) => {
  const cardElement = cardTemplate.content.cloneNode(true).children[0];
  const nameCard = cardElement.querySelector('.element__title').textContent = data.name;
  const linkImageCard = cardElement.querySelector('.element__image').src = data.link;
  const altImageCard = cardElement.querySelector('.element__image').alt = data.name;
  return cardElement;
}


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
};

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
  closePopupAdd();
};


//слушатель событий добавления карточек
newCardForm.addEventListener('submit', addNewCard);


// Попап просмотра карточек
const card = document.querySelectorAll('.element');

const openPopupShowCard = (event) => {
  const evtTarget = event.target;
  const currentElement = evtTarget.closest('.element');
  popupShowCard.classList.add('popup_opened');
};

const closePopupShowCard = function () {
  popupShowCard.classList.remove('popup_opened');
};

//popupOpenShowCard.addEventListener('click', openPopupShowCard);
popupButtonCloseShowCard.addEventListener('click', closePopupShowCard);