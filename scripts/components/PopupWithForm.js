import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._handelSubmitForm = this._handelSubmitForm.bind(this);
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues() {
        this._newCardValues = {};
        this._inputList.forEach(input => {
          this._newCardValues[input.name] = input.value;
        });
        return this._newCardValues;
    }

    _handelSubmitForm (evt) {
        evt.preventDefault();
        const formValues = this._getInputValues();
        this._submitForm(formValues);
        this.close();
        }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._handelSubmitForm);
    }

    close() {
        super.close();
        this._form.reset();
    }
}