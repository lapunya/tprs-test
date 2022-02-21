"use strict";

(function () {
  var header = document.querySelector('.header');
  var search = document.querySelector('.search');
  var menu = header.querySelector('.menu');
  var support = header.querySelector('.support');
  var menuBtn = header.querySelector('.header__menu-btn');
  var supportBtn = header.querySelector('.header__help-btn');

  var setHeaderStatic = function setHeaderStatic() {
    if (window.scrollY > header.offsetTop) {
      search.classList.add("search--scrolled");
      header.classList.add("header--static");
    } else {
      search.classList.remove("search--scrolled");
      header.classList.remove("header--static");
    }
  };

  var toggleMenuBtn = function toggleMenuBtn() {
    if (menuBtn.classList.contains('active')) {
      menuBtn.classList.remove('active');
    } else {
      menuBtn.classList.add('active');
    }
  };

  var setMenuMode = function setMenuMode() {
    if (menu.classList.contains('menu--active')) {
      menu.classList.remove('menu--active');
    } else {
      menu.classList.add('menu--active');
    }
  };

  var setSupportMode = function setSupportMode() {
    if (support.classList.contains('support--active')) {
      support.classList.remove('support--active');
    } else {
      support.classList.add('support--active');
    }
  };

  var toggleMenu = function toggleMenu() {
    toggleMenuBtn();
    setMenuMode();
  };

  menuBtn.addEventListener('click', toggleMenu);
  supportBtn.addEventListener('click', setSupportMode);
  window.onscroll = setHeaderStatic;
})();
"use strict";
"use strict";

(function () {
  var modal = document.querySelector('.modal');
  var modalOverlay = modal.querySelector('.modal__overlay');
  var modalOpenBtn = document.querySelector('.modal-open-btn');
  var modalCloseBtn = modal.querySelector('.modal__close-btn');

  var openModal = function openModal() {
    if (!modal.classList.contains('modal--opened')) {
      modal.classList.add('modal--opened');
    }
  };

  var closeModal = function closeModal() {
    if (modal.classList.contains('modal--opened')) {
      modal.classList.remove('modal--opened');
    }
  };

  modalOpenBtn.addEventListener('click', openModal);
  modalOverlay.addEventListener('click', closeModal);
  modalCloseBtn.addEventListener('click', closeModal);
})();
"use strict";

(function () {
  var optionsBtns = document.querySelectorAll('.options__item-title');
  optionsBtns.forEach(function (el) {
    var title = el;
    title.addEventListener('click', function () {
      if (title.classList.contains('active')) {
        title.classList.remove('active');
      } else {
        title.classList.add('active');
      }
    });
  });
})();