const swiper = new Swiper('.home__swiper', {
    loop: true,
    slidesPerView: 'auto', // Set the number of slides to fit on the screen
    spaceBetween: 32, // Adjust the space between slides as needed
    grabCursor:true,
    effect:'creative',
    creativeEffect:{
        prev: {
            translate:[-100, 0,-500],
            rotate: [0, 0, 15],
            opacity: 0
        },

        next: {
            translate:[100, 0,-500],
            rotate: [0, 0, -15],
            opacity: 0
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        
    },

});

//////////////////////////////////////

gsap.from('.home__images', 1.5, {opacity: 0, y: 150, delay: .1})
gsap.from('.home__data', 1.8, {opacity: 0, x: -100, delay: .8})
gsap.from('.home__info', 1.8, {opacity: 0, x: -100, delay: 1})



////////////////////////////////////////

// Get the header element
const header = document.querySelector('header');

// Listen for scroll events
window.addEventListener('scroll', function () {
    // Check if the user has scrolled more than 50 pixels from the top
    if (window.scrollY > 50) {
        // Add the 'scroll' class to the header
        header.classList.add('scroll');
    } else {
        // Remove the 'scroll' class from the header
        header.classList.remove('scroll');
    }
});


// ... (existing JavaScript) ...

// ... (existing JavaScript) ...

// Toggle mobile navigation on button click
const navToggle = document.querySelector('.nav__toggle');
const navCheckbox = document.getElementById('nav_check');
const mobileNav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    navCheckbox.checked = !navCheckbox.checked;
});

// Close mobile navigation on link click
const navLinks = document.querySelectorAll('.nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navCheckbox.checked = false;
    });
});



