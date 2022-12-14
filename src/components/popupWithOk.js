
import { Popup } from './Popup.js';

export class PopupWithOk extends Popup {
  constructor(popupSelector, { submit}) {
    super(popupSelector);
    this._forms = this._popup.querySelector('.popup__form');
    this._submit = submit;
    this._submitEvtHandler = this._submitEvtHandler.bind(this);
    this._button = this._popup.querySelector('.popup__save-btn');

  }

  _submitEvtHandler(evt) {
    evt.preventDefault()
    this._submit(this._data);
  }



  textChanger() {
    this._button.textContent = 'Удалить'
  }



  setEventListeners() {

    this._forms.addEventListener('submit', this._submitEvtHandler);
    super.setEventListeners();
  }

  open(data) {

    this._data = data;
    super.open();
  }
}
