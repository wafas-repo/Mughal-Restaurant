import createNav from "./navbar";
import renderHome from "./Home";
import createFooter from "./footer";

const content = document.querySelector('#content');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })

        burger.classList.toggle('toggle');
    })

}

function home() {
    content.innerHTML = "";
    content.appendChild(createNav());
    navSlide();
    content.appendChild(renderHome())
}

home();
