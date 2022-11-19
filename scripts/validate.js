// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error-visible`);

  inputElement.classList.add(selectors.errorClass);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(selectors.inputErrorClass);
}

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error-visible`);

  inputElement.classList.remove(selectors.errorClass);
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.textContent = "";
}

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
  const isValid = inputElement.validity.valid;

  if (!isValid) {
     showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

//Функция, которая отвечает за бокировку кнопки
const toggleButtonState = (inputList, buttonElement) => {
  const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);

  if (hasInvalidInput) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(selectors.inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(selectors.inactiveButtonClass);
  }
}


//Функция которая обрабатывает все формы
const setEventListenersForm = (formElement, selectors) => {
  formElement.addEventListener('submit', (event) =>{
    event.preventDefault();
  });

  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  const submitButton = formElement.querySelector(selectors.submitButtonSelector);

  toggleButtonState(inputList, submitButton);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButton);
    });
  });
}


//Функция которая включает валидацию всех форм
const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));

  formList.forEach(formElement => {
    setEventListenersForm(formElement, selectors);
  });
}

const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-disabled',
  inputErrorClass: 'popup__input-type-error',
  errorClass: 'popup__error-visible'
}

