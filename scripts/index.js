// Делаем выборку DOM элементов
const popupElement = document.querySelector('.popup');
const popupButtonCloseElement = popupElement.querySelector('.popup__button-close');
const popupButtonOpenElement = document.querySelector('.profile__edit-button');


const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input-profile-name');
const jobInput = formElement.querySelector('.popup__input-profile-about-yourself');


const profileElement = document.querySelector('.profile__info');
let nameProfile = profileElement.querySelector('.profile__name');
let jobProfile = profileElement.querySelector('.profile__about-yourself');

const popupAddElement = document.querySelector('.popup-add');
const popupAddButtonOpenElement = document.querySelector('.profile__add-button');
const popupAddButtonCloseElement = popupAddElement.querySelector('.popup-add__button-close');

const formAddElement = document.querySelector('.popup__container');
const nameTitleAdd = formAddElement.querySelector('.popup__input-title-name');
const urlImage = formAddElement.querySelector('.popup-add__input-url-image');

//Создаем функции
const openPopup = function() {
    popupElement.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

const closePopup = function() {
    popupElement.classList.remove('popup_opened');
    nameInput.value = "";
    jobInput.value = "";
}

function changeName() {
    if (nameInput.value !== nameProfile.value) {
        nameProfile.textContent = nameInput.value;
    }
}

function changeAboutYourself() {
    if (jobInput.value !== jobProfile.value) {
        jobProfile.textContent = jobInput.value;
    }
}

function submitForm(evt) {
    evt.preventDefault();
    changeName();
    changeAboutYourself();
    closePopup();
}

const openPopupAdd = function() {
    popupAddElement.classList.add('popup-add_opened');
}

const closePopupAdd = function() {
    popupAddElement.classList.remove('popup-add_opened');
}

//Cлушатели событий
popupButtonOpenElement.addEventListener('click', openPopup);
popupButtonCloseElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', submitForm);
popupAddButtonOpenElement.addEventListener('click', openPopupAdd);
popupAddButtonCloseElement.addEventListener('click', closePopupAdd);