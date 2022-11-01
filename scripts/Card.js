import { likeCard, deleteCard,  openImage } from './main.js' ;

export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector
  }

  _getTemplate() {
    const cardElement = document
    .querySelector('#card__template')
    .content
    .querySelector('.card')
    .cloneNode(true)

    return cardElement;
  }

  _setEventListeners() {
    this._element = this._getTemplate()
    this._element.querySelector('.card__like').addEventListener('click', likeCard);
    this._element.querySelector('.card__trash').addEventListener('click', deleteCard);
    this._element.querySelector('.card__image').addEventListener('click', openImage)

}

  generateCard() {
  this._setEventListeners()
  this._element.querySelector('.card__image').src = this._link;
  this._element.querySelector('.card__image').alt = this._name;
  this._element.querySelector('.card__name-title').textContent = this._name;
  document.querySelector('.elements').prepend( this._element)
  return this._element
  }

}



