export default class Card {
    constructor(data, templateSelector, handleCardClick, handleTrashClick) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleTrashClick = handleTrashClick;
        // this._api = api;
        // this._id = data.id;
    }

    // Функция клонирования разметки из темплейта
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector)
        .content.querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    // Метод like
    _toggleLike = () => {
      this._likeButtonCard.classList.toggle('element__like-button-active');
    }

    // Функция like
    _setLikeHandler = () => {
        this._likeButtonCard = this._element.querySelector('.element__like-button');
        this._likeButtonCard.addEventListener('click', this._toggleLike);
    }

    // Метод удаления
    // _deleteCard = () => {
    //   this._deleteButtonCard.closest('.element').remove();
    // }

    // Функция удаления
    // _setDeleteHandler = () => {
    //     this._deleteButtonCard = this._element.querySelector('.element__trash-button');
    //     this._deleteButtonCard.addEventListener('click', this._deleteCard);
    // }

    // Метод открытия окна подтверждения
    _handleDeleteIconClick = () => {
      this._handleTrashClick(this._element);
    }

    // Функция открытия окна подтверждения для удаления карточки
    _setDeleteHandler = () => {
      this._deleteButtonCard = this._element.querySelector('.element__trash-button');
      this._deleteButtonCard.addEventListener('click', this._handleDeleteIconClick);
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

    // Функция, которая навешивает все другие методы
    _setEventListeners = () => {
        this._setLikeHandler();
        this._setDeleteHandler();
        this._setShowImageCardHandler();
    }

    // Функция создания готовой карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
      }
}