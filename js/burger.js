const burger = document.querySelector("#burger");

const close = document.querySelector("#close");
const navBurger = document.querySelector(".nav__burger")
burger.addEventListener('click',() => {
    burger.style.display = 'none';
    close.style.display = 'block';
    navBurger.style.display = 'block';


});

close.addEventListener('click',() => {
    burger.style.display = 'block';
    close.style.display = 'none';
    navBurger.style.display = 'none';

})
