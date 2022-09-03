

let likeButton = document.querySelectorAll('.card__like')[0];
console.log(likeButton);
let likeButton1 = document.querySelectorAll('.card__like')[1];
console.log(likeButton1);
let likeButton2 = document.querySelectorAll('.card__like')[2];
console.log(likeButton2);
let likeButton3 = document.querySelectorAll('.card__like')[3];
console.log(likeButton3);
let likeButton4 = document.querySelectorAll('.card__like')[4];
console.log(likeButton4);
let likeButton5 = document.querySelectorAll('.card__like')[5];
console.log(likeButton5);



likeButton.addEventListener("click", function addLike() {
     likeButton.style.backgroundImage = "url(./likeactive.png)"
});

likeButton1.addEventListener("click", function addLike1() {
     likeButton1.style.backgroundImage = "url(./likeactive.png)"
});

likeButton2.addEventListener("click", function addLike2() {
     likeButton2.style.backgroundImage = "url(./likeactive.png)"
});

likeButton3.addEventListener("click", function addLike3() {
     likeButton3.style.backgroundImage = "url(./likeactive.png)"
});

likeButton4.addEventListener("click", function addLike4() {
     likeButton4.style.backgroundImage = "url(./likeactive.png)"
});

likeButton5.addEventListener("click", function addLike5() {
     likeButton5.style.backgroundImage = "url(./likeactive.png)"
});

let showPopup = document.querySelector('.popup');
let popupOpen = document.querySelectorAll('.profile__edit-btn')[0];
popupOpen.addEventListener("click", function open() {
     showPopup.style.visibility = 'visible';
     showPopup.style.opacity = '1';

});


let closePopup = document.querySelector('.popup__close')
closePopup.addEventListener("click", function closed() {
     showPopup.style.visibility = 'hidden';
     showPopup.style.opacity = '0';

});

let changeName = document.querySelector('.popup__input_firstname');
let changeLast = document.querySelector('.popup__input_lastname');
let userName = document.querySelector('.profile__info-title');
let userLastname = document.querySelector('.profile__info-subtitle');





let saveInfo = document.querySelector('.popup__save-btn');
saveInfo.addEventListener("click", function changeInfo(evt) {
     evt.preventDefault();

     userName.innerHTML = `<h1 class="profile__info-title">${changeName.value}</h1>`;
     userLastname.innerHTML = `<h2 class="profile__info-subtitle">${changeLast.value}</h2>`;
     showPopup.style.visibility = 'hidden';
     showPopup.style.opacity = '0';
});










