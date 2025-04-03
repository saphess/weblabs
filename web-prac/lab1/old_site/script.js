const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

function startAnim() {
    images[currentIndex].classList.remove('img-slider'); 
    currentIndex = (currentIndex + 1) % images.length; 
    images[currentIndex].classList.add('img-slider'); 
}

function backANim(){
    images[currentIndex].classList.remove('img-slider'); 
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    images[currentIndex].classList.add('img-slider');
}
document.querySelector('.btn_right').addEventListener('click', startAnim);
document.querySelector('.btn_left').addEventListener('click', backANim);


document.getElementById('btn-modal').addEventListener('click', function () {
    document.getElementById('modal').classList.add('show');
    document.getElementById('bg-modal').classList.add('bg-modal-show');
    document.body.style.overflowY = 'hidden';
})

document.getElementById('btn-close').addEventListener('click', function () {
    document.getElementById('modal').classList.remove('show');
    document.getElementById('bg-modal').classList.remove('bg-modal-show');
    document.body.style.overflowY = 'auto';
})

// Валидация
document.querySelector('.btn-modal').addEventListener('click', function () {
    const nameInput = document.querySelector('input[type="name"]');
    const phoneInput = document.querySelector('input[type="tel"]');
    const emailInput = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');

    const inputs = [nameInput, phoneInput, emailInput];
    let isValid = true;

    inputs.forEach(input => {
        input.classList.remove('error-input');
    });

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error-input');
            input.value = 'Это поле обязательное для заполнения';
        }
    });

    if (isValid) {
        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        message.value = '';
    }
});
