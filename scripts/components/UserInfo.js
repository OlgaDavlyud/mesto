export default class UserInfo {
    constructor({ nameProfile, jobProfile }) {
        this._nameProfile= nameProfile;
        this._jobProfile = jobProfile;
    }

    getUserInfo() {
     const userData = {
        name: this._nameProfile.textContent,
        job: this._jobProfile.textContent
     };
     return userData;
    }

    setUserInfo(data) {
        this._nameProfile.textContent = data.name;
        this._jobProfile.textContent = data.job;
    }
}