function createNav() {

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const brandDiv = document.createElement("div");
    const brand = document.createElement("h4");
    brand.textContent = "Mughal";
    brand.classList.add("brand");
    ul.classList.add("nav-links")

    const navItems = ["HOME", "MENU", "CONTACT"];
    
    for (let i = 0; i < navItems.length; i++) {
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute('href', '#');
        li.appendChild(link);
        var text = document.createTextNode(navItems[i]);
        link.appendChild(text);
        ul.appendChild(li);
    }

    const burger = document.createElement("div");
    burger.classList.add("burger");

    for(let i = 1; i <= 3; i++) {
        var line = document.createElement("div");
        line.classList.add('line'+i)
        burger.appendChild(line);
    }

    brandDiv.appendChild(brand);
    nav.appendChild(brandDiv);
    nav.appendChild(ul);
    nav.appendChild(burger);
    nav.id = 'nav'

    return nav;

}

export default createNav;