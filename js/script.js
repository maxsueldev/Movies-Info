const menuHamburger = document.querySelector('#menu-hamburger');
const menuDropdown = document.querySelector('#menu-dropdown');

const containerRotulo = document.querySelector('#container-rotulo');

menuHamburger.addEventListener('click', () => {
    menuDropdown.classList.toggle('active');
    
    const isActive = menuDropdown.classList.contains('active');

    if(isActive) {
        menuHamburger.style.backgroundImage = "url('../img/menu-white.svg')";
        containerRotulo.style.backgroundColor = "red";
    } else {
        menuHamburger.style.backgroundImage = "url('../img/menu.svg')";
        containerRotulo.style.backgroundColor = "#ffffff";
    }
});