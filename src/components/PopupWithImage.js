import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup__show-image');
        this._description = this._popup.querySelector('.popup__show-name');
    }

    open(name, link) {
        super.open();
        this._image.src = link;
        this._image.alt = name;
        this._description.textContent = name;
    }
}