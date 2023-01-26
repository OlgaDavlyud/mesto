export default class Popup {
    constructor (popup) {
        this._popup = popup;
        this._closePopupButton = this._popup.querySelector('.popup__button-close');
        this.close = this.close.bind(this);
    }

    // Функция открытия
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    // Функция закрытия
    close() {
        console.log(this._popup);
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    // Функция закрытия по Esc
    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
          this.close();
        }
    }

    // Функция закрытия по кнопке и overlay
    _handleClickClose = (evt) => {
        if (evt.target.classList.contains('popup_opened') || (evt.target.classList.contains('popup__button-close'))) {
            this.close();
        }
    }

    // Функция, которая навешивает слушатели для закрытия
    setEventListeners() {
        this._popup.addEventListener('mousedown', this._handleClickClose);
    }
}