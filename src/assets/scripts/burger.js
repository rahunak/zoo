const burgerCheckbox = document.querySelector('#burger_checkbox');
const burgerBtn = document.querySelector('.burger__btn');

const burgerContent = document.querySelector('.burger__content');

const burgerLine1 = document.querySelector('.burger__btn .line1');
const burgerLine2 = document.querySelector('.burger__btn .line2');
const burgerLine3 = document.querySelector('.burger__btn .line3');

const burgerLogo = document.querySelector('.burger__content .logo');
burgerBtn.addEventListener('click', () => {
    document.body.classList.add('scroll-hidden');// запрет на скролл+
    burgerLine1.classList.add('open_burger_line1');
    burgerLine2.classList.add('open_burger_line2');
    burgerLine3.classList.add('open_burger_line3');
});
burgerLogo.addEventListener('click', () => {
    document.body.classList.remove('scroll-hidden');// запрет на скролл-
    burgerLine1.classList.remove('open_burger_line1');
    burgerLine2.classList.remove('open_burger_line2');
    burgerLine3.classList.remove('open_burger_line3');
});
burgerBtn.addEventListener('click', () => {
    if (burgerCheckbox.checked) {
        // закрыт бургер контент
        burgerContent.classList.remove('showed_burger_content');
        burgerContent.classList.add('hidden_burger_content');
        // возврт в деф кнопку бургера
        burgerLine1.classList.add('closed_burger_line1');
        burgerLine2.classList.add('closed_burger_line2');
        burgerLine3.classList.add('closed_burger_line3');

        burgerLine1.classList.remove('open_burger_line1');
        burgerLine2.classList.remove('open_burger_line2');
        burgerLine3.classList.remove('open_burger_line3');
        document.body.classList.remove('scroll-hidden');// запрет на скролл-
    } else {
        // открыт бургер контент

        burgerContent.classList.add('showed_burger_content');
        burgerContent.classList.remove('hidden_burger_content');

        burgerLine1.classList.remove('closed_burger_line1');
        burgerLine2.classList.remove('closed_burger_line2');
        burgerLine3.classList.remove('closed_burger_line3');

        burgerLine1.classList.add('open_burger_line1');
        burgerLine2.classList.add('open_burger_line2');
        burgerLine3.classList.add('open_burger_line3');
    }
});
function clickOutsideModal(event) {
    const modal = document.querySelector('.burger__content_wrapper');
    if (!modal) return;
    const coordsModal = modal.getBoundingClientRect();
    if (event.clientX < coordsModal.left || event.clientX > coordsModal.right
        || event.clientY < coordsModal.top || event.clientY > coordsModal.bottom) {
        document.body.classList.remove('scroll-hidden');
        burgerContent.classList.remove('showed_burger_content');
        burgerContent.classList.add('hidden_burger_content');
        // возврт в деф кнопку бургера
        burgerLine1.classList.add('closed_burger_line1');
        burgerLine2.classList.add('closed_burger_line2');
        burgerLine3.classList.add('closed_burger_line3');
        burgerLine1.classList.remove('open_burger_line1');
        burgerLine2.classList.remove('open_burger_line2');
        burgerLine3.classList.remove('open_burger_line3');
        burgerCheckbox.checked = false;// отключаем checkbox
    }
}
burgerContent.closest('div').addEventListener('click', (event) => {
    clickOutsideModal(event);
});

const donateDot = document.querySelector('#radio6');
if (donateDot) {
    const widthScreen = window.innerWidth;
    if (widthScreen < 1000) {
        donateDot.checked = true;
    }
}

window.addEventListener('resize', () => {
    const widthScreen = window.innerWidth;
    if (widthScreen < 1000 && donateDot) {
        donateDot.checked = true;
    }
});
