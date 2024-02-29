const headerALL = {
    navALL: document.querySelector('nav'),
    menuMobile: document.querySelector('.manu__mobile'),
    navList: document.querySelector('.nav__list'),
    navItem: document.querySelectorAll('.nav__item')
}

headerALL.menuMobile.addEventListener('click', () =>{
    headerALL.navALL.classList.toggle('header__active')
})

headerALL.navItem.forEach(btn => {
    btn.addEventListener('click',  () =>{
        headerALL.navALL.classList.toggle('header__active')
    })
});