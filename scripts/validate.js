// Делаем выборку DOM элементов для валидации
const form = document.querySelector('.popup__form');

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error-visible`);

  inputElement.classList.add('popup__error-visible');
  errorElement.textContent = errorMessage;
  inputElement.classList.add('popup__input-type-error');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error-visible`);

  inputElement.classList.remove('popup__error-visible');
  inputElement.classList.remove('popup__input-type-error');
  errorElement.textContent = "";
};

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
  const isValid = inputElement.validity.valid;

  if (!isValid) {
     showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//Функция, которая отвечает за бокировку кнопки
const toggleButtonState = (inputList, buttonElement) => {
  const hasInvalivInput = inputList.some(inputElement => !inputElement.validity.valid);

  if (hasInvalivInput) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add('popup__button-disabled');
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('popup__button-disabled');
  }
};

//Функция которая обрабатывает все формы
const setEventListeners = (formElement) => {
  formElement.addEventListener('submit', (event) =>{
    event.preventDefault();
  });

  const inputList = Array.from(form.querySelectorAll('.popup__input'));
  const submitButton = form.querySelector('.popup__button-submit');

  toggleButtonState(inputList, submitButton);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(form, inputElement);
      toggleButtonState(inputList, submitButton);
    });
  });
};

setEventListeners(form);

