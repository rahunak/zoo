function hideModalWindow() {
    document.body.style.overflow = 'visible';
    const modal = document.querySelector('.modal');
    modal.classList.add('hideModal_animation');
    modal.addEventListener('animationend', function removeAll() {
        modal.remove('showModal_animation', 'hideModal_animation');
        modal.removeEventListener('click', removeAll);
        modal.remove();
    });
}
function clickOutsideModal(event) {
    const modal = document.querySelector('.modal__content');

    if (!modal) return;
    const coordsModal = modal.getBoundingClientRect();

    if (event.clientX < coordsModal.left || event.clientX > coordsModal.right
        || event.clientY < coordsModal.top
        || event.clientY > coordsModal.bottom) {
        hideModalWindow();
    }
}
function showPopap(cardHTML) {
    const card = cardHTML;
    card.style = '';

    document.body.style.overflow = 'hidden';
    document.body.insertAdjacentHTML('afterbegin', `
  <div class="modal showModal_animation">
  <div class="modal__content">
<div class="cross">
    <span class="cross_line1"></span>
    <span class="cross_line2"></span>
</div>
  ${card.outerHTML}
  </div>
  </div>
  `);
    document.querySelector('.modal').addEventListener('click', clickOutsideModal);
}

Array.from(document.querySelectorAll('.testimonial_card')).forEach((el) => el.addEventListener('click', (e) => {
    const cloneNode = e.target.closest('.testimonial_card').cloneNode(true);
    showPopap(cloneNode);
    const crossClose = document.querySelector('.cross');
    if (crossClose) {
        crossClose.addEventListener('click', () => {
            hideModalWindow();
        });
    }
}));
