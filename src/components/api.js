export class Api {
  constructor() {

  }

  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-54/users/me', {
      method: 'GET',
      headers: {
        authorization: '3c1df54f-ccd1-445f-a430-a8f888e610a5',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  getCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
      method: 'GET',
      headers: {
        authorization: '3c1df54f-ccd1-445f-a430-a8f888e610a5',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  pushUserInfo(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-54/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '3c1df54f-ccd1-445f-a430-a8f888e610a5',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: data.name, about: data.about }),
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  pushNewCard(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
      method: 'POST',
      headers: {
        authorization: '3c1df54f-ccd1-445f-a430-a8f888e610a5',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  deleteCard(data) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${data._id}`, {
      method: 'DELETE',
      headers: {
        authorization: '3c1df54f-ccd1-445f-a430-a8f888e610a5',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  setLike(data) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${data._id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '3c1df54f-ccd1-445f-a430-a8f888e610a5',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  deleteLike(data) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/likes/${data._id}`, {
      method: 'DELETE',
      headers: {
        authorization: '3c1df54f-ccd1-445f-a430-a8f888e610a5',
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  setUserAvatar(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-54/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: '3c1df54f-ccd1-445f-a430-a8f888e610a5',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
  }

  getInitialData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }





}
