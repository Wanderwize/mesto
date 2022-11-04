import { deleteCard, openImage } from './utils.js';

export class Card {
  constructor(name, link, templateSelector, button) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)

    return cardElement;
  }

  _setEventListeners() {
    this._element = this._getTemplate()
    this.setLike()
    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this.deleteCard()
    });
    this._element.querySelector('.card__image').addEventListener('click', openImage)

  }

  setLike() {
    const likeButton = this._element.querySelector('.card__like')
    this._element.querySelector('.card__like').addEventListener('click', () => {
      likeButton.classList.toggle('card__like')
    });
  }

  deleteCard() {
    this._element.remove('card')
  }

  _assignValue() {

    this._setEventListeners()
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__name-title').textContent = this._name;
  }

  generateCard() {
    this._assignValue()
    document.querySelector('.elements').prepend(this._element)
  }

}



