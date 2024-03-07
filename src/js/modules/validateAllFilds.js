import validateName from "./validateName";

export default function validateAllFilds() {

    
    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const phoneInput = document.getElementById("phone-input");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const agreeCheckbox = document.getElementById("agree");
    const signUpButton = document.querySelector(".registration__form-btn");

    // // Функция для проверки корректности имени
    // function validateName() {
    //     // Ваш код валидации для поля имени
    // }

    // Функция для проверки корректности фамилии
    function validateSurname() {
        // Ваш код валидации для поля фамилии
    }

    // Функция для проверки корректности номера телефона
    function validatePhone() {
        // Ваш код валидации для поля номера телефона
    }

    // Функция для проверки корректности пароля
    function validatePassword() {
        // Ваш код валидации для поля пароля
    }

    // Функция для проверки совпадения пароля и подтверждения пароля
    function validateConfirmPassword() {
        // Ваш код валидации для поля подтверждения пароля
    }

    // Функция для проверки согласия на обработку персональных данных
    function validateAgreement() {
        // Ваш код валидации для флажка согласия
    }

    // Обработчик события клика по кнопке "Sign up"
    signUpButton.addEventListener("click", function(event) {
        // Вызываем все функции валидации
        // validateName("name");
        validateSurname();
        validatePhone();
        validatePassword();
        validateConfirmPassword();
        validateAgreement();

        // Предотвращаем отправку формы, если есть ошибки валидации
        if (document.querySelector(".error")) {
            event.preventDefault();
        }
    });

    // Обработчик события изменения состояния флажка согласия
    agreeCheckbox.addEventListener("change", validateAgreement);
};
