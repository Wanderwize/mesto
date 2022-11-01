export class FormValidator {
  constructor(objects, formElement) {
    this._objects = objects;
    this._formElements = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(objects.inputSelector));
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
      this._disableButton()
    } else {
      this._enableButton()
    }
  };

  _disableButton = () => {
    this._buttonElement.setAttribute("disabled", true);
    this._buttonElement.classList.add(this._objects.inactiveButtonClass);
  }
  _enableButton = () => {

    this._buttonElement.removeAttribute("disabled");
    this._buttonElement.classList.remove(this._objects.inactiveButtonClass);
  }

  _setEventListeners() {
    this._buttonElement = this._formElements.querySelector(this._objects.submitButtonSelector);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleButtonState();
        this._toggleInputErrorState(inputElement)
      });
    });
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}




