export default class FormValidator {
  constructor(selectors, form) {
    this._form = form;
    this._formSelector = selectors.formSelector;
    this._inputSelector = selectors.inputSelector;
    this._submitButtonSelector = selectors.submitButtonSelector;
    this._inactiveButtonClass = selectors.inactiveButtonClass;
    this._inputErrorClass = selectors.inputErrorClass;
    this._errorClass = selectors.errorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  // Функция, которая показывает ошибку
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error-visible`);

    inputElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
  }

  // Функция, которая скрывает ошибку
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error-visible`);

    inputElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  };

  // Функция, которая проверяет валидность поля
  _checkInputValidity(inputElement) {
    const isValid = inputElement.validity.valid;

    if (!isValid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // Функция, которая отвечает за бокировку кнопки
  _toggleButtonState() {
    const hasInvalidInput = this._inputList.some(inputElement => !inputElement.validity.valid);

    if (hasInvalidInput) {
      this.disabledButtonState();
    } else {
      this._submitButton.removeAttribute('disabled');
      this._submitButton.classList.remove(this._inactiveButtonClass);
    }
  }

  // Функция, которая очищает ошибки и управляет кнопкой
  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }

  // Функция disabled button submit
  disabledButtonState() {
    this._submitButton.setAttribute('disabled', true);
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  // Функция которая обрабатывает все формы
  _setEventListenersForm() {
    this._form.addEventListener('submit', (event) =>{
      event.preventDefault();
    });

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  // Функция которая включает валидацию всех форм
  enableValidation() {
    this._setEventListenersForm();
  }
}