(function () {
    const optionsBtns = document.querySelectorAll('.options__item-title');

    optionsBtns.forEach(function(el) {
        let title = el;
        title.addEventListener('click', function() {
            if (title.classList.contains('active')) {
                title.classList.remove('active');
            } else {
                title.classList.add('active');
            }
        })
    })
})();
    


