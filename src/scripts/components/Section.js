export default class Section {
    constructor ({ items, renderer }, containerSelector, api) {
        // this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._api = api;
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems(items) {
        this._container.innerHTML = "";
        items.forEach(item => {
            this._renderer(item);
        })
    }
}