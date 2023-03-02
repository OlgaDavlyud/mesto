export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    // Метод проверки
    _checkReponse(res) {
        if(res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`)
    }

    // Запрос получения данных пользователя с сервера
    getInitialUserData() {
        return fetch (`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkReponse);
    }

    // Запрос получения карточек с сервера
    getInitialCards() {
        return fetch (`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkReponse);
    }

    // Запрос изменения данных пользователя
    changeUserData(data) {
        return fetch (`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
              name: data.name,
              about: data.about,
            })
        })
        .then(this._checkReponse);
    }

    // Запрос добавления карточки
    addCard(data) {
        return fetch (`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            })
        })
        .then(this._checkReponse);
    }

    // Запрос удаления карточки
    deleteCard(id) {
        return fetch (`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkReponse);
    }

    // Запрос установки лайка
    setLike(id) {
        return fetch (`${this._baseUrl}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(this._checkReponse);
    }

    // Запрос снятия лайка
    deleteLike(id) {
        return fetch (`${this._baseUrl}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkReponse);
    }

    // Запрос обновления аватара
    setNewAvatar(data) {
        return fetch (`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
        .then(this._checkReponse);
    }
}