import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, { submit }) {
    super(popupSelector)
    this._submit = submit;
    this._forms = this._popupSelector.querySelector('.popup__form');
    this._inputArray = this._popupSelector.querySelectorAll('.popup__input');
    this._button = this._popupSelector.querySelector('.popup__save-btn');
  }

  _getInputValues() {
    const inputValues = {};
    this._inputArray.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
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
