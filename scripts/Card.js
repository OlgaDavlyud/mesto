import {initialCards} from './cards.js';

export default class Card {
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

    _likeHandler = () => {
      const likeButtonCard = this._element.querySelector('.element__like-button');
      likeButtonCard.addEventListener('click', () => {
        likeButtonCard.classList.toggle('element__like-button-active');
      });
    };

    _deleteHandler = () => {
      const deleteButtonCard = this._element.querySelector('.element__trash-button');
      deleteButtonCard.addEventListener('click', () => {
        deleteButtonCard.closest('.element').remove();
      });
    }

    _showImageCardHandler = () => {
      const bigImage = this._element.querySelector('.element__image');
      bigImage.addEventListener('click', () => {
        bigImage.closest('.element');
      })
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

initialCards.forEach((item) => {
    const card = new Card(item, '.card-template');
    const cardElement = card.generateCard();

    document.querySelector('.elements').prepend(cardElement);
  });