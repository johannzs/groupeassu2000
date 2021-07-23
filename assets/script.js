var menu = document.querySelector('.burger-menu');

menu.addEventListener('click', event => {
    document.querySelector('#menu').classList.toggle('active');
});