export class UserInfo {
  constructor() {
    this._userName = document.querySelector('.profile__info-title')
    this._userJob = document.querySelector('.profile__info-subtitle')
  }

  getUserInfo() {
    this._userInfo = {
      name: this._userName.textContent,
      about: this._userJob.textContent,
    }
    return this._userInfo


  }

  setUserInfo({ name, about }) {
    this._userName.textContent = name;
    this._userJob.textContent = about;
  }
}
