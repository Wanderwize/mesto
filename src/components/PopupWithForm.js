import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, { submit }) {
    super(popupSelector)
    this._submit = submit;
    this._forms = this._popup.querySelector('.popup__form');
    this._inputArray = this._popup.querySelectorAll('.popup__input');
    this._button = this._popup.querySelector('.popup__save-btn');
  }

  _getInputValues() {
    const data = {};
    this._inputArray.forEach(input => {
      data[input.name] = input.value;
    });

    return data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._forms.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submit(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._forms.reset();

  }


}
