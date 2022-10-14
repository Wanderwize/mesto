const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupCard = document.querySelector('.popup_add-card')
const userNameInput = document.querySelector('.popup__input_name_value');
const userJobInput = document.querySelector('.popup__input_about_value');
const userName = document.querySelector('.profile__info-title');
const userJob = document.querySelector('.profile__info-subtitle');
const editProfileCloseButton = document.querySelector('.popup__close-edit');
const profileEditButton = document.querySelector('.profile__edit-btn');
const formEditProfile = document.querySelector('.popup__container-edit');
const formAddCard = document.querySelector('.popup__container-add');
const cardsContainer = document.querySelector('.elements');
const addCardButton = document.querySelector('.profile__add-btn');
const popupAddCloseButton = document.querySelector('.popup__close-card');
const closeImageButton = document.querySelector('.image-popup__close');
const popupImage = document.querySelector('.image-popup');
const page = document.querySelector('.page')
const popup = document.querySelector('.popup')
const profileContainer = document.querySelector('.profile__info')
const editProfileSaveButton = popupEditProfile.querySelector('.popup__save-btn')

document.addEventListener('mousedown', function (evt) {
  if (evt.target.classList.contains('popup_opened') && evt.button == 0) {
    closePopup(evt.target)
    console.log('еще счетчик нажатий')
  }
})

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
    console.log('счетчик нажатий')
  }
}

function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc)
};

function closePopup(item) {
  document.removeEventListener('keydown', closePopupByEsc)
  item.classList.remove('popup_opened');
};

popupAddCloseButton.addEventListener("click", function () {
  closePopup(popupCard)
});

addCardButton.addEventListener("click", function () {
  openPopup(popupCard)
  document.forms.add.reset()
});

editProfileCloseButton.addEventListener("click", function () {
  closePopup(popupEditProfile)
});

closeImageButton.addEventListener('click', function () {
  closePopup(popupImage)
});

profileEditButton.addEventListener("click", function () {
  openPopup(popupEditProfile);
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
  editProfileSaveButton.removeAttribute('disabled')
  editProfileSaveButton.classList.remove('popup__save-btn_unactive')
});

formEditProfile.addEventListener("submit", function changeInfo(evt) {
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

function likeCard(evt) {
  evt.target.classList.toggle('card__like')
};

function deleteCard(evt) {
  evt.target.closest('.card').remove()
}

function openImage() {
  document.querySelector('.image-popup').classList.add('popup_opened')
  document.querySelector('.image-popup__window').src = event.currentTarget.closest('.card__image').src
  document.querySelector('.image-popup__subtitle').textContent = event.currentTarget.closest('.card__image').alt
  document.addEventListener('keydown', closePopupByEsc)
};

const inputCardName = document.querySelector('.popup__input_place_value');
const inputCardLink = document.querySelector('.popup__input_link_value')
const cardTemplate = document.querySelector('#card__template').content;

function renderInitialCards() {
  initialCards.forEach(function (item) {
    renderCard(item.name, item.link)
  })
}

function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector('.card__name-title').textContent = name;
  cardElement.querySelector('.card__like').addEventListener('click', likeCard);
  cardElement.querySelector('.card__trash').addEventListener('click', deleteCard);
  cardImage.addEventListener('click', openImage)
  return cardElement;
};

function renderCard(name, link) {
  cardsContainer.prepend(createCard(name, link));
}

formAddCard.addEventListener('submit', function (evt) {
  evt.preventDefault()
  renderCard(inputCardName.value, inputCardLink.value)
  closePopup(popupCard)
})

renderInitialCards();
