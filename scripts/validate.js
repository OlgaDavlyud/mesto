// Делаем выборку DOM элементов для валидации
const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');
const formError = formElement.querySelector(`.${formInput.id}-error-visible`);

// Функция, которая добавляет класс с ошибкой
const showInputError = (element, errorMessage) => {
    element.classList.add('popup__error-visible');
    formError.textContent = errorMessage;
    element.classList.add('popup__input-type-error');
  };

  // Функция, которая удаляет класс с ошибкой
  const hideInputError = (element) => {
    element.classList.remove('popup__error-visible');
    element.classList.remove('popup__input-type-error');
    formError.textContent = "";
  };

  // Функция, которая проверяет валидность поля
  const isValid = () => {
    if (!formInput.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formInput, formInput.validationMessage);
    } else {
      // Если проходит, скроем
      hideInputError(formInput);
    }
  };

  // Вызовем функцию isValid на каждый ввод символа
  formInput.addEventListener('input', isValid);