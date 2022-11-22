import {Popup} from './Popup.js';
import { FormValidator } from './FormValidator.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._image = this._popupSelector.querySelector('.image-popup__window')
    this._title = this._popupSelector.querySelector('.image-popup__subtitle')

  }

  open(data) {
super.open()
    this._image.src = data.link
    this._image.alt = data.name
    this._title.textContent = data.name

    }





}
