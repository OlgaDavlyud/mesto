export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    _checkReponse(res) {
        if(res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getInitialUserData() {
        return fetch (this._url, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkReponse);
    }

    getInitialCards() {
        return fetch (this._url, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkReponse);
    }

    changeUserData(data) {
        return fetch (this._url, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data,
                about: data})
        })
        .then(this._checkReponse);
    }

    addCard(data) {
        return fetch (this._url, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
        .then(this._checkReponse);
    }

    deleteCard(id) {
        return fetch (`${this._url}${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkReponse);
    }
}