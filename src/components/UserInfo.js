export class UserInfo {
  constructor(userInfoSelector) {
    this._userInfoSelector = userInfoSelector
    this._userName = this._userInfoSelector.querySelector('.profile__info-title')
    this._userJob = this._userInfoSelector.querySelector('.profile__info-subtitle')
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
