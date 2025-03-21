const images = document.querySelectorAll('.slider .img-slider');
let currentIndex = 0;

function startAnim() {
    images[currentIndex].classList.remove('active-img-slider');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active-img-slider');
}

document.querySelector('.btn_right').addEventListener('click', startAnim);
document.querySelector('.btn_left').addEventListener('click', () => {
    images[currentIndex].classList.remove('active-img-slider');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active-img-slider');
});

document.getElementById('btn-modal').addEventListener('click', function () {
    document.getElementById('modal').classList.add('show');
    document.getElementById('bg-modal').classList.add('bg-modal-show');
})

document.getElementById('btn-close').addEventListener('click', function () {
    document.getElementById('modal').classList.remove('show');
    document.getElementById('bg-modal').classList.remove('bg-modal-show');
})

// Валидация
document.querySelector('.btn-modal').addEventListener('click', function () {
    const nameInput = document.querySelector('input[type="name"]');
    const phoneInput = document.querySelector('input[type="tel"]');
    const emailInput = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');

    const inputs = [nameInput, phoneInput, emailInput];
    let isValid = true;

    // Очистка классов ошибок перед валидацией
    inputs.forEach(input => {
        input.classList.remove('error-input');
        if (input.getAttribute('data-error')) {
            input.value = '';
            input.removeAttribute('data-error');
        }
    });

    // Валидация имени
    if (!nameInput.value.trim()) {
        isValid = false;
        setError(nameInput, 'Это поле обязательное для заполнения');
    } else if (!/^[А-Яа-яЁё\s]+$/.test(nameInput.value.trim())) {
        isValid = false;
        setError(nameInput, 'Имя должно содержать только кириллицу');
    }

    // Валидация телефона
    if (!phoneInput.value.trim()) {
        isValid = false;
        setError(phoneInput, 'Это поле обязательное для заполнения');
    } else if (!/^\d{11}$/.test(phoneInput.value.replace(/\D/g, ''))) {
        isValid = false;
        setError(phoneInput, 'Введите корректный номер');
    }

    // Валидация email
    if (!emailInput.value.trim()) {
        isValid = false;
        setError(emailInput, 'Это поле обязательное для заполнения');
    } else if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value.trim())) {
        isValid = false;
        setError(emailInput, 'Введите корректный email');
    }

    // Если все валидации прошли успешно, очищаем поля
    if (isValid) {
        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        message.value = '';
    }
});

// Функция для установки ошибки
function setError(input, errorMessage) {
    input.classList.add('error-input');
    input.value = errorMessage;
    input.setAttribute('data-error', 'true');
}

// Очистка ошибки при начале ввода
document.querySelectorAll('input[type="name"], input[type="tel"], input[type="email"]').forEach(input => {
    input.addEventListener('input', function () {
        if (this.getAttribute('data-error')) {
            this.value = '';
            this.removeAttribute('data-error');
            this.classList.remove('error-input');
        }
    });
});
