// 5 Jan 2022

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


let allProductsBtn = document.querySelectorAll('.slide .btn');
let allProductsImg = document.querySelectorAll('.slide img');
let productPreviewContainer = document.querySelector('.product-preview-container');
let productPreviewImg = document.querySelector('.product-preview img');
let productPreviewClose = document.querySelector('.product-preview .fa-times');

console.log(productPreviewContainer)

allProductsBtn.forEach((detailsBtn, index) => {

    detailsBtn.addEventListener('click', () => {

        let productName = detailsBtn.getAttribute('data-product');
        let currentImg = allProductsImg[index].src;

        productPreviewContainer.style.display = 'block';
        productPreviewImg.src = currentImg;
    });
});

// close popup preview panel... 
productPreviewClose.addEventListener('click', () => {
    productPreviewContainer.style.display = 'none';
});






var swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    centeredSliders: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        911: {
            slidesPerView: 3,
        },
    },
});

