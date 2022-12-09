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
        this._bigImage.addEventListener('click', (elementDataToShow) => {
          this._bigImage.closest('.element');
          elementDataToShow.src = this._link;
          elementDataToShow.alt = this._name;
          elementDataToShow.textContent = this._name;
          this._openPopup();
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

//const containerForCards = document.querySelector('.elements');
//const cardTemplate = document.querySelector('.card-template');

//const bigShowImageCard = popupShowCard.querySelector('.popup__show-image');
//const showNameBigImage = popupShowCard.querySelector('.popup__show-name');
//const showAltBigImage = popupShowCard.querySelector('.popup__show-image');

//const createCard = (data) => {
//  const cardElement = cardTemplate.content.cloneNode(true);
//  const nameCard = cardElement.querySelector('.element__title').textContent = data.name;
//  const imageElement = cardElement.querySelector('.element__image');
//  imageElement.src = data.link;
//  imageElement.alt = data.name;
//  setEventListeners(cardElement);
//  return cardElement;
//};

//Функция удаления карточки
//const deleteHandler = (event) => {
//    const evtTarget = event.target;
//    const currentElement = evtTarget.closest('.element');
//    currentElement.remove();
//};

//Функция лайка
//const likeHandler = (event) => {
//  const evtTarget = event.target;
//  const currentElement = evtTarget.closest('.element');
//  evtTarget.classList.toggle('element__like-button-active');
//};

//Функция которая вешает слушатели на карточку
//const setEventListeners = (cardElement) => {
//  const deleteButtonCard = cardElement.querySelector('.element__trash-button');
//  deleteButtonCard.addEventListener('click', deleteHandler);
//
//  const likeButtonCard = cardElement.querySelector('.element__like-button');
//  likeButtonCard.addEventListener('click', likeHandler);
//
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

//Слушатель закрытия просмотра карточек
//popupButtonCloseShowCard.addEventListener('click', function(){
//  closePopup(popupShowCard);
//});