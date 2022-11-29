import createNav from "./navbar";
import renderHome from "./Home";
import createFooter from "./footer";
import renderMenu from "./menu";
import renderContact from "./contact";

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

        // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("nav");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        } else {
        navbar.classList.remove("sticky");
        }
    }
    
    content.appendChild(renderHome())
    content.appendChild(createFooter())
}

function menu() {
    content.innerHTML = "";
    content.appendChild(createNav());
    // navSlide();

    //     // When the user scrolls the page, execute myFunction
    // window.onscroll = function() {myFunction()};

    // // Get the navbar
    // var navbar = document.getElementById("nav");

    // // Get the offset position of the navbar
    // var sticky = navbar.offsetTop;

    //     // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    // function myFunction() {
    //     if (window.pageYOffset >= sticky) {
    //     navbar.classList.add("sticky")
    //     } else {
    //     navbar.classList.remove("sticky");
    //     }
    // }
    content.appendChild(renderMenu())
    content.appendChild(createFooter())
}

function contact() {
    content.innerHTML = "";
    content.appendChild(createNav())
    content.appendChild(renderContact())
    content.appendChild(createFooter())
}

home();
document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "HOME") home();
    if (target === "MENU") menu();
    if (target === "CONTACT") contact();

  });
