

export class Card {
  constructor(data, templateSelector, ownerId, { setLike, deleteLike, handleCardClick, deleteCard }) {
    this._handleCardClick = handleCardClick
    this._deleteCard = deleteCard;
    this._data = data
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector
    this._cards = this._element
    this._setLike = setLike;
    this._deleteLike = deleteLike;
    this._ownerId = ownerId;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true)

    return cardElement;
  }

  delete(item) {
    item.remove();
    item = null
  }

  setLike(data) {
    this._setLike(data)
  }

  setDislike(data) {
    this._deleteLike(data)
  }

  likeActive() {
    this._cardLike.classList.remove('card__like');
  }

  likeUnactive() {
    this._cardLike.classList.add('card__like');
  }

  _checkLike() {
    this._data.likes.forEach((owner) => {
      if (owner._id === this._ownerId) {
        this.setLike(this._data)
      }
    })
  }

  _setEventListeners() {
    this._element = this._getTemplate()
    this._cardLike = this._element.querySelector('.card__like_active')
    this._cardLikeCount = this._element.querySelector('.card__like-counter')
    this._cardImage = this._element.querySelector('.card__image')
    this._cardImage.addEventListener('click', () => this._handleCardClick(this.data));
    this._element.querySelector('.card__trash').addEventListener('click', this._deleteCard)

    this._cardLike.addEventListener('click', () => {
      if (this._cardLike.classList.contains('card__like')) {
        this.setLike(this._data)
      } else {
        this.setDislike(this._data)
      }
    })
  }

  deleteCard() {
    this._element.remove()
    this._element = null;
  }

  checkOwner() {
    if (this._data.owner._id !== this._ownerId) {
      this.delete(this._cardTrash)
    }
  }

  setLikeCounter(data) {
    this._likeCounter.textContent = String(data.likes.length)
  }

  createCard() {
    this._setEventListeners()
    this._likeCounter = this._element.querySelector('.card__like-counter')
    this._cardTrash = this._element.querySelector('.card__trash')
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__name-title').textContent = this._name;
    this.setLikeCounter(this._data)
    this.checkOwner(this._data)
    this._checkLike()
    return this._element;
  }
}



