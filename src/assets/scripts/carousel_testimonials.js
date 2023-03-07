import t1 from '../images/avatarts/avatar_2.png';
import t2 from '../images/avatarts/Ellipse2.png';
import t3 from '../images/avatarts/Ellipse3.png';
import t4 from '../images/avatarts/Ellipse4.png';
import t5 from '../images/avatarts/1.jpg';
import t6 from '../images/avatarts/2.jpg';
import t7 from '../images/avatarts/3.jpg';
import t8 from '../images/avatarts/4.jpg';
import t9 from '../images/avatarts/5.jpg';
import t10 from '../images/avatarts/6.jpg';
import t11 from '../images/avatarts/avatar.svg';

let curr = 0;
const myRange = document.querySelector('#myRange');
const testimonialsContainer = document.querySelector('.testimonials__container');
let cards;
let widthScreen = document.documentElement.clientWidth;
let touchstart;// начало касания скрина
let touchend;// конец касания скрина
let count = 0;

const testimonials = [{
    id: 't0', testimonial__icon: t11, author_name: 'Michael John', location: 'Local Austria', date: 'Today ', testimonial_text: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals.',
},
{
    id: 't1', testimonial__icon: t2, author_name: 'Oskar Samborsky', location: 'Local Austria', date: 'Yesterday', testimonial_text: ' Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.My son delighted very much ljves to watch gouillas. The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.My son delighted very much ljves to is one jf the ways to instill a love for animals.',
},
{
    id: 't2', testimonial__icon: t3, author_name: 'Fredericka Michelin', location: 'Local Austria', date: 'Yesterday', testimonial_text: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf the ways to instill a love for animals.',
},
{
    id: 't3', testimonial__icon: t4, author_name: 'Mila Riksha', location: 'Local Austria', date: 'Yesterday', testimonial_text: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instilla  love for animals.The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo is one jf  the ways to instill a love for animals.The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.  Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.  The best online zoo I’ve met.My son delighted very much ljves to watch gouillas.Online zoo  is  one jf the ways to instill a love for animals.The best online zoo I’ve met.My son delighted very much ljves to  watch gouillas.Online zoo is one jf the ways to instill a love for animals.',
},
{
    id: 't4', testimonial__icon: t5, author_name: 'Igor Pus', location: 'Belarus', date: 'Today', testimonial_text: 'Pasture he invited mr company shyness. But when shot real her. Chamber her observe visited removal six sending himself boy. At exquisite existence if an oh dependent excellent. Are gay head need down draw. Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her had indulgence middletons. Say ferrars demands besides her address. Blind going you merit few fancy their.',
},
{
    id: 't5', testimonial__icon: t6, author_name: 'Eugene Zaiko', location: 'Belarus ', date: 'Yesterday', testimonial_text: 'Removed greater to do ability.  Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed.Possession her thoroughly remarkably terminated man continuing. Removed greater to do ability. You shy shall while but wrote marry. Call why sake has sing pure. Gay six set polite nature worthy. So matter be me we wisdom should basket moment merely. Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed.Possession her thoroughly remarkably terminated man continuing. Removed greater to do ability. You shy shall while but wrote marry. Call why sake has sing pure. Gay six set polite nature worthy. So matter be me we wisdom should basket moment merely. Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed.Possession her thoroughly remarkably terminated man continuing. Removed greater to do ability. You shy shall while but wrote marry. Call why sake has sing pure. Gay six set polite nature worthy. So matter be me we wisdom should basket moment merely. Me burst ample wrong which would mr he could. Visit arise my point timed drawn no. Can friendly laughter goodness man him appetite carriage. Any widen see gay forth alone fruit bed.',
},
{
    id: 't6', testimonial__icon: t7, author_name: 'Anna Grigencha', location: 'Belarus', date: 'Yesterday', testimonial_text: 'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished. Preserved defective offending he daughters on or.Rejoiced prospect yet material servants out answered men admitted.Sportsmen certainty prevailed suspected am as.Add stairs admire all answer the nearer yet length.Advantages prosperous remarkably my inhabiting so reasonably be if.Too any appearance announcing impossible one.Out mrs means heart ham tears shall power every.',
},
{
    id: 't7', testimonial__icon: t8, author_name: 'Ilya Kantor', location: 'Russia', date: 'Once', testimonial_text: 'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished. Preserved defective offending he daughters on or.Rejoiced prospect yet material servants out answered men admitted.Sportsmen certainty prevailed suspected am as.Add stairs admire all answer the nearer yet length.Advantages prosperous remarkably my inhabiting so reasonably be if.Too any appearance announcing impossible one.Out mrs means heart ham tears shall power every.',
},
{
    id: 't8', testimonial__icon: t9, author_name: 'Irina Vasilkova', location: 'Ukraina', date: 'Yesterday', testimonial_text: 'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished. Preserved defective offending he daughters on or.Rejoiced prospect yet material servants out answered men admitted.Sportsmen certainty prevailed suspected am as.Add stairs admire all answer the nearer yet length.Advantages prosperous remarkably my inhabiting so reasonably be if.Too any appearance announcing impossible one.Out mrs means heart ham tears shall power every.',
},
{
    id: 't9', testimonial__icon: t10, author_name: 'Olga Razina', location: 'Belarus', date: 'Yesterday', testimonial_text: 'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished. Preserved defective offending he daughters on or.Rejoiced prospect yet material servants out answered men admitted.Sportsmen certainty prevailed suspected am as.Add stairs admire all answer the nearer yet length.Advantages prosperous remarkably my inhabiting so reasonably be if.Too any appearance announcing impossible one.Out mrs means heart ham tears shall power every.',
},
{
    id: 't10', testimonial__icon: t1, author_name: 'Irina Melnikova', location: 'Ukraina', date: 'Yesterday', testimonial_text: 'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished. Preserved defective offending he daughters on or.Rejoiced prospect yet material servants out answered men admitted.Sportsmen certainty prevailed suspected am as.Add stairs admire all answer the nearer yet length.Advantages prosperous remarkably my inhabiting so reasonably be if.Too any appearance announcing impossible one.Out mrs means heart ham tears shall power every.',
},
];
function createTestimonial(obj) {
    const testimonial = document.createElement('div');
    testimonial.classList.add('testimonial_card');
    testimonial.insertAdjacentHTML('afterbegin', ` <div class="testimonial_card__wrapper">
                        <div class="testimonial__head">
                                <img class="testimonial__icon" src="${obj.testimonial__icon}" alt="">
                            <div class="testimonial__info">
                                <div class="info_name">${obj.author_name}</div>
                                <div class="info__other">
                                    <p class="info__location">${obj.location}</p>
                                    <span class="info__dot"></span>
                                    <p class="info__date">${obj.date}</p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial__description">${obj.testimonial_text}</div>
                    </div>`);
    return testimonial;
}
function slideHorisontalTestimonials(eventRange, widthCartPlusGap) {
    cards = testimonialsContainer.querySelectorAll('.testimonial_card');
    if (!cards) {
        return;
    }
    curr = eventRange.target.value;
    cards.forEach((el) => { el.style = `right:${curr * widthCartPlusGap}px; transition: all 0.25s ease-in-out;`; });
}
// function slideVerticalTestimonials(countNewCarts, heightCartPlusGap) {
//     cards = testimonialsContainer.querySelectorAll('.testimonial_card');
//     cards.forEach((el) => {
// el.style = `top:-${countNewCarts * heightCartPlusGap}px; transition: all 0.25s ease-in-out;`; });
// }
function slideVerticalTestimonials(touchstartPoint, touchendPoint, heightCartPlusGap) {
    console.log('slideVerticalTestimonials', count);
    const heightShift = touchendPoint[0].screenY - touchstartPoint[0].screenY;
    const widthShift = touchendPoint[0].screenX - touchstartPoint[0].screenX;
    if (count < 0) {
        count = 0;
    }
    if (count >= 7) {
        count = 7;
    }
    cards = testimonialsContainer.querySelectorAll('.testimonial_card');
    if (!cards) {
        return;
    }
    // document.body.style.overflow = 'hidden';
    if ((heightShift < -10 && heightShift > -350) && (widthShift > -80 && widthShift < 80)) {
        console.log('count++', count);
        count++;
        cards.forEach((el) => {
            el.style = `top:-${count * heightCartPlusGap}px; transition: all 0.25s ease-in-out;`;
        });
    }

    if ((heightShift > 10 && heightShift < 350) && (widthShift > -80 && widthShift < 80)) {
        --count;
        console.log('--count', count);
        cards.forEach((el) => {
            el.style = `top:-${count * heightCartPlusGap}px; transition: all 0.25s ease-in-out;`;
        });
    }
    document.body.style.overflow = '';
}
function debounce(f, ms) {
    // функция-обертка по выключению переданной ф-ии если не прошёл промежуток времени
    let isCooldown = false;
    return function () {
        if (isCooldown) { return; }
        console.log('--arguments', arguments);
        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => { isCooldown = false; }, ms);
    };
}
const slideTistimonialWithDelay = debounce(slideVerticalTestimonials, 200);

