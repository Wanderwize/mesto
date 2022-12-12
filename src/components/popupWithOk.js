
import {Popup} from './Popup.js';

export class PopupWithOk extends Popup {
  constructor(popupSelector, { submit }) {
    super(popupSelector);
    this._forms = this._popup.querySelector('.popup__form');
    this._submit = submit;
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    this._submit(this._data);
    this._forms.removeEventListener('submit',this._handleEscClose);
  }

  setEventListeners() {
    this._forms.addEventListener('submit', this._handleEscClose);
    super.setEventListeners();

  }

  open(data) {
    this._data = data;
    super.open();
  }
}
