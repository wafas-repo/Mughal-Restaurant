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

        const menu = document.createElement('button');
        menu.innerText = "MENU"

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        description_container.appendChild(h1)
        description_container.appendChild(p)
        description_container.appendChild(menu)
        overlay.appendChild(description_container)
        main_container.appendChild(overlay);
        
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

        const cen = document.createElement('div');
        cen.classList.add("cen")

        const service1 = document.createElement('div')
        service1.classList.add("service")
        const iDinein = document.createElement('i')
        iDinein.classList.add('fa', 'fa-solid', 'fa-utensils')
        const dineIn = document.createElement('h3');
        dineIn.innerText = "Dine In"
        const pDineIn =  document.createElement('p')
        pDineIn.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'

        const service2 = document.createElement('div')
        service2.classList.add("service")
        const iTakeout = document.createElement('i')
        iTakeout.classList.add('fas', 'fa-shopping-bag')
        const takeout = document.createElement('h3');
        takeout.innerText = "Take-out"
        const pTakeout =  document.createElement('p')
        pTakeout.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'

        const service3 = document.createElement('div')
        service3.classList.add("service")
        const iDelivery = document.createElement('i')
        iDelivery.classList.add('fa', 'fa-solid', 'fa-car')
        const delivery = document.createElement('h3');
        delivery.innerText = "Delivery"
        const pDelivery =  document.createElement('p')
        pDelivery.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'


        service1.appendChild(iDinein);
        service1.appendChild(dineIn)
        service1.appendChild(pDineIn)

        service2.appendChild(iTakeout);
        service2.appendChild(takeout)
        service2.appendChild(pTakeout)

        service3.appendChild(iDelivery);
        service3.appendChild(delivery)
        service3.appendChild(pDelivery)
        
        cen.appendChild(service1)
        cen.appendChild(service2)
        cen.appendChild(service3)
        servicesDiv.appendChild(cen)

        section.appendChild(servicesDiv);


        main.appendChild(section)

        return main;
    
}

export default renderHome;