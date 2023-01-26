import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
    constructor(popup) {
        super(popup);
        this._submitButton = this._popup.querySelector('.popup__button-submit');
    }

    // Функция обработчик подтверждения удаления
    _submitDelete = (evt) => {
        evt.preventDefault();
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener('submit', this._submitDelete);
    }
}