export default class Section {
    constructor ({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    _createCard (data) {
        const card = new Card(data, '.card-template', handleCardClick, handleTrashClick);
        return card.generateCard();
    }

    setItems(data) {
        this._renderedItems = data
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this._renderedItems.forEach((data) => {
            this._renderer(data);
        })
    }
}