export class FormValidator {
  constructor(objects, formElement) {
    this._objects = objects;
    this._formElements = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(objects.inputSelector));
    this._button = this._formElements.querySelector(this._objects.submitButtonSelector);
  }

  _showError = (inputElement, errorMessage) => {
    const errorElement = this._formElements.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._objects.inputErrorClass);
    errorElement.textContent = errorMessage;
  };

  _hideError = (inputElement) => {
    const errorElement = this._formElements.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._objects.inputErrorClass);
    errorElement.textContent = "";
  };

  _toggleInputErrorState(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButton()
    } else {
      this._enableButton()
    }
  };

  disableButton = () => {
    this._button.setAttribute("disabled", true);
    this._button.classList.add(this._objects.inactiveButtonClass);
  }
  _enableButton = () => {
    this._button.removeAttribute("disabled");
    this._button.classList.remove(this._objects.inactiveButtonClass);
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState();
        this._toggleInputErrorState(inputElement)
      });
    });

  }

  cleanError() {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}




