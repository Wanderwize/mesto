export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._handleCardClick = handleCardClick
    this._data = data
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector
    this._cards = this._element
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)

    return cardElement;
  }

  setLike() {
    this._cardLike.classList.toggle('card__like');
  }

  _setEventListeners() {
    this._element = this._getTemplate()
    this._cardLike = this._element.querySelector('.card__like_active')
    this._cardImage = this._element.querySelector('.card__image')
    this._cardImage.addEventListener('click', () => this._handleCardClick(this.data));
    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this.deleteCard()
    });
    this._cardLike.addEventListener('click', () => {
      this.setLike()
    })

  }

  deleteCard() {
    this._element.remove()
    this._element = null;
  }

  createCard() {
    this._setEventListeners()
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__name-title').textContent = this._name;

    return this._element;
  }
}



