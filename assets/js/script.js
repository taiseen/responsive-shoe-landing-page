// 1 Jan 2022

const menuBtn = document.getElementById('menu-btn');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    header.classList.toggle('active');
    document.body.classList.toggle('active');
});


window.addEventListener('onscroll', () => {

    if (window.innerWidth < 1200) {
        menuBtn.classList.remove('fa-times');
        header.classList.remove('active');
        document.body.classList.remove('active');
    }
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

