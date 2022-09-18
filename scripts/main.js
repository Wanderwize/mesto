const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupCard = document.querySelector('.popup_add-card')
const userNameInput = document.querySelector('.popup__input_name_value');
const userJobInput = document.querySelector('.popup__input_about_value');
const userName = document.querySelector('.profile__info-title');
const userJob = document.querySelector('.profile__info-subtitle');
const popupCloseButton = document.querySelector('.popup__close');
const profileEditButton = document.querySelector('.profile__edit-btn');
const popupForm = document.querySelector('.popup__container');
const cardForm = document.querySelector('.popup__container-add');
const cardContiner = document.querySelector('.elements');
const addCardButton = document.querySelector('.profile__add-btn');
const popupAddCloseButton = document.querySelector('.popup__close-card');
const closeImageButton = document.querySelector('.image-popup__close');



function openPopup(item) {
  item.classList.add('popup_opened');
};

function closePopup(item) {
  item.classList.remove('popup_opened');
};

popupAddCloseButton.addEventListener("click", function() {
  closePopup(popupCard)
});

addCardButton.addEventListener("click", function() {
  openPopup(popupCard)
});

profileEditButton.addEventListener("click", function() {
  openPopup(popupEditProfile)
});

popupCloseButton.addEventListener("click", function() {
  closePopup(popupEditProfile)
});

profileEditButton.addEventListener("click", function () {
  openPopup(popupEditProfile);
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;

});

document.querySelector('.popup__save-btn').addEventListener('click', closePopup(popupCard));

popupForm.addEventListener("submit", function changeInfo(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;
  closePopup(popupEditProfile);
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



const nameForm = document.querySelector('.popup__input_place_value');
const linkForm = document.querySelector('.popup__input_link_value')



function createCard(name, link) {
  const cardTemplate = document.querySelector('#card__template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;
  cardElement.querySelector('.card__name-title').textContent = name;
  cardElement.querySelector('.card__like').addEventListener('click', likeCard);
  cardElement.querySelector('.card__trash').addEventListener('click', deleteCard);
  closeImagePopup();
  cardElement.querySelector('.card__image').addEventListener('click', openImage)
  cardContiner.prepend(cardElement);


};

function addCard() {
  cardForm.addEventListener('submit', function (evt) {
    evt.preventDefault()
    createCard(nameForm.value, linkForm.value)
    nameForm.value = ''
    linkForm.value = ''
    closePopup(popupCard)
  })
}

function renderInitialCards() {
  initialCards.forEach(function (item) {
    createCard(item.name, item.link)
  })
};
function likeCard(evt) {
  evt.target.classList.toggle('card__like')
};

function deleteCard(evt) {
  evt.target.closest('.card').remove()
}

function openImage() {
  document.querySelector('.image-popup').classList.add('image-popup_opened')
  document.querySelector('.image-popup').classList.remove('popup')
  document.querySelector('.image-popup__window').src = event.currentTarget.closest('.card__image').src
  document.querySelector('.image-popup__subtitle').textContent = event.currentTarget.closest('.card__image').alt

};

function closeImagePopup() {
  closeImageButton.addEventListener('click', function () {
    document.querySelector('.image-popup').classList.add('popup')
  })
};

renderInitialCards();
addCard();