if (testimonialsContainer) {
    testimonialsContainer.append(
        createTestimonial(testimonials[0]),
        createTestimonial(testimonials[1]),
        createTestimonial(testimonials[2]),
        createTestimonial(testimonials[3]),
        createTestimonial(testimonials[4]),
        createTestimonial(testimonials[5]),
        createTestimonial(testimonials[6]),
        createTestimonial(testimonials[7]),
        createTestimonial(testimonials[8]),
        createTestimonial(testimonials[9]),
        createTestimonial(testimonials[10]),

    );
    myRange?.addEventListener('input', (e) => {
        widthScreen = document.documentElement.clientWidth;
        if (widthScreen >= 1600) {
            myRange.max = 7;
            slideHorisontalTestimonials(e, 297);
        } else if (widthScreen < 1600) {
            myRange.max = 8;
            slideHorisontalTestimonials(e, 322);
        }
    });
}
window.addEventListener('resize', () => {
    cards = testimonialsContainer?.querySelectorAll('.testimonial_card');

    widthScreen = document.documentElement.clientWidth;
    cards?.forEach((el) => { el.style = ''; });
    if (myRange) myRange.value = 0;
});

widthScreen = document.documentElement.clientWidth;

if (widthScreen <= 640) {
    testimonialsContainer?.addEventListener('touchmove', (e) => {
        touchend = e.changedTouches;
        // slideTistimonialWithDelay(touchstart, touchend, 124);
        console.log('touchmove', touchend);
    });
    testimonialsContainer?.addEventListener('touchstart', (e) => {
        touchstart = e.changedTouches;
    });
    testimonialsContainer?.addEventListener('touchend', (e) => {
        touchend = e.changedTouches;
        console.log('touchEND', touchend);
        slideTistimonialWithDelay(touchstart, touchend, 124);
    });
}
