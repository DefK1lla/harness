// Smooth scroll
const links = document.querySelectorAll('.menu_link'),
    introBtn = document.querySelectorAll('.intro__btn');

let elementId, elementOffset;

function scrollTo(link){
    link.addEventListener('click', function (e) {
        e.preventDefault();
        elementId = link.getAttribute('href');
        elementOffset = document.querySelector(elementId).getBoundingClientRect().top;
    
        window.scrollBy({
          top: elementOffset,
          behavior: "smooth"
        });
      });
}

links.forEach(function (link) {
  scrollTo(link);
});

introBtn.forEach(function (link) {
    scrollTo(link);
  });


// Tabs
const tabsBtn = document.querySelectorAll('.tabs__btn');

function showTab(btn){
    btn.addEventListener('click', function(){
        tabsBtn.forEach(function(btn) {
            let tab = document.querySelector(btn.dataset.tab);

            tab.classList.remove('tabs__item--active');
            btn.classList.remove('tabs__btn--active');
        });

        let tab = document.querySelector(btn.dataset.tab);

        tab.classList.add('tabs__item--active');
        btn.classList.add('tabs__btn--active');
    });
}

tabsBtn.forEach(function(btn){
    showTab(btn);
});

introBtn.forEach(function(btn){
    showTab(btn);
});


// Modal
const catalogBtn = document.querySelectorAll('.catalog__btn'),
    modal = document.querySelector('.modal'),
    modalInner = document.querySelector('.modal__inner'),
    modalClose = document.querySelector('.modal__close');

catalogBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        modal.classList.add('modal--active');
    })
});

modal.addEventListener('click', function(e){
    if(!e.target.closest('.modal__inner') || e.target == modalClose){
        modal.classList.remove('modal--active');
    }
});