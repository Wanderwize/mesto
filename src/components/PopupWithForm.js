import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, { submit }) {
    super(popupSelector)
    this._submit = submit;
    this._forms = this._popup.querySelector('.popup__form');
    this._inputArray = this._popup.querySelectorAll('.popup__input');
    this._button = this._popup.querySelector('.popup__save-btn');
    this._submitEvtHandler = this._submitEvtHandler.bind(this);
   
  }

  _getInputValues() {
    const data = {};
    this._inputArray.forEach(input => {
      data[input.name] = input.value;
    });

    return data;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = 'Загрузка...';
    } else {
      this._button.textContent = 'Удалить'
    }
  }

  _submitEvtHandler(evt) {
    evt.preventDefault();
    this._submit(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._forms.addEventListener('submit', this._submitEvtHandler)
    this._button.textContent = 'Сохранить'

  }

  close() {
    super.close();
    this._forms.reset();

  }


}
