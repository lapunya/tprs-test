(function () {
    const header = document.querySelector('.header');
    const search = document.querySelector('.search');

    const menu = header.querySelector('.menu');
    const support = header.querySelector('.support')

    const menuBtn = header.querySelector('.header__menu-btn');
    const supportBtn = header.querySelector('.header__help-btn');

    const setHeaderStatic = () => {
        if (window.scrollY > header.offsetTop) {
            search.classList.add("search--scrolled");
            header.classList.add("header--static");
        } else {
            search.classList.remove("search--scrolled");
            header.classList.remove("header--static");
        }
    };

    const toggleMenuBtn = () => {
        if (menuBtn.classList.contains('active')) {
            menuBtn.classList.remove('active');
        } else {
            menuBtn.classList.add('active');
        }
    };

    const setMenuMode = () => {
        if (menu.classList.contains('menu--active')) {
            menu.classList.remove('menu--active');
        } else {
            menu.classList.add('menu--active');
        }
    };

    const setSupportMode = () => {
        if (support.classList.contains('support--active')) {
            support.classList.remove('support--active');
        } else {
            support.classList.add('support--active');
        }
    };

    const toggleMenu = () => {
        toggleMenuBtn();
        setMenuMode();
    }

    menuBtn.addEventListener('click', toggleMenu);
    supportBtn.addEventListener('click', setSupportMode);

    window.onscroll = setHeaderStatic;
})();

