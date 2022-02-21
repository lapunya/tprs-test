(function () {
    let modal = document.querySelector('.modal');
    let modalOverlay = modal.querySelector('.modal__overlay');

    let modalOpenBtn = document.querySelector('.modal-open-btn');
    let modalCloseBtn = modal.querySelector('.modal__close-btn');

    const openModal = () => {
        if(!modal.classList.contains('modal--opened')) {
            modal.classList.add('modal--opened');
        }
    };

    const closeModal = () => {
        if(modal.classList.contains('modal--opened')) {
            modal.classList.remove('modal--opened');
        }
    };

    modalOpenBtn.addEventListener('click', openModal);

    modalOverlay.addEventListener('click', closeModal);
    modalCloseBtn.addEventListener('click', closeModal);
})();

