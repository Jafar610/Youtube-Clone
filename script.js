var menu = document.querySelector('.menu-icon');
var sidebar = document.querySelector('.sidebar');
var banner = document.querySelector('.banner');
var cards = document.querySelector('.videos-section')

menu.addEventListener('click', function() {
    sidebar.classList.toggle('mini-sidebar');
    banner.classList.toggle('large-banner');
    cards.classList.toggle('large-cards');

})