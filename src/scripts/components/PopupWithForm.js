import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._submitFormHandler = this._submitFormHandler.bind(this);
        this._inputList = this._form.querySelectorAll('.popup__input');
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
        this.close();
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
}