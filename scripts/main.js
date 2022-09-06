let popup = document.querySelector('.popup');
let userNameInput = document.querySelector('.popup__input_name_value');
let userJobInput = document.querySelector('.popup__input_about_value');
let userName = document.querySelector('.profile__info-title');
let userJob = document.querySelector('.profile__info-subtitle');
let popupCloseButton = document.querySelector('.popup__close');
let profileEditButton = document.querySelector('.profile__edit-btn');
let popupForm = document.querySelector('.popup__container');

function openPopup() {
  popup.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

profileEditButton.addEventListener("click", openPopup);

popupCloseButton.addEventListener("click", closePopup);

popupForm.addEventListener("submit", function changeInfo(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;
  closePopup();
});










