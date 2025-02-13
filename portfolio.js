document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navContainer = document.querySelector('.nav-container');

    if (menuIcon && navContainer) {
        menuIcon.addEventListener('click', function () {
            console.log("Menu icon clicked"); // Debugging
            navContainer.classList.toggle('active');
        });
    } else {
        console.error("Menu icon or nav container not found!");
    }
});
