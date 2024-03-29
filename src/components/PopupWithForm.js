import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._submitFormHandler = this._submitFormHandler.bind(this);
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._submitButton = this._popup.querySelector('.popup__button-submit');
        this._baseButtonText = this._submitButton.textContent;
    }

    // Функция сборки данных с input
    _getInputValues() {
        this._newCardValues = {};
        this._inputList.forEach(input => {
          this._newCardValues[input.name] = input.value;
        });
        return this._newCardValues;
    }

    // Функция обработчик формы отправки
    _submitFormHandler (evt) {
        evt.preventDefault();
        const formValues = this._getInputValues();
        this._submitForm(formValues);
    }

    // Функция, которая навешивает слушатель
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitFormHandler);
    }

    // Функция закрытия
    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = this._baseButtonText;
        }
    }
}