let popup = document.querySelector('.popup');
let changeName = document.querySelector('.popup__input_firstname');
let userJobInput = document.querySelector('.popup__input_lastname');
let userNameInput = document.querySelector('.profile__info-title');
let userJob = document.querySelector('.profile__info-subtitle');
let popupCloseButton = document.querySelector('.popup__close')

function openPopup() {
  popup.classList.add('popup__open');
};

document.querySelector('.profile__edit-btn').addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove('popup__open');
};

popupCloseButton.addEventListener("click", closePopup);

document.querySelector('.popup__save-btn').addEventListener("click", function changeInfo(evt) {
  evt.preventDefault();
  userNameInput.textContent = `${changeName.value}`;
  userJob.textContent = `${userJobInput.value}`;
  popup.classList.remove('popup__open');
});










