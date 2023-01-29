import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        // this._submitForm = submitForm;
        // this._form = this._popup.querySelector('.popup-form');
        // this._submitFormHandler = this._submitFormHandler.bind(this);
        // this._submitButton = this._popup.querySelector('.popup__button-submit');
    }

    // _submitFormHandler (evt, card) {
    //     evt.preventDefault();
    //     card.deleteCard();
    // }

    // setEventListeners() {
    //     super.setEventListeners();
    //     this._form.addEventListener('submit', this._submitFormHandler);
    // }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = value.textContent;
        }
    }
}