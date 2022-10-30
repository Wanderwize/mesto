const formElements = document.querySelector('.popup__form')
const inputElement = document.querySelector('.popup__input')

const validationObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_unactive",
  inputErrorClass: "popup__input_type_error",
}

class FormValidator {
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

function enableUserValidation(objects, formElement) {
  const formUser = new FormValidator(objects, formElement)
  const validationElement = formUser.enableValidation()
}
function enableImageValidation(objects, formElement) {
  const formImage = new FormValidator(objects, formElement)
  const validationElement = formImage.enableValidation()
}
const popupFormAdd = document.querySelector('.popup__form-add');
const popupFormUser = document.querySelector('.popup__form-user');

enableUserValidation(validationObject, popupFormAdd)
enableUserValidation(validationObject, popupFormUser)
