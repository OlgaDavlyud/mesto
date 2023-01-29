export default class UserInfo {
    constructor({ nameProfile, jobProfile, avatarProfile }) {
        this._nameProfile= nameProfile;
        this._jobProfile = jobProfile;
        this._avatarProfile = avatarProfile;
    }

    // Функция получения данных
    getUserInfo() {
     const userData = {
        name: this._nameProfile.textContent,
        about: this._jobProfile.textContent
     };
     return userData;
    }

    // Функция замены данных
    setUserInfo(data) {
        this._nameProfile.textContent = data.name;
        this._jobProfile.textContent = data.about;
        this._avatarProfile.src = data.avatar;
        this._id = data._id;
    }
}