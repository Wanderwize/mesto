const formElement = document.querySelector('.popup__form')
const inputElement = document.querySelector('.popup__input')

const showError = (formElement, inputElement, errorMessage, objects) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(objects.inputErrorClass);
  errorElement.textContent = errorMessage;
};
const hideError = (formElement, inputElement, objects) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(objects.inputErrorClass);
  errorElement.textContent = "";
};
const toggleInputErrorState = (formElement, inputElement, objects) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, objects);
  } else {
    hideError(formElement, inputElement, objects);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, objects) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, objects)
  } else {
    enableButton(buttonElement, objects)
  }
};

const disableButton = (buttonElement, objects) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(objects.inactiveButtonClass);
}
const enableButton = (buttonElement, objects) => {
  buttonElement.removeAttribute("disabled", false);
  buttonElement.classList.remove(objects.inactiveButtonClass);
}

const setEventListeners = (formElement, objects) => {
  const inputList = Array.from(
    formElement.querySelectorAll(objects.inputSelector)
  );
  const buttonElement = formElement.querySelector(objects.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      toggleInputErrorState(formElement, inputElement, objects);
      toggleButtonState(inputList, buttonElement, objects)
    });
  });
};

function enableValidation(objects) {
  const formsList = Array.from(document.querySelectorAll(objects.formSelector));
  formsList.forEach((formElement) => {
    setEventListeners(formElement, objects);
  });
}

const validationObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_unactive",
  inputErrorClass: "popup__input_type_error",
}

enableValidation(validationObject)
