export default class Card {
    constructor(data, templateSelector, handleCardClick, userId, handleLikeClick, handleTrashClick) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleTrashClick = handleTrashClick;
        this._likes = data.likes;
        this._id = data._id;
        this._owner = data.owner._id;
        this._userId = userId;
        this._handleLikeClick = handleLikeClick;
    }

    // Функция клонирования разметки из темплейта
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector)
        .content.querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    // Метод проверки лайка
    isLiked() {
      return this._likes.find(user => user._id === this._userId);
    }

    // Метод установки лайка
    _changeLikeQuantity(likeButtonCard) {
      if (this.isLiked()) {
        likeButtonCard.classList.add('element__like-button-active');
      } else {
        likeButtonCard.classList.remove('element__like-button-active');
      }
    }

    // Метод подсчета лайков
    countLikes(likes) {
      this._likes = likes;
      this._likeCounter = this._element.querySelector('.element__like-counter');
      this._likeCounter.textContent = likes.length || '0';
      this._changeLikeQuantity(this._likeButtonCard);
    }

    // Метод для проверки и установки значка удаления
    _handleDeleteIconClick() {
      this._deleteButtonCard = this._element.querySelector('.element__trash-button');
      if (this._owner === this._userId) {
        this._deleteButtonCard.addEventListener('click', () => this._handleTrashClick(this._id));
      } else {
        this._deleteButtonCard.remove();
      }
    }

    // Метод удаления карточки
    deleteСard = () => {
      this._element.remove();
    }

    // Метод демонстрации картинки
    _handleImageClick = () => {
      this._handleCardClick(this._name, this._link);
    }

    // Функция демонстрации картинки
    _setShowImageCardHandler = () => {
      this._imageElement = this._element.querySelector('.element__image');
      this._imageElement.addEventListener('click', this._handleImageClick);
    }

    // Функция, которая навешивает все методы
    _setEventListeners = () => {
      this._likeButtonCard = this._element.querySelector('.element__like-button');
      this._likeButtonCard.addEventListener('click', () => this._handleLikeClick(this._id));
      this._setShowImageCardHandler();
      this._handleDeleteIconClick();
    }

    // Функция создания готовой карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._imageElement = this._element.querySelector('.element__image');
        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        this.countLikes(this._likes);
        this.deleteСard();

        return this._element;
    }
}