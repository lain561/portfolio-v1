document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu');
    const navbarLinks = document.querySelector('.navbar-links');

    if (toggleButton && navbarLinks) {
        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });
    } else {
        console.error('Toggle button or navbar links not found');
    }
});