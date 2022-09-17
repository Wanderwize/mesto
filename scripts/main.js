let popup = document.querySelector('.popup');
const popupCard = document.querySelector('.popup_add-card')
const userNameInput = document.querySelector('.popup__input_name_value');
const userJobInput = document.querySelector('.popup__input_about_value');
let userName = document.querySelector('.profile__info-title');
let userJob = document.querySelector('.profile__info-subtitle');
let popupCloseButton = document.querySelector('.popup__close');
let profileEditButton = document.querySelector('.profile__edit-btn');
let popupForm = document.querySelector('.popup__container');
const cardForm = document.querySelector('.popup__container-add');
const cardContiner = document.querySelector('.elements');
const addCardButton = document.querySelector('.profile__add-btn');
const popupAddCloseButton = document.querySelector('.popup__close-card');
const closeImageButton = document.querySelector('.image-popup__close');

function closeImagePopup() {
  closeImageButton.addEventListener('click', function () {
    document.querySelector('.image-popup').classList.remove('image-popup_opened')
  })
};

function openPopup() {
  popup.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

function openPopupCard() {
  popupCard.classList.add('popup_opened');
};

function closePopupCard() {
  popupCard.classList.remove('popup_opened');
};

popupAddCloseButton.addEventListener("click", closePopupCard);

addCardButton.addEventListener("click", openPopupCard);

profileEditButton.addEventListener("click", openPopup);

popupCloseButton.addEventListener("click", closePopup);

popupForm.addEventListener("submit", function changeInfo(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;
  closePopup();
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

cardForm.addEventListener("submit", function addCard(evt) {
  evt.preventDefault();
  let nameForm = document.querySelector('.popup__input_place_value');
  let linkForm = document.querySelector('.popup__input_link_value')
  const cardTemplate = document.querySelector('#card__template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = linkForm.value;
  cardElement.querySelector('.card__image').alt = linkForm.value;
  cardElement.querySelector('.card__name-title').textContent = nameForm.value;
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like');
  });

  closeImagePopup();

  cardElement.querySelector('.card__image').addEventListener('click', function (evt) {
    document.querySelector('.image-popup').classList.add('image-popup_opened')
    document.querySelector('.image-popup__window').src = linkForm.value;
    document.querySelector('.image-popup__subtitle').textContent = nameForm.value;
  });

  cardElement.querySelector('.card__trash').addEventListener('click', function (evt) {
    cardElement.remove();
  });

  cardContiner.prepend(cardElement);
  closePopupCard();
});

function baseCard(name, link) {
  const cardTemplate = document.querySelector('#card__template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = link;
  cardElement.querySelector('.card__name-title').textContent = name;
  cardElement.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like');
  });

  closeImagePopup();

  cardElement.querySelector('.card__trash').addEventListener('click', function (evt) {
    cardElement.remove();
  });
  cardElement.querySelector('.card__image').addEventListener('click', function (evt) {
    document.querySelector('.image-popup').classList.add('image-popup_opened')
    document.querySelector('.image-popup__window').src = link;
    document.querySelector('.image-popup__subtitle').textContent = name;
  });

  cardContiner.append(cardElement);
};

function arrayCards() {
  initialCards.forEach(function (item) {
    baseCard(item.name, item.link)
  })
};

arrayCards();





























