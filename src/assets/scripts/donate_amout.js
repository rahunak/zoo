const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const radio3 = document.querySelector('#radio3');
const radio4 = document.querySelector('#radio4');
const radio5 = document.querySelector('#radio5');
const radio6 = document.querySelector('#radio6');
const radio7 = document.querySelector('#radio7');
const radio8 = document.querySelector('#radio8');
const radioBtns = document.querySelectorAll('[name="radioButton"]');
const donateForm = document.querySelector('#donate_form');
const anotherAmount = document.querySelector('#another_amount');
const donateWrapper = document.querySelector('.donate__wrapper');
let count = 0;

function showCircles(numPointOnProgressBar) {
    const outer2 = document.querySelector(`.btn${numPointOnProgressBar} .bar_circle_outher2`);
    const outer1 = document.querySelector(`.btn${numPointOnProgressBar} .bar_circle_outher1`);

    outer2.classList.remove('display_none');
    outer1.classList.remove('display_none');
    outer2.classList.remove('hidden2');
    outer1.classList.remove('hidden1');
    outer2.classList.add('shown2');
    outer1.classList.add('shown1');
}
function hideAllCircles() {
    // прячем все кружки
    document.querySelectorAll('.shown2').forEach((el) => {
        el.classList.add('hidden2');
        el.classList.remove('shown2');
    });
    document.querySelectorAll('.shown1').forEach((el) => {
        el.classList.remove('shown1');
        el.classList.add('hidden1');
    });
}
if (donateForm) {
    anotherAmount.value = 100;

    // Чтобы не писать всем ?. использую if
    donateForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    anotherAmount.addEventListener('keydown', (e) => {
        console.log(e.keyCode);
        if (e.target.value.length >= 3) {
            if (e.keyCode === 8) return;
            e.target.value = e.target.value.substring(0, 3);
        }
    });
    anotherAmount.addEventListener('keyup', (e) => {
        if (count === 3) {
            alert('Нравится жмакать Enter?');
            count++; anotherAmount.blur();
        }
        if (count === 4) {
            alert('Так а ну ка не жмакать Enter!');
            count++; anotherAmount.blur();
        }
        if (count === 5) {
            alert('Какой вы настырный человечишко');
            count++; anotherAmount.blur();
        }
        if (count === 6) {
            alert('Ну хватит');
            count++; anotherAmount.blur();
        }
        if (count === 8) {
            const friend = window.confirm('Вы упорный, давайте дружить?!');
            if (friend) window.location.href = 'https://www.linkedin.com/in/rahunak/';
            count = 0;
        }
        if (e.keyCode === 13) {
            // eslint-disable-next-line no-console
            console.log('Так а ну ка не жмакать Enter!');
            count++;
            anotherAmount.blur();
        }
    });

    // обратная привязка поля инпута к прогресБару
    anotherAmount.addEventListener('blur', (e) => {
        hideAllCircles();

        if (e.target.value > 9999 || e.target.value < 0) {
            e.target.value = e.target.value.slice(0, 4);
        }
        switch (anotherAmount.value) {
            case '25':
                showCircles(8);
                radio8.checked = true;
                break;
            case '50':
                showCircles(7);
                radio7.checked = true;
                break;
            case '100':
                showCircles(6);
                radio6.checked = true;
                break;
            case '250':
                showCircles(5);
                radio5.checked = true;
                break;
            case '500':
                showCircles(4);
                radio4.checked = true;
                break;
            case '1000':
                showCircles(3);
                radio3.checked = true;
                break;
            case '2000':
                showCircles(2);
                radio2.checked = true;
                break;
            case '5000':
                showCircles(1);
                radio1.checked = true;
                break;
            default:

                radioBtns.forEach((el) => el.checked = false);
                hideAllCircles();
                break;
        }
    });

    donateWrapper.addEventListener('click', (e) => {
        if (!Array.from(e.target.classList).includes('radioButton')) {
            return;
            // клацаем по области donateWrapper, определяем где клик,был ли в нужной области
            // если не в нужной области, то return
        }

        const numberCircle = e.target.id.toString()[e.target.id.toString().length - 1];

        document.querySelector(`#${e.target.id}`).checked = true;
        anotherAmount.value = e.target.dataset.price;
        hideAllCircles();
        showCircles(numberCircle);
    });
}
