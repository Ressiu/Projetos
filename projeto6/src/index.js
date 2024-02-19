function changeLink(element) {
    element.innerHTML = 'Adquirir <i class="ri-arrow-right-line"></i>';
}

function resetLink(element) {
    element.innerHTML = 'Gostou? <i class="ri-arrow-right-line"></i>';
}

function changeLink2(element) {
    element.innerHTML = 'Começar <i class="ri-arrow-right-line"></i>';
}

function resetLink2(element) {
    element.innerHTML = 'Gostou? <i class="ri-arrow-right-line"></i>';
}

//////////////////////

var popup = document.getElementById('popup');
var closeButton = document.querySelector('.close');

function openPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

closeButton.addEventListener('click', closePopup);

//////////////////////

function irzap(element) {
    location.href = 'https://wa.me//+5515996607614';
}

function comecar(element) {
    location.href = '#caracteristicas';
}

//////////////////////

function showmenu(element) {
    const menumoba = document.getElementById('nav-links-mobile');
    const menumobaback = document.getElementById('menu-mobile');
    const icone = element;
    if (menumoba.classList.contains('unhidden')) {
        menumoba.classList.remove('unhidden');
        menumobaback.classList.remove('unhidden');

        icone.style.transform = 'rotate(0)';
    } else {
        menumoba.classList.add('unhidden');
        menumobaback.classList.add('unhidden');
        icone.style.transform = 'rotate(180deg)';
    }
}

//////////////////////

function carregar() {
    const preload = (document.getElementsByClassName('load')[0].style.display =
        'none');
    const content = (document.getElementsByClassName(
        'contentall',
    )[0].style.display = 'block');
}
