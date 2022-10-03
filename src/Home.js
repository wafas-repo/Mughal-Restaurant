function renderHome() {

        const main = document.createElement("main");
        main.classList.add("main");
        main.setAttribute("id", "main");

        const main_container = document.createElement('div');
        main_container.classList.add("container");

        const description_container = document.createElement('div');
        description_container.classList.add('main-headings')

        const h1 = document.createElement("h1");
        h1.textContent = "Enjoy the Pakistani Delicacies."

        const p = document.createElement("p");
        p.textContent = "Spicy, rich, flavorful and diverse. We welcome you to a culinary journey through traditional recipes and fine cuisine.";

        description_container.appendChild(h1)
        description_container.appendChild(p)
        main_container.appendChild(description_container);
        
        main.appendChild(main_container);

        const section2 = document.createElement('section');

        const aboutDiv = document.createElement('div');
        aboutDiv.id = 'about';
      

        // <---------------> //
        const section = document.createElement('section');
       
        
        const servicesDiv = document.createElement('div');
        servicesDiv.id = 'services';

        const servicesTitle = document.createElement('h2')
        servicesTitle.innerText = "Our Services"
        servicesDiv.append(servicesTitle);

        section.appendChild(servicesDiv);

        const pArray = ["Dine-in",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
        "Take-Out",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.",
        "Delivery", 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et."];

        for (let j = 0; j < pArray.length; j++) {
                let pTag = document.createElement('p');
                servicesDiv.append(pTag);
                pTag.textContent = pArray[j];
        }

        const utensils = document.createElement('div');
        utensils.classList.add('services-box-icon')
        const iutensils = document.createElement('i');
        iutensils.classList.add("fa-solid", "fa-utensils");
        utensils.appendChild(iutensils);

        section.appendChild(utensils)

        main.appendChild(section)

        return main;
    
}

export default renderHome;