const btnMenu = document.getElementById('btnMenu');

function btnFunc() {
    document.getElementById('Menu').classList.toggle('active');
    document.getElementById('btnMenu').classList.toggle('open');
    document.getElementById('btnClose').classList.toggle('close');
};

btnMenu.addEventListener('click', btnFunc);