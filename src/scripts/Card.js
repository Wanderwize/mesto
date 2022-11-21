export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._handleCardClick = handleCardClick
    this._data = data
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector
    this._container = document.querySelector('.elements')
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
    this._element.querySelector('.card__like_active').classList.toggle('card__like');
  }

  _setEventListeners() {
    this._element = this._getTemplate()
    this._element.querySelector('.card__image').addEventListener('click', () => this._handleCardClick(this.data));
    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this.deleteCard()
    });
    this._element.querySelector('.card__like_active').addEventListener('click', () => {
      this.setLike()
    })

  }

  deleteCard() {
    this._element.remove()
    this._element = null;
  }

  createCard() {

    this._setEventListeners()
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__name-title').textContent = this._name;

    return this._element;
  }

  generateCard(container) {
    const card = this.createCard()
    container.prepend(card);
  }

}



