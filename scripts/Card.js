import { popupShowCard, bigShowImageCard, showNameBigImage } from './constants.js';

export default class Card {
    constructor(data, templateSelector, openPopup) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector)
        .content.querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    _likeHandler = () => {
        this._likeButtonCard = this._element.querySelector('.element__like-button');
        this._likeButtonCard.addEventListener('click', () => {
          this._likeButtonCard.classList.toggle('element__like-button-active');
      });
    };

    _deleteHandler = () => {
        this._deleteButtonCard = this._element.querySelector('.element__trash-button');
        this._deleteButtonCard.addEventListener('click', () => {
          this._deleteButtonCard.closest('.element').remove();
      });
    }

    _showImageCardHandler = () => {
        this._bigImage = this._element.querySelector('.element__image');
        this._bigImage.addEventListener('click', () => {
          this._bigImage.closest('.element');
          bigShowImageCard.src = this._link;
          bigShowImageCard.alt = this._name;
          showNameBigImage.textContent = this._name;
          this._openPopup(popupShowCard);
      });
    }

    _setEventListeners = () => {
        this._likeHandler();
        this._deleteHandler();
        this._showImageCardHandler();
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
      }
}

// Добавление, удаление и просмотр карточек

//Функция которая отрисовывает карточку
//const renderCard = (data) => {
//  const cardElement = createCard(data);
//  containerForCards.prepend(cardElement);
//};

//Отрисовка всех карточек из массива
//initialCards.forEach(renderCard);

//Функция добавления новой карточки
//const addNewCard = (event) => {
//  event.preventDefault();
//  const newData = {name: nameCardInput.value, link: linkImageInput.value};
//  renderCard(newData);
//  closePopup(popupAddElement)
//  newCardForm.reset();
//};

//Слушатель добавления новых карточек
//newCardForm.addEventListener('submit', addNewCard);
