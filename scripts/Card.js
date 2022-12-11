import { popupShowCard, bigShowImageCard, showNameBigImage } from './constants.js';

export default class Card {
    constructor(data, templateSelector, openPopup) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
    }

    //метод клонирования разметки из темплейта
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector)
        .content.querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    //метод like
    _likeHandler = () => {
        this._likeButtonCard = this._element.querySelector('.element__like-button');
        this._likeButtonCard.addEventListener('click', () => {
          this._likeButtonCard.classList.toggle('element__like-button-active');
      });
    };

    //метод удаления
    _deleteHandler = () => {
        this._deleteButtonCard = this._element.querySelector('.element__trash-button');
        this._deleteButtonCard.addEventListener('click', () => {
          this._deleteButtonCard.closest('.element').remove();
      });
    }

    //демонстрация картинки
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

    //метод который навешивает все другие методы
    _setEventListeners = () => {
        this._likeHandler();
        this._deleteHandler();
        this._showImageCardHandler();
    }

    //метод создания готовой карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
      }
}