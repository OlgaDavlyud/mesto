import {initialCards} from './cards.js';

class Card {
    constructor(data, templateSelector) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector)
        .content.querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    _handleLike(likeButton) {
        likeButton.target.classList.toggle('lement__like-button-active');
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
      }

      _setEventListeners() {
        this._element.addEventListener('click', () => {
            this._handleOpenPopup();
          });
          popupButtonCloseShowCard.addEventListener('click', () => {
            this._handleClosePopup();
          });
      }

      _handleOpenPopup() {
        bigShowImageCard.src = this._link;
        bigShowImageCard.alt = this._name;
        showNameBigImage.textContent = this._name;
        openPopup(popupShowCard);
      }

      _handleClosePopup() {
        bigShowImageCard.src = '';
        closePopup(popupShowCard);
      }
}

initialCards.forEach((item) => {
    const card = new Card(item, '.card-template');
    const cardElement = card.generateCard();

    document.querySelector('.elements').prepend(cardElement);
  });

// Добавление, удаление и просмотр карточек
//const containerForCards = document.querySelector('.elements');
//const newCardForm = popupAddElement.querySelector('.popup__form');
//const cardTemplate = document.querySelector('.card-template');

//const bigShowImageCard = popupShowCard.querySelector('.popup__show-image');
//const showNameBigImage = popupShowCard.querySelector('.popup__show-name');
//const showAltBigImage = popupShowCard.querySelector('.popup__show-image');

//const createCard = (data) => {
  //const cardElement = cardTemplate.content.cloneNode(true);
  //const nameCard = cardElement.querySelector('.element__title').textContent = data.name;
  //const imageElement = cardElement.querySelector('.element__image');
  //imageElement.src = data.link;
  //imageElement.alt = data.name;
  //setEventListeners(cardElement);
  //return cardElement;
//};

//Функция удаления карточки
//const deleteHandler = (event) => {
  //  const evtTarget = event.target;
  //  const currentElement = evtTarget.closest('.element');
  //  currentElement.remove();
//};

//Функция лайка
//const likeHandler = (event) => {
  //const evtTarget = event.target;
  //const currentElement = evtTarget.closest('.element');
  //evtTarget.classList.toggle('element__like-button-active');
//};

//const setEventListeners = (cardElement) => {
 // const deleteButtonCard = cardElement.querySelector('.element__trash-button');
 // deleteButtonCard.addEventListener('click', deleteHandler);

// const likeButtonCard = cardElement.querySelector('.element__like-button');
//  likeButtonCard.addEventListener('click', likeHandler);

//  const showImageCard = cardElement.querySelector('.element__image');
//  showImageCard.addEventListener('click', (event) => {
//    const evtTarget = event.target;
//    const currentElement = evtTarget.closest('.element');
//    bigShowImageCard.src = evtTarget.src;
//    showNameBigImage.textContent = currentElement.textContent;
//    showAltBigImage.alt = evtTarget.alt;
//    openPopup(popupShowCard);
//  });
//};

//const renderCard = (data) => {
//  const cardElement = createCard(data);
//  containerForCards.prepend(cardElement);
//};

//initialCards.forEach(renderCard);

//Функция добавления новой карточки
//const addNewCard = (event) => {
//  event.preventDefault();
//  const newData = {name: nameCardInput.value, link: linkImageInput.value};
//  renderCard(newData);
//  closePopup(popupAddElement)
//  newCardForm.reset();
//};

//слушатель добавления карточек
//newCardForm.addEventListener('submit', addNewCard);

//слушатель закрытия просмотра карточек
//popupButtonCloseShowCard.addEventListener('click', function(){
//    closePopup(popupShowCard);
//  });