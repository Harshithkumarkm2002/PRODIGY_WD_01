// Change navbar background color on scroll
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#111';
    } else {
        navbar.style.backgroundColor = '#333';
    }
};
