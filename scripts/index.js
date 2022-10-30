// Делаем выборку DOM элементов

// popups
const popupElement = document.querySelector('.popup');


//popups open button
const popupButtonOpenElement = document.querySelector('.profile__edit-button');


//popup close button
const popupButtonCloseElement = popupElement.querySelector('.popup__button-close');

// popups container
const formElement = document.querySelector('.popup__container');

// popups input
const nameInput = formElement.querySelector('.popup__input-profile-name');
const jobInput = formElement.querySelector('.popup__input-profile-about-yourself');

// profile container and elements
const profileElement = document.querySelector('.profile__info');
let nameProfile = profileElement.querySelector('.profile__name');
let jobProfile = profileElement.querySelector('.profile__about-yourself');

//  Массив карточек
const initialCards = [
    {
      name: 'Дубай',
      link: 'https://images.unsplash.com/photo-1642369455174-9a3b9f89becd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80'
    },
    {
      name: 'Москва',
      link: 'https://images.unsplash.com/photo-1632937412284-475db917c92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80 '
    },
    {
      name: 'Стамбул',
      link: 'https://images.unsplash.com/photo-1644989856434-641dd6036bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Париж',
      link: 'https://images.unsplash.com/photo-1591685909937-9a53ffd85f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    {
      name: 'Венеция',
      link: 'https://images.unsplash.com/photo-1592803103769-f83dba4b7cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80'
    },
    {
      name: 'Прага',
      link: 'https://images.unsplash.com/photo-1656943460077-0fe6f61e19f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    }
  ];

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

// Карточки при открытии страницы
const containerForCards = document.querySelector('.elements');

const CreateACard = (text) => {
  return `
  <li class="element">
      <img class="element__image" src="./images/karachaevsk.jpg" alt="Карачаево-Черкесия">
      <button class="element__trash-button" type="button"></button>
      <div class="element__card">
          <h2 class="element__title">${text}</h2>
          <button class="element__like-button" type="button"></button>
      </div>
  </li>
  `
}

initialCards.forEach((item) => {
  const elString = CreateACard(item);
  containerForCards.insertAdjacentHTML('afterbegin', elString);
});



//Cлушатели событий
popupButtonOpenElement.addEventListener('click', openPopup);
popupButtonCloseElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', submitForm);
