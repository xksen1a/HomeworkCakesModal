let modalWrapper = document.querySelector('#order-modal-wrapper');
let modal = document.querySelector('#order-modal');
let orderButtons = Array.from(document.querySelectorAll('.order-button'));
let closeButton = document.querySelector('#close-modal');
let form = document.querySelector('#order-form');

let nameInput = document.querySelector('#name');
let phoneInput = document.querySelector('#phone');
let agreementCheckbox = document.querySelector('#agreement');
let submitButton = document.querySelector('#submit-order');

orderButtons.forEach(orderButton => {
    orderButton.addEventListener('click', () => {
        modalWrapper.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeButton.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
    document.body.style.overflow = '';
    form.reset();
    submitButton.disabled = true;
});

function checkFormValidity() {
    if (nameInput.value.trim() && phoneInput.value.trim() && agreementCheckbox.checked) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

[nameInput, phoneInput, agreementCheckbox].forEach(input => {
    input.addEventListener('input', checkFormValidity);
    input.addEventListener('change', checkFormValidity);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо за заказ!');
    modalWrapper.style.display = 'none';
    document.body.style.overflow = '';
    form.reset();
    submitButton.disabled = true;
});