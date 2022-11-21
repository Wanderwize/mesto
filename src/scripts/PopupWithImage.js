import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._image = document.querySelector('.image-popup__window')
    this._title = document.querySelector('.image-popup__subtitle')

  }

  open(data) {
super.open()
    this._popupSelector.classList.add('popup_opened');
    this._image.src = data.link
    this._image.alt = data.name
    this._title.textContent = data.name

    }

    close() {
      document.removeEventListener('keydown', this._handleEscClose)
      this._popupSelector.classList.remove('popup_opened');
    }




}
