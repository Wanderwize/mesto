
let showPopup = document.querySelector('.popup');
let popupOpen = document.querySelectorAll('.profile__edit-btn')[0];
let changeName = document.querySelector('.popup__input_firstname');
let changeLast = document.querySelector('.popup__input_lastname');
let userName = document.querySelector('.profile__info-title');
let userLastname = document.querySelector('.profile__info-subtitle');
let saveInfo = document.querySelector('.popup__save-btn');
let closePopup = document.querySelector('.popup__close')

popupOpen.addEventListener("click", function open() {
  //showPopup.style.visibility = 'visible';
  //showPopup.style.opacity = '1';
  showPopup.classList.add('popup__open');


});

closePopup.addEventListener("click", function closed() {
  //showPopup.style.visibility = 'hidden';
  //showPopup.style.opacity = '0';
  showPopup.classList.remove('popup__open');

});


saveInfo.addEventListener("click", function changeInfo(evt) {
  evt.preventDefault();

  userName.innerHTML = `<h1 class="profile__info-title">${changeName.value}</h1>`;
  userLastname.innerHTML = `<h2 class="profile__info-subtitle">${changeLast.value}</h2>`;
  showPopup.classList.remove('popup__open');
});










