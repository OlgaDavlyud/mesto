export default class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    //метод клонирования разметки из темплейта
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector)
        .content.querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    //метод like
    _setLikeHandler = () => {
        this._likeButtonCard = this._element.querySelector('.element__like-button');
        this._likeButtonCard.addEventListener('click', () => {
          this._likeButtonCard.classList.toggle('element__like-button-active');
      });
    }

    //метод удаления
    _setDeleteHandler = () => {
        this._deleteButtonCard = this._element.querySelector('.element__trash-button');
        this._deleteButtonCard.addEventListener('click', () => {
          this._deleteButtonCard.closest('.element').remove();
      });
    }

    // //демонстрация картинки
    _setShowImageCardHandler = () => {
      this._imageElement = this._element.querySelector('.element__image');
      this._imageElement.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      })
    }

    //метод который навешивает все другие методы
    _setEventListeners = () => {
        this._setLikeHandler();
        this._setDeleteHandler();
        this._setShowImageCardHandler();
    }

    //метод создания готовой карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
      }
}