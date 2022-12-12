export class UserInfo {
  constructor(name, about, avatar) {

    this._name = document.querySelector(name)
    this._about = document.querySelector(about)
    this._avatar = document.querySelector('.profile__avatar_image')
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return data;
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar
      }



  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this.setUserAvatar(data)
  }
}

