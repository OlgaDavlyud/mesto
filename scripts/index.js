// Делаем выборку DOM элементов
const popupElement = document.querySelector('.popup');
const popupButtonCloseElement = popupElement.querySelector('.popup__button-close');
const popupButtonOpenElement = document.querySelector('.profile__edit-button');

const openPopup = function() {
    popupElement.classList.add('popup_opened');
    console.log('Open popup clicked');
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
}

// Регистрируем обработчик событий по клику
popupButtonOpenElement.addEventListener('click', openPopup);
popupButtonCloseElement.addEventListener('click', closePopup);


// Делаем выборку DOM элементов в форме
const formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input-profile-name');
let jobInput = formElement.querySelector('.popup__input-profile-about-yourself');
const popupButtonSubmitElement = formElement.querySelector('.popup__button-submit');

// Делаем выборку DOM элементов на странице
const profileElement = document.querySelector('.profile__info');
let nameProfile = profileElement.querySelector('.profile__name');
let jobProfile = profileElement.querySelector('.profile__about-yourself');


// Обработчик «отправки» формы
//function formSubmitHandler (evt) {
//    evt.preventDefault();

function changeName (evt) {
    evt.preventDefault();

    if (nameInput.value !== '') {
        nameProfile.textContent = nameInput.value;
    } else {
        closePopup();
    }
}

function changeAboutYourself (evt) {
    evt.preventDefault();

    if (jobInput.value !== '') {
        jobProfile.textContent = jobInput.value;
    } else {
        closePopup();
    }
}

// Прикрепляем обработчик к форме:
formElement.addEventListener('submit', changeName);
formElement.addEventListener('submit', changeAboutYourself);