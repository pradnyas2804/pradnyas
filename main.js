'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);

document.addEventListener("DOMContentLoaded", function () {
  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItems = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  function addToCart(event) {
    const menuItem = event.target.closest('.menu-card');
    const itemName = menuItem.querySelector('.card-title').innerText;
    const itemPrice = menuItem.querySelector('.span.title-2').innerText;

    const item = {
      name: itemName,
      price: itemPrice
    };

    cartItems.push(item);
    updateCartDisplay();
  }

  function updateCartDisplay() {
    // Display the cart items and total price in the UI
    const cartElement = document.querySelector('.cart-items');

    // Clear previous cart items
    cartElement.innerHTML = '';

    // Iterate through cart items and display them
    cartItems.forEach(item => {
      const cartItemElement = document.createElement('div');
      cartItemElement.innerText = `${item.name} - ${item.price}`;
      cartElement.appendChild(cartItemElement);
    });

    // Calculate total price and display it
    const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
    const totalPriceElement = document.querySelector('.total-price');
    totalPriceElement.innerText = `Total: ${totalPrice}`;
  }

  // Add features icons
  const featureIcons = document.querySelectorAll('.card-icon .icon');

  featureIcons.forEach(icon => {
    icon.classList.add('ion');
  });
});


const wrapper = document.querySelector('.wrapperr');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-secondary');
const iconClose = document.querySelector('.icon-close');
const loginButton = document.querySelector('.btn-secondary');
const loginForm = document.querySelector('.login');
const registerForm = document.querySelector('.register');
const overlayy = document.querySelector('.overlay');
const loginBtn = document.querySelector('.login .btn');
const registerBtn = document.querySelector('.register .btn');
const blurElements = document.querySelectorAll('body > *:not(.wrapperr)');

registerLink.addEventListener('click', () => toggleForm('register'));
loginLink.addEventListener('click', () => toggleForm('login'));
btnPopup.addEventListener('click', () => togglePopup(true));
iconClose.addEventListener('click', () => togglePopup(false));
loginButton.addEventListener('click', handleLogin);
loginBtn.addEventListener('click', () => togglePopup(false));
registerBtn.addEventListener('click', () => togglePopup(false));

function toggleForm(formType) {
  if (formType === 'register') {
    loginForm.style.transform = 'translateX(-400px)';
    registerForm.style.transform = 'translateX(0)';
    overlayy.classList.add('active');
    blurElements.forEach(element => {
      if (element !== registerForm) {
        element.classList.add('blur');
      }
    });
  } else {
    loginForm.style.transform = 'translateX(0)';
    registerForm.style.transform = 'translateX(400px)';
    overlayy.classList.remove('active');
    blurElements.forEach(element => element.classList.remove('blur'));
  }
}

function togglePopup(isActive) {
  if (isActive) {
    wrapper.classList.add('active-popup');
    overlayy.classList.add('active');
    blurElements.forEach(element => {
      if (element !== registerForm) {
        element.classList.add('blur');
      }
    });
  } else {
    wrapper.classList.remove('active-popup');
    overlayy.classList.remove('active');
    blurElements.forEach(element => element.classList.remove('blur'));
  }
}

function handleLogin(event) {
  event.preventDefault();
  blurElements.forEach(element => {
    if (element !== loginForm && element !== registerForm) {
      element.classList.add('blur');
    }
  });
  loginForm.classList.remove('blur');
}

overlayy.addEventListener('click', event => {
  if (event.target === overlayy) {
    togglePopup(false);
  }
});




/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});
