const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

// 클릭이 될때마다 지정한 함수를 호출해주기 위해
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});