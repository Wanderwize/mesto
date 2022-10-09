// const formAdd = document.forms.add;
// const formUser = document.forms.user;
// const addButton = document.querySelector('.popup__save-btn')
// const popupInput = document.querySelectorAll('.popup__input')

// // function enableValidation()

// // enableValidation({addButton: '.popup__save-btn',

// // })

// formUser.addEventListener('input', function (evt) {
//   if (!evt.target.validity.valid) {
//     evt.target.classList.add('popup__input_type_error')
//   } else evt.target.classList.remove('popup__input_type_error')
// })

// formAdd.addEventListener('input', function (evt) {
//   if (!evt.target.validity.valid) {
//     evt.target.classList.add('popup__input_type_error')
//   } else evt.target.classList.remove('popup__input_type_error')

// })

// formUser.addEventListener('input', function (evt) {
//   validateButton(evt)
//   isValidField(evt.target)
// });

// formUser.addEventListener('submit', function (evt) {
//   validateButton(evt)
// });

// formAdd.addEventListener('input', function (evt) {
//   validateButton(evt)
//   isValidField(evt.target)
// });

// formAdd.addEventListener('submit', function (evt) {
//   validateButton(evt)
// });

// function setSubmitButtonState(button, state) {
//   if (state) {
//     button.classList.remove('popup__save-btn_unactive')
//     button.removeAttribute('disabled')
//   }
//   else {
//     button.classList.add('popup__save-btn_unactive')
//     button.setAttribute('disabled', true)
//   }
// }

// function validateButton(evt) {
//   const currentForm = evt.currentTarget;
//   const addButton = currentForm.querySelector('.popup__save-btn');
//   if (currentForm.checkValidity()) {
//     setSubmitButtonState(addButton, true);
//   } else {
//     setSubmitButtonState(addButton, false);
//   }
// }

// function isValidField(input) {
//   const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
//   errorSpan.textContent = input.validationMessage;
// }

const formElement = document.querySelector('.popup__form')
const inputElement = document.querySelector('.popup__input')
// const errorElement = document.querySelector('.error')
//const buttonElement = document.querySelector('.popup__save-btn')
//const inputList = Array.from(document.querySelectorAll('.popup__input'))

const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_unactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "`#${input.id}-error`"
};

const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(enableValidation.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(enableValidation.inputErrorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(enableValidation.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled", false);
    buttonElement.classList.remove(enableValidation.inactiveButtonClass);
  }
};

const setEventListeners = (formElement) => {
  buttonState(formElement);
};

function buttonState(formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(enableValidation.inputSelector)
  );
  const buttonElement = formElement.querySelector(enableValidation.submitButtonSelector);
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

function isValid() {
  const formList = Array.from(document.querySelectorAll(enableValidation.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

isValid();

