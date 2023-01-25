export default class Section {
    constructor ({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    // Метод сохранения
    // _saveCard = (data) => {
    //     this._api
    //     .addCards({name: data})
    //     .then((data) => this._getTemplate(data))
    //     .catch((err) => console.log(err));
    // }

    renderItems() {
        this._renderedItems.forEach((data) => {
            this._renderer(data);
        })
    }
}